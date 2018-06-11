// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyA4rakeJk5cVoFsr5Acfx4_FsBHc4Go8Uk',
    authDomain: 'demohosting-b2bdf.firebaseapp.com',
    databaseURL: 'https://demohosting-b2bdf.firebaseio.com',
    projectId: 'demohosting-b2bdf',
    storageBucket: 'demohosting-b2bdf.appspot.com',
    messagingSenderId: '1093905026276'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
