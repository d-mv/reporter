import dotenv from 'dotenv';
import nm from 'nodemailer';
import { assoc } from 'ramda';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

import { validateArray } from './validators';

dotenv.config();

const login: string = process.env.LOGIN ?? '';
const pass: string = process.env.PASS ?? '';
const recipient: string = process.env.RECIPIENT ?? '';

interface ReportProps {
  text: string;
  subject: string;
  html?: string;
  recipients?: string[];
}

async function report(props: ReportProps) {
  if (!login || !pass || !recipient || !props) return;

  const { text, subject, html, recipients } = props;

  let transporter = nm.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: {
      user: login,
      pass: pass
    }
  });

  let mailOptions: MailOptions = {
    from: {
      name: 'Report',
      address: login
    },
    to: recipient,
    subject,
    text
  };

  if (html) mailOptions = assoc('html', html, mailOptions);

  if (recipients && validateArray(recipients, 'string'))
    mailOptions = assoc('to', recipients, mailOptions);

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
}

export { report };
