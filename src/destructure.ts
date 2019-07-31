import axios from 'axios';
import dotenv from 'dotenv';
import { RequestQuery } from './reporter';

const dotEnv = dotenv.config();

const token: string = process.env.IPINFO;

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

export interface Reply {
  location: string;
  data: string;
  time: string;
}

const destructureRequest = async (request: RequestQuery) => {
  const ipInfo: IpInfoData = await axios(
    `https://ipinfo.io/${request.ip}/json?token=${token}`
  );
  return {
    location: `${ipInfo.data.city}, ${ipInfo.data.country}`,
    data: ipInfo.data,
    time: request.time
  };
};

export default destructureRequest;
