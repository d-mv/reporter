const { log, dir } = console;

function logInfo(text: string, payload?: unknown) {
  log(text);
  if (payload) dir(payload);
}

function logError(text: string, error: Error, request?: unknown) {
  log(text);
  if (error) dir(error);
  if (request) {
    log('Request');
    dir(request);
  } else {
    log('Request n/a');
  }
}

export { logError, logInfo };
