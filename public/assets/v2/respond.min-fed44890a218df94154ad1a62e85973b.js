/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,o=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,i),t=42===r.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(document),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,n.mediaQueriesSupported;var i,o,r,s=e.document,a=s.documentElement,l=[],c=[],u=[],d={},p=30,f=s.getElementsByTagName("head")[0]||a,h=s.getElementsByTagName("base")[0],g=f.getElementsByTagName("link"),m=[],v=function(){for(var t=0;g.length>t;t++){var n=g[t],i=n.href,o=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&r&&!d[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(b(n.styleSheet.rawCssText,i,o),d[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!h||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&m.push({href:i,media:o}))}y()},y=function(){if(m.length){var e=m.shift();C(e.href,function(t){b(t,e.href,e.media),d[e.href]=!0,setTimeout(function(){y()},0)})}},b=function(e,t,n){var i=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),o=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},s=!o&&n;t.length&&(t+="/"),s&&(o=1);for(var a=0;o>a;a++){var u,d,p,f;s?(u=n,c.push(r(e))):(u=i[a].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,c.push(RegExp.$2&&r(RegExp.$2))),p=u.split(","),f=p.length;for(var h=0;f>h;h++)d=p[h],l.push({media:d.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:c.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},x=function(){var e,t=s.createElement("div"),n=s.body,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=s.createElement("body"),n.style.background="none"),n.appendChild(t),a.insertBefore(n,a.firstChild),e=t.offsetWidth,i?a.removeChild(n):n.removeChild(t),e=r=parseFloat(e)},w=function(e){var t="clientWidth",n=a[t],d="CSS1Compat"===s.compatMode&&n||s.body[t]||n,h={},m=g[g.length-1],v=(new Date).getTime();if(e&&i&&p>v-i)return clearTimeout(o),void(o=setTimeout(w,p));i=v;for(var y in l)if(l.hasOwnProperty(y)){var b=l[y],C=b.minw,T=b.maxw,S=null===C,k=null===T,_="em";C&&(C=parseFloat(C)*(C.indexOf(_)>-1?r||x():1)),T&&(T=parseFloat(T)*(T.indexOf(_)>-1?r||x():1)),b.hasquery&&(S&&k||!(S||d>=C)||!(k||T>=d))||(h[b.media]||(h[b.media]=[]),h[b.media].push(c[b.rules]))}for(var $ in u)u.hasOwnProperty($)&&u[$]&&u[$].parentNode===f&&f.removeChild(u[$]);for(var E in h)if(h.hasOwnProperty(E)){var N=s.createElement("style"),j=h[E].join("\n");N.type="text/css",N.media=E,f.insertBefore(N,m.nextSibling),N.styleSheet?N.styleSheet.cssText=j:N.appendChild(s.createTextNode(j)),u.push(N)}},C=function(e,t){var n=T();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},T=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();v(),n.update=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}(this);