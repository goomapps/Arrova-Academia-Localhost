import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: true,
  API_URL: 'http://159.65.117.26:3001',
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.WARN
};
