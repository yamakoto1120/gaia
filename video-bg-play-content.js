'use strict';

const IS_YOUTUBE = window.location.hostname.search(/(?:^|.+\.)youtube.com/) > -1 ||
                   window.location.hostname.search(/(?:^|.+\.)youtube-nocookie.com/) > -1;
const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
const IS_DESKTOP_YOUTUBE = IS_YOUTUBE && !IS_MOBILE_YOUTUBE;

const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;

// Page Visibility API
if (IS_ANDROID) {
  Object.defineProperties(document.wrappedJSObject,
    { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });
}

window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);


// User activity tracking
if (IS_YOUTUBE) {
  const refreshInterval = 1 * 10 * 1000; // every 5 minutes
  waitForYoutubeLactInit(() => refreshLact(), refreshInterval);
}

function waitForYoutubeLactInit(aCallback, aCallbackInterval, aDelay = 1000) {
  let pageWin = window.wrappedJSObject;
  if (pageWin.hasOwnProperty('_lact')) {
    window.setInterval(aCallback, aCallbackInterval);
  } else {
    window.setTimeout(() => waitForYoutubeLactInit(aCallback,
                                                   aCallbackInterval,
                                                   aDelay * 2),
                      aDelay);
  }
}

function refreshLact() {
  window.wrappedJSObject._lact = Date.now();
}
