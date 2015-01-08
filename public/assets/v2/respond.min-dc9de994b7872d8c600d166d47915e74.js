/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,r=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,i),t=42===o.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(document),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,n.mediaQueriesSupported;var i,r,o,a=e.document,s=a.documentElement,l=[],c=[],u=[],d={},p=30,f=a.getElementsByTagName("head")[0]||s,h=a.getElementsByTagName("base")[0],g=f.getElementsByTagName("link"),m=[],v=function(){for(var t=0;g.length>t;t++){var n=g[t],i=n.href,r=n.media,o=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&o&&!d[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(b(n.styleSheet.rawCssText,i,r),d[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!h||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&m.push({href:i,media:r}))}y()},y=function(){if(m.length){var e=m.shift();C(e.href,function(t){b(t,e.href,e.media),d[e.href]=!0,setTimeout(function(){y()},0)})}},b=function(e,t,n){var i=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),r=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},a=!r&&n;t.length&&(t+="/"),a&&(r=1);for(var s=0;r>s;s++){var u,d,p,f;a?(u=n,c.push(o(e))):(u=i[s].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,c.push(RegExp.$2&&o(RegExp.$2))),p=u.split(","),f=p.length;for(var h=0;f>h;h++)d=p[h],l.push({media:d.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:c.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},x=function(){var e,t=a.createElement("div"),n=a.body,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=a.createElement("body"),n.style.background="none"),n.appendChild(t),s.insertBefore(n,s.firstChild),e=t.offsetWidth,i?s.removeChild(n):n.removeChild(t),e=o=parseFloat(e)},w=function(e){var t="clientWidth",n=s[t],d="CSS1Compat"===a.compatMode&&n||a.body[t]||n,h={},m=g[g.length-1],v=(new Date).getTime();if(e&&i&&p>v-i)return clearTimeout(r),void(r=setTimeout(w,p));i=v;for(var y in l)if(l.hasOwnProperty(y)){var b=l[y],C=b.minw,T=b.maxw,_=null===C,S=null===T,k="em";C&&(C=parseFloat(C)*(C.indexOf(k)>-1?o||x():1)),T&&(T=parseFloat(T)*(T.indexOf(k)>-1?o||x():1)),b.hasquery&&(_&&S||!(_||d>=C)||!(S||T>=d))||(h[b.media]||(h[b.media]=[]),h[b.media].push(c[b.rules]))}for(var E in u)u.hasOwnProperty(E)&&u[E]&&u[E].parentNode===f&&f.removeChild(u[E]);for(var $ in h)if(h.hasOwnProperty($)){var N=a.createElement("style"),j=h[$].join("\n");N.type="text/css",N.media=$,f.insertBefore(N,m.nextSibling),N.styleSheet?N.styleSheet.cssText=j:N.appendChild(a.createTextNode(j)),u.push(N)}},C=function(e,t){var n=T();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},T=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();v(),n.update=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}(this);