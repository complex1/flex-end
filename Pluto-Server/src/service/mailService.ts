export class MailService {
  public sendMail = (to: string, subject: string, html: string) => {
    console.log('Mail sent to: ', to);
    console.log('Subject: ', subject);
    console.log('HTML: ', html);
  }
}