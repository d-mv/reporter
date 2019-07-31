import dotenv from 'dotenv';
import nm from 'nodemailer';
import destructureRequest, { Reply } from './destructure';

const dotEnv = dotenv.config();

const login: string = process.env.LOGIN;
const pass: string = process.env.PASS;
const recipient: string = process.env.RECIPIENT;

const formText = (reply: Reply): string =>
  `There is a new request.
From:
${JSON.stringify(reply.data)}
On: ${reply.time}`;

export interface RequestQuery {
  ip: string;
  time: string;
}

const report = async (request: RequestQuery) => {
  let transporter = nm.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: {
      user: login,
      pass: pass
    }
  });

  const reply: any = await destructureRequest(request);
  const text = formText(reply);

  const mailOptions = {
    from: {
      name: 'Report',
      address: login
    },
    to: recipient,
    subject: `New Request from ${reply.location}`,
    text
    // html
  };
  let result = '';
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      result = error;
      console.log(error);
    } else {
      result = info;
      console.log('Message %s sent: %s', info.messageId, info.response);
    }
  });
  return result;
};

export default report;
