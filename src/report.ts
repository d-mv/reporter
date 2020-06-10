import dotenv from 'dotenv';
import nm from 'nodemailer';

dotenv.config();

const login: string = process.env.LOGIN;
const pass: string = process.env.PASS;
const recipient: string = process.env.RECIPIENT;

async function report(text: string, subject: string) {
  let transporter = nm.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: {
      user: login,
      pass: pass
    }
  });

  const mailOptions = {
    from: {
      name: 'Report',
      address: login
    },
    to: recipient,
    subject,
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
}

export { report };
