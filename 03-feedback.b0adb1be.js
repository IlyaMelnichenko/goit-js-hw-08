function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(h,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=m();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,r-(e-c)):n}(e))}function w(e){return u=void 0,p&&i?b(e):(i=o=void 0,a)}function O(){var e=m(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea");var h;const w=null!==(h=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==h?h:{email:"",message:""};j.value=w.email,S.value=w.message,j.addEventListener("input",(()=>{const e=j.value;w.email=e})),S.addEventListener("input",(()=>{const e=S.value;w.message=e})),b.addEventListener("input",e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),j.value="",S.value="",console.log("Form data:",w)}));
//# sourceMappingURL=03-feedback.b0adb1be.js.map