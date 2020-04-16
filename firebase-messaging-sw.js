importScripts("/precache-manifest.88d5a840432f50421c81fe18f1979622.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    new RegExp('https://firebasestorage.googleapis.com/v0/b/tfg-vue-m3m.appspot.com/.*'),
    workbox.strategies.staleWhileRevalidate()
);

firebase.initializeApp({
    'messagingSenderId': '144506012173'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
