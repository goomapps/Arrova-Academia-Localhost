import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  API_URL: 'http://159.65.117.26:3001',
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.WARN,

  stripe_key:
    'pk_live_51HsW6ND0onrjQj4PEqsNiDN6DRzI2zIwN9NfXm5LVLX1i0kYSWLjr8MHNgNW4Uv7xbVjuMzI561tqSe0NRMvVmks00ENr7bAMx',
};
