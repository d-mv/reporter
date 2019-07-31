import express from 'express';
import nm from 'nodemailer';
import destructureRequest from './destructure';

const login:string = process.env.LOGIN;
const pass:string = process.env.PASS;
const user:string = process.env.USER;

const report = (request: express.Request) => {
  // let transporter = nm.createTransport({
  //   host: 'smtpout.secureserver.net',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: login,
  //     pass: pass
  //   }
  // });

  const text = destructureRequest(request);

  const mailOptions = {
    from: {
      name: 'Report',
      address: login
    },
    to: user,
    subject: 'New Request //',
    text,
    // html
  };
  // transporter.sendMail(mailOptions, (error: any, info: any) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   console.log('Message %s sent: %s', info.messageId, info.response);
  // });
};

export default report