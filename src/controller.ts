import { ReportRequest, ServerStatus, Visit, IpInfoData } from './types';
import {
  serverStatusString,
  getIpInfo,
  visitHtml,
  capitalize,
  makeDateTime,
  report,
  logError
} from './tools';
import { isEmpty } from 'ramda';

const { dir, log } = console;

function serverStatusController(request: ServerStatus) {
  try {
    report({
      text: serverStatusString(request),
      subject: `[${request.server ?? 'Server'}] update`,
      recipients: request.recipients
    });
    log('Sent:');
    dir(request);
    return true;
  } catch (err) {
    logError('serverStatusController', err, request);
    return false;
  }
}

async function visitController(request: Visit) {
  try {

    const data = await getIpInfo(request.ip);

    if (isEmpty(data)) return;

    const message = visitHtml(data as IpInfoData, request);

    report({
      text: `${capitalize(request.to)} has been visited at ${makeDateTime(request.date)}`,
      subject: `[${capitalize(request.to)}] visited`,
      html: message,
      recipients: request.recipients
    });
    log('Sent:');
    dir(request);
    return true;
  } catch (err) {
    logError('visitController', err, request);
    return false;
  }
}

function domainController(request: ReportRequest<unknown>) {
  switch (request.domain) {
    case 'serverStatus':
      serverStatusController(request.data as ServerStatus);
      break;
    case 'visit':
      visitController(request.data as Visit);
      break;
  }
}

export { domainController };
