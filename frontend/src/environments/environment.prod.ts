import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  API_URL: "http://159.65.117.26:3001",
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.WARN,

  stripe_key:
    "pk_test_51HsW6ND0onrjQj4P9FklT1fHyGyplPvNzHzeCKs2nyEZ2NgImtg3J80keFHX5xp5Z8jvTJXob7SJJPjaaxjiU71I00QsKhwQZ7",
};
