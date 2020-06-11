interface IpInfoData {
  data: {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    timezone: string;
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

interface Visit {
  ip: string;
  date: string;
  to: string;
}

interface VisitDetails {
  location: string;
  data: IpInfoData;
  time: string;
}

export { IpInfoData, Reply, GeneralData, ReportRequest, ServerStatus, Visit, VisitDetails };
