// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBM23Av1TsVupKkKM5X1-dAxnAQ-liHXjg',
    authDomain: 'tulpruebatecnica.firebaseapp.com',
    projectId: "tulpruebatecnica",
    storageBucket: "tulpruebatecnica.appspot.com",
    messagingSenderId: "517203997002",
    appId: "1:517203997002:web:b46ecdb2d849684deb51b3",
    databaseURL: 'https://tulpruebatecnica-default-rtdb.firebaseio.com',
  },
  cartStates: ['pending', 'complete']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
