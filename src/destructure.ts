import axios from 'axios';
import dotenv from 'dotenv';
import { RequestQuery } from './reporter';
import { IpInfoData } from './types';

const dotEnv = dotenv.config();

const token: string = process.env.IPINFO;


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
