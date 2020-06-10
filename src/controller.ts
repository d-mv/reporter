import { ReportRequest, ServerStatus } from './types';
import { report } from './report';
import { makeServerStatusString } from './server_status';

const { dir, log } = console;

function serverStatusController(request: ServerStatus) {
  report(makeServerStatusString(request), `[${request.server ?? 'Server'}] update`);
  log('Sent:');
  dir(request);
  return true;
}

function domainController(request: ReportRequest<unknown>) {
  switch (request.domain) {
    case 'serverStatus':
      return serverStatusController(request.data as ServerStatus);
      break;
  }
}

export { domainController };
