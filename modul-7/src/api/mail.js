import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.REACT_APP_API_KEY_MAILGUN;
const DOMAIN = 'sandbox75882608f8854e1192d3a0b2ce7ebcd1.mailgun.org';

const mailgun = new Mailgun(FormData);
const client = mailgun.client({username: 'api', key: API_KEY, host: "api.eu.mailgun.net",});

export function mail(messageData) {
  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}