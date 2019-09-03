import nodemailer from 'nodemailer';
import mailConfig from '../config/Mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(mensage) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...mensage,
    });
  }
}
export default new Mail();
