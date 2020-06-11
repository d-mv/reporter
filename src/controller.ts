import { ReportRequest, ServerStatus, Visit } from './types';
import {
  serverStatusString,
  getIpInfo,
  visitHtml,
  capitalize,
  makeDateTime,
  report
} from './tools';

const { dir, log } = console;

function serverStatusController(request: ServerStatus) {
  report(serverStatusString(request), `[${request.server ?? 'Server'}] update`);
  log('Sent:');
  dir(request);
  return true;
}

async function visitController(request: Visit) {
  const data = await getIpInfo(request.ip);
  const message = visitHtml(data, request);

  report(
    `${capitalize(request.to)} has been visited at ${makeDateTime(request.date)}`,
    `[${capitalize(request.to)}] visited`,
    message
  );
  log('Sent:');
  dir(request);
}

function domainController(request: ReportRequest<unknown>) {
  switch (request.domain) {
    case 'serverStatus':
      return serverStatusController(request.data as ServerStatus);
    case 'visit':
      return visitController(request.data as Visit);
  }
}

export { domainController };
