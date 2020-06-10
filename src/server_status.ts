import { ServerStatus } from './types';

function makeServerStatusString(request: ServerStatus): string {
  if (request && request.server && request.mode && request.status) {
    return `Server ${request.server} is ${request.status} in ${request.mode} mode.${
      request.message ? ' ' + request.message : ''
    }`;
  }
  return '';
}

export { makeServerStatusString };
