!function(t,e){function n(){var t=m.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=f[t[h]];return e||(e={},p++,t[h]=p,f[p]=e),e}function s(t,n,s){return n||(n=e),l?n.createElement(t):(s||(s=i(n)),n=s.cache[t]?s.cache[t].cloneNode():d.test(t)?(s.cache[t]=s.createElem(t)).cloneNode():s.createElem(t),n.canHaveChildren&&!u.test(t)?s.frag.appendChild(n):n)}function o(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return m.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(m,e.frag)}function a(t){t||(t=e);var n=i(t);if(m.shivCSS&&!r&&!n.hasCSS){var s,a=t;s=a.createElement("p"),a=a.getElementsByTagName("head")[0]||a.documentElement,s.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",s=a.insertBefore(s.lastChild,a.firstChild),n.hasCSS=!!s}return l||o(t,n),t}var r,l,c=t.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",p=0,f={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",r="hidden"in t;var n;if(!(n=1==t.childNodes.length)){e.createElement("a");var i=e.createDocumentFragment();n="undefined"==typeof i.cloneNode||"undefined"==typeof i.createDocumentFragment||"undefined"==typeof i.createElement}l=n}catch(s){l=r=!0}}();var m={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:a,createElement:s,createDocumentFragment:function(t,s){if(t||(t=e),l)return t.createDocumentFragment();for(var s=s||i(t),o=s.frag.cloneNode(),a=0,r=n(),c=r.length;c>a;a++)o.createElement(r[a]);return o}};t.html5=m,a(e)}(this,document);