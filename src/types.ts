interface IpInfoData {
  data: {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    hostname: string;
    org: string;
  };
}

interface Reply {
  location: string;
  data: string;
  time: string;
}

interface GeneralData {
  message: string;
  payload: unknown;
}

interface ServerStatus {
  server: string;
  mode: string;
  status: string;
  message: string;
}

interface ReportRequest<T> {
  domain: string;
  data: T;
}

export { IpInfoData, Reply, GeneralData, ReportRequest, ServerStatus };
