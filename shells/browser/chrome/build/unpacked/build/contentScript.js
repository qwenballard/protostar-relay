!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({20:function(e,t){var n=!1,o=!1;function r(){window.postMessage({source:"relay-devtools-content-script",hello:!0},"*")}function a(e){e.source===window&&e.data&&"relay-devtools-bridge"===e.data.source&&(o=!0,i.postMessage(e.data.payload))}var i=chrome.runtime.connect({name:"content-script"});if(i.onMessage.addListener((function(e){window.postMessage({source:"relay-devtools-content-script",payload:e},"*")})),i.onDisconnect.addListener((function(){n=!0,window.removeEventListener("message",a),window.postMessage({source:"relay-devtools-content-script",payload:{type:"event",event:"shutdown"}},"*")})),window.addEventListener("message",a),r(),!o)var s=setInterval((function(){o||n?clearInterval(s):r()}),500)}});