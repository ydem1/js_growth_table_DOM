function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(n,r)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}// write code here
var r=function(e){for(var n=document.createElement("tr"),r=e.children[0].children.length,t=0;t<r;t++){var o=document.createElement("td");n.append(o)}e.append(n)},t=function(e){var n=e.lastElementChild;e.removeChild(n)},o=function(e){n(e.children).forEach(function(e){var n=document.createElement("td");e.append(n)})},c=function(e){n(e.children).forEach(function(e){e.removeChild(e.children[0])})},i=function(e,n,r){var t=document.querySelector(".field").children[0];r?t.children.length!==e&&n(t):t.children[0].children.length!==e&&n(t)};document.querySelector(".append-row").addEventListener("click",function(){return i(10,r,!0)}),document.querySelector(".remove-row").addEventListener("click",function(){return i(2,t,!0)}),document.querySelector(".append-column").addEventListener("click",function(){return i(10,o,!1)}),document.querySelector(".remove-column").addEventListener("click",function(){return i(2,c,!1)});//# sourceMappingURL=index.6076f917.js.map

//# sourceMappingURL=index.6076f917.js.map
