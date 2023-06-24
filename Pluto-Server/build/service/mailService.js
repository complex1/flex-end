"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
class MailService {
    constructor() {
        this.sendMail = (to, subject, html) => {
            console.log('Mail sent to: ', to);
            console.log('Subject: ', subject);
            console.log('HTML: ', html);
        };
    }
}
exports.MailService = MailService;
