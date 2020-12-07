// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: false,
  API_URL: "http://localhost:3001",
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.WARN,
  stripe_key:
    "pk_test_51HsW6ND0onrjQj4P9FklT1fHyGyplPvNzHzeCKs2nyEZ2NgImtg3J80keFHX5xp5Z8jvTJXob7SJJPjaaxjiU71I00QsKhwQZ7",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
