/* jQuery v1.7 jquery.com | jquery.org/license */
(function (a, b) {
    function cA(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1;
    }

    function cx(a) {
        if (!cm[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cn || (cn = c.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), b.appendChild(cn);
                if (!co || !cn.createElement) {
                    co = (cn.contentWindow || cn.contentDocument).document, co.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), co.close();
                }
                d = co.createElement(a), co.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cn);
            }
            cm[a] = e;
        }
        return cm[a];
    }

    function cw(a, b) {
        var c = {};
        f.each(cs.concat.apply([], cs.slice(0, b)), function () {
            c[this] = a;
        });
        return c;
    }

    function cv() {
        ct = b;
    }

    function cu() {
        setTimeout(cv, 0);
        return ct = f.now();
    }

    function cl() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {
        }
    }

    function ck() {
        try {
            return new a.XMLHttpRequest;
        } catch (b) {
        }
    }

    function ce(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l;
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break;
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)));
                }
            }
        }
        return c;
    }

    function cd(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i]);
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break;
                }
            }
        }
        if (f[0] in d) {
            j = f[0];
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break;
                }
                k || (k = i);
            }
            j = j || k;
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j];
        }
    }

    function cc(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bG.test(a) ? d(a, e) : cc(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d);
            });
        } else {
            if (!c && b != null && typeof b == "object") {
                for (var e in b) {
                    cc(a + "[" + e + "]", b[e], c, d);
                }
            } else {
                d(a, b);
            }
        }
    }

    function cb(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        }
        e && f.extend(!0, a, e);
    }

    function ca(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bV, l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = ca(a, c, d, e, l, g)));
        }
        (k || !l) && !g["*"] && (l = ca(a, c, d, e, "*", g));
        return l;
    }

    function b_(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bR), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c);
                }
            }
        };
    }

    function bE(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bz : bA;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0;
            });
            return d + "px";
        }
        d = bB(a, b, b);
        if (d < 0 || d == null) {
            d = a.style[b] || 0;
        }
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0);
        });
        return d + "px";
    }

    function br(a, b) {
        b.src ? f.ajax({url: b.src, async: !1, dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bi, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b);
    }

    function bq(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bp(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bp);
    }

    function bp(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked;
        }
    }

    function bo(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [];
    }

    function bn(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") {
                b.outerHTML = a.outerHTML;
            } else {
                if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option") {
                        b.selected = a.defaultSelected;
                    } else {
                        if (c === "input" || c === "textarea") {
                            b.defaultValue = a.defaultValue;
                        }
                    }
                } else {
                    a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
                }
            }
            b.removeAttribute(f.expando);
        }
    }

    function bm(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data);
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data));
        }
    }

    function bl(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }

    function X(a) {
        var b = Y.split(" "), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop());
            }
        }
        return c;
    }

    function W(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c;
            });
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c;
            });
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1;
            });
            if (R.test(b)) {
                return f.filter(b, d, !c);
            }
            b = f.filter(b, d);
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c;
        });
    }

    function V(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11;
    }

    function N() {
        return !0;
    }

    function M() {
        return !1;
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
        }, 0);
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue;
            }
            if (b !== "toJSON") {
                return !1;
            }
        }
        return !0;
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d;
                } catch (g) {
                }
                f.data(a, c, d);
            } else {
                d = b;
            }
        }
        return d;
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0;
        }
        return b;
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function K() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left");
                } catch (a) {
                    setTimeout(K, 1);
                    return;
                }
                e.ready();
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h);
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /\d/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, o = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g, s = /(webkit)[ \/]([\w.]+)/, t = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/, v = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, x = /^-ms-/, y = function (a, b) {
            return(b + "").toUpperCase();
        }, z = d.userAgent, A, B, C, D = Object.prototype.toString, E = Object.prototype.hasOwnProperty, F = Array.prototype.push, G = Array.prototype.slice, H = String.prototype.trim, I = Array.prototype.indexOf, J = {};
        e.fn = e.prototype = {constructor: e, init: function (a, d, f) {
            var g, h, j, k;
            if (!a) {
                return this;
            }
            if (a.nodeType) {
                this.context = this[0] = a, this.length = 1;
                return this;
            }
            if (a === "body" && !d && c.body) {
                this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                return this;
            }
            if (typeof a == "string") {
                a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                if (g && (g[1] || !d)) {
                    if (g[1]) {
                        d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                        return e.merge(this, a);
                    }
                    h = c.getElementById(g[2]);
                    if (h && h.parentNode) {
                        if (h.id !== g[2]) {
                            return f.find(a);
                        }
                        this.length = 1, this[0] = h;
                    }
                    this.context = c, this.selector = a;
                    return this;
                }
                return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a);
            }
            if (e.isFunction(a)) {
                return f.ready(a);
            }
            a.selector !== b && (this.selector = a.selector, this.context = a.context);
            return e.makeArray(a, this);
        }, selector: "", jquery: "1.7", length: 0, size: function () {
            return this.length;
        }, toArray: function () {
            return G.call(this, 0);
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
        }, pushStack: function (a, b, c) {
            var d = this.constructor();
            e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d;
        }, each: function (a, b) {
            return e.each(this, a, b);
        }, ready: function (a) {
            e.bindReady(), B.add(a);
            return this;
        }, eq: function (a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1);
        }, first: function () {
            return this.eq(0);
        }, last: function () {
            return this.eq(-1);
        }, slice: function () {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","));
        }, map: function (a) {
            return this.pushStack(e.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, end: function () {
            return this.prevObject || this.constructor(null);
        }, push: F, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) {
                if ((a = arguments[j]) != null) {
                    for (c in a) {
                        d = i[c], f = a[c];
                        if (i === f) {
                            continue;
                        }
                        l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f);
                    }
                }
            }
            return i;
        }, e.extend({noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e;
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0);
        }, ready: function (a) {
            if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                if (!c.body) {
                    return setTimeout(e.ready, 1);
                }
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0) {
                    return;
                }
                B.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready");
            }
        }, bindReady: function () {
            if (!B) {
                B = e.Callbacks("once memory");
                if (c.readyState === "complete") {
                    return setTimeout(e.ready, 1);
                }
                if (c.addEventListener) {
                    c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1);
                } else {
                    if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null;
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && K();
                    }
                }
            }
        }, isFunction: function (a) {
            return e.type(a) === "function";
        }, isArray: Array.isArray || function (a) {
            return e.type(a) === "array";
        }, isWindow: function (a) {
            return a && typeof a == "object" && "setInterval" in a;
        }, isNumeric: function (a) {
            return a != null && m.test(a) && !isNaN(a);
        }, type: function (a) {
            return a == null ? String(a) : J[D.call(a)] || "object";
        }, isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                return !1;
            }
            try {
                if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1;
                }
            } catch (c) {
                return !1;
            }
            var d;
            for (d in a) {
            }
            return d === b || E.call(a, d);
        }, isEmptyObject: function (a) {
            for (var b in a) {
                return !1;
            }
            return !0;
        }, error: function (a) {
            throw a;
        }, parseJSON: function (b) {
            if (typeof b != "string" || !b) {
                return null;
            }
            b = e.trim(b);
            if (a.JSON && a.JSON.parse) {
                return a.JSON.parse(b);
            }
            if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) {
                return(new Function("return " + b))();
            }
            e.error("Invalid JSON: " + b);
        }, parseXML: function (c) {
            var d, f;
            try {
                a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c));
            } catch (g) {
                d = b;
            }
            (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
            return d;
        }, noop: function () {
        }, globalEval: function (b) {
            b && j.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b);
            })(b);
        }, camelCase: function (a) {
            return a.replace(x, "ms-").replace(w, y);
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
        }, each: function (a, c, d) {
            var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
            if (d) {
                if (i) {
                    for (f in a) {
                        if (c.apply(a[f], d) === !1) {
                            break;
                        }
                    }
                } else {
                    for (; g < h;) {
                        if (c.apply(a[g++], d) === !1) {
                            break;
                        }
                    }
                }
            } else {
                if (i) {
                    for (f in a) {
                        if (c.call(a[f], f, a[f]) === !1) {
                            break;
                        }
                    }
                } else {
                    for (; g < h;) {
                        if (c.call(a[g], g, a[g++]) === !1) {
                            break;
                        }
                    }
                }
            }
            return a;
        }, trim: H ? function (a) {
            return a == null ? "" : H.call(a);
        } : function (a) {
            return a == null ? "" : (a + "").replace(k, "").replace(l, "");
        }, makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                var d = e.type(a);
                a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a);
            }
            return c;
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (I) {
                    return I.call(b, a, c);
                }
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++) {
                    if (c in b && b[c] === a) {
                        return c;
                    }
                }
            }
            return -1;
        }, merge: function (a, c) {
            var d = a.length, e = 0;
            if (typeof c.length == "number") {
                for (var f = c.length; e < f; e++) {
                    a[d++] = c[e];
                }
            } else {
                while (c[e] !== b) {
                    a[d++] = c[e++];
                }
            }
            a.length = d;
            return a;
        }, grep: function (a, b, c) {
            var d = [], e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++) {
                e = !!b(a[f], f), c !== e && d.push(a[f]);
            }
            return d;
        }, map: function (a, c, d) {
            var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
            if (k) {
                for (; i < j; i++) {
                    f = c(a[i], i, d), f != null && (h[h.length] = f);
                }
            } else {
                for (g in a) {
                    f = c(a[g], g, d), f != null && (h[h.length] = f);
                }
            }
            return h.concat.apply([], h);
        }, guid: 1, proxy: function (a, c) {
            if (typeof c == "string") {
                var d = a[c];
                c = a, a = d;
            }
            if (!e.isFunction(a)) {
                return b;
            }
            var f = G.call(arguments, 2), g = function () {
                return a.apply(c, f.concat(G.call(arguments)));
            };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g;
        }, access: function (a, c, d, f, g, h) {
            var i = a.length;
            if (typeof c == "object") {
                for (var j in c) {
                    e.access(a, j, c[j], f, g, d);
                }
                return a;
            }
            if (d !== b) {
                f = !h && f && e.isFunction(d);
                for (var k = 0; k < i; k++) {
                    g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                }
                return a;
            }
            return i ? g(a[0], c) : b;
        }, now: function () {
            return(new Date).getTime();
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"};
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c);
            }

            e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b);
            }, a.fn.init.prototype = a.fn;
            var b = a(c);
            return a;
        }, browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            J["[object " + b + "]"] = b.toLowerCase();
        }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
            c.removeEventListener("DOMContentLoaded", C, !1), e.ready();
        } : c.attachEvent && (C = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready());
        }), typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return e;
        });
        return e;
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) {
                g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g);
            }
        }, n = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
            for (; c && l < k; l++) {
                if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break;
                }
            }
            i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])));
        }, o = {add: function () {
            if (c) {
                var a = c.length;
                m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]));
            }
            return this;
        }, remove: function () {
            if (c) {
                var b = arguments, d = 0, e = b.length;
                for (; d < e; d++) {
                    for (var f = 0; f < c.length; f++) {
                        if (b[d] === c[f]) {
                            i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                            if (a.unique) {
                                break;
                            }
                        }
                    }
                }
            }
            return this;
        }, has: function (a) {
            if (c) {
                var b = 0, d = c.length;
                for (; b < d; b++) {
                    if (a === c[b]) {
                        return !0;
                    }
                }
            }
            return !1;
        }, empty: function () {
            c = [];
            return this;
        }, disable: function () {
            c = d = e = b;
            return this;
        }, disabled: function () {
            return !c;
        }, lock: function () {
            d = b, (!e || e === !0) && o.disable();
            return this;
        }, locked: function () {
            return !d;
        }, fireWith: function (b, c) {
            d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
            return this;
        }, fire: function () {
            o.fireWith(this, arguments);
            return this;
        }, fired: function () {
            return !!e;
        }};
        return o;
    };
    var i = [].slice;
    f.extend({Deferred: function (a) {
        var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () {
            return e;
        }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this;
        }, always: function () {
            return i.done.apply(i, arguments).fail.apply(i, arguments);
        }, pipe: function (a, b, c) {
            return f.Deferred(function (d) {
                f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                    var c = b[0], e = b[1], g;
                    f.isFunction(c) ? i[a](function () {
                        g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g]);
                    }) : i[a](d[e]);
                });
            }).promise();
        }, promise: function (a) {
            if (a == null) {
                a = h;
            } else {
                for (var b in h) {
                    a[b] = h[b];
                }
            }
            return a;
        }}, i = h.promise({}), j;
        for (j in g) {
            i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
        }
        i.done(function () {
            e = "resolved";
        }, c.disable, d.lock).fail(function () {
            e = "rejected";
        }, b.disable, d.lock), a && a.call(i, i);
        return i;
    }, when: function (a) {
        function m(a) {
            return function (b) {
                e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e);
            };
        }

        function l(a) {
            return function (c) {
                b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b);
            };
        }

        var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
        if (d > 1) {
            for (; c < d; c++) {
                b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
            }
            g || j.resolveWith(j, b);
        } else {
            j !== a && j.resolveWith(j, d ? [a] : []);
        }
        return k;
    }}), f.support = function () {
        var a = c.createElement("div"), b = c.documentElement, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return{};
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {leadingWhitespace: a.firstChild.nodeType === 3, tbody: !a.getElementsByTagName("tbody").length, htmlSerialize: !!a.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, unknownElems: !!a.getElementsByTagName("nav").length, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: a.className !== "t", enctype: !!c.createElement("form").enctype, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0}, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test;
        } catch (v) {
            k.deleteExpando = !1;
        }
        !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1;
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.lastChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, m && f.extend(p, {position: "absolute", left: "-999px", top: "-999px"});
        for (t in p) {
            o.style[t] = p[t];
        }
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {marginRight: 0}).marginRight, 10) || 0) === 0);
        if (a.attachEvent) {
            for (t in {submit: 1, change: 1, focusin: 1}) {
                s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
            }
        }
        f(function () {
            var a, b, d, e, g, h, i = 1, j = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", n = "style='" + j + "border:5px solid #000;padding:0;'", p = "<div " + n + "><div></div></div><table " + n + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            m = c.getElementsByTagName("body")[0];
            !m || (a = c.createElement("div"), a.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + i + "px", m.insertBefore(a, m.firstChild), o = c.createElement("div"), o.style.cssText = j + l, o.innerHTML = p, a.appendChild(o), b = o.firstChild, d = b.firstChild, g = b.nextSibling.firstChild.firstChild, h = {doesNotAddBorder: d.offsetTop !== 5, doesAddBorderForTableAndCells: g.offsetTop === 5}, d.style.position = "fixed", d.style.top = "20px", h.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", b.style.overflow = "hidden", b.style.position = "relative", h.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, h.doesNotIncludeMarginInBodyOffset = m.offsetTop !== i, m.removeChild(a), o = a = null, f.extend(k, h));
        }), o.innerHTML = "", n.removeChild(o), o = l = g = h = m = j = a = i = null;
        return k;
    }(), f.boxModel = f.support.boxModel;
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
        return !!a && !m(a);
    }, data: function (a, c, d, e) {
        if (!!f.acceptData(a)) {
            var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[f.expando] : a[f.expando] && f.expando, o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                return;
            }
            n || (l ? a[f.expando] = n = ++f.uuid : n = f.expando), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function") {
                e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
            }
            g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
            if (o && !h[c]) {
                return g.events;
            }
            k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
            return i;
        }
    }, removeData: function (a, b, c) {
        if (!!f.acceptData(a)) {
            var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[f.expando] : f.expando;
            if (!j[k]) {
                return;
            }
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) ? b = b : b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "));
                    for (e = 0, g = b.length; e < g; e++) {
                        delete d[b[e]];
                    }
                    if (!(c ? m : f.isEmptyObject)(d)) {
                        return;
                    }
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k])) {
                    return;
                }
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null);
        }
    }, _data: function (a, b, c) {
        return f.data(a, b, c, !0);
    }, acceptData: function (a) {
        if (a.nodeName) {
            var b = f.noData[a.nodeName.toLowerCase()];
            if (b) {
                return b !== !0 && a.getAttribute("classid") === b;
            }
        }
        return !0;
    }}), f.fn.extend({data: function (a, c) {
        var d, e, g, h = null;
        if (typeof a == "undefined") {
            if (this.length) {
                h = f.data(this[0]);
                if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                    e = this[0].attributes;
                    for (var i = 0, j = e.length; i < j; i++) {
                        g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                    }
                    f._data(this[0], "parsedAttrs", !0);
                }
            }
            return h;
        }
        if (typeof a == "object") {
            return this.each(function () {
                f.data(this, a);
            });
        }
        d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
        if (c === b) {
            h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
            return h === b && d[1] ? this.data(d[0]) : h;
        }
        return this.each(function () {
            var b = f(this), e = [d[0], c];
            b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e);
        });
    }, removeData: function (a) {
        return this.each(function () {
            f.removeData(this, a);
        });
    }}), f.extend({_mark: function (a, b) {
        a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1));
    }, _unmark: function (a, b, c) {
        a !== !0 && (c = b, b = a, a = !1);
        if (b) {
            c = c || "fx";
            var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"));
        }
    }, queue: function (a, b, c) {
        var d;
        if (a) {
            b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
            return d || [];
        }
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b), d = c.shift(), e = {};
        d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
            f.dequeue(a, b);
        }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"));
    }}), f.fn.extend({queue: function (a, c) {
        typeof a != "string" && (c = a, a = "fx");
        if (c === b) {
            return f.queue(this[0], a);
        }
        return this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a);
        });
    }, dequeue: function (a) {
        return this.each(function () {
            f.dequeue(this, a);
        });
    }, delay: function (a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
        return this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d);
            };
        });
    }, clearQueue: function (a) {
        return this.queue(a || "fx", []);
    }, promise: function (a, c) {
        function m() {
            --h || d.resolveWith(e, [e]);
        }

        typeof a != "string" && (c = a, a = b), a = a || "fx";
        var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
        while (g--) {
            if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                h++, l.add(m);
            }
        }
        m();
        return d.promise();
    }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function (a, b) {
        return f.access(this, a, b, !0, f.attr);
    }, removeAttr: function (a) {
        return this.each(function () {
            f.removeAttr(this, a);
        });
    }, prop: function (a, b) {
        return f.access(this, a, b, !0, f.prop);
    }, removeProp: function (a) {
        a = f.propFix[a] || a;
        return this.each(function () {
            try {
                this[a] = b, delete this[a];
            } catch (c) {
            }
        });
    }, addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className));
            });
        }
        if (a && typeof a == "string") {
            b = a.split(p);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1) {
                    if (!e.className && b.length === 1) {
                        e.className = a;
                    } else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) {
                            ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        }
                        e.className = f.trim(g);
                    }
                }
            }
        }
        return this;
    }, removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className));
            });
        }
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(p);
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className) {
                    if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) {
                            h = h.replace(" " + c[i] + " ", " ");
                        }
                        g.className = f.trim(h);
                    } else {
                        g.className = "";
                    }
                }
            }
        }
        return this;
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        if (f.isFunction(a)) {
            return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b);
            });
        }
        return this.each(function () {
            if (c === "string") {
                var e, g = 0, h = f(this), i = b, j = a.split(p);
                while (e = j[g++]) {
                    i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e);
                }
            } else {
                if (c === "undefined" || c === "boolean") {
                    this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "";
                }
            }
        });
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++) {
            if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                return !0;
            }
        }
        return !1;
    }, val: function (a) {
        var c, d, e, g = this[0];
        if (!arguments.length) {
            if (g) {
                c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d;
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d;
            }
            return b;
        }
        e = f.isFunction(a);
        return this.each(function (d) {
            var g = f(this), h;
            if (this.nodeType === 1) {
                e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                    return a == null ? "" : a + "";
                })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                    this.value = h;
                }
            }
        });
    }}), f.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return !b || b.specified ? a.value : a.text;
    }}, select: {get: function (a) {
        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
        if (g < 0) {
            return null;
        }
        c = j ? g : 0, d = j ? g + 1 : i.length;
        for (; c < d; c++) {
            e = i[c];
            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                b = f(e).val();
                if (j) {
                    return b;
                }
                h.push(b);
            }
        }
        if (j && !h.length && i.length) {
            return f(i[g]).val();
        }
        return h;
    }, set: function (a, b) {
        var c = f.makeArray(b);
        f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0;
        }), c.length || (a.selectedIndex = -1);
        return c;
    }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) {
        var g, h, i, j = a.nodeType;
        if (!a || j === 3 || j === 8 || j === 2) {
            return b;
        }
        if (e && c in f.attrFn) {
            return f(a)[c](d);
        }
        if (!("getAttribute" in a)) {
            return f.prop(a, c, d);
        }
        i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
        if (d !== b) {
            if (d === null) {
                f.removeAttr(a, c);
                return b;
            }
            if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                return g;
            }
            a.setAttribute(c, "" + d);
            return d;
        }
        if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
            return g;
        }
        g = a.getAttribute(c);
        return g === null ? b : g;
    }, removeAttr: function (a, b) {
        var c, d, e, g, h = 0;
        if (a.nodeType === 1) {
            d = (b || "").split(p), g = d.length;
            for (; h < g; h++) {
                e = d[h].toLowerCase(), c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1);
            }
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (r.test(a.nodeName) && a.parentNode) {
            f.error("type property can't be changed");
        } else {
            if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                var c = a.value;
                a.setAttribute("type", b), c && (a.value = c);
                return b;
            }
        }
    }}, value: {get: function (a, b) {
        if (w && f.nodeName(a, "button")) {
            return w.get(a, b);
        }
        return b in a ? a.value : null;
    }, set: function (a, b, c) {
        if (w && f.nodeName(a, "button")) {
            return w.set(a, b, c);
        }
        a.value = b;
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, g, h, i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2) {
            return b;
        }
        h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
        return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c];
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b;
    }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) {
        var d, e = f.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b;
    }, set: function (a, b, c) {
        var d;
        b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
        return c;
    }}, v || (y = {name: !0, id: !0}, w = f.valHooks.button = {get: function (a, c) {
        var d;
        d = a.getAttributeNode(c);
        return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b;
    }, set: function (a, b, d) {
        var e = a.getAttributeNode(d);
        e || (e = c.createAttribute(d), a.setAttributeNode(e));
        return e.nodeValue = b + "";
    }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) {
            if (c === "") {
                a.setAttribute(b, "auto");
                return c;
            }
        }});
    }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) {
        b === "" && (b = "false"), w.set(a, b, c);
    }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
        }});
    }), f.support.style || (f.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b;
    }, set: function (a, b) {
        return a.style.cssText = "" + b;
    }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        return null;
    }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value;
        }};
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) {
            if (f.isArray(b)) {
                return a.checked = f.inArray(f(a).val(), b) >= 0;
            }
        }});
    });
    var z = /\.(.*)$/, A = /^(?:textarea|input|select)$/i, B = /\./g, C = / /g, D = /[^\w\s.|`]/g, E = /^([^\.]*)?(?:\.(.+))?$/, F = /\bhover(\.\S+)?/, G = /^key/, H = /^(?:mouse|contextmenu)|click/, I = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, J = function (a) {
        var b = I.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b;
    }, K = function (a, b) {
        return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className));
    }, L = function (a) {
        return f.event.special.hover ? a : a.replace(F, "mouseenter$1 mouseleave$1");
    };
    f.event = {add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
            d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b;
            }, i.elem = a), c = L(c).split(" ");
            for (k = 0; k < c.length; k++) {
                l = E.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, namespace: n.join(".")}, p), g && (o.quick = J(g), !o.quick && f.expr.match.POS.test(g) && (o.isPositional = !0)), r = j[m];
                if (!r) {
                    r = j[m] = [], r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                        a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i);
                    }
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0;
            }
            a = null;
        }
    }, global: {}, remove: function (a, b, c, d) {
        var e = f.hasData(a) && f._data(a), g, h, i, j, k, l, m, n, o, p, q;
        if (!!e && !!(m = e.events)) {
            b = L(b || "").split(" ");
            for (g = 0; g < b.length; g++) {
                h = E.exec(b[g]) || [], i = h[1], j = h[2];
                if (!i) {
                    j = j ? "." + j : "";
                    for (l in m) {
                        f.event.remove(a, l + j, c, d);
                    }
                    return;
                }
                n = f.event.special[i] || {}, i = (d ? n.delegateType : n.bindType) || i, p = m[i] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                if (c || j || d || n.remove) {
                    for (l = 0; l < p.length; l++) {
                        q = p[l];
                        if (!c || c.guid === q.guid) {
                            if (!j || j.test(q.namespace)) {
                                if (!d || d === q.selector || d === "**" && q.selector) {
                                    p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q);
                                }
                            }
                        }
                    }
                } else {
                    p.length = 0;
                }
                p.length === 0 && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && f.removeEvent(a, i, e.handle), delete m[i]);
            }
            f.isEmptyObject(m) && (o = e.handle, o && (o.elem = null), f.removeData(a, ["events", "handle"], !0));
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) {
        if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
            var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                return;
            }
            c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "", (g || !e) && c.preventDefault();
            if (!e) {
                j = f.cache;
                for (l in j) {
                    j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                }
                return;
            }
            c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
            if (p.trigger && p.trigger.apply(e, d) === !1) {
                return;
            }
            r = [
                [e, p.bindType || h]
            ];
            if (!g && !p.noBubble && !f.isWindow(e)) {
                s = p.delegateType || h, n = null;
                for (m = e.parentNode; m; m = m.parentNode) {
                    r.push([m, s]), n = m;
                }
                n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s]);
            }
            for (l = 0; l < r.length; l++) {
                m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d);
                if (c.isPropagationStopped()) {
                    break;
                }
            }
            c.type = h, c.isDefaultPrevented() || (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
            return c.result;
        }
    }, dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = (f.event.special[c.type] || {}).handle, j = [], k, l, m, n, o, p, q, r, s, t, u;
        g[0] = c, c.delegateTarget = this;
        if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
            for (m = c.target; m != this; m = m.parentNode || this) {
                o = {}, q = [];
                for (k = 0; k < e; k++) {
                    r = d[k], s = r.selector, t = o[s], r.isPositional ? t = (t || (o[s] = f(s))).index(m) >= 0 : t === b && (t = o[s] = r.quick ? K(m, r.quick) : f(m).is(s)), t && q.push(r);
                }
                q.length && j.push({elem: m, matches: q});
            }
        }
        d.length > e && j.push({elem: this, matches: d.slice(e)});
        for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
            p = j[k], c.currentTarget = p.elem;
            for (l = 0; l < p.matches.length && !c.isImmediatePropagationStopped(); l++) {
                r = p.matches[l];
                if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) {
                    c.data = r.data, c.handleObj = r, n = (i || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()));
                }
            }
        }
        return c.result;
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a;
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "), filter: function (a, d) {
        var e, f, g, h = d.button, i = d.fromElement;
        a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a;
    }}, fix: function (a) {
        if (a[f.expando]) {
            return a;
        }
        var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d;) {
            e = i[--d], a[e] = g[e];
        }
        a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
        return h.filter ? h.filter(a, g) : a;
    }, special: {ready: {setup: f.bindReady}, focus: {delegateType: "focusin", noBubble: !0}, blur: {delegateType: "focusout", noBubble: !0}, beforeunload: {setup: function (a, b, c) {
        f.isWindow(this) && (this.onbeforeunload = c);
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null);
    }}}, simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c);
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) {
            return new f.Event(a, b);
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? N : M) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0;
    }, f.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = N;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function () {
        this.isPropagationStopped = N;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = N, this.stopPropagation();
    }, isDefaultPrevented: M, isPropagationStopped: M, isImmediatePropagationStopped: M}, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = f.event.special[b] = {delegateType: b, bindType: b, handle: function (a) {
            var b = this, c = a.relatedTarget, d = a.handleObj, e = d.selector, g, h;
            if (!c || d.origType === a.type || c !== b && !f.contains(b, c)) {
                g = a.type, a.type = d.origType, h = d.handler.apply(this, arguments), a.type = g;
            }
            return h;
        }};
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function () {
        if (f.nodeName(this, "form")) {
            return !1;
        }
        f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                this.parentNode && f.event.simulate("submit", this.parentNode, a, !0);
            }), d._submit_attached = !0);
        });
    }, teardown: function () {
        if (f.nodeName(this, "form")) {
            return !1;
        }
        f.event.remove(this, "._submit");
    }}), f.support.changeBubbles || (f.event.special.change = {setup: function () {
        if (A.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio") {
                f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && (this._just_changed = !1, f.event.simulate("change", this, a, !0));
                });
            }
            return !1;
        }
        f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            A.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && f.event.simulate("change", this.parentNode, a, !0);
            }), b._change_attached = !0);
        });
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
            return a.handleObj.handler.apply(this, arguments);
        }
    }, teardown: function () {
        f.event.remove(this, "._change");
        return A.test(this.nodeName);
    }}), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0);
        };
        f.event.special[b] = {setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0);
        }, teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0);
        }};
    }), f.fn.extend({on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
            typeof c != "string" && (d = c, c = b);
            for (i in a) {
                this.on(i, c, d, a[i], g);
            }
            return this;
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1) {
            e = M;
        } else {
            if (!e) {
                return this;
            }
        }
        g === 1 && (h = e, e = function (a) {
            f().off(a);
            return h.apply(this, arguments);
        }, e.guid = h.guid || (h.guid = f.guid++));
        return this.each(function () {
            f.event.add(this, a, e, d, c);
        });
    }, one: function (a, b, c, d) {
        return this.on.call(this, a, b, c, d, 1);
    }, off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
            return this;
        }
        if (typeof a == "object") {
            for (var g in a) {
                this.off(g, c, a[g]);
            }
            return this;
        }
        if (c === !1 || typeof c == "function") {
            d = c, c = b;
        }
        d === !1 && (d = M);
        return this.each(function () {
            f.event.remove(this, a, d, c);
        });
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c);
    }, unbind: function (a, b) {
        return this.off(a, null, b);
    }, live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this;
    }, die: function (a, b) {
        f(this.context).off(a, this.selector || "**", b);
        return this;
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
    }, undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c);
    }, trigger: function (a, b) {
        return this.each(function () {
            f.event.trigger(a, b, this);
        });
    }, triggerHandler: function (a, b) {
        if (this[0]) {
            return f.event.trigger(a, b, this[0], !0);
        }
    }, toggle: function (a) {
        var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1;
        };
        e.guid = c;
        while (d < b.length) {
            b[d++].guid = c;
        }
        return this.click(e);
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
    }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b);
        }, f.attrFn && (f.attrFn[b] = !0), G.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), H.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break;
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break;
                                }
                            } else {
                                if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break;
                                }
                            }
                        }
                        j = j[a];
                    }
                    e[h] = k;
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break;
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break;
                        }
                        j = j[a];
                    }
                    e[h] = k;
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0;
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) {
                return[];
            }
            if (!b || typeof b != "string") {
                return e;
            }
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break;
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) {
                if (w.length === 2 && o.relative[w[0]]) {
                    j = y(w[0] + w[1], d, f);
                } else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) {
                        b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f);
                    }
                }
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) {
                        q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v);
                    }
                } else {
                    k = w = [];
                }
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") {
                if (!u) {
                    e.push.apply(e, k);
                } else {
                    if (d && d.nodeType === 1) {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                        }
                    } else {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && k[t].nodeType === 1 && e.push(j[t]);
                        }
                    }
                }
            } else {
                s(k, e);
            }
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e;
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1);
                    }
                }
            }
            return a;
        }, m.matches = function (a, b) {
            return m(a, null, null, b);
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0;
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) {
                return[];
            }
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break;
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return{set: d, expr: a};
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) {
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") {
                            continue;
                        }
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) {
                                g = i = !0;
                            } else {
                                if (f === !0) {
                                    continue;
                                }
                            }
                        }
                        if (f) {
                            for (n = 0; (j = s[n]) != null; n++) {
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            }
                        }
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) {
                                return[];
                            }
                            break;
                        }
                    }
                }
                if (a === q) {
                    if (g == null) {
                        m.error(a);
                    } else {
                        break;
                    }
                }
                q = a;
            }
            return s;
        }, m.error = function (a) {
            throw"Syntax error, unrecognized expression: " + a;
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1) {
                    if (typeof a.textContent == "string") {
                        return a.textContent;
                    }
                    if (typeof a.innerText == "string") {
                        return a.innerText.replace(k, "");
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        e += n(a);
                    }
                } else {
                    if (d === 3 || d === 4) {
                        return a.nodeValue;
                    }
                }
            } else {
                for (b = 0; c = a[b]; b++) {
                    c.nodeType !== 8 && (e += n(c));
                }
            }
            return e;
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a) {
            return a.getAttribute("href");
        }, type: function (a) {
            return a.getAttribute("type");
        }}, relative: {"+": function (a, b) {
            var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
            d && (b = b.toLowerCase());
            for (var f = 0, g = a.length, h; f < g; f++) {
                if (h = a[f]) {
                    while ((h = h.previousSibling) && h.nodeType !== 1) {
                    }
                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b;
                }
            }
            e && m.filter(b, a, !0);
        }, ">": function (a, b) {
            var c, d = typeof b == "string", e = 0, f = a.length;
            if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                        var g = c.parentNode;
                        a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                    }
                }
            } else {
                for (; e < f; e++) {
                    c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                }
                d && m.filter(b, a, !0);
            }
        }, "": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c);
        }, "~": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c);
        }}, find: {ID: function (a, b, c) {
            if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : [];
            }
        }, NAME: function (a, b) {
            if (typeof b.getElementsByName != "undefined") {
                var c = [], d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++) {
                    d[e].getAttribute("name") === a[1] && c.push(d[e]);
                }
                return c.length === 0 ? null : c;
            }
        }, TAG: function (a, b) {
            if (typeof b.getElementsByTagName != "undefined") {
                return b.getElementsByTagName(a[1]);
            }
        }}, preFilter: {CLASS: function (a, b, c, d, e, f) {
            a = " " + a[1].replace(j, "") + " ";
            if (f) {
                return a;
            }
            for (var g = 0, h; (h = b[g]) != null; g++) {
                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
            }
            return !1;
        }, ID: function (a) {
            return a[1].replace(j, "");
        }, TAG: function (a, b) {
            return a[1].replace(j, "").toLowerCase();
        }, CHILD: function (a) {
            if (a[1] === "nth") {
                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0;
            } else {
                a[2] && m.error(a[0]);
            }
            a[0] = e++;
            return a;
        }, ATTR: function (a, b, c, d, e, f) {
            var g = a[1] = a[1].replace(j, "");
            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
            return a;
        }, PSEUDO: function (b, c, d, e, f) {
            if (b[1] === "not") {
                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                    b[3] = m(b[3], null, null, c);
                } else {
                    var g = m.filter(b[3], c, d, !0 ^ f);
                    d || e.push.apply(e, g);
                    return !1;
                }
            } else {
                if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                    return !0;
                }
            }
            return b;
        }, POS: function (a) {
            a.unshift(!0);
            return a;
        }}, filters: {enabled: function (a) {
            return a.disabled === !1 && a.type !== "hidden";
        }, disabled: function (a) {
            return a.disabled === !0;
        }, checked: function (a) {
            return a.checked === !0;
        }, selected: function (a) {
            a.parentNode && a.parentNode.selectedIndex;
            return a.selected === !0;
        }, parent: function (a) {
            return !!a.firstChild;
        }, empty: function (a) {
            return !a.firstChild;
        }, has: function (a, b, c) {
            return !!m(c[3], a).length;
        }, header: function (a) {
            return/h\d/i.test(a.nodeName);
        }, text: function (a) {
            var b = a.getAttribute("type"), c = a.type;
            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null);
        }, radio: function (a) {
            return a.nodeName.toLowerCase() === "input" && "radio" === a.type;
        }, checkbox: function (a) {
            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type;
        }, file: function (a) {
            return a.nodeName.toLowerCase() === "input" && "file" === a.type;
        }, password: function (a) {
            return a.nodeName.toLowerCase() === "input" && "password" === a.type;
        }, submit: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "submit" === a.type;
        }, image: function (a) {
            return a.nodeName.toLowerCase() === "input" && "image" === a.type;
        }, reset: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "reset" === a.type;
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && "button" === a.type || b === "button";
        }, input: function (a) {
            return/input|select|textarea|button/i.test(a.nodeName);
        }, focus: function (a) {
            return a === a.ownerDocument.activeElement;
        }}, setFilters: {first: function (a, b) {
            return b === 0;
        }, last: function (a, b, c, d) {
            return b === d.length - 1;
        }, even: function (a, b) {
            return b % 2 === 0;
        }, odd: function (a, b) {
            return b % 2 === 1;
        }, lt: function (a, b, c) {
            return b < c[3] - 0;
        }, gt: function (a, b, c) {
            return b > c[3] - 0;
        }, nth: function (a, b, c) {
            return c[3] - 0 === b;
        }, eq: function (a, b, c) {
            return c[3] - 0 === b;
        }}, filter: {PSEUDO: function (a, b, c, d) {
            var e = b[1], f = o.filters[e];
            if (f) {
                return f(a, c, b, d);
            }
            if (e === "contains") {
                return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
            }
            if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++) {
                    if (g[h] === a) {
                        return !1;
                    }
                }
                return !0;
            }
            m.error(e);
        }, CHILD: function (a, b) {
            var c, e, f, g, h, i, j, k = b[1], l = a;
            switch (k) {
                case"only":
                case"first":
                    while (l = l.previousSibling) {
                        if (l.nodeType === 1) {
                            return !1;
                        }
                    }
                    if (k === "first") {
                        return !0;
                    }
                    l = a;
                case"last":
                    while (l = l.nextSibling) {
                        if (l.nodeType === 1) {
                            return !1;
                        }
                    }
                    return !0;
                case"nth":
                    c = b[2], e = b[3];
                    if (c === 1 && e === 0) {
                        return !0;
                    }
                    f = b[0], g = a.parentNode;
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                        i = 0;
                        for (l = g.firstChild; l; l = l.nextSibling) {
                            l.nodeType === 1 && (l.nodeIndex = ++i);
                        }
                        g[d] = f;
                    }
                    j = a.nodeIndex - e;
                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
            }
        }, ID: function (a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b;
        }, TAG: function (a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b;
        }, CLASS: function (a, b) {
            return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1;
        }, ATTR: function (a, b) {
            var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1;
        }, POS: function (a, b, c, d) {
            var e = b[2], f = o.setFilters[e];
            if (f) {
                return f(a, c, b, d);
            }
        }}}, p = o.match.POS, q = function (a, b) {
            return"\\" + (b - 0 + 1);
        };
        for (var r in o.match) {
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        }
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b;
            }
            return a;
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a);
                } else {
                    if (typeof a.length == "number") {
                        for (var e = a.length; c < e; c++) {
                            d.push(a[c]);
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c]);
                        }
                    }
                }
                return d;
            };
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1;
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0;
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex;
            }
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) {
                return v(a, b);
            }
            if (!g) {
                return -1;
            }
            if (!i) {
                return 1;
            }
            while (j) {
                e.unshift(j), j = j.parentNode;
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode;
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return v(e[k], f[k]);
                }
            }
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
        }, v = function (a, b, c) {
            if (a === b) {
                return c;
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1;
                }
                d = d.nextSibling;
            }
            return 1;
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : [];
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b;
            }), e.removeChild(a), e = a = null;
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e]);
                    }
                    c = d;
                }
                return c;
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2);
            }), a = null;
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return s(e.getElementsByTagName(b), f);
                            }
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                return s(e.getElementsByClassName(h[2]), f);
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return s([e.body], f);
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return s([], f);
                                }
                                if (i.id === h[3]) {
                                    return s([i], f);
                                }
                            }
                            try {
                                return s(e.querySelectorAll(b), f);
                            } catch (j) {
                            }
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) {
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f);
                                    }
                                } catch (r) {
                                } finally {
                                    l || k.removeAttribute("id");
                                }
                            }
                        }
                    }
                    return a(b, e, f, g);
                };
                for (var e in a) {
                    m[e] = a[e];
                }
                b = null;
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle");
                } catch (f) {
                    e = !0;
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) {
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f;
                                }
                            }
                        } catch (g) {
                        }
                    }
                    return m(c, null, null, [a]).length > 0;
                };
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return;
                }
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1]);
                    }
                }, a = null;
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0);
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16);
        } : m.contains = function () {
            return !1;
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1;
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) {
                f += d[0], a = a.replace(o.match.PSEUDO, "");
            }
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) {
                m(a, g[h], e, c);
            }
            return m.filter(f, e);
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains;
    }();
    var O = /Until$/, P = /^(?:parents|prevUntil|prevAll)/, Q = /,/, R = /^.[^:#\[\.,]*$/, S = Array.prototype.slice, T = f.expr.match.POS, U = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({find: function (a) {
        var b = this, c, d;
        if (typeof a != "string") {
            return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) {
                    if (f.contains(b[c], this)) {
                        return !0;
                    }
                }
            });
        }
        var e = this.pushStack("", "find", a), g, h, i;
        for (c = 0, d = this.length; c < d; c++) {
            g = e.length, f.find(a, this[c], e);
            if (c > 0) {
                for (h = g; h < e.length; h++) {
                    for (i = 0; i < g; i++) {
                        if (e[i] === e[h]) {
                            e.splice(h--, 1);
                            break;
                        }
                    }
                }
            }
        }
        return e;
    }, has: function (a) {
        var b = f(a);
        return this.filter(function () {
            for (var a = 0, c = b.length; a < c; a++) {
                if (f.contains(this, b[a])) {
                    return !0;
                }
            }
        });
    }, not: function (a) {
        return this.pushStack(W(this, a, !1), "not", a);
    }, filter: function (a) {
        return this.pushStack(W(this, a, !0), "filter", a);
    }, is: function (a) {
        return !!a && (typeof a == "string" ? T.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0);
    }, closest: function (a, b) {
        var c = [], d, e, g = this[0];
        if (f.isArray(a)) {
            var h = 1;
            while (g && g.ownerDocument && g !== b) {
                for (d = 0; d < a.length; d++) {
                    f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                }
                g = g.parentNode, h++;
            }
            return c;
        }
        var i = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            while (g) {
                if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break;
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                    break;
                }
            }
        }
        c = c.length > 1 ? f.unique(c) : c;
        return this.pushStack(c, "closest", a);
    }, index: function (a) {
        if (!a) {
            return this[0] && this[0].parentNode ? this.prevAll().length : -1;
        }
        if (typeof a == "string") {
            return f.inArray(this[0], f(a));
        }
        return f.inArray(a.jquery ? a[0] : a, this);
    }, add: function (a, b) {
        var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
        return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d));
    }, andSelf: function () {
        return this.add(this.prevObject);
    }}), f.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null;
    }, parents: function (a) {
        return f.dir(a, "parentNode");
    }, parentsUntil: function (a, b, c) {
        return f.dir(a, "parentNode", c);
    }, next: function (a) {
        return f.nth(a, 2, "nextSibling");
    }, prev: function (a) {
        return f.nth(a, 2, "previousSibling");
    }, nextAll: function (a) {
        return f.dir(a, "nextSibling");
    }, prevAll: function (a) {
        return f.dir(a, "previousSibling");
    }, nextUntil: function (a, b, c) {
        return f.dir(a, "nextSibling", c);
    }, prevUntil: function (a, b, c) {
        return f.dir(a, "previousSibling", c);
    }, siblings: function (a) {
        return f.sibling(a.parentNode.firstChild, a);
    }, children: function (a) {
        return f.sibling(a.firstChild);
    }, contents: function (a) {
        return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes);
    }}, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c), g = S.call(arguments);
            O.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !U[a] ? f.unique(e) : e, (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","));
        };
    }), f.extend({filter: function (a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b);
    }, dir: function (a, c, d) {
        var e = [], g = a[c];
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
            g.nodeType === 1 && e.push(g), g = g[c];
        }
        return e;
    }, nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c]) {
            if (a.nodeType === 1 && ++e === b) {
                break;
            }
        }
        return a;
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) {
            a.nodeType === 1 && a !== b && c.push(a);
        }
        return c;
    }});
    var Y = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", Z = / jQuery\d+="(?:\d+|null)"/g, $ = /^\s+/, _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, ba = /<([\w:]+)/, bb = /<tbody/i, bc = /<|&#?\w+;/, bd = /<(?:script|style)/i, be = /<(?:script|object|embed|option|style)/i, bf = new RegExp("<(?:" + Y.replace(" ", "|") + ")", "i"), bg = /checked\s*(?:[^=]|=\s*.checked.)/i, bh = /\/(java|ecma)script/i, bi = /^\s*<!(?:\[CDATA\[|\-\-)/, bj = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, bk = X(c);
    bj.optgroup = bj.option, bj.tbody = bj.tfoot = bj.colgroup = bj.caption = bj.thead, bj.th = bj.td, f.support.htmlSerialize || (bj._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()));
            });
        }
        if (typeof a != "object" && a !== b) {
            return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
        }
        return f.text(this);
    }, wrapAll: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).wrapAll(a.call(this, b));
            });
        }
        if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1) {
                    a = a.firstChild;
                }
                return a;
            }).append(this);
        }
        return this;
    }, wrapInner: function (a) {
        if (f.isFunction(a)) {
            return this.each(function (b) {
                f(this).wrapInner(a.call(this, b));
            });
        }
        return this.each(function () {
            var b = f(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
        });
    }, wrap: function (a) {
        return this.each(function () {
            f(this).wrapAll(a);
        });
    }, unwrap: function () {
        return this.parent().each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
        }).end();
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a);
        });
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild);
        });
    }, before: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this);
            });
        }
        if (arguments.length) {
            var a = f(arguments[0]);
            a.push.apply(a, this.toArray());
            return this.pushStack(a, "before", arguments);
        }
    }, after: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling);
            });
        }
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, f(arguments[0]).toArray());
            return a;
        }
    }, remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++) {
            if (!a || f.filter(a, [d]).length) {
                !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            }
        }
        return this;
    }, empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild) {
                b.removeChild(b.firstChild);
            }
        }
        return this;
    }, clone: function (a, b) {
        a = a == null ? !1 : a, b = b == null ? a : b;
        return this.map(function () {
            return f.clone(this, a, b);
        });
    }, html: function (a) {
        if (a === b) {
            return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Z, "") : null;
        }
        if (typeof a == "string" && !bd.test(a) && (f.support.leadingWhitespace || !$.test(a)) && !bj[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(_, "<$1></$2>");
            try {
                for (var c = 0, d = this.length; c < d; c++) {
                    this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a);
                }
            } catch (e) {
                this.empty().append(a);
            }
        } else {
            f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()));
            }) : this.empty().append(a);
        }
        return this;
    }, replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d));
                });
            }
            typeof a != "string" && (a = f(a).detach());
            return this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a);
            });
        }
        return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this;
    }, detach: function (a) {
        return this.remove(a, !0);
    }, domManip: function (a, c, d) {
        var e, g, h, i, j = a[0], k = [];
        if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bg.test(j)) {
            return this.each(function () {
                f(this).domManip(a, c, d, !0);
            });
        }
        if (f.isFunction(j)) {
            return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d);
            });
        }
        if (this[0]) {
            i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
            if (g) {
                c = c && f.nodeName(g, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                    d.call(c ? bl(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h);
                }
            }
            k.length && f.each(k, br);
        }
        return this;
    }}), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !be.test(j) && (f.support.checkClone || !bg.test(j)) && !f.support.unknownElems && bf.test(j) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return{fragment: e, cacheable: g};
    }, f.fragments = {}, f.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this;
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j);
            }
            return this.pushStack(d, a, e.selector);
        };
    }), f.extend({clone: function (a, b, c) {
        var d = a.cloneNode(!0), e, g, h;
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            bn(a, d), e = bo(a), g = bo(d);
            for (h = 0; e[h]; ++h) {
                g[h] && bn(e[h], g[h]);
            }
        }
        if (b) {
            bm(a, d);
            if (c) {
                e = bo(a), g = bo(d);
                for (h = 0; e[h]; ++h) {
                    bm(e[h], g[h]);
                }
            }
        }
        e = g = null;
        return d;
    }, clean: function (a, b, d, e) {
        var g;
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        var h = [], i;
        for (var j = 0, k; (k = a[j]) != null; j++) {
            typeof k == "number" && (k += "");
            if (!k) {
                continue;
            }
            if (typeof k == "string") {
                if (!bc.test(k)) {
                    k = b.createTextNode(k);
                } else {
                    k = k.replace(_, "<$1></$2>");
                    var l = (ba.exec(k) || ["", ""])[1].toLowerCase(), m = bj[l] || bj._default, n = m[0], o = b.createElement("div");
                    b === c ? bk.appendChild(o) : X(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) {
                        o = o.lastChild;
                    }
                    if (!f.support.tbody) {
                        var p = bb.test(k), q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) {
                            f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i]);
                        }
                    }
                    !f.support.leadingWhitespace && $.test(k) && o.insertBefore(b.createTextNode($.exec(k)[0]), o.firstChild), k = o.childNodes;
                }
            }
            var r;
            if (!f.support.appendChecked) {
                if (k[0] && typeof(r = k.length) == "number") {
                    for (i = 0; i < r; i++) {
                        bq(k[i]);
                    }
                } else {
                    bq(k);
                }
            }
            k.nodeType ? h.push(k) : h = f.merge(h, k);
        }
        if (d) {
            g = function (a) {
                return !a.type || bh.test(a.type);
            };
            for (j = 0; h[j]; j++) {
                if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
                    e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                } else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s));
                    }
                    d.appendChild(h[j]);
                }
            }
        }
        return h;
    }, cleanData: function (a) {
        var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                continue;
            }
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events) {
                        e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                    }
                    b.handle && (b.handle.elem = null);
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c];
            }
        }
    }});
    var bs = /alpha\([^)]*\)/i, bt = /opacity=([^)]*)/, bu = /([A-Z]|^ms)/g, bv = /^-?\d+(?:px)?$/i, bw = /^-?\d/, bx = /^([\-+])=([\-+.\de]+)/, by = {position: "absolute", visibility: "hidden", display: "block"}, bz = ["Left", "Right"], bA = ["Top", "Bottom"], bB, bC, bD;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) {
            return this;
        }
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c);
        });
    }, f.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = bB(a, "opacity", "opacity");
            return c === "" ? "1" : c;
        }
        return a.style.opacity;
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
                if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                    return g;
                }
                return j[c];
            }
            h = typeof d, h === "string" && (g = bx.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d)) {
                return;
            }
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                try {
                    j[c] = d;
                } catch (l) {
                }
            }
        }
    }, css: function (a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
            return e;
        }
        if (bB) {
            return bB(a, c);
        }
    }, swap: function (a, b, c) {
        var d = {};
        for (var e in b) {
            d[e] = a.style[e], a.style[e] = b[e];
        }
        c.call(a);
        for (e in b) {
            a.style[e] = d[e];
        }
    }}), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {get: function (a, c, d) {
            var e;
            if (c) {
                if (a.offsetWidth !== 0) {
                    return bE(a, b, d);
                }
                f.swap(a, by, function () {
                    e = bE(a, b, d);
                });
                return e;
            }
        }, set: function (a, b) {
            if (!bv.test(b)) {
                return b;
            }
            b = parseFloat(b);
            if (b >= 0) {
                return b + "px";
            }
        }};
    }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) {
        return bt.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(bs, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter) {
                return;
            }
        }
        c.filter = bs.test(g) ? g.replace(bs, e) : g + " " + e;
    }}), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) {
            var c;
            f.swap(a, {display: "inline-block"}, function () {
                b ? c = bB(a, "margin-right", "marginRight") : c = a.style.marginRight;
            });
            return c;
        }});
    }), c.defaultView && c.defaultView.getComputedStyle && (bC = function (a, c) {
        var d, e, g;
        c = c.replace(bu, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) {
            return b;
        }
        if (g = e.getComputedStyle(a, null)) {
            d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        }
        return d;
    }), c.documentElement.currentStyle && (bD = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bv.test(f) && bw.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f;
    }), bB = bC || bD, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none";
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a);
    });
    var bF = /%20/g, bG = /\[\]$/, bH = /\r?\n/g, bI = /#.*$/, bJ = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bK = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bM = /^(?:GET|HEAD)$/, bN = /^\/\//, bO = /\?/, bP = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bQ = /^(?:select|textarea)/i, bR = /\s+/, bS = /([?&])_=[^&]*/, bT = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bU = f.fn.load, bV = {}, bW = {}, bX, bY, bZ = ["*/"] + ["*"];
    try {
        bX = e.href;
    } catch (b$) {
        bX = c.createElement("a"), bX.href = "", bX = bX.href;
    }
    bY = bT.exec(bX.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) {
        if (typeof a != "string" && bU) {
            return bU.apply(this, arguments);
        }
        if (!this.length) {
            return this;
        }
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e);
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        f.ajax({url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
            c = a.responseText, a.isResolved() && (a.done(function (a) {
                c = a;
            }), i.html(g ? f("<div>").append(c.replace(bP, "")).find(g) : c)), d && i.each(d, [c, b, a]);
        }});
        return this;
    }, serialize: function () {
        return f.param(this.serializeArray());
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this;
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || bQ.test(this.nodeName) || bK.test(this.type));
        }).map(function (a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                return{name: b.name, value: a.replace(bH, "\r\n")};
            }) : {name: b.name, value: c.replace(bH, "\r\n")};
        }).get();
    }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a);
        };
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g});
        };
    }), f.extend({getScript: function (a, c) {
        return f.get(a, b, c, "script");
    }, getJSON: function (a, b, c) {
        return f.get(a, b, c, "json");
    }, ajaxSetup: function (a, b) {
        b ? cb(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), cb(a, b);
        return a;
    }, ajaxSettings: {url: bX, isLocal: bL.test(bY[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bZ}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: b_(bV), ajaxTransport: b_(bW), ajax: function (a, c) {
        function w(a, c, l, m) {
            if (s !== 2) {
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c, x = l ? cd(d, v, l) : b, y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified")) {
                            f.lastModified[k] = y;
                        }
                        if (z = v.getResponseHeader("Etag")) {
                            f.etag[k] = z;
                        }
                    }
                    if (a === 304) {
                        w = "notmodified", o = !0;
                    } else {
                        try {
                            r = ce(d, x), w = "success", o = !0;
                        } catch (A) {
                            w = "parsererror", u = A;
                        }
                    }
                } else {
                    u = w;
                    if (!w || a) {
                        w = "error", a < 0 && (a = 0);
                    }
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"));
            }
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) {
            if (!s) {
                var c = a.toLowerCase();
                a = m[c] = m[c] || a, l[a] = b;
            }
            return this;
        }, getAllResponseHeaders: function () {
            return s === 2 ? n : null;
        }, getResponseHeader: function (a) {
            var c;
            if (s === 2) {
                if (!o) {
                    o = {};
                    while (c = bJ.exec(n)) {
                        o[c[1].toLowerCase()] = c[2];
                    }
                }
                c = o[a.toLowerCase()];
            }
            return c === b ? null : c;
        }, overrideMimeType: function (a) {
            s || (d.mimeType = a);
            return this;
        }, abort: function (a) {
            a = a || "abort", p && p.abort(a), w(0, a);
            return this;
        }};
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
            if (a) {
                var b;
                if (s < 2) {
                    for (b in a) {
                        j[b] = [j[b], a[b]];
                    }
                } else {
                    b = a[v.status], v.then(b, b);
                }
            }
            return this;
        }, d.url = ((a || d.url) + "").replace(bI, "").replace(bN, bY[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bR), d.crossDomain == null && (r = bT.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bY[1] && r[2] == bY[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bY[3] || (bY[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), ca(bV, d, c, v);
        if (s === 2) {
            return !1;
        }
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bM.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (bO.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(), y = d.url.replace(bS, "$1_=" + x);
                d.url = y + (y === d.url ? (bO.test(d.url) ? "&" : "?") + "_=" + x : "");
            }
        }
        (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bZ + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers) {
            v.setRequestHeader(u, d.headers[u]);
        }
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return !1;
        }
        for (u in {success: 1, error: 1, complete: 1}) {
            v[u](d[u]);
        }
        p = ca(bW, d, c, v);
        if (!p) {
            w(-1, "No Transport");
        } else {
            v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                v.abort("timeout");
            }, d.timeout));
            try {
                s = 1, p.send(l, w);
            } catch (z) {
                s < 2 ? w(-1, z) : f.error(z);
            }
        }
        return v;
    }, param: function (a, c) {
        var d = [], e = function (a, b) {
            b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
            f.each(a, function () {
                e(this.name, this.value);
            });
        } else {
            for (var g in a) {
                cc(g, a[g], c, e);
            }
        }
        return d.join("&").replace(bF, "+");
    }}), f.extend({active: 0, lastModified: {}, etag: {}});
    var cf = f.now(), cg = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return f.expando + "_" + cf++;
    }}), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cg.test(b.url) || e && cg.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cg, l), b.url === j && (e && (k = k.replace(cg, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a];
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0]);
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0];
            }, b.dataTypes[0] = "json";
            return"script";
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        f.globalEval(a);
        return a;
    }}}), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function (f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                        d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success");
                    }
                }, e.insertBefore(d, e.firstChild);
            }, abort: function () {
                d && d.onload(0, 1);
            }};
        }
    });
    var ch = a.ActiveXObject ? function () {
        for (var a in cj) {
            cj[a](0, 1);
        }
    } : !1, ci = 0, cj;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ck() || cl();
    } : ck, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a});
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return{send: function (e, g) {
                var h = c.xhr(), i, j;
                c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                if (c.xhrFields) {
                    for (j in c.xhrFields) {
                        h[j] = c.xhrFields[j];
                    }
                }
                c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (j in e) {
                        h.setRequestHeader(j, e[j]);
                    }
                } catch (k) {
                }
                h.send(c.hasContent && c.data || null), d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                        if (d && (e || h.readyState === 4)) {
                            d = b, i && (h.onreadystatechange = f.noop, ch && delete cj[i]);
                            if (e) {
                                h.readyState !== 4 && h.abort();
                            } else {
                                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                try {
                                    k = h.statusText;
                                } catch (o) {
                                    k = "";
                                }
                                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204);
                            }
                        }
                    } catch (p) {
                        e || g(-1, p);
                    }
                    m && g(j, k, m, l);
                }, !c.async || h.readyState === 4 ? d() : (i = ++ci, ch && (cj || (cj = {}, f(a).unload(ch)), cj[i] = d), h.onreadystatechange = d);
            }, abort: function () {
                d && d(0, 1);
            }};
        }
    });
    var cm = {}, cn, co, cp = /^(?:toggle|show|hide)$/, cq = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cr, cs = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], ct;
    f.fn.extend({show: function (a, b, c) {
        var d, e;
        if (a || a === 0) {
            return this.animate(cw("show", 3), a, b, c);
        }
        for (var g = 0, h = this.length; g < h; g++) {
            d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cx(d.nodeName)));
        }
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none") {
                    d.style.display = f._data(d, "olddisplay") || "";
                }
            }
        }
        return this;
    }, hide: function (a, b, c) {
        if (a || a === 0) {
            return this.animate(cw("hide", 3), a, b, c);
        }
        var d, e, g = 0, h = this.length;
        for (; g < h; g++) {
            d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
        }
        for (g = 0; g < h; g++) {
            this[g].style && (this[g].style.display = "none");
        }
        return this;
    }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]();
        }) : this.animate(cw("toggle", 3), a, b, c);
        return this;
    }, fadeTo: function (a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
    }, animate: function (a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d) {
                    return b.complete.call(this);
                }
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cx(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1));
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a) {
                j = new f.fx(this, b, i), h = a[i], cp.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = cq.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
            }
            return !0;
        }

        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a)) {
            return this.each(e.complete, [!1]);
        }
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
    }, stop: function (a, c, d) {
        typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d);
            }

            var b, c = !1, e = f.timers, g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null) {
                for (b in g) {
                    g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                }
            } else {
                g[b = a + ".run"] && g[b].stop && h(this, g, b);
            }
            for (b = e.length; b--;) {
                e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
            }
            (!d || !c) && f.dequeue(this, a);
        });
    }}), f.each({slideDown: cw("show", 1), slideUp: cw("hide", 1), slideToggle: cw("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), f.extend({speed: function (a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b};
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) {
            d.queue = "fx";
        }
        d.old = d.complete, d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
        };
        return d;
    }, easing: {linear: function (a, b, c, d) {
        return c + d * a;
    }, swing: function (a, b, c, d) {
        return(-Math.cos(a * Math.PI) / 2 + 0.5) * d + c;
    }}, timers: [], fx: function (a, b, c) {
        this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {};
    }}), f.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this);
    }, cur: function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop];
        }
        var a, b = f.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a;
    }, custom: function (a, c, d) {
        function h(a) {
            return e.step(a);
        }

        var e = this, g = f.fx;
        this.startTime = ct || cu(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
            e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start);
        }, h() && f.timers.push(h) && !cr && (cr = setInterval(g.tick, g.interval));
    }, show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show();
    }, hide: function () {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
    }, step: function (a) {
        var b, c, d, e = ct || cu(), g = !0, h = this.elem, i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties) {
                i.animatedProperties[b] !== !0 && (g = !1);
            }
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                    h.style["overflow" + b] = i.overflow[a];
                }), i.hide && f(h).hide();
                if (i.hide || i.show) {
                    for (b in i.animatedProperties) {
                        f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    }
                }
                d = i.complete, d && (i.complete = !1, d.call(h));
            }
            return !1;
        }
        i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
        return !0;
    }}, f.extend(f.fx, {tick: function () {
        var a, b = f.timers, c = 0;
        for (; c < b.length; c++) {
            a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        }
        b.length || f.fx.stop();
    }, interval: 13, stop: function () {
        clearInterval(cr), cr = null;
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) {
        f.style(a.elem, "opacity", a.now);
    }, _default: function (a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now;
    }}}), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now));
        };
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers,function (b) {
            return a === b.elem;
        }).length;
    });
    var cy = /^t(?:able|d|h)$/i, cz = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b);
            });
        }
        if (!b || !b.ownerDocument) {
            return null;
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b);
        }
        try {
            c = b.getBoundingClientRect();
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b)) {
            return c ? {top: c.top, left: c.left} : {top: 0, left: 0};
        }
        var h = e.body, i = cA(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k;
        return{top: n, left: o};
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b);
            });
        }
        if (!b || !b.ownerDocument) {
            return null;
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b);
        }
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") {
                break;
            }
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cy.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c;
        }
        if (k.position === "relative" || k.position === "static") {
            l += i.offsetTop, m += i.offsetLeft;
        }
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return{top: l, left: m};
    }, f.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
        return{top: b, left: c};
    }, setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
        j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k);
    }}, f.fn.extend({position: function () {
        if (!this[0]) {
            return null;
        }
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = cz.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
        return{top: c.top - d.top, left: c.left - d.left};
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || c.body;
            while (a && !cz.test(a.nodeName) && f.css(a, "position") === "static") {
                a = a.offsetParent;
            }
            return a;
        });
    }}), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) {
                    return null;
                }
                g = cA(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d];
            }
            return this.each(function () {
                g = cA(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c;
            });
        };
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null;
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null;
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) {
                return a == null ? null : this;
            }
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()));
                });
            }
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c], h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g;
            }
            if (e.nodeType === 9) {
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            }
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNumeric(j) ? j : i;
            }
            return this.css(d, typeof a == "string" ? a : a + "px");
        };
    }), a.jQuery = a.$ = f;
})(window);


if (typeof($) == "function" && typeof($(document).ready) == "function") {
    $(document).ready(function () {
        WindowOnLoadCustom();
    });
} else {
    if (typeof(addEvent) == "function") {
        addEvent(window, "load", WindowOnLoadCustom);
    }
}
function WindowOnLoadCustom() {
}
function WindowOnLoadCore() {
    WhiteSite_SetCurrentClasses();
    varFeatureWidth = $(".rotatorElements .rotatorElement:first").width();
    varFeatureHeight = $(".rotatorElements .rotatorElement:first").height();
    Rotator.init({navItems: ".rotatorNav .rotatorLink", rotatorElement: ".rotatorElements .rotatorElement", featureAnimProperty: "opacity", featureAnimStartValue: "1", featureAnimEndValue: "0", featureElementStartCSSValue: "0", featureVisibleDuration: "5000"});
}
function IEVersion() {
    if (document.all) {
        if (!document.compatMode) {
            return"6";
        }
        if (document.compatMode && !document.querySelector) {
            return"7";
        }
        if (document.documentMode && document.documentMode == 8) {
            return"8";
        }
        if (document.documentMode && document.documentMode == 9) {
            return"9";
        }
        if (document.documentMode && document.documentMode == 10) {
            return"10";
        }
    } else {
        return false;
    }
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (c, a) {
        if (this === undefined || this === null) {
            throw new TypeError('"this" is null or not defined');
        }
        var b = this.length >>> 0;
        a = +a || 0;
        if (Math.abs(a) === Infinity) {
            a = 0;
        }
        if (a < 0) {
            a += b;
            if (a < 0) {
                a = 0;
            }
        }
        for (; a < b; a++) {
            if (this[a] === c) {
                return a;
            }
        }
        return -1;
    };
}
function Trim(a) {
    return a.replace(/^\s+|\s+$/g, "");
}
function MakeBoolean(b) {
    var a = false;
    if (b !== undefined || b != null) {
        switch (b.toLowerCase()) {
            case"true":
            case"t":
            case"yes":
            case"y":
            case"on":
            case"1":
            case"-1":
                a = true;
        }
    }
    return a;
}
function GetQueryStringValue(a, b) {
    if (!b) {
        b = location.search;
    }
    a = a.toLowerCase();
    strFindId = a + "=";
    intStart = b.toLowerCase().indexOf(strFindId) + strFindId.length;
    if (intStart > strFindId.length) {
        strRestOfQS = b.substring(intStart, b.length);
        intEnd = strRestOfQS.indexOf("&");
        if (intEnd == -1) {
            intEnd = b.length;
        } else {
            intEnd = intStart + intEnd;
        }
        strValue = b.substring(intStart, intEnd);
    } else {
        strValue = "";
    }
    return strValue;
}
function GetTopDomain(a) {
    strTopDomains = ".co,.com,.net,.org,.edu,.biz,.info";
    arrTopDomains = strTopDomains.split(",");
    strThisTopDomain = "";
    strLocalDomainPrefix = "";
    strLocalDomain = "";
    if (!a || a == "") {
        a = location.hostname;
    }
    for (i = 0; i < arrTopDomains.length; i++) {
        intIndexOfTopDomain = a.indexOf(arrTopDomains[i]);
        if (intIndexOfTopDomain > 0) {
            if ((a.substring(intIndexOfTopDomain, a.length) != arrTopDomains[i]) || (a.indexOf(arrTopDomains[i] + ".") > 0)) {
                strLocalDomainPrefix = a.substring(0, intIndexOfTopDomain);
                strThisTopDomain = a.substring(intIndexOfTopDomain, a.length);
            } else {
                intIndexOfTopDomain = -1;
            }
        }
    }
    if (strLocalDomainPrefix != "" && strThisTopDomain != "") {
        if (strLocalDomainPrefix.indexOf(".") > 0) {
            strLocalDomain = strLocalDomainPrefix.substring(strLocalDomainPrefix.lastIndexOf(".") + 1, strLocalDomainPrefix.length) + strThisTopDomain;
        } else {
            strLocalDomain = strLocalDomainPrefix + strThisTopDomain;
        }
    }
    if (strLocalDomain != "") {
        return strLocalDomain;
    } else {
        return a;
    }
}
function ConvertUrlToSearchKeywords(a) {
    strSearchString = decodeURIComponent(a);
    if (strSearchString.substring(0, 1) == "/") {
        strSearchString = strSearchString.substring(1, strSearchString.length - 1);
    }
    strSearchString = strSearchString.replace(/\//gi, " ");
    strSearchString = strSearchString.replace(/\-/gi, " ");
    strSearchString = strSearchString.replace(/\_/gi, " ");
    strSearchString = strSearchString.replace(/\?/gi, " ");
    strSearchString = encodeURIComponent(strSearchString);
    return strSearchString;
}
function LogEvents(a, b, e, d, c) {
    var d = "";
    if (typeof jQuery !== "undefined") {
        $(document).ready(function () {
            if (!e) {
                e = f(window.location.href);
            }
            if (parent && parent.strMeasurementUrl != undefined) {
                parent.strMeasurementUrl = e;
            }
            if (!d) {
                d = getCookie("cm3sessioncm3sidfrontend");
            }
            if (!c) {
            }
            g(e, d, "pageload", e, "");
            $("a").click(function (h) {
                var j = $(this).attr("href");
                g(e, d, "linkclick", j, "");
            });
            $("[data-cmmeasurementeventid],[data-cmmeasurementeventname]").click(function () {
                var j = $(this).attr("data-cmmeasurementeventname");
                var k = $(this).attr("data-cmmeasurementeventvalue");
                var h = $(this).attr("data-cmmeasurementeventid");
                if (!j) {
                    j = "click";
                }
                if (!k) {
                    k = e;
                }
                g(e, d, j, k, h);
            });
            function f(h) {
                return h.replace(/^\w*?\:\/\/\w.*?\//, "/");
            }

            function g(m, l, j, k, h) {
                if (!b) {
                    b = "/measurement/event.aspx";
                }
                if (a) {
                    $.post(b, {url: m, sessionid: l, eventname: j, eventvalue: k, eventid: h});
                }
            }
        });
    }
}
function setCookie(c, d, b, f, e) {
    var a = new Date();
    a.setDate(a.getDate() + b);
    strCookie = c + "=" + escape(d);
    strCookie += ((b == null) ? "" : ";expires=" + a.toGMTString());
    strCookie += ((f == null) ? "" : ";path=" + f);
    strCookie += ((e == null) ? "" : ";domain=" + e);
    document.cookie = strCookie;
}
function getCookie(a) {
    if (document.cookie.length > 0) {
        intCookieValueStart = document.cookie.indexOf(a + "=");
        if (intCookieValueStart != -1) {
            intCookieValueStart = intCookieValueStart + a.length + 1;
            intCookieValueEnd = document.cookie.indexOf(";", intCookieValueStart);
            if (intCookieValueEnd == -1) {
                intCookieValueEnd = document.cookie.length;
            }
            return unescape(document.cookie.substring(intCookieValueStart, intCookieValueEnd));
        }
    }
    return"";
}
function NavFormSelect(b, a) {
    intSelected = document[b].elements[a].options.selectedIndex;
    strURL = document[b].elements[a].options[intSelected].value;
    document[b].elements[a].options.selectedIndex = 0;
    if (strURL != "") {
        location.href = strURL;
    }
}
function InitNav(a) {
    sfHover = function () {
        var c = document.getElementById(a).getElementsByTagName("LI");
        for (var b = 0; b < c.length; b++) {
            c[b].onmouseover = function () {
                this.className += " sfhover";
            };
            c[b].onmouseout = function () {
                this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
            };
        }
    };
    if (window.attachEvent) {
        window.attachEvent("onload", sfHover);
    }
}
function Popup(e, b, a, c, g, d, j, h, f) {
    if (!e) {
        e = "/";
    }
    if (!b) {
        b = 600;
    }
    if (!a) {
        a = 400;
    }
    if (!c) {
        c = "PopupWindow";
    }
    if (!g) {
        g = "yes";
    }
    if (!d) {
        d = "no";
    }
    if (!j) {
        j = "no";
    }
    if (!h) {
        h = "no";
    }
    if (!f) {
        f = "yes";
    }
    idPopup = window.open(e, c, "width=" + b + ",height=" + a + ",scrollbars=" + g + ",location=" + d + ",toolbar=" + j + ",status=" + h + ",resizable=" + f);
    if (window.focus) {
        idPopup.focus();
    }
    return false;
}
function PopdownLink(a, b) {
    if (!b) {
        top.opener.location.href = a;
    } else {
        if (b.location) {
            b.location.href = a;
        } else {
            window.open(a, b);
        }
    }
    top.close();
}
function CS() {
    alert("That function is coming soon.");
}
function RequireKeywords(b, a) {
    if (document.forms[b].elements[a].value.length <= 3) {
        alert("Please alter your requested keyword(s) in the search form.\nThe search phrase must be 3 characters or more in length.");
        return false;
    }
}
function SearchKeywordsFieldOnClick(a) {
    if (a && a.value == "Enter keywords") {
        a.value = "";
    }
}
function SearchKeywordsFieldOnBlur(a) {
    if (a && a.value == "") {
        a.value = "Enter keywords";
    }
}
function SearchKeywordsFieldOnLoad(a) {
    if (a) {
        a.value = "Enter keywords";
    }
}
function RememberMe(a) {
    if (typeof(a) == "object") {
        if (a.checked) {
            if (typeof(document.forms[0].elements.SessionTimeLimit) == "object") {
                document.forms[0].elements.SessionTimeLimit.value = 43200;
            }
            if (typeof(document.forms[0].elements.SessionPersistent) == "object") {
                document.forms[0].elements.SessionPersistent.value = true;
            }
        } else {
            if (typeof(document.forms[0].elements.SessionTimeLimit) == "object") {
                document.forms[0].elements.SessionTimeLimit.value = "";
            }
            if (typeof(document.forms[0].elements.SessionPersistent) == "object") {
                document.forms[0].elements.SessionPersistent.value = "";
            }
        }
    }
}
function SaveFormDraft(c) {
    var a = document.getElementById("FormMessage" + c);
    var d = "";
    if (typeof jQuery !== "undefined") {
        var b = $("form").serialize();
        b += "&sid=" + getCookie("cm3sessioncm3sidfrontend");
        b += "&c=savedraftform";
        b += "&formcontainerid=" + c;
        b += "&formurl=" + document.URL;
        $.ajax({type: "POST", dataType: "json", url: "/App_Assets/Javascript/AcoraCMS/Ajax/command.aspx", data: b, success: function (f) {
            if (a) {
                a.className = a.className.replace(/ hidden/g, "");
                var e = new Date();
                if (f.Success) {
                    d = "Form draft has been saved on " + e.toLocaleTimeString();
                } else {
                    d = f.Message;
                }
                a.innerHTML = d;
                alert(d.replace(/<(?:.|\n)*?>/gm, ""));
            }
        }, error: function (f) {
            a.className = a.className.replace(/ hidden/g, "");
            if (a) {
                var e = new Date();
                if (f.Success) {
                    d = "Form draft has been saved on " + e.toLocaleTimeString();
                } else {
                    if (f.Message) {
                        d = f.Message;
                    } else {
                        d = "Error during Saving Draft";
                    }
                }
                a.innerHTML = d;
                alert(d.replace(/<(?:.|\n)*?>/gm, ""));
            }
        }});
        return false;
    } else {
        return true;
    }
}
function ValidateCmsForm(b, j) {
    var d = "";
    if (j === undefined) {
        j = 0;
    }
    var a = document.forms[j].elements.cmFields;
    var n = "";
    var m = "";
    for (var k = 0; k < a.length; k++) {
        var l = a[k].value.split(";");
        var f = l[0];
        if (l.length > 3) {
            n = l[3];
        }
        if (l.length > 2 && (l[1] == "1" || l[1] == "3")) {
            if (!FieldPopulated(j, f)) {
                m = FindFieldSectionName(j, f).toUpperCase();
                if (m) {
                    d += m + "\n" + l[2] + " is a required field\n\n";
                } else {
                    d += l[2] + " is a required field\n";
                }
                HighlightFieldWithError(j, l[0]);
            }
        }
        if (l.length > 4 && (l[1] == "2" || l[1] == "3") && FieldPopulated(j, f)) {
            var h = document.getElementById(f);
            if (l[4]) {
                var g = GetFileSizeInKBytes(h);
                if (g != 0 && g > l[4]) {
                    m = FindFieldSectionName(j, f).toUpperCase();
                    if (m) {
                        d += m + "\n" + l[2] + " file is bigger then allowed size of " + l[4] + " kb\n\n";
                    } else {
                        d += l[2] + " file is bigger then allowed size of " + l[4] + " kb\n";
                    }
                    HighlightFieldWithError(j, l[0]);
                }
            }
            if (l[5]) {
                var e = GetFileExtension(h);
                if (("|" + l[5] + "|").toLowerCase().indexOf("|" + e + "|") == -1) {
                    m = FindFieldSectionName(j, f).toUpperCase();
                    if (m) {
                        d += m + "\n" + l[2] + " file type is not allowed for that field\n\n";
                    } else {
                        d += l[2] + " file type is not allowed for that field\n";
                    }
                    HighlightFieldWithError(j, l[0]);
                }
            }
        }
        if (FieldPopulated(j, f)) {
            var c = document.forms[j].elements[f + ""];
            if (c.value) {
                if (n == "email" || n == "useremail") {
                    if (!IsEmail(c.value)) {
                        m = FindFieldSectionName(j, f).toUpperCase();
                        if (m) {
                            d += m + "\n" + l[2] + " is not a valid email address\n\n";
                        } else {
                            d += l[2] + " is not a valid email address\n";
                        }
                        HighlightFieldWithError(j, l[0]);
                    }
                } else {
                    if (n == "number") {
                        if (!IsNumber(c.value)) {
                            m = FindFieldSectionName(j, f).toUpperCase();
                            if (m) {
                                d += m + "\n" + l[2] + " is not a valid number\n\n";
                            } else {
                                d += l[2] + " is not a valid number\n";
                            }
                            HighlightFieldWithError(j, l[0]);
                        }
                    } else {
                        if (n == "date") {
                        }
                    }
                }
            }
        }
    }
    if (d) {
        alert(d);
        return false;
    } else {
        if (b) {
            return confirm(b);
        } else {
            return true;
        }
    }
}
function IsNumber(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
}
function IsEmail(c) {
    var a = c.indexOf("@");
    var b = c.lastIndexOf(".");
    if (a < 1 || b < a + 2 || b + 2 >= c.length) {
        return false;
    } else {
        return true;
    }
}
function HighlightFieldWithError(a, d) {
    var b = document.forms[a].elements[d];
    if (b) {
        if (b.type == undefined) {
            b = document.getElementById(d + "1");
        }
        if (b.parentNode && b.parentNode.parentNode && b.parentNode.parentNode.parentNode) {
            var c = b.parentNode.parentNode.parentNode;
            c.className += " validationError";
        } else {
        }
    } else {
    }
}
function FindFieldSectionName(d, c) {
    var e = "";
    var b = document.forms[d].elements[c];
    if (b) {
        if (b.type == undefined) {
            b = document.getElementById(c + "1");
        }
        var f = FindParentByClassName(b, "sectionContainer");
        if (f) {
            var a = f.getElementsByTagName("legend");
            if (a && a[0]) {
                e = Trim(a[0].innerHTML);
            }
        }
    }
    return e;
}
function FindParentByClassName(b, a) {
    if (b) {
        var c = b.parentNode;
        if (c) {
            if (c.className && c.className.indexOf(a) > -1) {
                return c;
            } else {
                return FindParentByClassName(c, a);
            }
        }
    }
    return null;
}
function FieldPopulated(c, b) {
    var a = document.forms[c].elements[b + ""];
    if (a) {
        if (a.length !== undefined) {
            for (var d = 0; d < a.length; d++) {
                if ((a[d].checked && a[d].value) || (a[d].selected && a[d].value)) {
                    return true;
                }
            }
        } else {
            if (a.value !== undefined) {
                if (a.value.length > 0) {
                    if (a.type == "checkbox" && !a.checked) {
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                if (a.files !== undefined) {
                    if (a.files.length > 0) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function GetCheckedRadioValue(c) {
    if (!c) {
        return"";
    }
    var b = c.length;
    if (b == undefined) {
        if (c.checked) {
            return c.value;
        } else {
            return"";
        }
    }
    for (var a = 0; a < b; a++) {
        if (c[a].checked) {
            return c[a].value;
        }
    }
    return"";
}
function GetSelectedCheckboxValues(a) {
    var d = "";
    var b = "";
    var e = GetSelectedCheckbox(a);
    if (e.length != 0) {
        for (var c = 0; c < e.length; c++) {
            if (a[e[c]]) {
                d = d + b + a[e[c]].value;
                b = ", ";
            } else {
                d = a.value;
            }
        }
    }
    return d;
}
function GetSelectedCheckboxNames(b, a) {
    var e = "";
    var c = "";
    var f = GetSelectedCheckbox(b);
    if (f.length != 0) {
        for (var d = 0; d < f.length; d++) {
            if (b[f[d]]) {
                e = e + c + a[b[f[d]].value];
                c = ", ";
            } else {
                e = a[b.value];
            }
        }
    }
    return e;
}
function GetSelectedCheckbox(a) {
    var d = new Array();
    var c = 0;
    if (a) {
        if (a[0]) {
            for (var b = 0; b < a.length; b++) {
                if (a[b].checked) {
                    d.length = c;
                    d[c] = b;
                    c++;
                }
            }
        } else {
            if (a.checked) {
                d.length = c;
                d[c] = 0;
            }
        }
    }
    return d;
}
function OtherOptionSwitch(e, c) {
    var a = document.getElementById(e);
    if (a) {
        var d = a.className;
        var f = e + "Enable";
        var b = document.getElementById(f);
        if (b) {
            if (b.tagName.toUpperCase() == "OPTION") {
                if (c.selectedIndex === undefined || c[c.selectedIndex].id == b.id) {
                    OtherOptionShowText(e);
                } else {
                    OtherOptionDeselect(e, a);
                }
            } else {
                if (b.checked) {
                    OtherOptionShowText(e);
                } else {
                    OtherOptionDeselect(e, a);
                }
            }
        }
    }
}
function OtherOptionOn(b) {
    if (b) {
        var e = b.id;
        var d = e.substring(0, e.indexOf("Other"));
        var c = d + "OtherEnable";
        var a = document.getElementById(c);
        if (a) {
            if (a.tagName.toUpperCase() == "OPTION") {
                a.selected = true;
            } else {
                a.checked = true;
            }
        }
    }
}
function OtherOptionDeselect(e, c) {
    var a = document.getElementById(e);
    if (a) {
        var d = a.className;
        var f = e + "Enable";
        var b = document.getElementById(f);
        if (d.indexOf("otherOptionSelectTextHidden") != -1) {
            if (b.tagName.toUpperCase() == "OPTION") {
            }
            OtherOptionHideText(e);
        } else {
            if (d.indexOf("otherOptionSelectTextVisible") != -1) {
                if (b.tagName.toUpperCase() == "OPTION") {
                }
                OtherOptionBlankText(a);
            }
        }
    }
}
function OtherOptionLoad(b) {
    var a = b.substring(0, b.indexOf("Other"));
    OtherOptionSwitch(b, document.getElementById(a));
}
function OtherOptionHideText(d) {
    var b = document.getElementById(d);
    if (b) {
        var c = b.className;
        var a = getElementsByClassName("otherOptionText", "div", b);
        for (i = 0; i < a.length; i++) {
            a[i].className = "otherOptionText otherOptionHideText";
            OtherOptionBlankText(a[i]);
        }
    }
}
function OtherOptionShowText(e) {
    var c = document.getElementById(e);
    if (c) {
        var d = c.className;
        var a = getElementsByClassName("otherOptionText otherOptionHideText", "div", c);
        for (var b = 0; b < a.length; b++) {
            a[b].className = "otherOptionText";
        }
    }
}
function OtherOptionBlankText(c) {
    var a = c.getElementsByTagName("INPUT");
    if (a) {
        for (var b = 0; b < a.length; b++) {
            if (a[b].type == "text") {
                a[b].value = "";
            }
        }
    }
}
function SetDefaultFieldValue(c, b, e, a) {
    if (document.forms[c] && document.forms[c].elements[b]) {
        var d = document.forms[c].elements[b].value;
        if (a) {
            if (d == e) {
                document.forms[c].elements[b].value = "";
            }
        } else {
            if (d == "") {
                document.forms[c].elements[b].value = e;
            }
        }
    }
}
function GetFileSizeInKBytes(a) {
    var b = 0;
    if (a) {
        if (a.files && a.files[0]) {
            b = a.files[0].size / 1024;
        } else {
        }
    }
    return b;
}
function GetFileExtension(b) {
    var c = "";
    if (b) {
        if (b.value) {
            var a = b.value.split(".");
            c = a[a.length - 1].toLowerCase();
        }
    }
    return c;
}
function GetObj(a) {
    if (document.getElementById) {
        this.obj = document.getElementById(a);
        this.style = document.getElementById(a).style;
    } else {
        if (document.all) {
            this.obj = document.all[a];
            this.style = document.all[a].style;
        } else {
            if (document.layers) {
                this.obj = document.layers[a];
                this.style = document.layers[a];
            }
        }
    }
}
function GetObjectHeight(objectRef) {
    var intHeight = -1;
    if (document.getElementById) {
        if (document.getElementById(objectRef)) {
            intHeight = eval(document.getElementById(objectRef).offsetHeight);
        }
    } else {
        if (document.all) {
            if (document.all[objectRef]) {
                intHeight = document.all[objectRef].scrollHeight;
            }
        } else {
            if (document.layers) {
                if (document[objectRef]) {
                    intHeight = document[objectRef].clip.bottom;
                }
            }
        }
    }
    return intHeight;
}
function GetObjectWidth(objectRef) {
    var intWidth = -1;
    if (document.getElementById) {
        if (document.getElementById(objectRef)) {
            intWidth = eval(document.getElementById(objectRef).offsetWidth);
        }
    } else {
        if (document.all) {
            if (document.all[objectRef]) {
                intWidth = document.all[objectRef].scrollWidth;
            }
        } else {
            if (document.layers) {
                if (document[objectRef]) {
                    intWidth = document[objectRef].clip.right;
                }
            }
        }
    }
    return intWidth;
}
function SetUniformHeight(a) {
    intMaxHeight = 0;
    if (a) {
        arrPageObjects = a.split(",");
    }
    if (arrPageObjects) {
        for (i = 0; i < arrPageObjects.length; i++) {
            intThisHeight = GetObjectHeight(arrPageObjects[i]);
            if (intThisHeight > intMaxHeight) {
                intMaxHeight = intThisHeight;
            }
        }
        if (intMaxHeight > 0) {
            for (i = 0; i < arrPageObjects.length; i++) {
                strMaxHeight = intMaxHeight + "px";
                if (document.getElementById(arrPageObjects[i])) {
                    document.getElementById(arrPageObjects[i]).style.height = strMaxHeight;
                }
            }
        }
    }
}
function FixActivexClick() {
    objectTags = document.getElementsByTagName("object");
    for (var a = 0; a < objectTags.length; a++) {
        objectTags[a].outerHTML = objectTags[a].outerHTML;
    }
}
function GetCSSProperty(a, c, d) {
    if (a.currentStyle) {
        return a.currentStyle[c];
    } else {
        if (window.getComputedStyle) {
            var b = window.getComputedStyle(a, "");
            return b.getPropertyValue(d);
        }
    }
}
function FloatDiv(c, g, h) {
    var e = (navigator.appName.indexOf("Netscape") != -1);
    var a = document;
    var b = a.getElementById ? a.getElementById(c) : a.all ? a.all[c] : a.layers[c];
    var f = document.layers ? "" : "px";
    window[c + "_obj"] = b;
    if (a.layers) {
        b.style = b;
    }
    b.cx = b.sx = g;
    b.cy = b.sy = h;
    b.sP = function (d, j) {
        this.style.left = d + f;
        this.style.top = j + f;
    };
    b.floatIt = function () {
        var d, j;
        d = (this.sx >= 0) ? 0 : e ? innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
        j = e ? pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        if (this.sy < 0) {
            j += e ? innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
        }
        this.cx += (d + this.sx - this.cx) / 8;
        this.cy += (j + this.sy - this.cy) / 8;
        this.sP(this.cx, this.cy);
        setTimeout(this.id + "_obj.floatIt()", 40);
    };
    return b;
}
function getWindowDimension(b) {
    var a = 0;
    switch (b.toLowerCase()) {
        case"width":
            if (typeof(window.innerWidth) == "number") {
                a = window.innerWidth;
            } else {
                if (document.documentElement && (document.documentElement.clientWidth)) {
                    a = document.documentElement.clientWidth;
                } else {
                    if (document.body && (document.body.clientWidth)) {
                        a = document.body.clientWidth;
                    }
                }
            }
            break;
        case"height":
            if (typeof(window.innerHeight) == "number") {
                a = window.innerHeight;
            } else {
                if (document.documentElement && (document.documentElement.clientHeight)) {
                    a = document.documentElement.clientHeight;
                } else {
                    if (document.body && (document.body.clientHeight)) {
                        a = document.body.clientHeight;
                    }
                }
            }
            break;
    }
    return a;
}
var getElementsByClassName = function (a, c, b) {
    if (document.getElementsByClassName) {
        getElementsByClassName = function (d, m, g) {
            g = g || document;
            var f = g.getElementsByClassName(d), k = (m) ? new RegExp("\\b" + m + "\\b", "i") : null, l = [], e;
            for (var h = 0, j = f.length; h < j; h += 1) {
                e = f[h];
                if (!k || k.test(e.nodeName)) {
                    l.push(e);
                }
            }
            return l;
        };
    } else {
        if (document.evaluate) {
            getElementsByClassName = function (g, r, l) {
                r = r || "*";
                l = l || document;
                var d = g.split(" "), f = "", s = "http://www.w3.org/1999/xhtml", o = (document.documentElement.namespaceURI === s) ? s : null, q = [], k, p;
                for (var m = 0, n = d.length; m < n; m += 1) {
                    f += "[contains(concat(' ', @class, ' '), ' " + d[m] + " ')]";
                }
                try {
                    k = document.evaluate(".//" + r + f, l, o, 0, null);
                } catch (h) {
                    k = document.evaluate(".//" + r + f, l, null, 0, null);
                }
                while ((p = k.iterateNext())) {
                    q.push(p);
                }
                return q;
            };
        } else {
            getElementsByClassName = function (f, v, j) {
                v = v || "*";
                j = j || document;
                var d = f.split(" "), e = [], h = (v === "*" && j.all) ? j.all : j.getElementsByTagName(v), g, u = [], s;
                for (var n = 0, o = d.length; n < o; n += 1) {
                    e.push(new RegExp("(^|\\s)" + d[n] + "(\\s|$)"));
                }
                for (var p = 0, q = h.length; p < q; p += 1) {
                    g = h[p];
                    s = false;
                    for (var r = 0, t = e.length; r < t; r += 1) {
                        s = e[r].test(g.className);
                        if (!s) {
                            break;
                        }
                    }
                    if (s) {
                        u.push(g);
                    }
                }
                return u;
            };
        }
    }
    return getElementsByClassName(a, c, b);
};
function WhiteSite_SetCurrentClasses() {
    var c = window.location.href.split(window.location.hostname);
    var a = c[c.length - 1];
    var b = a.split("/");
    if (b.length > 5) {
        WhiteSite_SetLiClasses("/" + b[1] + "/" + b[2], "currentBranch", "currentBranch");
    } else {
        WhiteSite_SetLiClasses(a, "currentBranch currentPage", "currentBranch");
    }
}
function WhiteSite_SetLiClasses(h, b, a) {
    var d = document.getElementsByTagName("a");
    for (var c = 0; c < d.length; c++) {
        var f = d[c].href.split(window.location.hostname);
        var e = f[f.length - 1];
        if (e == h) {
            var g = d[c].parentNode;
            if (g && g.nodeName) {
                if (g.nodeName.toLowerCase() == "li") {
                    if (g.className.indexOf(b) == -1) {
                        g.className += " " + b;
                        g.className = g.className.replace(" otherBranch", "");
                        WhiteSite_SetParentLiClass(g, a);
                    }
                }
            }
        }
    }
}
function WhiteSite_SetParentLiClass(b, a) {
    var c = b.parentNode;
    if (c && c.nodeName) {
        if (c.nodeName.toLowerCase() == "li") {
            if (c.className.indexOf(a) == -1) {
                c.className += " " + a;
            }
            WhiteSite_SetParentLiClass(c, a);
        } else {
            if (c.nodeName.toLowerCase() == "ul") {
                WhiteSite_SetParentLiClass(c, a);
            }
        }
    }
}
function addEvent(c, a, b) {
    if (c.addEventListener) {
        c.addEventListener(a, b, false);
        return true;
    } else {
        if (c.attachEvent) {
            var d = c.attachEvent("on" + a, b);
            return d;
        } else {
            return false;
        }
    }
}
function removeEvent(c, a, b, e) {
    if (c.removeEventListener) {
        c.removeEventListener(a, b, e);
        return true;
    } else {
        if (c.detachEvent) {
            var d = c.detachEvent("on" + a, b);
            return d;
        } else {
            alert("Handler could not be removed");
        }
    }
}
function cancelBubble(a) {
    var b = a ? a : window.event;
    if (b.stopPropagation) {
        b.stopPropagation();
    }
    if (b.cancelBubble != null) {
        b.cancelBubble = true;
    }
}
function LoadVBPrinter() {
    var ua = navigator.userAgent.toLowerCase();
    var av = navigator.appVersion.toLowerCase();
    var gblnCanPrint = (window.print) ? 1 : 0;
    var gblnIE = (document.all) ? true : false;
    gblnIE = gblnIE && (ua.indexOf("opera") == -1);
    gblnIE = gblnIE && (ua.indexOf("webtv") == -1);
    var gblnMac = (av.indexOf("Mac") != -1);
    if (gblnIE && !gblnCanPrint && !gblnMac) {
        with (document) {
            writeln('<OBJECT ID="WB" WIDTH="0" HEIGHT="0" CLASSID="clsid:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');
            writeln('<SCRIPT LANGUAGE="VBScript">');
            writeln("Sub window_onunload");
            writeln("    On Error Resume Next");
            writeln("    Set WB = nothing");
            writeln("End Sub");
            writeln("Sub vbPrintPage");
            writeln("    OLECMDID_PRINT = 6");
            writeln("    OLECMDEXECOPT_DONTPROMPTUSER = 2");
            writeln("    OLECMDEXECOPT_PROMPTUSER = 1");
            writeln("    On Error Resume Next");
            writeln("    WB.ExecWB OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER");
            writeln("End Sub");
            writeln("</SCRIPT>");
        }
    }
}
function PrintPage() {
    var e = navigator.userAgent.toLowerCase();
    var a = navigator.appVersion.toLowerCase();
    var b = (window.print) ? 1 : 0;
    var c = (document.all) ? true : false;
    c = c && (e.indexOf("opera") == -1);
    c = c && (e.indexOf("webtv") == -1);
    var d = (a.indexOf("Mac") != -1);
    if (b) {
        window.print();
    } else {
        if (c && !d) {
            vbPrintPage();
        } else {
            alert('Your web browser does not appear to support the automatic\nPrint function. To print this page, please select the "Print"\noption from the "File" menu of your web browser.');
        }
    }
}
function TextSize(a) {
    strTextSize = GetCSSProperty(document.body, "fontSize", "font-size");
    if (strTextSize.indexOf("em") > 0) {
        strTextSizeUnit = "em";
        intTextSize = strTextSize.substring(0, strTextSize.length - 2);
    } else {
        if (strTextSize.indexOf("px") > 0) {
            strTextSizeUnit = "px";
            intTextSize = strTextSize.substring(0, strTextSize.length - 2);
        } else {
            if (strTextSize.indexOf("%") > 0) {
                strTextSizeUnit = "%";
                intTextSize = strTextSize.substring(0, strTextSize.length - 1);
            } else {
                strTextSizeUnit = "%";
                intTextSize = "100";
            }
        }
    }
    if (a == "-") {
        intTextSize = intTextSize / 1.2;
    } else {
        if (a == "+") {
            intTextSize = intTextSize * 1.2;
        }
    }
    document.body.style.fontSize = intTextSize + strTextSizeUnit;
}
function WebForm_FireDefaultButton(a, b) {
}
function Body_OnLoad() {
    if (window.on_load && (typeof window.on_load == "function")) {
        window.on_load();
    }
}
function GetXMLHttpRequest() {
    var b;
    try {
        b = new XMLHttpRequest();
        return b;
    } catch (a) {
    }
    try {
        b = new ActiveXObject("Msxml2.XMLHTTP");
        return b;
    } catch (a) {
    }
    try {
        b = new ActiveXObject("Microsoft.XMLHTTP");
        return b;
    } catch (a) {
    }
    alert("XMLHttpRequest request is not supported by your browser");
    return b;
}
function DisplayURL(g, f, e, b, a) {
    var d = GetXMLHttpRequest();
    var h = g;
    if (h.substring(0, 1) == "/") {
        h = location.protocol + "//" + location.host + h;
    }
    var c = "POST";
    if (e && e.toLowerCase() == "get") {
        c = "GET";
        if (h.indexOf("?") < 0) {
            h += "?" + f;
        } else {
            h += "&" + f;
        }
    }
    if (b && b) {
        d.open(c, h, false, b, b);
    } else {
        d.open(c, h, false);
    }
    if (c == "POST") {
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    d.send(f);
    return d.responseText;
}
function GetUserCookie(a) {
    return DisplayURL("/App_Assets/Javascript/AcoraCMS/Ajax/command.aspx", "sid=" + getCookie("cm3sessioncm3sidfrontend") + "&c=GetUserCookie&name=" + escape(a), "POST");
}
function SetUserCookie(a, b) {
    DisplayURL("/App_Assets/Javascript/AcoraCMS/Ajax/command.aspx", "sid=" + getCookie("cm3sessioncm3sidfrontend") + "&c=SetUserCookie&name=" + escape(a) + "&value=" + escape(b), "POST");
}
blnShareThisPopup = false;
var gstrSurveysPortal = "";
var gstrSubModalScriptDir = "/App_Assets/Javascript/subModal/";
var blnLogClientEvents = false;
var strLogToUrl = "/App_Assets/Javascript/AcoraCMS/Ajax/event.aspx";
var strMeasurementUrl = window.location.href;
var strMeasurementSessionId = getCookie("cm3sessioncm3sidfrontend");
var strMeasurementInitialValues = "";
function WindowOnLoadCustom() {
    WindowOnLoadCore();
    if ($.fn.colorbox) {
        if ($(window).width() > 640) {
            $("a.colorboxInlineLink").colorbox({inline: true, width: "600px"});
            $("a.colorboxLink").colorbox({initialWidth: "200px", initialHeight: "200px", maxWidth: "100%", maxHeight: "100%", rel: "galleryGroup"});
            $("a.colorboxLink.individual").colorbox({initialWidth: "200px", initialHeight: "200px", maxWidth: "100%", maxHeight: "100%"});
        }
    }
}
function DisplayToc(l) {
    var n = document.getElementById(l);
    var a = document.getElementById("toc_" + l);
    var k = 0;
    var g = "";
    var m = "";
    var d = "";
    var e = tocndx = 0;
    if (n && a) {
        var h = n.getElementsByTagName("h2");
        if (h) {
            k = h.length;
            for (var b = 0; b < k; b++) {
                if (h[b].tagName.toUpperCase() == "H2") {
                    e = parseInt(h[b].tagName.substr(1));
                    g = h[b].innerHTML;
                    d = g.replace(/(<([^>]+)>)/ig, "");
                    d = purify(d);
                    for (var c = 3; c <= e; c++) {
                        m += "<ul>";
                    }
                    m += '\n<li><a href="#toc_' + d + '">' + g.replace(/(<([^>]+)>)/ig, "") + "</a></li>\n";
                    for (var c = 3; c <= e; c++) {
                        m += "</ul>";
                    }
                    h[b].innerHTML = '<a id="toc_' + d + '" name="toc_' + d + '"></a>' + g;
                    tocndx++;
                }
            }
        }
        if (tocndx > 1) {
            a.innerHTML = "<h2>Table of Contents</h2>\n<ul>" + m + "</ul>";
        }
        if (document.location.hash.length >= 6) {
            var f = document.location.hash.substr(1, document.location.hash.length);
            if (document.getElementById(f) != null) {
                window.location.hash = "#" + f;
            }
        }
    }
}
function purify(b) {
    if (!b) {
        return false;
    }
    var a = b.toLowerCase();
    a = a.replace(/\s+/g, "");
    a = a.replace(/[^a-z0-9\s]/g, "");
    if (a.length == 0 || a.match(/^\s+$/) != null) {
        return false;
    }
    return a;
}
var Rotator = {config: {navItems: ".rotatorNav .rotatorLink", rotatorElement: ".rotatorElements .rotatorElement", featureAnimProperty: "right", featureAnimStartValue: 0, featureAnimEndValue: "100%", featureElementStartCSSValue: "-100%", featureAnimLength: 500, featureVisibleDuration: 5000, lazyLoadImages: true, useFowardsBackwardsOnMenu: false, useNavigationMenu: true, useNextPrevButtons: false, menuAnimProperty: "marginTop", menuAnimEndValue: 204, currentCounter: 0, navAnimLength: 500, autoAdvanceTimer: "", animateFirstItem: false, hasRunOnce: false, visibleMenuCounter: 3}, init: function (b) {
    $.extend(Rotator.config, b);
    var c = Rotator.config.currentCounter;
    if ($(Rotator.config.navItems).length > 0 || $(Rotator.config.rotatorElement).length > 0) {
        $(Rotator.config.rotatorElement).hide();
    } else {
        return false;
    }
    $(Rotator.config.navItems).click(function (m, o) {
        var p = $(this).index();
        var n = $(Rotator.config.rotatorElement)[p];
        $(Rotator.config.navItems).removeClass("selected");
        $(this).addClass("selected");
        if (o) {
            if (Rotator.config.animateFirstItem || Rotator.config.hasRunOnce) {
                Rotator.animateMainElements(p, [true]);
            } else {
                if (Rotator.config.hasRunOnce == false) {
                    $(n).show();
                    Rotator.config.hasRunOnce = true;
                }
            }
        } else {
            Rotator.animateMainElements(p);
            clearTimeout(Rotator.config.autoAdvanceTimer);
            m.preventDefault();
        }
        m.preventDefault();
    });
    if (Rotator.config.useNextPrevButtons) {
        var g = $("<div></div>").addClass("rotatorPrevious").insertBefore(Rotator.config.rotatorElement + ":first");
        var f = $("<a>Previous</a>").attr("href", "#").appendTo(g);
        var e = $("<div></div>").addClass("rotatorNext").insertBefore(g);
        var d = $("<a>Next</a>").attr("href", "#").appendTo(e);
        d.click(function (m) {
            Rotator.advanceNextPrevious("next", false);
            m.preventDefault();
        });
        f.click(function (m) {
            Rotator.advanceNextPrevious("previous", false);
            m.preventDefault();
        });
    }
    if (Rotator.config.useFowardsBackwardsOnMenu) {
        var l = $("<div></div>").addClass("rotatorPrevious").insertBefore("#RotatorNavInner");
        var k = $("<a>Previous</a>").attr("href", "#").appendTo(l);
        var j = $("<div></div>").addClass("rotatorNext").insertAfter("#RotatorNavInner");
        var i = $("<a>Next</a>").attr("href", "#").appendTo(j);
        var h = Rotator.config.visibleMenuCounter;
        $(k).click(function (m, o) {
            if (!o) {
                clearTimeout(Rotator.config.autoAdvanceTimer);
            }
            if ($("#RotatorNavInner:animated").length) {
                return false;
            } else {
                if (parseInt($("#RotatorNavInner").css(Rotator.config.menuAnimProperty), 10) < 0) {
                    var n = {};
                    n[Rotator.config.menuAnimProperty] = "+=" + Rotator.config.menuAnimEndValue;
                    $("#RotatorNavInner").animate(n, Rotator.config.navAnimLength, "linear", function () {
                        h += 3;
                    });
                } else {
                    $("#RotatorNavInner").css(Rotator.config.menuAnimProperty, "0px");
                    h = Rotator.config.visibleMenuCounter;
                }
                m.preventDefault();
            }
        });
        $(i).click(function (m, o) {
            if (!o) {
                clearTimeout(Rotator.config.autoAdvanceTimer);
            }
            if ($("#RotatorNavInner:animated").length) {
                return false;
            } else {
                if (h <= $(".rotatorLink").length) {
                    var n = {};
                    n[Rotator.config.menuAnimProperty] = "-=" + Rotator.config.menuAnimEndValue;
                    $("#RotatorNavInner").animate(n, 500, "linear", function () {
                        h += 3;
                    });
                } else {
                    $("#RotatorNavInner").css(Rotator.config.menuAnimProperty, "0px");
                    h = 3;
                }
                m.preventDefault();
            }
        });
    }
    (function a() {
        Rotator.config.autoAdvanceTimer = setTimeout(a, Rotator.config.featureVisibleDuration);
        if (Rotator.config.useNavigationMenu) {
            if (c <= $(Rotator.config.rotatorElement).length - 1) {
                $(Rotator.config.navItems).eq(c).trigger("click", [true]);
                c++;
            } else {
                c = 0;
                $(Rotator.config.navItems).eq(c).trigger("click", [true]);
                if (Rotator.config.useFowardsBackwardsOnMenu) {
                    if (c == 0 && $("#RotatorNavInner").attr(Rotator.config.menuAnimProperty) != "0px") {
                        var m = {};
                        m[Rotator.config.menuAnimProperty] = 0;
                        $("#RotatorNavInner").animate(m, 500, "linear", function () {
                            h = 3;
                        });
                    }
                }
                c++;
            }
        } else {
            if (c <= $(Rotator.config.rotatorElement).length - 1) {
                Rotator.animateMainElements(c, [true]);
                c++;
            } else {
                c = 0;
                Rotator.animateMainElements(c, [true]);
                c++;
            }
        }
        if (c > h) {
            $(".rotatorNext a").trigger("click", [true]);
        }
    })();
}, animateMainElements: function (a, e) {
    var b = $(Rotator.config.rotatorElement)[a];
    $(Rotator.config.rotatorElement).removeClass("selected");
    $(b).addClass("selected");
    var d = {};
    d[Rotator.config.featureAnimProperty] = Rotator.config.featureAnimEndValue;
    $(Rotator.config.rotatorElement + ":visible").not(".selected").animate(d, Rotator.config.featureAnimLength, "linear", function () {
        $(Rotator.config.rotatorElement + ":visible").not(".selected").hide();
    });
    var c = {};
    c[Rotator.config.featureAnimProperty] = Rotator.config.featureAnimStartValue;
    $(b).css(Rotator.config.featureAnimProperty, Rotator.config.featureElementStartCSSValue).show();
    $(b).animate(c, Rotator.config.featureAnimLength, "linear", function () {
        if (Rotator.config.lazyLoadImages == true) {
            Rotator.writeFeatureTags(a);
        }
    });
    if (!e) {
        clearTimeout(Rotator.config.autoAdvanceTimer);
    }
}, advanceNextPrevious: function (b, c) {
    var a = Rotator.config.currentCounter;
    if (b == "next") {
        a++;
    } else {
        a--;
    }
    if (a > $(Rotator.config.rotatorElement).length - 1) {
        a = 0;
    } else {
        if (a < 0) {
            a = $(Rotator.config.rotatorElement).length - 1;
        }
    }
    Rotator.animateMainElements(a, c);
    Rotator.config.currentCounter = a;
}, writeFeatureTags: function (c) {
    if (c >= 1 && $(".projectSummary .placeholder").length > -1) {
        var h = $(".projectSummary")[c];
        if (h != undefined && $(h).children(".placeholder").length > -1) {
            var f = $(h).children(".placeholder");
            var a = $(f).children("a");
            var d = $(a).attr("href");
            var j = $(a).attr("title");
            if (d != undefined) {
                var j = $(a).attr("title");
                if ($(d).length > -1) {
                    $(h).children(".placeholder").replaceWith('<img src="' + d + '" alt="' + j + '" />');
                }
            }
        }
        var i = $(".projectSummary")[c + 1];
        if (i != undefined && $(i).children(".placeholder").length > -1) {
            var g = $(i).children(".placeholder");
            var b = $(g).children("a");
            var e = $(b).attr("href");
            var k = $(b).attr("title");
            if (e != undefined && $(e).length > -1) {
                $(i).children(".placeholder").replaceWith('<img src="' + e + '" alt="' + k + '" />');
            }
        }
    }
}, stopRotator: function () {
    if (Rotator.config.autoAdvanceTimer != "") {
        clearTimeout(Rotator.config.autoAdvanceTimer);
    }
}};
var MESSAGES = {"format.date": "MM/dd/yyyy", "format.time": "h:mm a", "photoviewer.toolbar.first": "Go to Start (Home)", "photoviewer.toolbar.prev": "Previous Photo (Left arrow)", "photoviewer.toolbar.slideShow": "Start/Pause Slide Show (Space)", "photoviewer.toolbar.next": "Next Photo (Right arrow)", "photoviewer.toolbar.last": "Go to End (End)", "photoviewer.toolbar.email": "Email Photo", "photoviewer.toolbar.permalink": "Link to Photo", "photoviewer.toolbar.close": "Close (Esc)", "photoviewer.email.subject.photo": "Photo", "gallery.nophotos": "No photos", "gallery.thumbs.start": "Start", "gallery.thumbs.end": "End", "gallery.toolbar.first": "First Photo", "gallery.toolbar.prev": "Previous Photo", "gallery.toolbar.view": "View Photo", "gallery.toolbar.next": "Next Photo", "gallery.toolbar.last": "Last Photo", "gallery.view.full": "Maximize Window", "gallery.view.photo": "Show Photo Only", "gallery.view.text": "Show Description Only", "gallery.view.close": "Close Window"};
var agent = navigator.userAgent.toLowerCase();
var IE = (agent.indexOf("msie") != -1 && agent.indexOf("opera") == -1);
var IE7 = (agent.indexOf("msie 7") != -1);
var IE8 = (agent.indexOf("msie 8") != -1);
var OPERA = (agent.indexOf("opera") != -1);
var SAFARI = (agent.indexOf("safari") != -1);
var FIREFOX = (agent.indexOf("gecko") != -1);
var STRICT_MODE = (document.compatMode == "CSS1Compat");
var _DOMAIN = undefined;
var GALLERY_W = 650;
var GALLERY_H = 530;
if (USE_GOOGLE_MAPS == undefined) {
    var USE_GOOGLE_MAPS = true;
}
var USE_OLD_MAPS = !USE_GOOGLE_MAPS;
var TESTING = false;
var log = getLogger();
if (document.location.href.indexOf("#jslog") != -1) {
    log.enable();
}
function Logger() {
    this.enable = loggerEnable;
    this.clear = loggerClear;
    this.log = loggerLog;
    this.debug = loggerDebug;
    this.info = loggerInfo;
    this.error = loggerError;
    var a = undefined;
    try {
        a = document.createElement("textarea");
        a.style.display = "none";
        a.style.position = "absolute";
        a.style.right = "2px";
        a.style.bottom = "2px";
        a.style.width = "23em";
        a.style.height = "40em";
        a.style.fontFamily = "monospace";
        a.style.fontSize = "9px";
        a.style.color = "#000000";
        setOpacity(a, 0.7);
        a.border = "1px solid #808080";
        a.ondblclick = clearLogger;
    } catch (b) {
    }
    this.console = a;
    this.enabled = false;
    this.logTimeStart = getTimeMillis();
}
function getLogger() {
    var b = undefined;
    var c = window;
    while (b == undefined) {
        try {
            b = c.document.log;
        } catch (a) {
            break;
        }
        if (c == c.parent) {
            break;
        }
        c = c.parent;
    }
    if (b == undefined) {
        b = new Logger();
        document.log = b;
    }
    return b;
}
function clearLogger() {
    getLogger().clear();
}
function loggerEnable() {
    if (this.enabled || this.console == undefined) {
        return;
    }
    if (window.document.body != undefined) {
        window.document.body.appendChild(this.console);
        this.console.style.display = "";
        this.enabled = true;
    }
}
function loggerDebug(a) {
    this.log("DEBUG", a);
}
function loggerInfo(a) {
    this.log("INFO", a);
}
function loggerError(b, a) {
    this.log("ERROR", b, a);
}
function loggerLog(b, f, a) {
    if (!this.enabled || this.console == undefined) {
        return;
    }
    var d = (getTimeMillis() - this.logTimeStart) + "";
    while (d.length < 6) {
        d += " ";
    }
    var c = d + " ";
    if (f != undefined) {
        c += f + " ";
    }
    if (a != undefined) {
        c += a.name + ": " + a.message;
    }
    this.console.value += c + "\n";
}
function loggerClear() {
    if (!this.enabled || this.console == undefined) {
        return;
    }
    this.console.value = "";
}
function getTimeMillis() {
    var a = new Date();
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDay(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds());
}
function getEvent(a) {
    return(a != undefined ? a : window.event);
}
function preventDefault(a) {
    if (a.stopEvent) {
        a.stopEvent();
    }
    if (a.preventDefault) {
        a.preventDefault();
        a.stopPropagation();
    } else {
        a.returnValue = false;
        a.cancelBubble = true;
    }
}
function getEventTarget(a) {
    if (a == undefined) {
        return undefined;
    }
    if (a.srcElement != undefined) {
        return a.srcElement;
    } else {
        return a.target;
    }
}
function getMousePosition(a) {
    a = getEvent(a);
    var b = window.pageXOffset;
    if (b == undefined || b === 0) {
        b = window.document.documentElement.scrollLeft;
    }
    if (b == undefined || b === 0) {
        b = window.document.body.scrollLeft;
    }
    var c = window.pageYOffset;
    if (c == undefined || c === 0) {
        c = window.document.documentElement.scrollTop;
    }
    if (c == undefined || c === 0) {
        c = window.document.body.scrollTop;
    }
    var d = a.clientX + b;
    var e = a.clientY + c;
    return{x: d, y: e};
}
function getResponse(h, a, f, b, c) {
    var g = undefined;
    try {
        g = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (d) {
        try {
            g = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            g = new XMLHttpRequest();
        }
    }
    if (g == undefined) {
        log.error("Failed to initialize XML/HTTP");
        return undefined;
    }
    g.open("GET", h, a);
    if (!a) {
        g.send(undefined);
        if (g.readyState != 4) {
            log.error("Request failed: " + g.readyState);
            return undefined;
        }
        if (!f) {
            return g.responseText;
        } else {
            return g.responseXML;
        }
    } else {
        pollResponse(g, b, c);
        g.send(undefined);
        return undefined;
    }
}
function pollResponse(c, a, b) {
    if (c.readyState != 4) {
        window.setTimeout(function () {
            pollResponse(c, a, b);
        }, 100);
    } else {
        a(c, b);
    }
}
function getDOMLocation(a) {
    var b = a.offsetLeft;
    var c = a.offsetTop;
    while (a.offsetParent) {
        b = b + a.offsetParent.offsetLeft;
        c = c + a.offsetParent.offsetTop;
        if (a == document.getElementsByTagName("body")[0]) {
            break;
        } else {
            a = a.offsetParent;
        }
    }
    return{x: b, y: c};
}
function getElementsByTagName(a, b) {
    if (a == undefined) {
        return undefined;
    }
    if (IE) {
        return a.getElementsByTagName(b);
    }
    if (b.indexOf(":") != -1) {
        b = b.split(":")[1];
    }
    return a.getElementsByTagNameNS("*", b);
}
function getFirstElementsValue(a, c) {
    if (a == undefined) {
        return undefined;
    }
    var b = getElementsByTagName(a, c);
    if (b.length === 0) {
        return undefined;
    } else {
        return getElementValue(b[0]);
    }
}
function findDOMElement(c) {
    var b = undefined;
    var d = window;
    while (b == undefined) {
        try {
            b = d.document.getElementById(c);
        } catch (a) {
            break;
        }
        if (d === d.parent) {
            break;
        }
        d = d.parent;
    }
    return b;
}
function getElementValue(b) {
    var a;
    var c = "";
    for (a = 0; a < b.childNodes.length; a++) {
        if (b.childNodes[a].nodeValue !== null) {
            c += b.childNodes[a].nodeValue;
        }
    }
    return c;
}
function trim(a) {
    if (a == undefined) {
        return undefined;
    }
    return a.replace(/^\s*([\s\S]*\S+)\s*$|^\s*$/, "$1");
}
function trimToLen(b, a) {
    if (b == undefined) {
        return undefined;
    }
    if (b.length > a) {
        b = b.substring(0, a) + "...";
    }
    return b;
}
function getRootWindow() {
    var b = window;
    while (b != undefined) {
        try {
            if (b === b.parent) {
                break;
            } else {
                if (b.parent != undefined && b.parent.document.location.href.indexOf("/selenium-server/") != -1) {
                    break;
                }
            }
            b = b.parent;
        } catch (a) {
            b.permissionDenied = true;
            break;
        }
    }
    return b;
}
function getURLParams() {
    var b, f = [];
    var h = window.location.search;
    if (h == undefined || h.length === 0) {
        return undefined;
    }
    h = h.substring(1);
    var d = h.replace(/\+/g, " ").split("&");
    for (b = 0; b < d.length; b++) {
        var c, j;
        var g = d[b].indexOf("=");
        if (g != -1) {
            c = d[b].substring(0, g);
            try {
                j = decodeURIComponent(d[b].substring(g + 1));
            } catch (a) {
                j = unescape(d[b].substring(g + 1));
            }
        } else {
            c = d[b];
            j = undefined;
        }
        f[c] = j;
    }
    return f;
}
function joinLists(b, c) {
    var a;
    var e = 0;
    var d = [];
    if (b != undefined && b.length > 0) {
        for (a = 0; a < b.length; a++) {
            d[a] = b[a];
        }
        e = b.length;
    }
    if (c != undefined && c.length > 0) {
        for (a = 0; a < c.length; a++) {
            d[a + e] = c[a];
        }
    }
    return d;
}
function setCookie(c, d, a) {
    var b = (a == undefined) ? "" : ("; expires=" + a.toGMTString());
    document.cookie = c + "=" + d + b;
}
function getCookie(c) {
    if (document.cookie == undefined || document.cookie.length === 0) {
        return undefined;
    }
    var d = c + "=";
    var b = document.cookie.indexOf(d);
    if (b != -1) {
        b += d.length;
        var a = document.cookie.indexOf(";", b);
        if (a == -1) {
            a = document.cookie.length;
        }
        return unescape(document.cookie.substring(b, a));
    }
}
function removeCookie(b) {
    var c = new Date();
    var a = new Date();
    a.setTime(c.getTime() - 1);
    setCookie(b, "", a);
}
function getMessage(a) {
    if (MESSAGES[a] == undefined) {
        return"(" + a + ")";
    } else {
        return MESSAGES[a];
    }
}
function localizeNodeAttribs(b) {
    var a;
    if (b == undefined) {
        return;
    }
    if (b.alt != undefined && b.alt.indexOf("#") === 0) {
        b.alt = getMessage(b.alt.substring(1));
    }
    if (b.title != undefined && b.title.indexOf("#") === 0) {
        b.title = getMessage(b.title.substring(1));
    }
    if (b.childNodes != undefined) {
        for (a = 0; a < b.childNodes.length; a++) {
            localizeNodeAttribs(b.childNodes[a]);
        }
    }
}
function padNumber(a, b) {
    a = a + "";
    while (a.length < b) {
        a = "0" + a;
    }
    return a;
}
function isArray(a) {
    if (a instanceof Array) {
        return true;
    } else {
        return false;
    }
}
function simpleDateFormatter(c, e) {
    var b = e;
    b = b.replace(/yyyy/g, c.getFullYear());
    b = b.replace(/yy/g, padNumber(c.getFullYear() % 100, 2));
    b = b.replace(/MM/g, padNumber(c.getMonth() + 1, 2));
    b = b.replace(/M/g, c.getMonth() + 1);
    b = b.replace(/dd/g, padNumber(c.getDate(), 2));
    b = b.replace(/d/g, c.getDate());
    b = b.replace(/HH/g, padNumber(c.getHours(), 2));
    b = b.replace(/H/g, c.getHours());
    b = b.replace(/hh/g, padNumber(c.getHours() % 12, 2));
    b = b.replace(/h/g, c.getHours() % 12);
    b = b.replace(/mm/g, padNumber(c.getMinutes(), 2));
    b = b.replace(/m/g, c.getMinutes());
    b = b.replace(/ss/g, padNumber(c.getSeconds(), 2));
    b = b.replace(/s/g, c.getSeconds());
    var a = (c.getHours() < 12 ? "AM" : "PM");
    b = b.replace(/a/g, a);
    return b;
}
function formatDateTime(a) {
    if (a == undefined) {
        return undefined;
    }
    return formatDate(a) + " " + formatTime(a);
}
function formatDate(a) {
    var b = getMessage("format.date");
    return simpleDateFormatter(a, b);
}
function formatTime(a) {
    var b = getMessage("format.time");
    return simpleDateFormatter(a, b);
}
function parseISOTime(b) {
    if (b == undefined) {
        return undefined;
    }
    var a = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d{3})?([Z+-])?(\d\d)?:?(\d\d)?$/;
    if (!a.test(b)) {
        return undefined;
    } else {
        return new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6);
    }
}
function setOpacity(a, b) {
    if (IE) {
        a.style.filter = "alpha(opacity=" + parseInt(b * 100) + ")";
    }
    a.style.KhtmlOpacity = b;
    a.style.opacity = b;
}
function validCoordinates(a, b) {
    if (Math.abs(a) > 90 || Math.abs(b) > 180) {
        return false;
    }
    if (a === 0 && b === 0) {
        return false;
    }
    return true;
}
function isHosted() {
    var a = document.location.host;
    if (a == undefined) {
        a = "";
    }
    return((a.indexOf("triptracker.net") == -1 || a.indexOf("slideshow.triptracker.net") != -1) && a.indexOf("rtvslo.si") == -1 && a != "localhost" && !checkDomain());
}
function checkDomain() {
    try {
        if (_DOMAIN == undefined) {
            return false;
        }
        var f = document.location.protocol;
        if (f == undefined) {
            f = "http:";
        }
        var c = document.location.host;
        if (c == undefined) {
            c = "";
        }
        c = c.toLowerCase();
        if (f.toLowerCase().indexOf("file") === 0) {
            return true;
        }
        var d = c.lastIndexOf(":");
        if (d != -1) {
            c = c.substring(0, d);
        }
        if (c.indexOf("www.") === 0) {
            c = c.substring(4);
        }
        if (c === "" || c == "localhost" || c == "127.0.0.1") {
            return true;
        }
        var a = _DOMAIN.toLowerCase();
        d = a.indexOf("://");
        if (d != -1) {
            a = a.substring(d + 3);
        }
        d = a.indexOf("/");
        if (d != -1) {
            a = a.substring(0, d);
        }
        if (a.indexOf("www.") === 0) {
            a = a.substring(4);
        }
        if (c == a) {
            return true;
        } else {
            if (new RegExp(a).test(c)) {
                return true;
            }
        }
        return false;
    } catch (b) {
        return true;
    }
}
function getWindowSize(c) {
    var b = c.innerWidth;
    if (b == undefined || b === 0 || isNaN(b)) {
        b = c.document.documentElement.clientWidth;
    }
    if (b == undefined || b === 0 || isNaN(b)) {
        b = c.document.body.clientWidth;
    }
    var a = c.innerHeight;
    if (a == undefined || a === 0 || isNaN(a)) {
        a = c.document.documentElement.clientHeight;
    }
    if (a == undefined || a === 0 || isNaN(a)) {
        a = c.document.body.clientHeight;
    }
    return{w: b, h: a};
}
function getDocumentSize(d) {
    var e = getWindowSize(d);
    var b = getScrollPos(d);
    var c = e.w + b.left;
    var a = e.h + b.top;
    c = Math.max(c, d.document.body.offsetWidth);
    a = Math.max(a, d.document.body.offsetHeight);
    c = Math.max(c, d.document.body.scrollWidth);
    a = Math.max(a, d.document.body.scrollHeight);
    return{w: c, h: a};
}
function getScrollPos(c) {
    var b = c.pageYOffset;
    if (b == undefined || b === 0) {
        b = c.document.documentElement.scrollTop;
    }
    if (b == undefined || b === 0) {
        b = c.document.body.scrollTop;
    }
    var a = c.pageXOffset;
    if (a == undefined || a === 0) {
        a = c.document.documentElement.scrollLeft;
    }
    if (a == undefined || a === 0) {
        a = c.document.body.scrollLeft;
    }
    return{top: b, left: a};
}
var CLEAR_EVENTS = ["onclick", "ondblclick", "onkeydown", "onkeypress", "onmousedown", "onmouseup", "onmousemove", "onmouseover", "onmouseout", "onmousewheeldown", "oncontextmenu"];
function clearEvents() {
    var c, d;
    var a = 0;
    if (document.all == undefined) {
        return;
    }
    for (c = 0; c < document.all.length; c++) {
        for (d = 0; d < CLEAR_EVENTS.length; d++) {
            var b = document.all[c][CLEAR_EVENTS[d]];
            if (b != undefined) {
                document.all[c][CLEAR_EVENTS[d]] = null;
                a++;
            }
        }
    }
}
if (window.attachEvent) {
    window.attachEvent("onunload", clearEvents);
}
function getGallery() {
    var b = undefined;
    var d = window;
    while (b == undefined) {
        try {
            b = d.document.gallery;
        } catch (a) {
            break;
        }
        var c = d;
        d = d.parent;
        if (c === d) {
            break;
        }
    }
    return b;
}
function getMap() {
    if (this.map != undefined) {
        return this.map;
    }
    try {
        if (document.map != undefined) {
            return document.map;
        }
    } catch (a) {
    }
    try {
        if (window.parent.document.map != undefined) {
            return window.parent.document.map;
        }
    } catch (a) {
    }
    return undefined;
}
function viewerCloseCallback(f) {
    var b, c, d = 0;
    var a = getGallery();
    for (b = 0; b < a.sets.length; b++) {
        for (c = 0; c < a.sets[b].photos.length; c++) {
            var e = a.sets[b].photos[c];
            if (e == undefined || e.orig == undefined || e.orig.src == undefined) {
                continue;
            }
            if (d == f) {
                a.setIndex = b;
                a.photoIndex = c;
                a.renderPhotos();
                a.win.focus();
                return;
            }
            d++;
        }
    }
}
var VIEWER_INDEX = 0;
var SLIDE_DURATION = 4000;
var SLIDE_OFFSET = 50;
var SLIDE_PHOTOS = true;
var FADE_BORDER = false;
var FADE_STEPS = 10;
var MOVE_STEP = 1;
var PRELOAD_TIMEOUT = 60000;
var BORDER_WIDTH = 5;
var FONT_SIZE = 10;
var LINE_HEIGHT = "0.7em";
var OFFSET_LEFT = 0;
var OFFSET_TOP = 0;
var REST_URL = "/rest/";
var P_IMG_ROOT = "http://static.triptracker.net/jsmap/images/photoviewer";
var TOOLBAR_IMG = "toolbar.png";
var TOOLBAR_IMG_RUNNING = "toolbar2.png";
var TOOLBAR_IMG_BACK = "toolbar-back";
var TOOLBAR_IMG_MASK = "toolbar-mask.png";
var TOOLBAR_IMG_LOADING = "loading-anim.gif";
var TOOLBAR_W = 440;
var TOOLBAR_H = 75;
var TOOLBAR_IMG_W = 420;
var TOOLBAR_IMG_H = 44;
var TOOLBAR_LINK = "http://slideshow.triptracker.net";
var TOOLBAR_OPACITY = 0.7;
var TOOLBAR_FONT_COLOR = "#c0c0c0";
var TOOLBAR_FONT_STYLE = "tahoma, verdana, arial, helvetica, sans-serif";
var BYLINE_FONT_COLOR = TOOLBAR_FONT_COLOR;
var BYLINE_FONT_STYLE = TOOLBAR_FONT_STYLE;
var BYLINE_POSITION_RIGHT = 5;
var BYLINE_POSITION_BOTTOM = 5;
var VIEWER_ID_PREFIX = "PhotoViewer";
var VIEWER_ID_BACK = VIEWER_ID_PREFIX + "Back";
var VIEWER_ID_TOOLBAR = VIEWER_ID_PREFIX + "Toolbar";
var VIEWER_ID_TOOLBAR_MAP = VIEWER_ID_PREFIX + "ToolbarMap";
var VIEWER_ID_TOOLBAR_IMG = VIEWER_ID_PREFIX + "ToolbarImg";
var VIEWER_ID_LOADING = VIEWER_ID_PREFIX + "Loading";
var VIEWER_ID_TIME = VIEWER_ID_PREFIX + "Time";
var VIEWER_ID_TITLE = VIEWER_ID_PREFIX + "Title";
var VIEWER_ID_BYLINE = VIEWER_ID_PREFIX + "Byline";
var VIEWER_ID_PHOTO = VIEWER_ID_PREFIX + "Photo";
var VIEWER_ID_CTXMENU = VIEWER_ID_PREFIX + "CtxMenu";
var TITLE_MAX_LENGTH = 140;
var MAX_PRELOAD = 3;
var TOOLBAR_IMG_LOADING_LEFT = 273;
var TOOLBAR_IMG_LOADING_TOP = 24;
function PhotoViewer(b, a) {
    this.setImageRoot = setImageRoot;
    this.add = addPhoto;
    this.show = showPhoto;
    this.close = closePhoto;
    this.randomize = randomize;
    this.isShown = isPhotoShown;
    this.setBackground = setPhotoBackground;
    this.setShowToolbar = setShowToolbar;
    this.setToolbarImage = setToolbarImage;
    this.setShowCallback = setShowCallback;
    this.setCloseCallback = setCloseCallback;
    this.setEndCallback = setEndCallback;
    this.setLoading = setPhotoLoading;
    this.addBackShade = addBackShade;
    this.addToolbar = addToolbar;
    this.addCaptions = addCaptions;
    this.addByLine = addByLine;
    this.addBylineCaption = addBylineCaption;
    this.next = nextPhoto;
    this.prev = prevPhoto;
    this.first = firstPhoto;
    this.last = lastPhoto;
    this.slideShow = slideShow;
    this.slideShowStop = slideShowStop;
    this.startSlideShow = startSlideShow;
    this.handleKey = viewerHandleKey;
    this.checkStartFragmentIdentifier = checkStartFragmentIdentifier;
    this.checkStopFragmentIdentifier = checkStopFragmentIdentifier;
    this.setStartFragmentIdentifier = setStartFragmentIdentifier;
    this.setStopFragmentIdentifier = setStopFragmentIdentifier;
    this.email = emailPhoto;
    this.favorite = favoritePhoto;
    this.permalink = linkPhoto;
    this.setBackgroundColor = setBackgroundColor;
    this.setBorderWidth = setBorderWidth;
    this.setSlideDuration = setSlideDuration;
    this.disablePanning = disablePanning;
    this.enablePanning = enablePanning;
    this.disableFading = disableFading;
    this.enableFading = enableFading;
    this.disableShade = disableShade;
    this.enableShade = enableShade;
    this.enablePhotoFading = enablePhotoFading;
    this.disablePhotoFading = disablePhotoFading;
    this.setShadeColor = setShadeColor;
    this.setShadeOpacity = setShadeOpacity;
    this.setFontSize = setFontSize;
    this.setFont = setFont;
    this.enableAutoPlay = enableAutoPlay;
    this.disableAutoPlay = disableAutoPlay;
    this.enableEmailLink = enableEmailLink;
    this.disableEmailLink = disableEmailLink;
    this.enablePhotoLink = enablePhotoLink;
    this.disablePhotoLink = disablePhotoLink;
    this.setOnClickEvent = setOnClickEvent;
    this.setPhotoOnClickEvent = setPhotoOnClickEvent;
    this.setOnRightclickEvent = setOnRightclickEvent;
    this.enableLoop = enableLoop;
    this.disableLoop = disableLoop;
    this.enableToolbarAnimator = enableToolbarAnimator;
    this.disableToolbarAnimator = disableToolbarAnimator;
    this.enableToolbar = enableToolbar;
    this.disableToolbar = disableToolbar;
    this.setControlsImageMap = setControlsImageMap;
    this.setOverrideToolbarStyles = setOverrideToolbarStyles;
    this.setNoPadding = setNoPadding;
    this.getPhoto = getPhoto;
    this.getPhotoIndex = getPhotoIndex;
    this.fadePhoto = fadePhoto;
    this.hideOverlappingElements = hideOverlappingElements;
    this.showOverlappingElements = showOverlappingElements;
    this.addContextMenu = addContextMenu;
    this.setEmailAddress = setEmailAddress;
    this.id = VIEWER_ID_PREFIX + VIEWER_INDEX;
    VIEWER_INDEX++;
    this.photos = [];
    this.index = 0;
    this.win = (b != undefined ? b : window);
    this.shown = false;
    this.showToolbar = true;
    this.backgroundColor = "#000000";
    this.shadeColor = "#000000";
    this.shadeOpacity = 0.7;
    this.borderColor = "#000000";
    this.shadeColor = "#000000";
    this.shadeOpacity = 0.7;
    this.borderWidth = BORDER_WIDTH;
    this.backgroundShade = true;
    this.fadePhotos = true;
    this.manualFadePhotos = false;
    this.autoPlay = false;
    this.enableEmailLink = true;
    this.isEnablePhotoLink = true;
    this.slideDuration = SLIDE_DURATION;
    this.panPhotos = SLIDE_PHOTOS;
    this.fontSize = FONT_SIZE;
    this.font = undefined;
    if ((a == undefined || a) && !VIEWER_KEY_EVENT_ADDED) {
        if (this.win.addEventListener) {
            this.win.addEventListener("keydown", viewerHandleKey, false);
        } else {
            this.win.document.attachEvent("onkeydown", viewerHandleKey);
        }
        VIEWER_KEY_EVENT_ADDED = true;
    }
    this.win.document.viewer = this;
    if (OPERA) {
        this.disableFading();
    }
}
var VIEWER_KEY_EVENT_ADDED = false;
function PhotoImg(c, e, i, b, f, g, a, d) {
    this.id = c;
    this.src = e;
    this.w = parseInt(i, 10);
    this.h = parseInt(b, 10);
    this.time = f;
    this.title = g;
    this.byline = a;
    this.link = d;
}
function getViewer() {
    var b = undefined;
    var c = window;
    while (b == undefined) {
        try {
            b = c.document.viewer;
        } catch (a) {
            break;
        }
        if (c === c.parent) {
            break;
        }
        c = c.parent;
    }
    return b;
}
function setImageRoot(a) {
    P_IMG_ROOT = a;
}
function addPhoto(c, e, d, a, b) {
    var f = typeof c;
    if (typeof c == "string") {
        c = new PhotoImg(undefined, c, undefined, undefined, d, e, a, b);
    }
    this.photos.push(c);
}
function randomize() {
    var c = this.photos;
    for (var b, d, a = c.length; a; b = parseInt(Math.random((new Date()).getSeconds()) * a, 10), d = c[--a], c[a] = c[b], c[b] = d) {
    }
}
function setPhotoBackground(b, a, c) {
    if (b != undefined) {
        this.backgroundColor = b;
    }
    if (a != undefined) {
        this.borderColor = a;
    }
    if (c != undefined) {
        this.backgroundShade = c;
    }
}
function setPhotoLoading(b) {
    this.isLoading = b;
    var a = this.win.document.getElementById(VIEWER_ID_LOADING);
    if (a == undefined) {
        return;
    }
    a.style.display = b ? "" : "none";
}
function setBackgroundColor(a) {
    this.backgroundColor = a;
    this.borderColor = a;
}
function setBorderWidth(a) {
    this.borderWidth = a;
}
function setSlideDuration(a) {
    this.slideDuration = a;
}
function disableShade() {
    this.backgroundShade = false;
}
function enableShade() {
    this.backgroundShade = true;
}
function setShadeColor(a) {
    this.shadeColor = a;
}
function setShadeOpacity(a) {
    this.shadeOpacity = a;
}
function disableFading() {
    this.fadePhotos = false;
}
function enableFading() {
    this.fadePhotos = true;
}
function disablePanning() {
    this.panPhotos = false;
}
function enablePanning() {
    this.panPhotos = true;
}
function enablePhotoFading() {
    this.manualFadePhotos = true;
}
function disablePhotoFading() {
    this.manualFadePhotos = false;
}
function setFontSize(a) {
    this.fontSize = a;
}
function setFont(a) {
    this.font = a;
}
function enableAutoPlay() {
    this.autoPlay = true;
}
function disableAutoPlay() {
    this.autoPlay = false;
}
function enableEmailLink() {
    this.enableEmailLink = true;
}
function disableEmailLink() {
    this.enableEmailLink = false;
}
function enablePhotoLink() {
    this.isEnablePhotoLink = true;
}
function disablePhotoLink() {
    this.isEnablePhotoLink = false;
}
function setOnClickEvent(a) {
    this.customOnClickEvent = a;
}
function setPhotoOnClickEvent(a) {
    this.photoOnClickEvent = a;
}
function setOnRightclickEvent(a) {
    this.customOnRightclickEvent = a;
}
function enableLoop() {
    this.loop = true;
}
function disableLoop() {
    this.loop = false;
}
function enableToolbar() {
    this.showToolbar = true;
}
function disableToolbar() {
    this.showToolbar = false;
}
function enableToolbarAnimator() {
    this.toolbarAnimator = new ToolbarAnimator(this);
}
function disableToolbarAnimator() {
    if (this.toolbarAnimator != undefined) {
        this.toolbarAnimator.reset();
        this.toolbarAnimator = undefined;
    }
}
function setControlsImageMap(a) {
    this.customImageMap = a;
}
function setOverrideToolbarStyles(a) {
    this.overrideToolbarStyles = a;
}
function setNoPadding(a) {
    this.nopadding = a;
}
function setEmailAddress(a) {
    this.emailAddress = a;
}
function getPhoto() {
    return this.photos[this.index];
}
function getPhotoIndex(b) {
    if (!b || b.length === 0) {
        return -1;
    }
    for (var a = 0; a < this.photos.length; a++) {
        if (this.photos[a].src == b) {
            return a;
        }
    }
    return -1;
}
function showPhoto(i, c, l) {
    if (this.photos.length === 0) {
        return true;
    }
    if (getRootWindow().permissionDenied && this.badgeMode == undefined && !getRootWindow().livemode) {
        this.setStartFragmentIdentifier(i);
        return true;
    }
    if (i != undefined) {
        this.index = i;
    }
    if (this.index < 0 || this.index >= this.photos.length) {
        log.error("Invalid photo index");
        return true;
    }
    var d = this.win.document;
    var h = false;
    if (!this.shown) {
        h = true;
        d.viewer = this;
        try {
            this.hideOverlappingElements();
        } catch (f) {
        }
    }
    var y = 16384;
    var x = getWindowSize(this.win);
    var b = x.w - (this.nopadding ? this.borderWidth * 2 : 20);
    var a = x.h - (this.nopadding ? this.borderWidth * 2 : 20);
    var s = getScrollPos(this.win);
    var r = s.left;
    var t = s.top;
    this.addBackShade(y);
    this.addByLine(y);
    this.addBylineCaption();
    if (this.showToolbar) {
        this.addToolbar(b, y);
        this.addCaptions();
    }
    var n = this.photos[this.index];
    if (isNaN(n.w) || isNaN(n.h)) {
        if (n.preloadImage != undefined) {
            if (isNaN(n.w) && n.preloadImage.width > 0) {
                n.w = n.preloadImage.width;
            }
            if (isNaN(n.h) && n.preloadImage.height > 0) {
                n.h = n.preloadImage.height;
            }
        } else {
            this.index--;
            this.next();
            return false;
        }
    }
    if (isNaN(n.w) || isNaN(n.h)) {
        this.index--;
        this.next();
        return false;
    }
    this.shown = true;
    var k = (this.nopadding ? 0 : 20);
    var q = -1;
    var m = -1;
    if (parseInt(n.w) > b || parseInt(n.h) > a) {
        if (parseInt(n.w) / b > parseInt(n.h) / a) {
            q = b - k;
            m = parseInt(q * n.h / n.w);
        } else {
            m = a - k;
            q = parseInt(m * n.w / n.h);
        }
    } else {
        q = parseInt(n.w);
        m = parseInt(n.h);
    }
    if (q <= 0 || m <= 0) {
        if (!this.showToolbar) {
            throw"Missing photo dimension";
        }
    }
    if (c == undefined) {
        c = 0;
    }
    var o = d.createElement("div");
    o.id = VIEWER_ID_PHOTO;
    o.style.visibility = "hidden";
    o.style.position = "absolute";
    o.style.zIndex = y;
    o.style.overflow = "hidden";
    o.style.border = this.borderWidth + "px solid " + this.borderColor;
    o.style.textAlign = "center";
    o.style.backgroundColor = this.backgroundColor;
    var p = d.createElement("img");
    p.style.visibility = "hidden";
    p.style.position = "relative";
    p.style.backgroundColor = this.backgroundColor;
    p.style.border = "none";
    p.style.cursor = "pointer";
    p.style.zIndex = (parseInt(o.style.zIndex) + 1) + "";
    p.onclick = this.photoOnClickEvent ? this.photoOnClickEvent : onClickEvent;
    p.oncontextmenu = onContextMenuEvent;
    if (l != undefined && this.fadePhotos) {
        var g = (FADE_BORDER ? o : p);
        setOpacity(g, l);
    }
    var j = parseInt((b - q) / 2) + (this.nopadding ? 0 : OFFSET_LEFT);
    o.style.left = (j + r + c / 2) + "px";
    var v = parseInt((a - m) / 2) + (this.nopadding ? 0 : OFFSET_TOP);
    o.style.top = (v + t) + "px";
    p.style.visibility = "hidden";
    o.style.width = (q - c > 0 ? q - c : q) + "px";
    o.style.height = m + "px";
    p.style.width = q + "px";
    p.style.height = m + "px";
    p.src = n.src;
    o.style.visibility = "visible";
    p.style.visibility = "visible";
    var w = this;
    var u = function () {
        if (w.manualFadePhotos && w.viewerFading) {
            var A = (FADE_BORDER ? o : p);
            setOpacity(A, 0);
        }
        o.appendChild(p);
        d.body.appendChild(o);
        if (w.photoDiv != undefined) {
            try {
                d.body.removeChild(w.photoDiv);
            } catch (z) {
            }
        }
        w.photoDiv = o;
        w.photoImg = p;
        w.setLoading(false);
        if (w.showCallback && (h || (w.slideShowRunning && !w.fadePhotos) || (!h && !w.slideShowRunning && !w.manualFadePhotos))) {
            w.showCallback(w.index);
        }
        if (h && w.autoPlay) {
            w.slideShow(true);
        } else {
            if (w.manualFadePhotos && w.viewerFading) {
                w.fadePhoto(true, false);
            }
        }
    };
    if (this.manualFadePhotos && !h && !this.slideShowRunning) {
        this.fadePhoto(false, false, u);
    } else {
        u();
    }
    return false;
}
function isPhotoShown() {
    return this.shown;
}
function closeViewer() {
    getViewer().close();
}
function onPhotoLoad(a) {
    var b = getViewer();
    if (b != undefined) {
        if (flickrHack(b, b.index)) {
            b.setLoading(false);
            b.index--;
            b.next();
            return;
        }
        b.show();
    }
}
function preloadPhotos(a) {
    if (MAX_PRELOAD < 1) {
        return;
    }
    var d = getViewer();
    for (var b = a; b <= a + MAX_PRELOAD; b++) {
        if (b <= d.photos.length - 1) {
            if (d.photos[b].preloadImage != undefined && d.photos[b].preloadImage.complete) {
                continue;
            }
            var c = new Image();
            d.photos[b].preloadImage = c;
            c.src = d.photos[b].src;
        }
    }
}
function closePhoto() {
    if (slideFadingTimeout) {
        window.clearTimeout(slideFadingTimeout);
    }
    var d = this.win;
    if (d == undefined) {
        d = window;
    }
    var a = d.document;
    var c = this.photoDiv;
    if (c != undefined) {
        a.body.removeChild(c);
    }
    c = a.getElementById(VIEWER_ID_TOOLBAR);
    if (c != undefined) {
        a.body.removeChild(c);
    }
    c = a.getElementById(VIEWER_ID_BYLINE);
    if (c != undefined) {
        a.body.removeChild(c);
    }
    c = a.getElementById(VIEWER_ID_BACK);
    if (c != undefined) {
        a.body.removeChild(c);
    }
    this.shown = false;
    this.slideShowRunning = false;
    this.slideShowPaused = false;
    try {
        this.showOverlappingElements();
    } catch (b) {
        log.error(b);
    }
    if (this.toolbarAnimator != undefined) {
        this.toolbarAnimator.reset();
    }
    if (this.closeCallback != undefined) {
        this.closeCallback(this.index);
    }
    if (this.contextMenu != undefined) {
        this.contextMenu.hide();
    }
}
var slideFadingTimeout;
function fadePhoto(c, d, a) {
    var f = this.photoImg;
    if (f == undefined) {
        return;
    }
    var e = this.photoDiv;
    var b = (FADE_BORDER ? e : f);
    var g = this;
    if (!c) {
        if (d == undefined || d === false) {
            this.fadeDegree = 1;
            this.viewerFading = true;
        }
        this.fadeDegree = this.fadeDegree - 1 / FADE_STEPS;
        if (this.fadeDegree > 0) {
            setOpacity(b, this.fadeDegree);
            if (slideFadingTimeout) {
                window.clearTimeout(slideFadingTimeout);
            }
            slideFadingTimeout = window.setTimeout(function () {
                g.fadePhoto(false, true, a);
            }, 50);
            return;
        } else {
            setOpacity(b, 0);
        }
        if (a) {
            a();
        }
    } else {
        if (d == undefined || d === false) {
            this.fadeDegree = 0;
            this.viewerFading = true;
        }
        this.fadeDegree = this.fadeDegree + 1 / FADE_STEPS;
        if (this.fadeDegree < 1) {
            setOpacity(b, this.fadeDegree);
            if (slideFadingTimeout) {
                window.clearTimeout(slideFadingTimeout);
            }
            slideFadingTimeout = window.setTimeout(function () {
                g.fadePhoto(true, true);
            }, 50);
            return;
        } else {
            setOpacity(b, 1);
        }
        this.viewerFading = false;
        if (this.showCallback != undefined) {
            this.showCallback(this.index);
        }
    }
}
function nextPhoto(c, a) {
    if (this.contextMenu != undefined && this.contextMenu.visible) {
        this.contextMenu.hide();
    }
    if (this.isLoading) {
        return;
    }
    if (c == undefined) {
        c = 1;
    }
    var d = this.index;
    if (this.index + c >= this.photos.length) {
        if (this.loop && c != this.photos.length) {
            this.index = 0;
        } else {
            this.index = this.photos.length - 1;
        }
    } else {
        if (this.index + c < 0) {
            if (c < -1) {
                this.index = 0;
            } else {
                if (this.loop) {
                    this.index = this.photos.length - 1;
                } else {
                    return;
                }
            }
        } else {
            this.index += c;
        }
    }
    if (this.index == d) {
        return;
    }
    this.slideShowStop();
    preloadPhotos(this.index + 1);
    var b = new Image();
    this.photos[this.index].preloadImage = b;
    this.setLoading(true);
    b.onload = onPhotoLoad;
    b.onerror = onPhotoLoad;
    if (this.photos[this.index].src != undefined) {
        b.src = this.photos[this.index].src;
    } else {
        onPhotoLoad();
    }
}
function prevPhoto(a) {
    if (this.contextMenu != undefined && this.contextMenu.visible) {
        this.contextMenu.hide();
    }
    if (a == undefined) {
        a = 1;
    }
    this.next(-a);
}
function firstPhoto() {
    if (this.contextMenu != undefined && this.contextMenu.visible) {
        this.contextMenu.hide();
    }
    this.prev(this.photos.length);
}
function lastPhoto() {
    if (this.contextMenu != undefined && this.contextMenu.visible) {
        this.contextMenu.hide();
    }
    this.next(this.photos.length);
}
function startSlideShow() {
    if (this.contextMenu != undefined && this.contextMenu.visible) {
        this.contextMenu.hide();
    }
    getViewer().slideShow(true);
}
var slideTimeout;
var slidePreloadImageLoaded = false;
var slidePreloadTime = undefined;
function slideShow(i) {
    if (this.viewerFading) {
        return;
    }
    if (this.toolbarAnimator != undefined) {
        this.toolbarAnimator.slideshowAction();
    }
    var d = this.index + 1;
    if (d >= this.photos.length) {
        if (this.loop) {
            d = 0;
        } else {
            if (!this.slideShowPaused && !this.slideShowRunning) {
                this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG);
                return;
            }
        }
    }
    var a = this.win.document;
    var j = this;
    var g = this.photoImg;
    if (g == undefined) {
        return;
    }
    var f = this.photoDiv;
    var b = (FADE_BORDER ? f : g);
    if (i != undefined && i === true) {
        if (this.slideShowPaused) {
            this.slideShowPaused = false;
            this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG_RUNNING);
            if (this.contextMenu != undefined && this.contextMenu.visible) {
                this.contextMenu.hide();
            }
            return;
        } else {
            if (this.slideShowRunning) {
                this.slideShowPaused = true;
                this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG);
                return;
            } else {
                if (this.contextMenu != undefined && this.contextMenu.visible) {
                    this.contextMenu.hide();
                }
                this.slideShowRunning = true;
                this.slideShowPaused = false;
                this.slideFirstPhoto = true;
                this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG_RUNNING);
            }
        }
        if (this.isLoading || this.index > this.photos.length - 1) {
            return;
        }
    } else {
        if (this.slideShowPaused) {
            if (slideTimeout) {
                window.clearTimeout(slideTimeout);
            }
            slideTimeout = window.setTimeout(function () {
                j.slideShow(false);
            }, 200);
            return;
        } else {
            if (!this.slideShowRunning) {
                this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG);
                return;
            }
        }
    }
    var c = 0;
    if (g.leftOffset != undefined) {
        c = parseFloat(g.leftOffset);
    }
    if (c === 0) {
        if (d < this.photos.length) {
            slidePreloadImageLoaded = false;
            var h = new Image();
            this.photos[d].preloadImage = h;
            slidePreloadTime = getTimeMillis();
            h.onload = onSlideLoad;
            h.onerror = onSlideLoad;
            h.src = this.photos[d].src;
        }
        preloadPhotos(d + 1);
    }
    if (c > -SLIDE_OFFSET) {
        c -= MOVE_STEP;
        if (-c <= FADE_STEPS) {
            if (b.style.opacity != undefined && parseFloat(b.style.opacity) < 1) {
                if (this.fadePhotos && this.photos[this.index].src != undefined) {
                    setOpacity(b, -c / FADE_STEPS);
                    if (parseFloat(b.style.opacity) == 1 && this.showCallback != undefined) {
                        this.showCallback(this.index);
                    }
                }
            }
        } else {
            if (c + SLIDE_OFFSET < FADE_STEPS) {
                if (d < this.photos.length && !slidePreloadImageLoaded) {
                    if (slidePreloadTime != undefined && getTimeMillis() - slidePreloadTime > PRELOAD_TIMEOUT) {
                        slidePreloadImageLoaded = true;
                    }
                    c++;
                    this.setLoading(true);
                } else {
                    if (d < this.photos.length && this.fadePhotos && this.photos[this.index].src != undefined) {
                        setOpacity(b, (c + SLIDE_OFFSET) / FADE_STEPS);
                    }
                }
            }
        }
        g.leftOffset = c;
        if (this.panPhotos && !this.slideFirstPhoto) {
            g.style.left = c + "px";
        }
    } else {
        if (d >= this.photos.length) {
            this.slideShowRunning = false;
            this.slideShowPaused = false;
            this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG);
            if (this.toolbarAnimator != undefined) {
                this.toolbarAnimator.reset();
            }
            if (this.endCallback != undefined) {
                this.endCallback();
            }
            return;
        }
        this.index = d;
        this.slideFirstPhoto = false;
        this.show(undefined, (this.panPhotos ? SLIDE_OFFSET : 0), 0);
        b = (FADE_BORDER ? this.photoDiv : this.photoImg);
        if (this.fadePhotos) {
            setOpacity(b, 0);
        }
        this.photoImg.leftOffset = 0;
        if (this.panPhotos) {
            this.photoImg.style.left = "0px";
        }
    }
    var e = this.slideDuration / SLIDE_OFFSET;
    if (this.slideFirstPhoto) {
        e /= 2;
    }
    if (slideTimeout) {
        window.clearTimeout(slideTimeout);
    }
    slideTimeout = window.setTimeout(function () {
        j.slideShow(false);
    }, e);
}
function onSlideLoad(a) {
    var c = getViewer();
    if (c != undefined) {
        if (flickrHack(c, c.index + 1)) {
            var b = c.photos[c.index + 1].preloadImage;
            b.src = c.photos[c.index + 1].src;
            slidePreloadTime = getTimeMillis();
            return;
        }
        slidePreloadImageLoaded = true;
        c.setLoading(false);
    }
}
function slideShowStop() {
    this.slideShowRunning = false;
    this.slideShowPaused = false;
    this.setToolbarImage(P_IMG_ROOT + "/" + TOOLBAR_IMG);
    var a = this.win.document;
    var c = this.photoImg;
    if (c != undefined) {
        if (this.fadePhotos) {
            var b = (FADE_BORDER ? this.photoDiv : c);
            setOpacity(b, 1);
        }
        c.style.left = "0px";
    }
}
function addBackShade(d) {
    var a = this.win.document;
    if (a.getElementById(VIEWER_ID_BACK) != undefined) {
        return;
    }
    var c = a.createElement("div");
    c.id = VIEWER_ID_BACK;
    c.style.top = "0px";
    c.style.left = "0px";
    c.style.bottom = "0px";
    c.style.right = "0px";
    c.style.margin = "0";
    c.style.padding = "0";
    c.style.border = "none";
    c.style.cursor = "pointer";
    if (IE && !(IE7 && STRICT_MODE)) {
        c.style.position = "absolute";
        var b = getDocumentSize(this.win);
        c.style.width = (b.w - 21) + "px";
        c.style.height = (b.h - 4) + "px";
    } else {
        c.style.position = "fixed";
        c.style.width = "100%";
        c.style.height = "100%";
    }
    c.style.zIndex = d - 1;
    c.style.backgroundColor = this.shadeColor;
    if (this.backgroundShade) {
        setOpacity(c, this.shadeOpacity);
    } else {
        setOpacity(c, 0);
    }
    c.onclick = onClickEvent;
    a.body.appendChild(c);
}
function addToolbar(c, t) {
    var e = this.win.document;
    var g;
    if (e.getElementById(VIEWER_ID_TOOLBAR) != undefined) {
        return;
    }
    var o = e.createElement("div");
    o.id = VIEWER_ID_TOOLBAR;
    setOpacity(o, TOOLBAR_OPACITY);
    o.style.zIndex = t + 1;
    var j = TOOLBAR_IMG_BACK;
    if (!isHosted()) {
        j += "-nologo";
    }
    if (IE && !IE7) {
        j += "-indexed";
    }
    j += ".png";
    if (!this.overrideToolbarStyles) {
        var d = 10;
        if (IE && !(IE7 && STRICT_MODE)) {
            o.style.position = "absolute";
            if (IE7 || IE8) {
                var r = getWindowSize(this.win).h + getScrollPos(this.win).top;
                o.style.top = (r - TOOLBAR_H - 10) + "px";
            } else {
                o.style.bottom = d + "px";
            }
        } else {
            o.style.position = "fixed";
            o.style.bottom = d + "px";
        }
        o.style.left = (c - TOOLBAR_W + 10) / 2 + "px";
        o.style.width = TOOLBAR_W + "px";
        o.style.height = TOOLBAR_H + "px";
        o.style.textAlign = "center";
        o.style.backgroundImage = "url('" + P_IMG_ROOT + "/" + j + "')";
        o.style.backgroundPosition = "50% 0%";
        o.style.backgroundRepeat = "no-repeat";
        o.style.lineHeight = LINE_HEIGHT;
        o.style.border = "none";
    }
    var q = undefined;
    if (!this.enableEmailLink && TOOLBAR_IMG_MASK != undefined) {
        q = e.createElement("img");
        q.style.position = "absolute";
        q.style.width = 44;
        q.style.height = 44;
        q.style.left = "289px";
        q.style.top = "0px";
        q.style.border = "none";
        q.src = P_IMG_ROOT + "/" + TOOLBAR_IMG_MASK;
        o.appendChild(q);
    }
    if (!this.isEnablePhotoLink && TOOLBAR_IMG_MASK != undefined) {
        q = e.createElement("img");
        q.style.position = "absolute";
        q.style.width = 44;
        q.style.height = 44;
        q.style.left = "339px";
        q.style.top = "0px";
        q.style.border = "none";
        q.src = P_IMG_ROOT + "/" + TOOLBAR_IMG_MASK;
        o.appendChild(q);
    }
    var k = this.customImageMap;
    if (k === undefined) {
        k = e.createElement("map");
        var p = false;
        try {
            p = (window.parent.document.location.protocol == "https:");
        } catch (f) {
        }
        var b = [];
        b.push(["getViewer().first()", "17", getMessage("photoviewer.toolbar.first")]);
        b.push(["getViewer().prev()", "68", getMessage("photoviewer.toolbar.prev")]);
        b.push(["getViewer().slideShow(true)", "122", getMessage("photoviewer.toolbar.slideShow")]);
        b.push(["getViewer().next()", "175", getMessage("photoviewer.toolbar.next")]);
        b.push(["getViewer().last()", "227", getMessage("photoviewer.toolbar.last")]);
        if (this.enableEmailLink) {
            b.push(["getViewer().email()", "300", getMessage("photoviewer.toolbar.email")]);
        }
        if (this.isEnablePhotoLink) {
            b.push(["getViewer().permalink()", "350", getMessage("photoviewer.toolbar.permalink")]);
        }
        b.push(["getViewer().close()", "402", getMessage("photoviewer.toolbar.close")]);
        for (g = 0; g < b.length; g++) {
            var a = e.createElement("area");
            if (!p) {
                a.href = "javascript:void(0)";
            }
            a.alt = b[g][2];
            a.title = a.alt;
            a.shape = "circle";
            a.coords = b[g][1] + ", 21, 22";
            a.onclick = buildAreaMapClosure(b[g][0]);
            k.appendChild(a);
        }
    }
    k.name = VIEWER_ID_TOOLBAR_MAP;
    k.id = VIEWER_ID_TOOLBAR_MAP;
    var h = e.createElement("img");
    h.id = VIEWER_ID_TOOLBAR_IMG;
    h.src = P_IMG_ROOT + "/" + TOOLBAR_IMG;
    h.width = TOOLBAR_IMG_W;
    h.height = TOOLBAR_IMG_H;
    h.style.border = "none";
    h.style.background = "none";
    if (STRICT_MODE) {
        h.style.margin = "4px 0px 0px 0px";
    } else {
        h.style.margin = "4px";
    }
    h.useMap = "#" + VIEWER_ID_TOOLBAR_MAP;
    o.appendChild(k);
    o.appendChild(h);
    if (isHosted()) {
        var s = e.createElement("a");
        s.style.position = "absolute";
        s.style.bottom = "0px";
        s.style.right = "0px";
        s.style.width = "25px";
        s.style.height = "25px";
        s.style.background = "none";
        s.alt = "TripTracker.net";
        s.title = s.alt;
        s.cursor = s.alt;
        s.href = TOOLBAR_LINK;
        s.target = "_new";
        s.alt = "TripTracker Slideshow";
        s.title = s.alt;
        o.appendChild(s);
    }
    var l = e.createElement("img");
    l.id = VIEWER_ID_LOADING;
    l.width = 16;
    l.height = 16;
    l.style.display = "none";
    l.style.position = "absolute";
    l.style.left = (TOOLBAR_IMG_LOADING_LEFT - 8) + "px";
    l.style.top = (TOOLBAR_IMG_LOADING_TOP - 8) + "px";
    l.src = P_IMG_ROOT + "/" + TOOLBAR_IMG_LOADING;
    l.style.border = "none";
    l.style.background = "none";
    o.appendChild(l);
    o.appendChild(e.createElement("br"));
    var m = e.createElement("span");
    m.id = VIEWER_ID_TIME;
    if (!this.overrideToolbarStyles) {
        m.position = "relative";
        m.style.color = TOOLBAR_FONT_COLOR;
        m.style.fontFamily = TOOLBAR_FONT_STYLE;
        m.style.fontSize = this.fontSize + "px";
        if (STRICT_MODE) {
            m.style.lineHeight = this.fontSize + "px";
        }
        if (this.font != undefined) {
            m.style.font = this.font;
        }
        m.style.cssFloat = "none";
        m.style.textAlign = "right";
        m.style.padding = "0px 10px";
    }
    m.appendChild(e.createTextNode(" "));
    o.appendChild(m);
    var n = e.createElement("span");
    n.id = VIEWER_ID_TITLE;
    if (!this.overrideToolbarStyles) {
        n.position = "relative";
        n.style.color = TOOLBAR_FONT_COLOR;
        n.style.fontFamily = TOOLBAR_FONT_STYLE;
        n.style.fontSize = this.fontSize + "px";
        if (STRICT_MODE) {
            n.style.lineHeight = this.fontSize + "px";
        }
        if (this.font != undefined) {
            n.style.font = this.font;
        }
        n.style.cssFloat = "none";
        n.style.textAlign = "left";
        n.style.paddingRight = "20px";
    }
    n.appendChild(e.createTextNode(" "));
    o.appendChild(n);
    e.body.appendChild(o);
}
function addByLine(d) {
    var a = this.win.document;
    if (a.getElementById(VIEWER_ID_BYLINE) != undefined) {
        return;
    }
    var b = a.createElement("div");
    b.appendChild(a.createTextNode(""));
    b.style.color = BYLINE_FONT_COLOR;
    b.style.fontFamily = BYLINE_FONT_STYLE;
    b.style.fontSize = this.fontSize + "px";
    if (this.font != undefined) {
        b.style.font = this.font;
    }
    b.id = VIEWER_ID_BYLINE;
    b.style.position = "absolute";
    b.style.right = BYLINE_POSITION_RIGHT + "px";
    if (IE && !(IE7 && STRICT_MODE)) {
        b.style.position = "absolute";
        if (IE7 || IE8) {
            var c = getWindowSize(this.win).h + getScrollPos(this.win).top;
            b.style.top = (c - 30) + "px";
        } else {
            b.style.bottom = BYLINE_POSITION_BOTTOM + "px";
        }
    } else {
        b.style.position = "fixed";
        b.style.bottom = BYLINE_POSITION_BOTTOM + "px";
    }
    b.style.zIndex = d + 1;
    b.appendChild(a.createTextNode(" "));
    a.body.appendChild(b);
}
function buildAreaMapClosure(func) {
    return function (event) {
        eval(func);
        blurElement(event);
        return false;
    };
}
function blurElement(a) {
    var b = getEventTarget(getEvent(a));
    if (b != undefined) {
        b.blur();
    }
}
function setToolbarImage(c) {
    var a = this.win.document;
    var b = a.getElementById(VIEWER_ID_TOOLBAR_IMG);
    if (b != undefined) {
        b.src = c;
    }
}
function setShowToolbar(a) {
    this.showToolbar = a;
}
function addCaptions() {
    var b = this.photos[this.index];
    var a = this.win.document;
    var c = a.getElementById(VIEWER_ID_TIME);
    var d = a.getElementById(VIEWER_ID_TITLE);
    var e = (this.index + 1) + "/" + this.photos.length;
    if (b.time != undefined) {
        e += " [" + b.time + "]";
    }
    c.firstChild.nodeValue = e;
    var f = (b.title != undefined ? b.title : "");
    d.title = "";
    d.alt = "";
    if (f.length > TITLE_MAX_LENGTH) {
        d.title = f;
        d.alt = f;
        f = f.substring(0, TITLE_MAX_LENGTH) + " ...";
    }
    if (f.indexOf("\n") !== 0) {
        f = f.replace("\n", "<br />");
        d.innerHTML = f;
    } else {
        d.nodeValue = f;
    }
}
function addBylineCaption() {
    var b = this.photos[this.index];
    var a = this.win.document;
    var c = a.getElementById(VIEWER_ID_BYLINE);
    if (b.byline != undefined && b.byline.length > 0) {
        c.firstChild.nodeValue = b.byline;
    } else {
        c.firstChild.nodeValue = "";
    }
}
function setCloseCallback(a) {
    this.closeCallback = a;
}
function setShowCallback(a) {
    this.showCallback = a;
}
function setEndCallback(a) {
    this.endCallback = a;
}
function emailPhoto() {
    var d = this.photos[this.index];
    var a = this.win.document;
    var e = (d.title != undefined ? d.title : getMessage("photoviewer.email.subject.photo"));
    var b = this.emailAddress !== undefined ? this.emailAddress : "";
    var c = "mailto:" + b + "?subject=" + e + "&body=" + getPhotoURL(d.src);
    a.location.href = c;
}
function getPhotoURL(d) {
    var a = document.location;
    if (/\w+:\/\/.+/.test(d)) {
        return d;
    } else {
        if (d.indexOf("/") === 0) {
            return a.protocol + "//" + a.host + d;
        } else {
            var b = a.pathname;
            var c = b.lastIndexOf("/");
            if (c != -1) {
                b = b.substring(0, c);
            }
            return a.protocol + "//" + a.host + b + "/" + d;
        }
    }
}
function linkPhoto() {
    var a = this.photos[this.index];
    window.open(a.link ? a.link : a.src);
}
function favoritePhoto() {
    var c = this.photos[this.index];
    var a = this.win.document;
    var f = REST_URL + "markfeatured?id" + c.id;
    try {
        var d = getResponse(f, false, true);
    } catch (b) {
        return;
    }
}
function hideOverlappingElements(b) {
    if (b == undefined) {
        b = this.win.document.body;
        this.hideOverlappingElements(b);
        return;
    }
    if (b.style != undefined && b.style.visibility != "hidden") {
        var c = b.nodeName.toLowerCase();
        if ((b.className != undefined && b.className.indexOf("SlideshowDoHide") != -1) || ((IE || FIREFOX) && (c == "select" || c == "object" || c == "embed"))) {
            b.style.visibility = "hidden";
            if (this.hiddenElements == undefined) {
                this.hiddenElements = [];
            }
            this.hiddenElements.push(b);
        }
    }
    if (b.childNodes != undefined) {
        var a;
        for (a = 0; a < b.childNodes.length; a++) {
            this.hideOverlappingElements(b.childNodes[a]);
        }
    }
}
function showOverlappingElements() {
    var a;
    if (this.hiddenElements != undefined) {
        for (a = 0; a < this.hiddenElements.length; a++) {
            this.hiddenElements[a].style.visibility = "visible";
        }
        this.hiddenElements = [];
    }
}
function viewerHandleKey(a) {
    if (typeof getViewer == "undefined" || !getViewer) {
        return true;
    }
    var c = getViewer();
    if (c == undefined || !c.shown) {
        return true;
    }
    a = getEvent(a);
    if (a.ctrlKey || a.altKey) {
        return true;
    }
    var b = a.keyCode;
    switch (b) {
        case 37:
        case 38:
            c.prev();
            break;
        case 39:
        case 40:
            c.next();
            break;
        case 33:
            c.prev(10);
            break;
        case 34:
            c.next(10);
            break;
        case 36:
            c.first();
            break;
        case 35:
            c.last();
            break;
        case 32:
        case 13:
            c.slideShow(true);
            break;
        case 27:
            c.close();
            break;
        default:
            return true;
    }
    preventDefault(a);
    return false;
}
function flickrHack(d, b) {
    if (d.photos[b] != undefined) {
        var c = d.photos[b].preloadImage;
        if (c != undefined && c.width == 500 && c.height == 375) {
            var a = /.+static\.flickr\.com.+_b\.jpg/;
            if (a.test(c.src)) {
                d.photos[b].src = d.photos[b].src.replace(/_b\.jpg/, "_o.jpg");
                return true;
            }
        }
    }
    return false;
}
function findPhotosTT(k, d) {
    var c;
    if (d.nodeName.toLowerCase() == "a") {
        var e = d.getAttribute("onclick");
        if (e == undefined) {
            e = d.onclick;
        }
        if (e != undefined && new String(e).indexOf("popupImg") != -1) {
            var g = /.*popupImg\((.+?),(.+?),(.+?)\).*/;
            if (g.test(e)) {
                var j, l, b;
                if (d.photoUrl != undefined) {
                    j = d.photoUrl;
                    l = d.photoW;
                    b = d.photoH;
                } else {
                    j = RegExp.$1;
                    if (j.charAt(0) == "'" && j.charAt(j.length - 1) == "'") {
                        j = j.substring(1, j.length - 1);
                    }
                    l = parseInt(RegExp.$2);
                    b = parseInt(RegExp.$3);
                }
                var f = new PhotoImg(undefined, j, l, b);
                var a = false;
                for (c = 0; c < k.photos.length; c++) {
                    if (k.photos[c].src == f.src) {
                        a = true;
                        break;
                    }
                }
                if (!a) {
                    k.add(f);
                }
            }
        }
    }
    if (d.childNodes != undefined) {
        for (c = 0; c < d.childNodes.length; c++) {
            findPhotosTT(k, d.childNodes[c]);
        }
    }
}
var defaultViewer = undefined;
function popupImg(e, f, b, a, d) {
    var c;
    if (defaultViewer == undefined) {
        defaultViewer = new PhotoViewer();
    } else {
        defaultViewer.photos = [];
        defaultViewer.index = 0;
    }
    if (a != undefined) {
        defaultViewer.setBackground(a, a, false);
    }
    if (d == undefined || d) {
        findPhotosTT(defaultViewer, window.document.body);
        for (c = 0; c < defaultViewer.photos.length; c++) {
            if (defaultViewer.photos[c].src == e) {
                defaultViewer.show(c);
            }
        }
    }
    if (defaultViewer.photos === undefined || defaultViewer.photos.length === 0) {
        defaultViewer.setShowToolbar(false);
        defaultViewer.add(new PhotoImg(undefined, e, f, b));
        defaultViewer.show();
    }
    return false;
}
function onClickEvent() {
    var a = getViewer();
    if (a.contextMenu != undefined && a.contextMenu.visible) {
        a.contextMenu.hide();
        return;
    }
    if (a.toolbarAnimator != undefined) {
        a.toolbarAnimator.reset();
    }
    if (a.customOnClickEvent != undefined) {
        a.customOnClickEvent();
    } else {
        closeViewer();
    }
}
function onContextMenuEvent(a) {
    var c = getViewer();
    var b = getEvent(a);
    if (c.contextMenu == undefined && c.customOnRightclickEvent == undefined) {
        return true;
    }
    b.cancelBubble = true;
    if (c.customOnRightclickEvent != undefined) {
        c.customOnRightclickEvent(a);
    }
    if (c.contextMenu != undefined && (!c.slideShowRunning || c.slideShowPaused)) {
        c.contextMenu.show(getMousePosition(a));
    }
    return false;
}
function setupFragmentIdentifierModePhotoViewer(b, c, e) {
    var d = new PhotoViewer();
    d.origRootLocation = document.location.href;
    d.origIFrameLocation = b;
    d.iframename = c;
    d.setCloseCallback(d.setStopFragmentIdentifier);
    for (var a = 0; a < e.length; a++) {
        d.add(e[a].url, e[a].title, e[a].date, e[a].byline);
    }
    window.frames[d.iframename].location = d.origIFrameLocation + "#" + d.origRootLocation;
    d.checkStartFragmentIdentifier();
}
function checkStartFragmentIdentifier() {
    var a = document.location.href;
    if (a.indexOf("#startphoto=") == -1) {
        window.setTimeout(checkStartFragmentIdentifier, 500);
    } else {
        var b = parseInt(a.substring(a.lastIndexOf("=") + 1));
        var c = getViewer();
        if (c.origRootLocation.indexOf("#") == -1) {
            c.origRootLocation += "#";
        }
        if (FIREFOX) {
            window.history.back();
        } else {
            document.location.href = c.origRootLocation;
        }
        c.show(b);
    }
}
function setStopFragmentIdentifier(a) {
    window.frames[getViewer().iframename].location = this.origIFrameLocation + "#stopphoto=" + a;
    checkStartFragmentIdentifier();
}
function setStartFragmentIdentifier(b) {
    var c = getRootWindow();
    if (this.origIFrameLocation == undefined) {
        this.origIFrameLocation = c.location.href.substring(0, c.location.href.indexOf("#"));
    }
    if (this.origRootLocation == undefined) {
        this.origRootLocation = c.location.href.substring(c.location.href.indexOf("#") + 1);
    }
    this.checkStopFragmentIdentifier();
    var a = "#startphoto=" + b;
    c.parent.location = this.origRootLocation + a;
}
function checkStopFragmentIdentifier() {
    var a = getRootWindow().location.href;
    if (a.indexOf("#stopphoto") == -1) {
        window.setTimeout(checkStopFragmentIdentifier, 500);
    } else {
        var c = getViewer();
        var b = a.substring(a.lastIndexOf("=") + 1);
        if (c.origIFrameLocation.indexOf("#") == -1) {
            c.origIFrameLocation += "#";
        }
        if (FIREFOX) {
            window.history.back();
        } else {
            getRootWindow().location.href = c.origIFrameLocation;
        }
        viewerCloseCallback(b);
    }
}
function ToolbarAnimator(a) {
    this.viewer = a;
}
ToolbarAnimator.prototype.initialize = function () {
    var a = this;
    var b = findDOMElement(VIEWER_ID_BACK);
    var c = findDOMElement(VIEWER_ID_PHOTO);
    var e = findDOMElement(VIEWER_ID_TOOLBAR);
    if (b != undefined && c != undefined && e != undefined) {
        var d = function () {
            a.mouseAction();
        };
        b.onmousemove = d;
        c.onmousemove = d;
        e.onmousemove = d;
        e.onclick = d;
        this.initialized = true;
    }
};
ToolbarAnimator.prototype.reset = function () {
    this.stop();
    var a = findDOMElement(VIEWER_ID_BACK);
    var b = findDOMElement(VIEWER_ID_PHOTO);
    var c = findDOMElement(VIEWER_ID_TOOLBAR);
    if (a != undefined && b != undefined && c != undefined) {
        a.onmousemove = null;
        b.onmousemove = null;
        c.onmousemove = null;
        c.onclick = null;
    }
    this.initialized = false;
};
ToolbarAnimator.prototype.stop = function () {
    var a = this;
    if (this.hiderID != undefined) {
        window.clearTimeout(this.hiderID);
        this.hiderID = undefined;
    }
    if (this.hidden) {
        this.showToolbar();
    }
};
ToolbarAnimator.prototype.mouseAction = function () {
    this.stop();
};
ToolbarAnimator.prototype.slideshowAction = function () {
    var a = this;
    if (this.viewer.slideShowRunning && !this.viewer.slideShowPaused && this.hiderID == undefined) {
        if (!this.initialized) {
            this.initialize();
        }
        this.hiderID = window.setTimeout(function () {
            a.hideToolbar();
        }, 5000);
    } else {
        if (this.viewer.slideShowPaused) {
            this.reset();
        }
    }
};
ToolbarAnimator.prototype.hideToolbar = function () {
    var a = this;
    var c = findDOMElement(VIEWER_ID_TOOLBAR);
    if (c == undefined) {
        return;
    }
    var b = c.style.KhtmlOpacity;
    if (b == undefined) {
        b = c.style.opacity;
    }
    if (b === 0) {
        c.style.display = "none";
        return;
    }
    b = b - 0.05;
    setOpacity(c, b > 0 ? b : 0);
    this.hidden = true;
    this.hiderID = window.setTimeout(function () {
        a.hideToolbar();
    }, 100);
};
ToolbarAnimator.prototype.showToolbar = function () {
    var a = findDOMElement(VIEWER_ID_TOOLBAR);
    if (a != undefined) {
        a.style.display = "block";
        setOpacity(a, TOOLBAR_OPACITY);
    }
    this.hidden = false;
};
function addContextMenu(a) {
    if (isHosted() || getViewer().contextMenu != undefined) {
        return;
    }
    this.contextMenu = a;
    this.contextMenu.initialize();
}
function PhotoViewerCtxMenuItem(b, a) {
    this.text = b;
    this.callback = a;
}
function PhotoViewerCtxMenu(a) {
    this.cssClass = a;
    this.items = [];
    this.ctxSubMenus = [];
}
PhotoViewerCtxMenu.prototype.mouseover = function (b) {
    var l = getViewer();
    var a = l.contextMenu;
    if (!a.visible) {
        return;
    }
    for (var c = 0; c < a.ctxSubMenus.length; c++) {
        a.ctxSubMenus[c].style.visibility = "hidden";
    }
    var k = this.id + "_sub";
    var j = document.getElementById(k);
    var f = this.parentNode.parentNode;
    var h = getMousePosition(b);
    var d = getDOMLocation(this);
    var g = getDOMLocation(f);
    if (j && f) {
        j.style.left = (g.x + f.clientWidth) + "px";
        j.style.top = d.y + "px";
        j.style.visibility = "visible";
    }
};
PhotoViewerCtxMenu.prototype.mouseclick = function (a) {
    var h = getViewer();
    var f = h.contextMenu;
    var g = undefined;
    for (var b = 0; b < f.items.length; b++) {
        if (f.items[b].DOMElement == this) {
            g = f.items[b];
            break;
        }
        var c = false;
        if (f.items[b].subitems == undefined) {
            continue;
        }
        for (var d = 0; d < f.items[b].subitems.length; d++) {
            if (f.items[b].subitems[d].DOMElement.id === this.id) {
                g = f.items[b].subitems[d];
                c = true;
                break;
            }
        }
        if (c) {
            break;
        }
    }
    if (g != undefined && g.callback != undefined) {
        h.contextMenu.hide();
        g.callback(h.photos[h.index].src, a);
    }
};
PhotoViewerCtxMenu.prototype.add = function (a, b) {
    a.subitems = b;
    this.items.push(a);
};
PhotoViewerCtxMenu.prototype.initialize = function () {
    var b = getViewer();
    var a = b.win.document;
    this.createMenu(a, b);
    this.initialized = true;
};
PhotoViewerCtxMenu.prototype.createMenu = function (d, g) {
    var b = d.createElement("div");
    b.id = VIEWER_ID_CTXMENU;
    b.style.visibility = "hidden";
    b.style.position = "absolute";
    b.style.zIndex = 999999;
    var a = d.createElement("ul");
    for (var e = 0; e < this.items.length; e++) {
        var c = d.createElement("li");
        c.appendChild(d.createTextNode(this.items[e].text));
        c.onclick = this.mouseclick;
        c.id = VIEWER_ID_CTXMENU + "_" + e;
        c.onmouseover = this.mouseover;
        this.items[e].DOMElement = c;
        a.appendChild(c);
        if (this.items[e].subitems != undefined) {
            c.className = "ctxmenu_expanded";
            var f = c.id + "_sub";
            this.createSubMenu(d, g, this.items[e].subitems, f);
        }
    }
    b.appendChild(a);
    b.className = this.cssClass;
    d.body.appendChild(b);
    this.ctxMenuDOM = b;
};
PhotoViewerCtxMenu.prototype.createSubMenu = function (d, h, g, f) {
    var b = d.createElement("div");
    b.id = f;
    b.style.visibility = "hidden";
    b.style.position = "absolute";
    b.style.zIndex = 999999;
    var a = d.createElement("ul");
    for (var e = 0; e < g.length; e++) {
        var c = d.createElement("li");
        c.id = f + "_" + e;
        c.appendChild(d.createTextNode(g[e].text));
        c.onclick = this.mouseclick;
        g[e].DOMElement = c;
        a.appendChild(c);
    }
    b.appendChild(a);
    b.className = this.cssClass;
    d.body.appendChild(b);
    this.ctxSubMenus.push(b);
};
PhotoViewerCtxMenu.prototype.show = function (b) {
    if (!this.initialized) {
        this.initialize();
    }
    for (var a = 0; a < this.ctxSubMenus.length; a++) {
        this.ctxSubMenus[a].style.visibility = "hidden";
    }
    this.ctxMenuDOM.style.left = b.x + "px";
    this.ctxMenuDOM.style.top = b.y + "px";
    this.ctxMenuDOM.style.visibility = "visible";
    this.visible = true;
};
PhotoViewerCtxMenu.prototype.hide = function () {
    this.ctxMenuDOM.style.visibility = "hidden";
    for (var a = 0; a < this.ctxSubMenus.length; a++) {
        this.ctxSubMenus[a].style.visibility = "hidden";
    }
    this.visible = false;
};
eval(function (j, b, f, i, h, g) {
    h = function (a) {
        return(a < b ? "" : h(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (f--) {
            g[h(f)] = i[f] || h(f);
        }
        i = [function (a) {
            return g[a];
        }];
        h = function () {
            return"\\w+";
        };
        f = 1;
    }
    while (f--) {
        if (i[f]) {
            j = j.replace(new RegExp("\\b" + h(f) + "\\b", "g"), i[f]);
        }
    }
    return j;
}('c(!1q.2X){h 2X=l(){h p={6b:{"1s-R":"","84-2y":1,"83-2y-7W":I,"1I":v,"8d-89":I,"1H-2Q":4,"3g":I,"1w":I,"66":N,"8k-8l":I,"88":N,"5h-1p":I,"1L-1l":N},M:{4T:I,69:v,5l:16,5k:16,8B:N,8f:N,8s:"54",1f:{5q:"53 1g",5d:"9N 1g",5i:"9O 6q 6p",78:"9M C 9L 1V 9I 6p 9J",3t:"3t",6C:"?",1A:"2X\\n\\n",6T:"9K\'t 9P 2O D: ",7x:"9Q 9W\'t 9X D 1L-1l 9V: ",77:"<!9U 1L 9R \\"-//9S//6H 9T 1.0 9H//9G\\" \\"2s://5x.6x.6B/9v/6D/6H/6D-9w.9u\\"><1L 9t=\\"2s://5x.6x.6B/9s/9x\\"><6z><9y 2s-9E=\\"9F-9D\\" 63=\\"1X/1L; 9C=9z-8\\" /><3i>9A 2X</3i></6z><33 1m=\\"39-9Y:9Z,an,ao,am-al;ai-3f:#aj;3f:#ak;39-2Q:ap;1X-6G:6u;\\"><A 1m=\\"1X-6G:6u;6w-4w:aw;\\"><A 1m=\\"39-2Q:au-at;\\">2X</A><A 1m=\\"39-2Q:.as;6w-9p:ah;\\"><A>6O 2.1.ag (a5 15 6h)</A><A><a 27=\\"2s://6I.3k\\" a6=\\"4k\\" 1m=\\"3f:#6F;1X-6t:6L;\\">2s://6I.3k</a></A><A>a3 a0 a1 f 1l, a2 <a 27=\\"a7://5x.a8.3k/ae-af/ad?ac=a9-aa&ab=ax\\" 1m=\\"3f:#6F;1X-6t:6L;\\">8R</a> 6q 8Q 8O 8W!</A></A><A>8V C 8U 8X.</A><A>8K 8N-6h 8M 8S.</A></A></33></1L>"},8u:N},1r:{4Z:v,9o:v,3m:v,6f:{}},2d:{},8h:{9g:/\\/\\*[\\s\\S]*?\\*\\//3b,9d:/\\/\\/.*$/3b,9e:/#.*$/3b,9j:/"([^\\\\"\\n]|\\\\.)*"/g,9n:/\'([^\\\\\'\\n]|\\\\.)*\'/g,9m:/"([^\\\\"]|\\\\.)*"/g,8Y:/\'([^\\\\\']|\\\\.)*\'/g,9k:/(&X;|<)!--[\\s\\S]*?--(&Z;|>)/3b,43:/&X;\\w+:\\/\\/[\\w-.\\/?%&=@:;]*&Z;|\\w+:\\/\\/[\\w-.\\/?%&=@:;]*/g,9c:{G:/(&X;|<)\\?=?/g,1d:/\\?(&Z;|>)/g},93:{G:/(&X;|<)%=?/g,1d:/%(&Z;|>)/g},92:{G:/(&X;|<)\\s*1l.*?(&Z;|>)/4e,1d:/(&X;|<)\\/\\s*1l\\s*(&Z;|>)/4e}},1w:{1c:l(3O){h 3T=Q.22("3Y"),5s=p.1w.7d;3T.L="1w";D(h 30 1V 5s){h 6i=5s[30],5t=W 6i(3O),1Y=5t.1c();3O.6g[30]=5t;c(1Y==v){1J}c(7X(1Y)=="91"){1Y=p.1w.6m(1Y,3O.1k,30)}1Y.L+="5v "+30;3T.2p(1Y)}q 3T},6m:l(5L,7j,5K){h a=Q.22("a"),5N=a.1m,5D=p.M,5M=5D.5l,5J=5D.5k;a.27="#"+5K;a.3i=5L;a.5j=7j;a.76=5K;a.1Q=5L;c(40(5M)==N){5N.26=5M+"75"}c(40(5J)==N){5N.2e=5J+"75"}a.9l=l(e){97{p.1w.6M(f,e||1q.6Y,f.5j,f.76)}98(e){p.B.1A(e.6n)}q N};q a},6M:l(7i,7g,7b,7h,7f){h 5G=p.1r.6f[7b],5H;c(5G==v||(5H=5G.6g[7h])==v){q v}q 5H.2z(7i,7g,7f)},7d:{5q:l(5b){f.1c=l(){c(5b.V("66")!=I){q}q p.M.1f.5q};f.2z=l(5c,8T,8P){h A=5b.A;5c.7y.4p(5c);A.L=A.L.E("5O","")}},5d:l(6R){f.1c=l(){q p.M.1f.5d};f.2z=l(b1,bU,bV){h 3J=p.B.3d(6R.5g).E(/</g,"&X;"),2A=p.B.4z("","4k",bT,bS,"bQ=0, bR=1, bW=0, 7a=1");3J=p.B.2T(3J);2A.Q.3D("<54>"+3J+"</54>");2A.Q.4o()}},5i:l(64){h 3C,c2,6a=64.1k;f.1c=l(){h 2V=p.M;c(2V.69==v){q v}l 1E(56){h 5m="";D(h 5f 1V 56){5m+="<c1 R=\'"+5f+"\' 24=\'"+56[5f]+"\'/>"}q 5m};l 2i(5n){h 5p="";D(h 5o 1V 5n){5p+=" "+5o+"=\'"+5n[5o]+"\'"}q 5p};h 67={26:2V.5l,2e:2V.5k,1k:6a+"bY",4r:"bZ/x-71-6V",3i:p.M.1f.5i},5V={bE:"ay",bD:"bC",bA:"5j="+6a,c4:"N"},5U=2V.69,3x;c(/bG/i.1R(6K.7k)){3x="<4h"+2i({bH:"bM:bN-bL-bK-bI-bJ",c3:"2s://ck.cj.3k/cm/71/c9/6V/c8.c7#6O=9,0,0,0"})+2i(67)+">"+1E(5V)+1E({c6:5U})+"</4h>"}F{3x="<ca"+2i(67)+2i(5V)+2i({cg:5U})+"/>"}3C=Q.22("A");3C.1Q=3x;q 3C};f.2z=l(cf,ce,62){h 7c=62.cd;6U(7c){2K"7q":h 61=p.B.2T(p.B.3d(64.5g).E(/&X;/g,"<").E(/&Z;/g,">").E(/&aT;/g,"&"));c(1q.74){1q.74.aU("1X",61)}F{q p.B.2T(61)}2K"aR":p.B.1A(p.M.1f.78);2h;2K"aP":p.B.1A(62.6n);2h}}},aV:l(65){f.1c=l(){q p.M.1f.3t};f.2z=l(aW,bz,b0){h 1Z=Q.22("aZ"),1N=v;c(p.1r.3m!=v){Q.33.4p(p.1r.3m)}p.1r.3m=1Z;1Z.1m.aX="aY:aO;26:6r;2e:6r;G:-6j;4w:-6j;";Q.33.2p(1Z);1N=1Z.5Q.Q;6J(1N,1q.Q);1N.3D("<A 1s=\\""+65.A.L.E("5O","")+" aD\\">"+65.A.1Q+"</A>");1N.4o();1Z.5Q.4F();1Z.5Q.3t();l 6J(6N,6E){h 2I=6E.4O("4n");D(h i=0;i<2I.u;i++){c(2I[i].6y.6P()=="6A"&&/aE\\.1a$/.1R(2I[i].27)){6N.3D("<4n 4r=\\"1X/1a\\" 6y=\\"6A\\" 27=\\""+2I[i].27+"\\"></4n>")}}}}},az:l(aA){f.1c=l(){q p.M.1f.6C};f.2z=l(aF,aG){h 2A=p.B.4z("","4k",aM,aK,"7a=0"),1N=2A.Q;1N.3D(p.M.1f.77);1N.4o();2A.4F()}}}},B:{Y:l(49,73,3y){3y=3e.aH(3y||0,0);D(h i=3y;i<49.u;i++){c(49[i]==73){q i}}q-1},6d:l(72){q 72+3e.aI(3e.b2()*b3).2u()},6c:l(51,4L){h 3h={},1W;D(1W 1V 51){3h[1W]=51[1W]}D(1W 1V 4L){3h[1W]=4L[1W]}q 3h},80:l(4J){6U(4J){2K"I":q I;2K"N":q N}q 4J},4z:l(43,6W,4B,4H,2N){h x=(6X.26-4B)/2,y=(6X.2e-4H)/2;2N+=", G="+x+", 4w="+y+", 26="+4B+", 2e="+4H;2N=2N.E(/^,/,"");h 4E=1q.bk(43,6W,2N);4E.4F();q 4E},7C:l(1G,1T,1U){c(1G.6Z){1G["e"+1T+1U]=1U;1G[1T+1U]=l(){1G["e"+1T+1U](1q.6Y)};1G.6Z("bw"+1T,1G[1T+1U])}F{1G.bv(1T,1U,N)}},1A:l(z){1A(p.M.1f.1A+z)},4u:l(4N,6Q){h 2r=p.1r.4Z,3V=v;c(2r==v){2r={};D(h 2L 1V p.2d){h 42=p.2d[2L].bu;c(42==v){1J}p.2d[2L].R=2L.6P();D(h i=0;i<42.u;i++){2r[42[i]]=2L}}p.1r.4Z=2r}3V=p.2d[2r[4N]];c(3V==v&&6Q!=N){p.B.1A(p.M.1f.6T+4N)}q 3V},46:l(z,6S){h 2E=z.1P("\\n");D(h i=0;i<2E.u;i++){2E[i]=6S(2E[i])}q 2E.5A("\\n")},8C:l(z){q z.E(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"")},8H:l(z){h 3X,45={},4P=W U("^\\\\[(?<4c>(.*?))\\\\]$"),7e=W U("(?<R>[\\\\w-]+)"+"\\\\s*:\\\\s*"+"(?<24>"+"[\\\\w-%#]+|"+"\\\\[.*?\\\\]|"+"\\".*?\\"|"+"\'.*?\'"+")\\\\s*;?","g");2j((3X=7e.T(z))!=v){h 2f=3X.24.E(/^[\'"]|[\'"]$/g,"");c(2f!=v&&4P.1R(2f)){h m=4P.T(2f);2f=m.4c.u>0?m.4c.1P(/\\s*,\\s*/):[]}45[3X.R]=2f}q 45},7K:l(z,1a){c(z==v||z.u==0||z=="\\n"){q z}z=z.E(/</g,"&X;");z=z.E(/ {2,}/g,l(m){h 4t="";D(h i=0;i<m.u-1;i++){4t+="&2B;"}q 4t+" "});c(1a!=v){z=p.B.46(z,l(2l){c(2l.u==0){q""}h 3W="";2l=2l.E(/^(&2B;| )+/,l(s){3W=s;q""});c(2l.u==0){q 3W}q 3W+"<C 1s=\\""+1a+"\\">"+2l+"</C>"})}q z},7V:l(6l,6o){h 32=6l.2u();2j(32.u<6o){32="0"+32}q 32},6k:l(){h 3w=Q.22("A"),3B,3o=0,44=Q.33,1k=p.B.6d("6k"),36="<A 1s=\\"",2Y="</A>",4U="</4G>";3w.1Q=36+"6e\\">"+36+"1p\\">"+36+"2y\\">"+36+"63"+"\\"><4G 1s=\\"b5\\"><4G 1k=\\""+1k+"\\">&2B;"+4U+4U+2Y+2Y+2Y+2Y;44.2p(3w);3B=Q.bb(1k);c(/bg/i.1R(6K.7k)){h 6v=1q.be(3B,v);3o=85(6v.bc("26"))}F{3o=3B.bd}44.4p(3w);q 3o},8b:l(79,6s){h 1H="";D(h i=0;i<6s;i++){1H+=" "}q 79.E(/\\t/g,1H)},8a:l(2Z,4f){h bF=2Z.1P("\\n"),1H="\\t",4d="";D(h i=0;i<50;i++){4d+="                    "}l 8x(3s,18,8A){q 3s.29(0,18)+4d.29(0,8A)+3s.29(18+1,3s.u)};2Z=p.B.46(2Z,l(20){c(20.Y(1H)==-1){q 20}h 18=0;2j((18=20.Y(1H))!=-1){h 8w=4f-18%4f;20=8x(20,18,8w)}q 20});q 2Z},3d:l(z){h br=/<br\\s*\\/?>|&X;br\\s*\\/?&Z;/4e;c(p.M.8B==I){z=z.E(br,"\\n")}c(p.M.8f==I){z=z.E(br,"")}q z},2G:l(z){q z.E(/^\\s+|\\s+$/g,"")},2T:l(z){h 21=p.B.3d(z).1P("\\n"),bf=W bh(),8D=/^\\s*/,2a=ba;D(h i=0;i<21.u&&2a>0;i++){h 4x=21[i];c(p.B.2G(4x).u==0){1J}h 4I=8D.T(4x);c(4I==v){q z}2a=3e.2a(4I[0].u,2a)}c(2a>0){D(h i=0;i<21.u;i++){21[i]=21[i].29(2a)}}q 21.5A("\\n")},82:l(35,31){c(35.H<31.H){q-1}F{c(35.H>31.H){q 1}F{c(35.u<31.u){q-1}F{c(35.u>31.u){q 1}}}}q 0},2D:l(8q,34){l 8n(4D,8r){q[W p.4v(4D[0],4D.H,8r.1a)]};h b4=0,4s=v,3L=[],8p=34.4X?34.4X:8n;2j((4s=34.3K.T(8q))!=v){3L=3L.2t(8p(4s,34))}q 3L},8m:l(8o){h X="&X;",Z="&Z;";q 8o.E(p.8h.43,l(m){h 4j="",47="";c(m.Y(X)==0){47=X;m=m.3U(X.u)}c(m.Y(Z)==m.u-Z.u){m=m.3U(0,m.u-Z.u);4j=Z}q 47+"<a 27=\\""+m+"\\">"+m+"</a>"+4j})},8v:l(){h 3N=Q.4O("1l"),4i=[];D(h i=0;i<3N.u;i++){c(3N[i].4r=="6e"){4i.K(3N[i])}}q 4i},8I:l(4b){h 4q="<![b6[",3S="]]>",1v=p.B.2G(4b),3R=N;c(1v.Y(4q)==0){1v=1v.3U(4q.u);3R=I}c(1v.Y(3S)==1v.u-3S.u){1v=1v.3U(0,1v.u-3S.u);3R=I}q 3R?1v:4b}},1I:l(8E,4R){l 8e(4g){h 4Q=[];D(h i=0;i<4g.u;i++){4Q.K(4g[i])}q 4Q};h 2q=4R?[4R]:8e(Q.4O(p.M.8s)),8J="1Q",2k=v,4S=p.M;c(4S.4T){2q=2q.2t(p.B.8v())}c(2q.u===0){q}D(h i=0;i<2q.u;i++){h 2M=2q[i],28=p.B.8H(2M.L),1D,2W,25;28=p.B.6c(8E,28);1D=28["2O"];c(1D==v){1J}c(28["1L-1l"]=="I"||p.6b["1L-1l"]==I){2k=W p.4a(1D);1D="b9"}F{h 3P=p.B.4u(1D);c(3P){1D=3P.R;2k=W 3P()}F{1J}}2W=2M[8J];c(4S.4T){2W=p.B.8I(2W)}28["2O-R"]=1D;2k.1I(2W,28);25=2k.A;c(p.M.8u){25=Q.22("bj");25.24=2k.A.1Q;25.1m.26="bt";25.1m.2e="bx"}2M.7y.bs(25,2M)}},bq:l(7H){p.B.7C(1q,"bl",l(){p.1I(7H)})}};p.4v=l(4A,7G,1a){f.24=4A;f.H=7G;f.u=4A.u;f.1a=1a;f.5Y=v};p.4v.14.2u=l(){q f.24};p.4a=l(4K){h 3z=p.B.4u(4K),2g,4W=W p.2d.bm(),bn=v;c(3z==v){q}2g=W 3z();f.4m=4W;c(2g.3I==v){p.B.1A(p.M.1f.7x+4K);q}4W.59.K({3K:2g.3I.C,4X:7p});l 3A(4Y,7w){D(h j=0;j<4Y.u;j++){4Y[j].H+=7w}};l 7p(19,bp){h 7n=19.C,1o=[],4M=2g.59,7l=19.H+19.G.u,2U=2g.3I,1n;D(h i=0;i<4M.u;i++){1n=p.B.2D(7n,4M[i]);3A(1n,7l);1o=1o.2t(1n)}c(2U.G!=v&&19.G!=v){1n=p.B.2D(19.G,2U.G);3A(1n,19.H);1o=1o.2t(1n)}c(2U.1d!=v&&19.1d!=v){1n=p.B.2D(19.1d,2U.1d);3A(1n,19.H+19[0].bo(19.1d));1o=1o.2t(1n)}D(h j=0;j<1o.u;j++){1o[j].5Y=3z.R}q 1o}};p.4a.14.1I=l(7t,7s){f.4m.1I(7t,7s);f.A=f.4m.A};p.7I=l(){};p.7I.14={V:l(7J,7Z){h 4l=f.1E[7J];q p.B.80(4l==v?7Z:4l)},1c:l(7Y){q Q.22(7Y)},8i:l(2F,81){h 3u=[];c(2F!=v){D(h i=0;i<2F.u;i++){c(7X(2F[i])=="4h"){3u=3u.2t(p.B.2D(81,2F[i]))}}}q 3u.aB(p.B.82)},86:l(){h 23=f.2C;D(h i=0;i<23.u;i++){c(23[i]===v){1J}h 2x=23[i],4V=2x.H+2x.u;D(h j=i+1;j<23.u&&23[i]!==v;j++){h 1S=23[j];c(1S===v){1J}F{c(1S.H>4V){2h}F{c(1S.H==2x.H&&1S.u>2x.u){f.2C[i]=v}F{c(1S.H>=2x.H&&1S.H<4V){f.2C[j]=v}}}}}}},8t:l(2H){h 3r=2H.1P(/\\n/g),3n=85(f.V("84-2y")),2v=f.V("83-2y-7W"),7N=f.V("1I",[]),7U=f.V("3g");2H="";c(2v==I){2v=(3n+3r.u-1).2u().u}F{c(40(2v)==I){2v=0}}D(h i=0;i<3r.u;i++){h 1x=3r[i],60=/^(&2B;|\\s)+/.T(1x),52="aN"+(i%2==0?1:2),7F=p.B.7V(3n+i,2v),7P=p.B.Y(7N,(3n+i).2u())!=-1,2S=v;c(60!=v){2S=60[0].2u();1x=1x.29(2S.u)}1x=p.B.2G(1x);c(1x.u==0){1x="&2B;"}c(7P){52+=" aQ"}2H+="<A 1s=\\"2y "+52+"\\">"+"<7L>"+"<7T>"+(7U?"<3F 1s=\\"aS\\"><C>"+7F+"</C></3F>":"")+"<3F 1s=\\"63\\">"+(2S!=v?"<C 1s=\\"by\\">"+2S.E(" ","&2B;")+"</C>":"")+1x+"</3F>"+"</7T>"+"</7L>"+"</A>"}q 2H},8y:l(5X,5T){h 18=0,3c="",3a=p.B.7K,5S=f.V("2O-R","");l 5W(5Z){h 5R=5Z?(5Z.5Y||5S):5S;q 5R?5R+" ":""};D(h i=0;i<5T.u;i++){h 1y=5T[i],3G;c(1y===v||1y.u===0){1J}3G=5W(1y);3c+=3a(5X.29(18,1y.H-18),3G+"7O")+3a(1y.24,3G+1y.1a);18=1y.H+1y.u}3c+=3a(5X.29(18),5W()+"7O");q 3c},1I:l(C,7E){h cb=p.M,1r=p.1r,A,ci,3Z,ch="cn";f.1E={};f.A=v;f.1p=v;f.C=v;f.1i=v;f.6g={};f.1k=p.B.6d("cl");1r.6f[f.1k]=f;c(C===v){C=""}f.1E=p.B.6c(p.6b,7E||{});c(f.V("88")==I){f.1E.1w=f.1E.3g=N}f.A=A=f.1c("3Y");f.1p=f.1c("3Y");f.1p.L="1p";L="6e";A.1k=f.1k;c(f.V("66")){L+=" 5O"}c(f.V("3g")==N){L+=" bB"}c(f.V("5h-1p")==N){f.1p.L+=" bO-5h"}L+=" "+f.V("1s-R");L+=" "+f.V("2O-R");A.L=L;f.5g=C;f.C=p.B.8C(C).E(/\\r/g," ");3Z=f.V("1H-2Q");f.C=f.V("8d-89")==I?p.B.8a(f.C,3Z):p.B.8b(f.C,3Z);f.C=p.B.2T(f.C);c(f.V("1w")){f.1i=f.1c("3Y");f.1i.L="1i";f.1i.2p(p.1w.1c(f));A.2p(f.1i);h 1i=f.1i;l 58(){1i.L=1i.L.E("53","")};A.c0=l(){58();1i.L+=" 53"};A.bX=l(){58()}}A.2p(f.1p);f.2C=f.8i(f.59,f.C);f.86();C=f.8y(f.C,f.2C);C=f.8t(p.B.2G(C));c(f.V("8k-8l")){C=p.B.8m(C)}f.1p.1Q=C},9f:l(z){z=z.E(/^\\s+|\\s+$/g,"").E(/\\s+/g,"|");q"\\\\b(?:"+z+")\\\\b"},9i:l(2J){f.3I={G:{3K:2J.G,1a:"1l"},1d:{3K:2J.1d,1a:"1l"},C:W U("(?<G>"+2J.G.1g+")"+"(?<C>.*?)"+"(?<1d>"+2J.1d.1g+")","96")}}};q p}()}c(!1q.U){(l(){h 2w={T:10.14.T,87:5I.14.87,E:5I.14.E,1P:5I.14.1P},1F={13:/(?:[^\\\\([#\\s.]+|\\\\(?!k<[\\w$]+>|[7z]{[^}]+})[\\S\\s]?|\\((?=\\?(?!#|<[\\w$]+>)))+|(\\()(?:\\?(?:(#)[^)]*\\)|<([$\\w]+)>))?|\\\\(?:k<([\\w$]+)>|[7z]{([^}]+)})|(\\[\\^?)|([\\S\\s])/g,99:/(?:[^$]+|\\$(?![1-9$&`\']|{[$\\w]+}))+|\\$(?:([1-9]\\d*|[$&`\'])|{([$\\w]+)})/g,37:/^(?:\\s+|#.*)+/,5B:/^(?:[?*+]|{\\d+(?:,\\d*)?})/,7Q:/&&\\[\\^?/g,7S:/]/g},7o=l(5C,5v,5u){D(h i=5u||0;i<5C.u;i++){c(5C[i]===5v){q i}}q-1},8G=/()??/.T("")[1]!==3j,3q={};U=l(1e,1O){c(1e 68 10){c(1O!==3j){3H 7r("4y\'t 4C 9a 8z 95 7u 10 5u 94")}q 1e.3E()}h 1O=1O||"",7R=1O.Y("s")>-1,7M=1O.Y("x")>-1,5z=N,3v=[],1b=[],13=1F.13,J,cc,38,3M,3p;13.O=0;2j(J=2w.T.2n(13,1e)){c(J[2]){c(!1F.5B.1R(1e.17(13.O))){1b.K("(?:)")}}F{c(J[1]){3v.K(J[3]||v);c(J[3]){5z=I}1b.K("(")}F{c(J[4]){3M=7o(3v,J[4]);1b.K(3M>-1?"\\\\"+(3M+1)+(40(1e.5w(13.O))?"":"(?:)"):J[0])}F{c(J[5]){1b.K(3q.7m?3q.7m.7q(J[5],J[0].5w(1)==="P"):J[0])}F{c(J[6]){c(1e.5w(13.O)==="]"){1b.K(J[6]==="["?"(?!)":"[\\\\S\\\\s]");13.O++}F{cc=U.8g("&&"+1e.17(J.H),1F.7Q,1F.7S,"",{7D:"\\\\"})[0];1b.K(J[6]+cc+"]");13.O+=cc.u+1}}F{c(J[7]){c(7R&&J[7]==="."){1b.K("[\\\\S\\\\s]")}F{c(7M&&1F.37.1R(J[7])){38=2w.T.2n(1F.37,1e.17(13.O-1))[0].u;c(!1F.5B.1R(1e.17(13.O-1+38))){1b.K("(?:)")}13.O+=38-1}F{1b.K(J[7])}}}F{1b.K(J[0])}}}}}}}3p=10(1b.5A(""),2w.E.2n(1O,/[9B]+/g,""));3p.1C={1g:1e,2m:5z?3v:v};q 3p};U.9q=l(R,o){3q[R]=o};10.14.T=l(z){h 1h=2w.T.2n(f,z),R,i,5y;c(1h){c(8G&&1h.u>1){5y=W 10("^"+f.1g+"$(?!\\\\s)",f.5E());2w.E.2n(1h[0],5y,l(){D(i=1;i<8j.u-2;i++){c(8j[i]===3j){1h[i]=3j}}})}c(f.1C&&f.1C.2m){D(i=1;i<1h.u;i++){R=f.1C.2m[i-1];c(R){1h[R]=1h[i]}}}c(f.3l&&f.O>(1h.H+1h[0].u)){f.O--}}q 1h}})()}10.14.5E=l(){q(f.3l?"g":"")+(f.av?"i":"")+(f.8F?"m":"")+(f.37?"x":"")+(f.a4?"y":"")};10.14.3E=l(7A){h 5F=W U(f.1g,(7A||"")+f.5E());c(f.1C){5F.1C={1g:f.1C.1g,2m:f.1C.2m?f.1C.2m.17(0):v}}q 5F};10.14.2n=l(90,z){q f.T(z)};10.14.9b=l(9h,8c){q f.T(8c[0])};U.5P=l(57,5e){h 55="/"+57+"/"+(5e||"");q U.5P[55]||(U.5P[55]=W U(57,5e))};U.41=l(z){q z.E(/[-[\\]{}()*+?.\\\\^$|,#\\s]/g,"\\\\$&")};U.8g=l(z,G,11,1j,2R){h 2R=2R||{},2P=2R.7D,12=2R.c5,1j=1j||"",5r=1j.Y("g")>-1,70=1j.Y("i")>-1,7v=1j.Y("m")>-1,5a=1j.Y("y")>-1,1j=1j.E(/y/g,""),G=G 68 10?(G.3l?G:G.3E("g")):W U(G,"g"+1j),11=11 68 10?(11.3l?11:11.3E("g")):W U(11,"g"+1j),1M=[],2o=0,1u=0,1t=0,1z=0,2b,2c,1B,1K,3Q,48;c(2P){c(2P.u>1){3H aC("4y\'t 4C aL aJ 7u 41 7B")}c(7v){3H 7r("4y\'t 4C 41 7B 8z bi b8 8F b7")}3Q=U.41(2P);48=W 10("^(?:"+3Q+"[\\\\S\\\\s]|(?:(?!"+G.1g+"|"+11.1g+")[^"+3Q+"])+)+",70?"i":"")}2j(I){G.O=11.O=1t+(2P?(48.T(z.17(1t))||[""])[0].u:0);1B=G.T(z);1K=11.T(z);c(1B&&1K){c(1B.H<=1K.H){1K=v}F{1B=v}}c(1B||1K){1u=(1B||1K).H;1t=(1B?G:11).O}F{c(!2o){2h}}c(5a&&!2o&&1u>1z){2h}c(1B){c(!2o++){2b=1u;2c=1t}}F{c(1K&&2o){c(!--2o){c(12){c(12[0]&&2b>1z){1M.K([12[0],z.17(1z,2b),1z,2b])}c(12[1]){1M.K([12[1],z.17(2b,2c),2b,2c])}c(12[2]){1M.K([12[2],z.17(2c,1u),2c,1u])}c(12[3]){1M.K([12[3],z.17(1u,1t),1u,1t])}}F{1M.K(z.17(2c,1u))}1z=1t;c(!5r){2h}}}F{G.O=11.O=0;3H bP("8L aq 9r ar 8Z")}}c(1u===1t){1t++}}c(5r&&!5a&&12&&12[0]&&z.u>1z){1M.K([12[0],z.17(1z),1z,z.u])}G.O=11.O=0;q 1M};', 62, 768, "||||||||||||if|||this||var||||function||||sh|return||||length|null||||str|div|utils|code|for|replace|else|left|index|true|_121|push|className|config|false|lastIndex||document|name||exec|XRegExp|getParam|new|lt|indexOf|gt|RegExp|_139|vN|part|prototype|||slice|pos|_d3|css|_11f|create|right|_119|strings|source|_129|bar|_13a|id|script|style|_da|_d6|lines|window|vars|class|_145|_144|_b5|toolbar|_f4|_103|_146|alert|_149|_x|_c3|params|lib|obj|tab|highlight|continue|_14a|html|_142|doc|_11a|split|innerHTML|test|_ec|_5a|_5b|in|_4f|text|_8|_3c|_91|_98|createElement|_e7|value|_c5|width|href|_c2|substr|min|_147|_148|brushes|height|_6e|_cd|break|attributes|while|_be|_75|captureNames|call|_143|appendChild|_bc|_5f|http|concat|toString|_f0|real|_e9|line|execute|wnd|nbsp|matches|getMatches|_66|_e3|trim|_ed|_40|_10f|case|_61|_c1|_55|brush|_13c|size|_13b|_f9|unindent|_d9|_28|_c4|SyntaxHighlighter|_81|_88|_5|m2|_7a|body|_a2|m1|_80|extended|len|font|_fe|gm|_fd|fixInputString|Math|color|gutter|_4e|title|undefined|com|global|printFrame|_ef|_7d|_125|_118|_ee|_8e|print|_e5|_11e|_7b|_32|_49|_cc|offsetMatches|_7c|_25|write|addFlags|td|_104|throw|htmlScript|_22|regex|_a7|_124|_af|_2|_c6|_14b|_b6|_b4|_3|substring|_60|_76|_6a|DIV|_10b|isNaN|escape|_62|url|_7e|_6b|eachLine|_ae|esc|_47|HtmlScript|_b2|values|_8c|gi|_89|_b9|object|_b0|_ad|_blank|_e1|xmlBrush|link|close|removeChild|_b3|type|_a6|_73|findBrush|Match|top|_9d|can|popup|_c8|_53|supply|_a3|win|focus|span|_54|_9e|_50|_cb|_4d|_d7|_5d|getElementsByTagName|_6c|_ba|_b8|_bf|useScriptTags|_82|_ea|_ce|func|_d0|discoveredBrushes||_4c|_f6|show|pre|key|_29|_133|hide|regexList|_141|_19|_1a|viewSource|_134|_2b|originalCode|wrap|copyToClipboard|highlighterId|toolbarItemHeight|toolbarItemWidth|_2a|_2c|_2e|_2d|expandSource|_13e|_4|_7|from|item|charAt|www|r2|_11d|join|quantifier|_113|_e|getNativeFlags|_12e|_17|_18|String|_10|_b|_9|_f|_d|collapsed|cache|contentWindow|_101|_ff|_fb|swf|_30|getBrushNameCss|_fa|brushName|_100|_f5|_37|_35|content|_24|_38|collapse|_2f|instanceof|clipboardSwf|_27|defaults|merge|guid|syntaxhighlighter|highlighters|toolbarCommands|2009|_6|500px|measureSpace|_78|createButton|message|_79|clipboard|to|0px|_85|decoration|center|_83|margin|w3|rel|head|stylesheet|org|help|xhtml1|_3f|0099FF|align|DTD|alexgorbatchev|copyStyles|navigator|none|executeCommand|_3e|version|toLowerCase|_5e|_1e|_65|noBrush|switch|flash|_52|screen|event|attachEvent|_13f|shockwave|_4b|_48|clipboardData|px|commandName|aboutDialog|copyToClipboardConfirmation|_84|scrollbars|_14|_36|items|_6d|_16|_13|_15|_12|_a|userAgent|_d8|unicode|_d5|_112|process|get|TypeError|_de|_dd|one|_140|_d1|brushNotHtmlScript|parentNode|pP|_12d|character|addEvent|escapeChar|_106|_f7|_c9|_c7|Highlighter|_df|decorate|table|_11c|_f1|plain|_f8|classLeft|_11b|classRight|tr|_f2|padNumber|numbers|typeof|_e2|_e0|toBoolean|_e4|matchesSortCallback|pad|first|parseInt|removeNestedMatches|match|light|tabs|processSmartTabs|processTabs|args|smart|toArray|stripBrs|matchRecursive|regexLib|findMatches|arguments|auto|links|processUrls|defaultAdd|_a9|_a8|_a1|_a4|tagName|createDisplayLines|debug|getSyntaxHighlighterScriptTags|_93|insertSpaces|processMatches|when|_90|bloggerMode|trimFirstAndLastLines|_9a|_b7|multiline|_117|parseParams|stripCData|_bd|Copyright|subject|Alex|2004|development|_1c|keep|donate|Gorbatchev|_1b|syntax|JavaScript|active|highlighter|multiLineSingleQuotedString|delimiters|_12f|string|scriptScriptTags|aspScriptTags|another|constructing|sgi|try|catch|replaceVar|flags|apply|phpScriptTags|singleLineCComments|singleLinePerlComments|getKeywords|multiLineCComments|_131|forHtmlScript|doubleQuotedString|xmlComments|onclick|multiLineDoubleQuotedString|singleQuotedString|spaceWidth|bottom|addPlugin|contains|1999|xmlns|dtd|TR|transitional|xhtml|meta|utf|About|sx|charset|Type|equiv|Content|EN|Transitional|your|now|Can|is|The|view|copy|find|Brush|PUBLIC|W3C|XHTML|DOCTYPE|option|wasn|configured|family|Geneva|you|like|please|If|sticky|October|target|https|paypal|_s|xclick|hosted_button_id|cmd|webscr|cgi|bin|364|4em|background|fff|000|serif|sans|Arial|Helvetica|1em|data|unbalanced|75em|large|xx|ignoreCase|3em|2930402|always|about|_42|sort|SyntaxError|printing|shCore|_43|_44|max|round|than|250|more|500|alt|absolute|error|highlighted|ok|number|amp|setData|printSource|_39|cssText|position|IFRAME|_3b|_1f|random|1000000|_a5|block|CDATA|flag|the|htmlscript|1000|getElementById|getPropertyValue|offsetWidth|getComputedStyle|_99|opera|Array|using|textarea|open|load|Xml|_cf|lastIndexOf|_d4|all||replaceChild|70em|aliases|addEventListener|on|30em|spaces|_3a|flashVars|nogutter|transparent|wmode|allowScriptAccess|_8a|msie|classid|96b8|444553540000|11cf|ae6d|clsid|d27cdb6e|no|Error|location|resizable|400|750|_20|_21|menubar|onmouseout|_clipboard|application|onmouseover|param|_26|codebase|menu|valueNames|movie|cab|swflash|cabs|embed|conf||command|_34|_33|src|_10c|_10a|macromedia|download|highlighter_|pub|important".split("|"), 0, {}));
eval(function (j, b, f, i, h, g) {
    h = function (a) {
        return(a < b ? "" : h(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (f--) {
            g[h(f)] = i[f] || h(f);
        }
        i = [function (a) {
            return g[a];
        }];
        h = function () {
            return"\\w+";
        };
        f = 1;
    }
    while (f--) {
        if (i[f]) {
            j = j.replace(new RegExp("\\b" + h(f) + "\\b", "g"), i[f]);
        }
    }
    return j;
}('1 y={d:{}};y.d={F:6(S,l,q,k,m,n){6 J(z,Y){1 V=16 15("^"+Y+"\\\\[(?<o>\\\\w+)\\\\]$","14"),x=2;h(1 i=0;i<z.g;i++){7((x=V.17(z[i]))!=2){4 x.o}}4 2};6 3(r,U){4 r!=2?r:U};6 9(s){4 s!=2?s.13():2};1 f=S.18(":"),E=f[0],c={},u={"p":"p"};C={"p":"1a"},v=2,5=d.5;h(1 i 19 f){c[f[i]]="p"}l=9(3(l,5.O));q=9(3(q,5.T));k=9(3(k,5.A));n=9(3(n,5.W));m=9(3(m,5["K-L"]));v={1b:E,O:3(C[c.12],l),T:3(C[c.1g],q),A:3(u[c.A],k),W:3(u[c.1t],n),"K-L":3(J(f,"1q"),m)};4 v},1x:6(B,I,D,H,N,M){6 Z(){1 a=1r;h(1 i=0;i<a.g;i++){7(a[i]===2){10}7(G(a[i])=="1s"&&a[i]!=""){4 a[i]+""}7(G(a[i])=="1c"&&a[i].o!=""){4 a[i].o+""}}4 2};6 t(Q,R,11){1 j=1w.1v(11);h(1 i=0;i<j.g;i++){7(j[i].1u("1p")==R){Q.1n(j[i])}}};1 b=[],1o=2,1f={},1e="1d";t(b,B,"1h");t(b,B,"1i");7(b.g===0){4}h(1 i=0;i<b.g;i++){1 8=b[i],e=Z(8.X["1m"],8.1l,8.X["P"],8.P),1k="";7(e===2){10}e=y.d.F(e,I,D,H,N,M);d.1j(e,8)}}};', 62, 96, "|var|null|defaultValue|return|defaults|function|if|_26|asString||_21|_11|SyntaxHighlighter|_27|_f|length|for||_1f|_4|_2|_5|_6|value|true|_3|_c|_e|findTagsByName|_12|result||_a|dp|_7|collapse|_14|reverse|_16|_10|parseParams|typeof|_17|_15|getValue|first|line|_19|_18|gutter|language|_1c|_1d|_1|toolbar|_d|_9|ruler|attributes|_8|findValue|continue|_1e|nogutter|toString|gi|XRegExp|new|exec|split|in|false|brush|object|innerHTML|_24|_23|nocontrols|pre|textarea|highlight|_28|className|class|push|_22|name|firstline|arguments|string|showcolumns|getAttribute|getElementsByTagName|document|HighlightAll".split("|"), 0, {}));
SyntaxHighlighter.brushes.AS3 = function () {
    var a = "class interface function package";
    var b = "-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape extends false final finally flash_proxy for get if implements import in include Infinity instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null Null Number Object object_proxy override parseFloat parseInt private protected public return set static String super switch this throw true try typeof uint undefined unescape use void while with";
    this.regexList = [
        {regex: SyntaxHighlighter.regexLib.singleLineCComments, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.multiLineCComments, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: "string"},
        {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"},
        {regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: "value"},
        {regex: new RegExp(this.getKeywords(a), "gm"), css: "color3"},
        {regex: new RegExp(this.getKeywords(b), "gm"), css: "keyword"},
        {regex: new RegExp("var", "gm"), css: "variable"},
        {regex: new RegExp("trace", "gm"), css: "color1"}
    ];
    this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};
SyntaxHighlighter.brushes.AS3.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.AS3.aliases = ["actionscript3", "as3"];
SyntaxHighlighter.brushes.CSharp = function () {
    var b = "abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while";

    function a(d, e) {
        var c = (d[0].indexOf("///") == 0) ? "color1" : "comments";
        return[new SyntaxHighlighter.Match(d[0], d.index, c)];
    }

    this.regexList = [
        {regex: SyntaxHighlighter.regexLib.singleLineCComments, func: a},
        {regex: SyntaxHighlighter.regexLib.multiLineCComments, css: "comments"},
        {regex: /@"(?:[^"]|"")*"/g, css: "string"},
        {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: "string"},
        {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"},
        {regex: /^\s*#.*/gm, css: "preprocessor"},
        {regex: new RegExp(this.getKeywords(b), "gm"), css: "keyword"},
        {regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g, css: "keyword"},
        {regex: /\byield(?=\s+(?:return|break)\b)/g, css: "keyword"}
    ];
    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
SyntaxHighlighter.brushes.CSharp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CSharp.aliases = ["c#", "c-sharp", "csharp"];
SyntaxHighlighter.brushes.CSS = function () {
    function b(f) {
        return"\\b([a-z_]|)" + f.replace(/ /g, "(?=:)\\b|\\b([a-z_\\*]|\\*|)") + "(?=:)\\b";
    }

    function c(f) {
        return"\\b" + f.replace(/ /g, "(?!-)(?!:)\\b|\\b()") + ":\\b";
    }

    var d = "ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";
    var e = "above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";
    var a = "[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";
    this.regexList = [
        {regex: SyntaxHighlighter.regexLib.multiLineCComments, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: "string"},
        {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"},
        {regex: /\#[a-fA-F0-9]{3,6}/g, css: "value"},
        {regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g, css: "value"},
        {regex: /!important/g, css: "color3"},
        {regex: new RegExp(b(d), "gm"), css: "keyword"},
        {regex: new RegExp(c(e), "g"), css: "value"},
        {regex: new RegExp(this.getKeywords(a), "g"), css: "color1"}
    ];
    this.forHtmlScript({left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi});
};
SyntaxHighlighter.brushes.CSS.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CSS.aliases = ["css"];
SyntaxHighlighter.brushes.JScript = function () {
    var a = "break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with";
    this.regexList = [
        {regex: SyntaxHighlighter.regexLib.singleLineCComments, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.multiLineCComments, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: "string"},
        {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"},
        {regex: /\s*#.*/gm, css: "preprocessor"},
        {regex: new RegExp(this.getKeywords(a), "gm"), css: "keyword"}
    ];
    this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};
SyntaxHighlighter.brushes.JScript.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.JScript.aliases = ["js", "jscript", "javascript"];
SyntaxHighlighter.brushes.Sql = function () {
    var a = "abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year";
    var b = "absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work";
    var c = "all and any between cross in join like not null or outer some";
    this.regexList = [
        {regex: /--(.*)$/gm, css: "comments"},
        {regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: "string"},
        {regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: "string"},
        {regex: new RegExp(this.getKeywords(a), "gmi"), css: "color2"},
        {regex: new RegExp(this.getKeywords(c), "gmi"), css: "color1"},
        {regex: new RegExp(this.getKeywords(b), "gmi"), css: "keyword"}
    ];
};
SyntaxHighlighter.brushes.Sql.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Sql.aliases = ["sql"];
SyntaxHighlighter.brushes.Xml = function () {
    function a(e, g) {
        var d = SyntaxHighlighter.Match, c = e[0], i = new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)", "xg").exec(c), h = [];
        if (e.attributes != null) {
            var b, f = new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)", "xg");
            while ((b = f.exec(c)) != null) {
                h.push(new d(b.name, e.index + b.index, "color1"));
                h.push(new d(b.value, e.index + b.index + b[0].indexOf(b.value), "string"));
            }
        }
        if (i != null) {
            h.push(new d(i.name, e.index + i[0].indexOf(i.name), "keyword"));
        }
        return h;
    }

    this.regexList = [
        {regex: new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)", "gm"), css: "color2"},
        {regex: SyntaxHighlighter.regexLib.xmlComments, css: "comments"},
        {regex: new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)", "sg"), func: a}
    ];
};
SyntaxHighlighter.brushes.Xml.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Xml.aliases = ["xml", "xhtml", "xslt", "html"];
function UpdateShoppingCartInfo(a) {
    var b = document.getElementById("shop_nitems_header");
    if (b) {
        if (a == 1) {
            b.innerHTML = a + " item";
        } else {
            b.innerHTML = a + " items";
        }
    }
    var c = document.getElementById("shop_nitems_trail");
    if (c) {
        if (a == 1) {
            c.innerHTML = a + " item";
        } else {
            c.innerHTML = a + " items";
        }
    }
}
function TextHTMLHelp() {
    var a = "";
    a += "HTML\nSelect HTML if your email package supports pictures and rich text layouts.\n\nText\nSelect text if you are using an older email package, or you prefer plain text emails.\n";
    alert(a);
    return false;
}
function addEvent(c, a, b) {
    if (c.addEventListener) {
        c.addEventListener(a, b, false);
        return true;
    } else {
        if (c.attachEvent) {
            var d = c.attachEvent("on" + a, b);
            return d;
        } else {
            return false;
        }
    }
}
function removeEvent(c, a, b, e) {
    if (c.removeEventListener) {
        c.removeEventListener(a, b, e);
        return true;
    } else {
        if (c.detachEvent) {
            var d = c.detachEvent("on" + a, b);
            return d;
        } else {
            alert("Handler could not be removed");
        }
    }
}
function getViewportHeight() {
    if (window.innerHeight != window.undefined) {
        return window.innerHeight;
    }
    if (document.compatMode == "CSS1Compat") {
        return document.documentElement.clientHeight;
    }
    if (document.body) {
        return document.body.clientHeight;
    }
    return window.undefined;
}
function getViewportWidth() {
    var a = 17;
    var b = null;
    if (window.innerWidth != window.undefined) {
        return window.innerWidth;
    }
    if (document.compatMode == "CSS1Compat") {
        return document.documentElement.clientWidth;
    }
    if (document.body) {
        return document.body.clientWidth;
    }
}
function getScrollTop() {
    if (self.pageYOffset) {
        return self.pageYOffset;
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        } else {
            if (document.body) {
                return document.body.scrollTop;
            }
        }
    }
}
function getScrollLeft() {
    if (self.pageXOffset) {
        return self.pageXOffset;
    } else {
        if (document.documentElement && document.documentElement.scrollLeft) {
            return document.documentElement.scrollLeft;
        } else {
            if (document.body) {
                return document.body.scrollLeft;
            }
        }
    }
}
var gstrSubModalScriptDir;
var gPopupMask = null;
var gPopupContainer = null;
var gPopFrame = null;
var gReturnFunc;
var gPopupIsShown = false;
var gDefaultPage = gstrSubModalScriptDir + "loading.htm";
var gHideSelects = false;
var gReturnVal = null;
var gTabIndexes = new Array();
var gTabbableTags = new Array("A", "BUTTON", "TEXTAREA", "INPUT", "IFRAME");
if (!document.all) {
    document.onkeypress = keyDownHandler;
}
function initPopUp() {
    theBody = document.getElementsByTagName("BODY")[0];
    popmask = document.createElement("div");
    popmask.id = "popupMask";
    popcont = document.createElement("div");
    popcont.id = "popupContainer";
    popcont.innerHTML = '<div id="popupInner"><div id="popupTitleBar"><div id="popupTitle"></div><div id="popupControls"><img src="' + gstrSubModalScriptDir + 'close.gif" onclick="hidePopWin(false);" id="popCloseBox" alt="Close" /></div></div><iframe src="' + gDefaultPage + '" style="width:100%;height:100%;background-color:transparent;" scrolling="auto" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe></div>';
    theBody.appendChild(popmask);
    theBody.appendChild(popcont);
    gPopupMask = document.getElementById("popupMask");
    gPopupContainer = document.getElementById("popupContainer");
    gPopFrame = document.getElementById("popupFrame");
    var a = parseInt(window.navigator.appVersion.charAt(0), 10);
    if (a <= 6 && window.navigator.userAgent.indexOf("MSIE") > -1) {
        gHideSelects = true;
    }
    var b = document.getElementsByTagName("a");
    for (i = 0; i < b.length; i++) {
        if (b[i].className.indexOf("submodal") == 0) {
            b[i].onclick = function () {
                var d = 400;
                var c = 200;
                params = this.className.split("-");
                if (params.length == 3) {
                    d = parseInt(params[1]);
                    c = parseInt(params[2]);
                }
                showPopWin(this.href, d, c, null);
                return false;
            };
        }
    }
}
function initCheck() {
    var a = document.getElementById("popupContainer");
    if (typeof a == "undefined" || a == null) {
        initPopUp();
    }
}
function showPopWin(f, g, b, c, d, a) {
    initCheck();
    if (d == null || d == true) {
        document.getElementById("popCloseBox").style.display = "block";
    } else {
        document.getElementById("popCloseBox").style.display = "none";
    }
    gPopupIsShown = true;
    disableTabIndexes();
    gPopupMask.style.display = "block";
    gPopupContainer.style.display = "block";
    centerPopWin(g, b);
    var e = parseInt(document.getElementById("popupTitleBar").offsetHeight, 10);
    gPopupContainer.style.width = g + "px";
    gPopupContainer.style.height = (b + e) + "px";
    setMaskSize();
    gPopFrame.style.width = parseInt(document.getElementById("popupTitleBar").offsetWidth, 10) + "px";
    gPopFrame.style.height = (b) + "px";
    gPopFrame.src = f;
    gReturnFunc = c;
    if (gHideSelects == true) {
        hideSelectBoxes();
    }
    if (a != false || a == null) {
        window.setTimeout("setPopTitle();", 600);
    }
}
var gi = 0;
function centerPopWin(h, c) {
    if (gPopupIsShown == true) {
        if (h == null || isNaN(h)) {
            h = gPopupContainer.offsetWidth;
        }
        if (c == null) {
            c = gPopupContainer.offsetHeight;
        }
        var f = document.getElementsByTagName("BODY")[0];
        var e = parseInt(getScrollTop(), 10);
        var d = parseInt(f.scrollLeft, 10);
        setMaskSize();
        var g = parseInt(document.getElementById("popupTitleBar").offsetHeight, 10);
        var a = getViewportHeight();
        var b = getViewportWidth();
        gPopupContainer.style.top = (e + ((a - (c + g)) / 2)) + "px";
        gPopupContainer.style.left = (d + ((b - h) / 2)) + "px";
    }
}
addEvent(window, "resize", centerPopWin);
addEvent(window, "scroll", centerPopWin);
window.onscroll = centerPopWin;
function setMaskSize() {
    var c = document.getElementsByTagName("BODY")[0];
    var a = getViewportHeight();
    var b = getViewportWidth();
    if (a > c.scrollHeight) {
        popHeight = a;
    } else {
        popHeight = c.scrollHeight;
    }
    if (b > c.scrollWidth) {
        popWidth = b;
    } else {
        popWidth = c.scrollWidth;
    }
    gPopupMask.style.height = popHeight + "px";
    gPopupMask.style.width = popWidth + "px";
}
function hidePopWin(a) {
    gPopupIsShown = false;
    var b = document.getElementsByTagName("BODY")[0];
    b.style.overflow = "";
    restoreTabIndexes();
    if (gPopupMask == null) {
        return;
    }
    gPopupMask.style.display = "none";
    gPopupContainer.style.display = "none";
    if (a == true && gReturnFunc != null) {
        gReturnVal = window.frames.popupFrame.returnVal;
        window.setTimeout("gReturnFunc(gReturnVal);", 1);
    }
    gPopFrame.src = gDefaultPage;
    if (gHideSelects == true) {
        displaySelectBoxes();
    }
}
function setPopTitle() {
    if (window.frames.popupFrame.document.title == null) {
        window.setTimeout("setPopTitle();", 10);
    } else {
        document.getElementById("popupTitle").innerHTML = window.frames.popupFrame.document.title;
        return true;
    }
}
function keyDownHandler(a) {
    if (gPopupIsShown && a.keyCode == 9) {
        return false;
    }
}
function disableTabIndexes() {
    if (document.all) {
        var a = 0;
        for (var b = 0; b < gTabbableTags.length; b++) {
            var d = document.getElementsByTagName(gTabbableTags[b]);
            for (var c = 0; c < d.length; c++) {
                gTabIndexes[a] = d[c].tabIndex;
                d[c].tabIndex = "-1";
                a++;
            }
        }
    }
}
function restoreTabIndexes() {
    if (document.all) {
        var a = 0;
        for (var b = 0; b < gTabbableTags.length; b++) {
            var d = document.getElementsByTagName(gTabbableTags[b]);
            for (var c = 0; c < d.length; c++) {
                d[c].tabIndex = gTabIndexes[a];
                d[c].tabEnabled = true;
                a++;
            }
        }
    }
}
function hideSelectBoxes() {
    var a = document.getElementsByTagName("SELECT");
    for (i = 0; a && i < a.length; i++) {
        a[i].style.visibility = "hidden";
    }
}
function displaySelectBoxes() {
    var a = document.getElementsByTagName("SELECT");
    for (i = 0; a && i < a.length; i++) {
        a[i].style.visibility = "visible";
    }
}
if (!gstrSurveysPortal) {
    var gstrSurveysPortal = location.hostname;
}
datNow = new Date();
strRemoteSurveysScript = '<script src="http://' + gstrSurveysPortal + "/forms/includes/js/remote_surveys.js.aspx?dt=" + datNow.toString() + '"></script>';
document.writeln(strRemoteSurveysScript);