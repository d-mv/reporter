import { IpInfoData, Visit, ServerStatus } from '../types';
import { makeDateTime } from './date';
import { capitalize } from './string';

function visitHtml(ipinfo: IpInfoData, request: Visit): string {
  return `
<div>
  <div>${capitalize(request.to)} has been visited.</div>
  <br>
  <div><em>from:</em> ${ipinfo.data.city}, ${ipinfo.data.country}</div>
  <div><em>time:</em> ${makeDateTime(request.date)}</div>
  <br>
  <div>Details:</div>
  <div><em>ip:</em> ${request.ip}</div>
  <div><em>city:</em> ${ipinfo.data.city}</div>
  <div><em>region:</em> ${ipinfo.data.region}</div>
  <div><em>country:</em> ${ipinfo.data.country}</div>
  <div><em>city:</em> ${ipinfo.data.city}</div>
  <div><em>org:</em> ${ipinfo.data.org}</div>
  <div><em>timezone:</em> ${ipinfo.data.timezone}</div>
<div>
`;
}

function serverStatusString(request: ServerStatus): string {
  if (request && request.server && request.mode && request.status) {
    return `Server ${request.server} is ${request.status} in ${request.mode} mode.${
      request.message ? ' ' + request.message : ''
    }`;
  }
  return '';
}

export { visitHtml, serverStatusString };
