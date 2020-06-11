import axios from 'axios';
import dotenv from 'dotenv';
import { IpInfoData } from '../types';

dotenv.config();

const token: string = process.env.IPINFO;

async function getIpInfo(ip: string): Promise<IpInfoData> {
  const ipInfo = await axios(`https://ipinfo.io/${ip}/json?token=${token}`);

  return ipInfo as IpInfoData;
}

export { getIpInfo };
