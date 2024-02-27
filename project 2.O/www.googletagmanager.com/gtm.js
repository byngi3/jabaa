// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "3",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []









    };


    var ba, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ka = function(a) {
            return a instanceof Array ? a :
                ja(ia(a))
        },
        la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma,
        ra = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Fn = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var sa = this || self,
        va = function(a) {
            return a
        };
    var wa = function() {},
        xa = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        ya = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        za = Array.isArray,
        Aa = function(a, b) {
            if (a && za(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ba = function(a, b) {
            if (!ya(a) || !ya(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Da = function(a, b) {
            for (var c = new Ca, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ia = function(a) {
            var b = [];
            if (za(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ja = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ka = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ka().getTime()
        },
        Ca = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ca.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ca.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Na = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Oa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Ra = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Sa = /^\w{1,9}$/,
        Ta = function(a,
            b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Sa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ua = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wa = function(a) {
            if (null == a) return String(a);
            var b = Va.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Xa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ya = function(a) {
            if (!a || "object" != Wa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Xa(a, b)
        },
        A = function(a, b) {
            var c = b || ("array" == Wa(a) ? [] : {}),
                d;
            for (d in a)
                if (Xa(a, d)) {
                    var e = a[d];
                    "array" == Wa(e) ? ("array" != Wa(c[d]) && (c[d] = []), c[d] = A(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = A(e, c[d])) : c[d] = e
                }
            return c
        };

    function Za() {
        for (var a = $a, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function bb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var $a, cb;

    function db(a) {
        $a = $a || bb();
        cb = cb || Za();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push($a[m], $a[n], $a[p], $a[q])
        }
        return b.join("")
    }

    function eb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = cb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        $a = $a || bb();
        cb = cb || Za();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var fb = {},
        gb = function(a, b) {
            fb[a] = fb[a] || [];
            fb[a][b] = !0
        },
        hb = function() {
            delete fb.GA4_EVENT
        },
        ib = function(a) {
            var b = fb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return db(c.join("")).replace(/\.+$/, "")
        };
    var jb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null,
                b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                kb = a
            } else kb = a
        }
        return kb
    };
    var mb = function(a) {
        this.h = a
    };
    mb.prototype.toString = function() {
        return this.h + ""
    };
    var nb = {};
    var ob, pb;
    a: {
        for (var qb = ["CLOSURE_FLAGS"], rb = sa, sb = 0; sb < qb.length; sb++)
            if (rb = rb[qb[sb]], null == rb) {
                pb = null;
                break a
            }
        pb = rb
    }
    var tb = pb && pb[610401301];
    ob = null != tb ? tb : !1;

    function ub() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var vb, wb = sa.navigator;
    vb = wb ? wb.userAgentData || null : null;

    function xb(a) {
        return ob ? vb ? vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function yb(a) {
        return -1 != ub().indexOf(a)
    };

    function zb() {
        return ob ? !!vb && 0 < vb.brands.length : !1
    }

    function Ab() {
        return zb() ? !1 : yb("Opera")
    }

    function Bb() {
        return yb("Firefox") || yb("FxiOS")
    }

    function Cb() {
        return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
    };
    var Db = {},
        Eb = function(a) {
            this.h = a
        };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = function(a) {
        return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Gb = ea([""]),
        Hb = ha(["\x00"], ["\\0"]),
        Ib = ha(["\n"], ["\\n"]),
        Jb = ha(["\x00"], ["\\u0000"]);

    function Kb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Kb(function(a) {
        return a(Gb)
    }) || Kb(function(a) {
        return a(Hb)
    }) || Kb(function(a) {
        return a(Ib)
    }) || Kb(function(a) {
        return a(Jb)
    });
    var Lb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function Mb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Nb(a) {
        var b = a = Ob(a),
            c = lb(),
            d = c ? c.createHTML(b) : b;
        return new Eb(d, Db)
    }

    function Ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var F = window,
        G = document,
        Pb = navigator,
        Qb = G.currentScript && G.currentScript.src,
        Rb = function(a, b) {
            var c = F[a];
            F[a] = void 0 === c ? b : c;
            return F[a]
        },
        Sb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Tb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ub = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Vb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Xb = function(a, b, c, d, e) {
            var f = G.createElement("script");
            Vb(f, d, Tb);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var h, l = Ob(a),
                m = lb(),
                n = m ? m.createScriptURL(l) : l;
            h = new mb(n, nb);
            f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, t, r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Sb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = G.getElementsByTagName("script")[0] || G.body || G.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Yb = function() {
            if (Qb) {
                var a = Qb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = G.createElement("iframe"), l = !0);
            Vb(h, c, Ub);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = G.body &&
                    G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(h, m)
            }
            Sb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        $b = function(a, b, c, d) {
            var e = new Image(1, 1);
            Vb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        ac = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        bc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            F.setTimeout(a, 0)
        },
        cc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        dc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ec = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = Nb("A<div>" + a + "</div>");
            1 === c.nodeType && Mb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        fc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        gc = function(a) {
            var b;
            try {
                b = Pb.sendBeacon && Pb.sendBeacon(a)
            } catch (c) {
                gb("TAGGING", 15)
            }
            b || $b(a)
        },
        hc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        ic = function() {
            var a = F.performance;
            if (a && xa(a.now)) return a.now()
        },
        jc = function() {
            return F.performance || void 0
        };
    var kc = function(a) {
        this.message = a
    };

    function lc(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return void 0 === b ? new kc("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function mc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var nc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            gj: a("consent"),
            Rg: a("convert_case_to"),
            Sg: a("convert_false_to"),
            Tg: a("convert_null_to"),
            Ug: a("convert_true_to"),
            Vg: a("convert_undefined_to"),
            Om: a("debug_mode_metadata"),
            ma: a("function"),
            Pf: a("instance_name"),
            lk: a("live_only"),
            mk: a("malware_disabled"),
            nk: a("metadata"),
            rk: a("original_activity_id"),
            hn: a("original_vendor_template_id"),
            gn: a("once_on_load"),
            qk: a("once_per_event"),
            ai: a("once_per_load"),
            mn: a("priority_override"),
            nn: a("respected_consent_types"),
            gi: a("setup_tags"),
            xd: a("tag_id"),
            li: a("teardown_tags")
        }
    }();
    var Jc;
    var Kc = [],
        Lc = [],
        Mc = [],
        Nc = [],
        Oc = [],
        Pc = {},
        Qc, Rc, Sc = function(a) {
            Rc = Rc || a
        },
        Tc = function(a) {},
        Uc, Vc = [],
        Xc = [],
        Yc = function(a, b) {
            var c = a[nc.ma],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Pc[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Vc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var t;
                            switch (p) {
                                case 2:
                                    t = Kc[q];
                                    break;
                                case 1:
                                    t = Nc[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = t && t[nc.Pf];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName =
                    b.name)
            }
            var u, v, w;
            if (f && -1 === Xc.indexOf(c)) {
                Xc.push(c);
                var x = La();
                u = e(h);
                var y = La() - x,
                    B = La();
                v = Jc(c, l, b);
                w = y - (La() - B)
            } else if (e && (u = e(h)), !e || f) v = Jc(c, l, b);
            if (f && d) {
                d.reportMacroDiscrepancy(d.id, c, void 0, !0);
                var z;
                a: {
                    var C = u;
                    if (void 0 == C || za(C) || Ya(C)) z = !0;
                    else {
                        switch (typeof C) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                z = !0;
                                break a
                        }
                        z = !1
                    }
                }
                z ? (za(u) ? za(v) : Ya(u) ? Ya(v) : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c);
                void 0 != w && d.reportMacroDiscrepancy(d.id,
                    c, w)
            }
            return e ? u : v
        },
        $c = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Zc(a[e], b, c));
            return d
        },
        Zc = function(a, b, c) {
            if (za(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Zc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Kc[f];
                        if (!h || b.isBlocked(h)) return;
                        c[f] = !0;
                        var l = String(h[nc.Pf]);
                        try {
                            var m = $c(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Yc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Uc && (d = Uc.Nk(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Zc(a[n], b, c)] = Zc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = Zc(a[q], b, c);
                            Rc && (p = p || Rc.Gl(t));
                            d.push(t)
                        }
                        return Rc && p ? Rc.Pk(d) : d.join("");
                    case "escape":
                        d = Zc(a[1], b, c);
                        if (Rc && za(a[1]) && "macro" === a[1][0] && Rc.Hl(a)) return Rc.gm(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) oc[a[r]] && (d = oc[a[r]](d));
                        return d;
                    case "tag":
                        var u =
                            a[1];
                        if (!Nc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            xi: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[nc.ma] = a[1];
                        var w = ad(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ad = function(a, b, c) {
            try {
                return Qc($c(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        bd = function(a) {
            var b = a[nc.ma];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Pc[b]
        };
    var ed = function(a) {
            function b(t) {
                for (var r = 0; r < t.length; r++) d[t[r]] = !0
            }
            for (var c = [], d = [], e = cd(a), f = 0; f < Lc.length; f++) {
                var h = Lc[f],
                    l = dd(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Nc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        dd = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        cd = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ad(Mc[c], a));
                return b[c]
            }
        };
    var fd = {
        Nk: function(a, b) {
            b[nc.Rg] && "string" === typeof a && (a = 1 == b[nc.Rg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(nc.Tg) && null === a && (a = b[nc.Tg]);
            b.hasOwnProperty(nc.Vg) && void 0 === a && (a = b[nc.Vg]);
            b.hasOwnProperty(nc.Ug) && !0 === a && (a = b[nc.Ug]);
            b.hasOwnProperty(nc.Sg) && !1 === a && (a = b[nc.Sg]);
            return a
        }
    };
    var gd = [],
        hd = {},
        id = function(a) {
            return void 0 == gd[a] ? !1 : gd[a]
        };
    var wd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        xd = new Ca;
    var Ed = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Fd(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = lc(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = lc(a | b) + c
    };
    var Hd = function(a) {
            return Gd ? G.querySelectorAll(a) : null
        },
        Id = function(a, b) {
            if (!Gd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Jd = !1;
    if (G.querySelectorAll) try {
        var Kd = G.querySelectorAll(":root");
        Kd && 1 == Kd.length && Kd[0] == G.documentElement && (Jd = !0)
    } catch (a) {}
    var Gd = Jd;
    var K = function(a) {
        gb("GTM", a)
    };
    var M = {
            g: {
                Ba: "ad_personalization",
                F: "ad_storage",
                K: "ad_user_data",
                O: "analytics_storage",
                ae: "region",
                fc: "consent_updated",
                Mg: "wait_for_update",
                Wg: "ads",
                Nm: "all",
                kj: "maps",
                lj: "playstore",
                mj: "search",
                nj: "shopping",
                oj: "youtube",
                qj: "app_remove",
                rj: "app_store_refund",
                sj: "app_store_subscription_cancel",
                tj: "app_store_subscription_convert",
                uj: "app_store_subscription_renew",
                Xg: "add_payment_info",
                Yg: "add_shipping_info",
                hc: "add_to_cart",
                ic: "remove_from_cart",
                Zg: "view_cart",
                Gb: "begin_checkout",
                jc: "select_item",
                ab: "view_item_list",
                sb: "select_promotion",
                cb: "view_promotion",
                ra: "purchase",
                kc: "refund",
                Ha: "view_item",
                ah: "add_to_wishlist",
                vj: "exception",
                wj: "first_open",
                xj: "first_visit",
                aa: "gtag.config",
                Ma: "gtag.get",
                yj: "in_app_purchase",
                mc: "page_view",
                zj: "screen_view",
                Aj: "session_start",
                Bj: "timing_complete",
                Cj: "track_social",
                be: "user_engagement",
                eb: "gclgb",
                Na: "gclid",
                W: "ads_data_redaction",
                bh: "gad_source",
                Jc: "gclid_url",
                eh: "gclsrc",
                ce: "wbraid",
                fa: "allow_ad_personalization_signals",
                uf: "allow_custom_scripts",
                vf: "allow_display_features",
                de: "allow_enhanced_conversions",
                fb: "allow_google_signals",
                Ca: "allow_interest_groups",
                Dj: "app_id",
                Ej: "app_installer_id",
                Fj: "app_name",
                Gj: "app_version",
                tb: "auid",
                Hj: "auto_detection_enabled",
                Hb: "aw_remarketing",
                wf: "aw_remarketing_only",
                ee: "discount",
                fe: "aw_feed_country",
                he: "aw_feed_language",
                U: "items",
                ie: "aw_merchant_id",
                fh: "aw_basket_type",
                Kc: "campaign_content",
                Lc: "campaign_id",
                Mc: "campaign_medium",
                Nc: "campaign_name",
                Oc: "campaign",
                Pc: "campaign_source",
                Qc: "campaign_term",
                ub: "client_id",
                gh: "rnd",
                Ij: "content_group",
                Jj: "content_type",
                Ta: "conversion_cookie_prefix",
                Rc: "conversion_id",
                sa: "conversion_linker",
                Kj: "conversion_linker_disabled",
                Ib: "conversion_api",
                je: "cookie_deprecation",
                Ua: "cookie_domain",
                Oa: "cookie_expires",
                Va: "cookie_flags",
                nc: "cookie_name",
                oc: "cookie_path",
                Pa: "cookie_prefix",
                qc: "cookie_update",
                sc: "country",
                wa: "currency",
                ke: "customer_lifetime_value",
                Sc: "custom_map",
                xf: "gcldc",
                Tc: "dclid",
                Lj: "debug_mode",
                ba: "developer_id",
                Mj: "disable_merchant_reported_purchases",
                Uc: "dc_custom_params",
                Nj: "dc_natural_search",
                hh: "dynamic_event_settings",
                ih: "affiliation",
                me: "checkout_option",
                yf: "checkout_step",
                jh: "coupon",
                Vc: "item_list_name",
                zf: "list_name",
                Oj: "promotions",
                Wc: "shipping",
                Af: "tax",
                ne: "engagement_time_msec",
                oe: "enhanced_client_id",
                pe: "enhanced_conversions",
                kh: "enhanced_conversions_automatic_settings",
                qe: "estimated_delivery_date",
                Bf: "euid_logged_in_state",
                Xc: "event_callback",
                Pj: "event_category",
                ib: "event_developer_id_string",
                Qj: "event_label",
                se: "event",
                te: "event_settings",
                ue: "event_timeout",
                Rj: "description",
                Sj: "fatal",
                Tj: "experiments",
                Cf: "firebase_id",
                Yc: "first_party_collection",
                ve: "_x_20",
                jb: "_x_19",
                lh: "fledge",
                mh: "flight_error_code",
                nh: "flight_error_message",
                oh: "fl_activity_category",
                ph: "fl_activity_group",
                Df: "fl_advertiser_id",
                qh: "fl_ar_dedupe",
                Ef: "match_id",
                rh: "fl_random_number",
                sh: "tran",
                th: "u",
                we: "gac_gclid",
                uc: "gac_wbraid",
                uh: "gac_wbraid_multiple_conversions",
                vh: "ga_restrict_domain",
                wh: "ga_temp_client_id",
                vc: "gdpr_applies",
                xh: "geo_granularity",
                vb: "value_callback",
                kb: "value_key",
                Rm: "google_ono",
                Jb: "google_signals",
                yh: "google_tld",
                xe: "groups",
                zh: "gsa_experiment_id",
                ye: "iframe_state",
                Zc: "ignore_referrer",
                Ff: "internal_traffic_results",
                wb: "is_legacy_converted",
                xb: "is_legacy_loaded",
                ze: "is_passthrough",
                wc: "_lps",
                Ja: "language",
                Ae: "legacy_developer_id_string",
                Da: "linker",
                xc: "accept_incoming",
                yb: "decorate_forms",
                R: "domains",
                Kb: "url_position",
                Ah: "method",
                Uj: "name",
                ad: "new_customer",
                Bh: "non_interaction",
                Vj: "optimize_id",
                Wj: "page_hostname",
                bd: "page_path",
                Ea: "page_referrer",
                zb: "page_title",
                Ch: "passengers",
                Dh: "phone_conversion_callback",
                Xj: "phone_conversion_country_code",
                Eh: "phone_conversion_css_class",
                Yj: "phone_conversion_ids",
                Fh: "phone_conversion_number",
                Gh: "phone_conversion_options",
                Gf: "_protected_audience_enabled",
                dd: "quantity",
                Be: "redact_device_info",
                Hf: "referral_exclusion_definition",
                Lb: "restricted_data_processing",
                Zj: "retoken",
                bk: "sample_rate",
                If: "screen_name",
                Ab: "screen_resolution",
                dk: "search_term",
                Ka: "send_page_view",
                Mb: "send_to",
                ed: "server_container_url",
                fd: "session_duration",
                Ce: "session_engaged",
                Jf: "session_engaged_time",
                Bb: "session_id",
                De: "session_number",
                gd: "delivery_postal_code",
                Sm: "temporary_client_id",
                Kf: "topmost_url",
                ek: "tracking_id",
                Lf: "traffic_type",
                xa: "transaction_id",
                Nb: "transport_url",
                Hh: "trip_type",
                Ob: "update",
                Wa: "url_passthrough",
                hd: "_user_agent_architecture",
                jd: "_user_agent_bitness",
                kd: "_user_agent_full_version_list",
                ld: "_user_agent_mobile",
                md: "_user_agent_model",
                nd: "_user_agent_platform",
                od: "_user_agent_platform_version",
                pd: "_user_agent_wow64",
                Fa: "user_data",
                Ih: "user_data_auto_latency",
                Jh: "user_data_auto_meta",
                Kh: "user_data_auto_multi",
                Lh: "user_data_auto_selectors",
                Mh: "user_data_auto_status",
                Ee: "user_data_mode",
                Fe: "user_data_settings",
                Qa: "user_id",
                Xa: "user_properties",
                Nh: "_user_region",
                Ge: "us_privacy_string",
                ia: "value",
                Oh: "wbraid_multiple_conversions",
                Uh: "_host_name",
                Vh: "_in_page_command",
                Wh: "_is_passthrough_cid",
                nb: "non_personalized_ads",
                wd: "_sst_parameters",
                hb: "conversion_label",
                oa: "page_location",
                lb: "global_developer_id_string",
                yc: "tc_privacy_string"
            }
        },
        je = {},
        ke = Object.freeze((je[M.g.fa] =
            1, je[M.g.vf] = 1, je[M.g.de] = 1, je[M.g.fb] = 1, je[M.g.U] = 1, je[M.g.Ua] = 1, je[M.g.Oa] = 1, je[M.g.Va] = 1, je[M.g.nc] = 1, je[M.g.oc] = 1, je[M.g.Pa] = 1, je[M.g.qc] = 1, je[M.g.Sc] = 1, je[M.g.ba] = 1, je[M.g.hh] = 1, je[M.g.Xc] = 1, je[M.g.te] = 1, je[M.g.ue] = 1, je[M.g.Yc] = 1, je[M.g.vh] = 1, je[M.g.Jb] = 1, je[M.g.yh] = 1, je[M.g.xe] = 1, je[M.g.Ff] = 1, je[M.g.wb] = 1, je[M.g.xb] = 1, je[M.g.Da] = 1, je[M.g.Hf] = 1, je[M.g.Lb] = 1, je[M.g.Ka] = 1, je[M.g.Mb] = 1, je[M.g.ed] = 1, je[M.g.fd] = 1, je[M.g.Jf] = 1, je[M.g.gd] = 1, je[M.g.Nb] = 1, je[M.g.Ob] = 1, je[M.g.Fe] = 1, je[M.g.Xa] = 1, je[M.g.wd] =
            1, je));
    Object.freeze([M.g.oa, M.g.Ea, M.g.zb, M.g.Ja, M.g.If, M.g.Qa, M.g.Cf, M.g.Ij]);
    var le = {},
        me = Object.freeze((le[M.g.qj] = 1, le[M.g.rj] = 1, le[M.g.sj] = 1, le[M.g.tj] = 1, le[M.g.uj] = 1, le[M.g.wj] = 1, le[M.g.xj] = 1, le[M.g.yj] = 1, le[M.g.Aj] = 1, le[M.g.be] = 1, le)),
        ne = {},
        oe = Object.freeze((ne[M.g.Xg] = 1, ne[M.g.Yg] = 1, ne[M.g.hc] = 1, ne[M.g.ic] = 1, ne[M.g.Zg] = 1, ne[M.g.Gb] = 1, ne[M.g.jc] = 1, ne[M.g.ab] = 1, ne[M.g.sb] = 1, ne[M.g.cb] = 1, ne[M.g.ra] = 1, ne[M.g.kc] = 1, ne[M.g.Ha] = 1, ne[M.g.ah] = 1, ne)),
        pe = Object.freeze([M.g.fa, M.g.fb, M.g.qc, M.g.Yc, M.g.Zc, M.g.Ka, M.g.Ob]),
        qe = Object.freeze([].concat(pe)),
        re = Object.freeze([M.g.Oa, M.g.ue,
            M.g.fd, M.g.Jf, M.g.ne
        ]),
        se = Object.freeze([].concat(re)),
        te = {},
        ue = (te[M.g.F] = "1", te[M.g.O] = "2", te[M.g.K] = "3", te[M.g.Ba] = "4", te),
        ve = {},
        we = Object.freeze((ve[M.g.fa] = 1, ve[M.g.de] = 1, ve[M.g.Ca] = 1, ve[M.g.Hb] = 1, ve[M.g.wf] = 1, ve[M.g.ee] = 1, ve[M.g.fe] = 1, ve[M.g.he] = 1, ve[M.g.U] = 1, ve[M.g.ie] = 1, ve[M.g.Ta] = 1, ve[M.g.sa] = 1, ve[M.g.Ua] = 1, ve[M.g.Oa] = 1, ve[M.g.Va] = 1, ve[M.g.Pa] = 1, ve[M.g.wa] = 1, ve[M.g.ke] = 1, ve[M.g.ba] = 1, ve[M.g.Mj] = 1, ve[M.g.pe] = 1, ve[M.g.qe] = 1, ve[M.g.Cf] = 1, ve[M.g.Yc] = 1, ve[M.g.wb] = 1, ve[M.g.xb] = 1, ve[M.g.Ja] = 1, ve[M.g.ad] =
            1, ve[M.g.oa] = 1, ve[M.g.Ea] = 1, ve[M.g.Dh] = 1, ve[M.g.Eh] = 1, ve[M.g.Fh] = 1, ve[M.g.Gh] = 1, ve[M.g.Lb] = 1, ve[M.g.Ka] = 1, ve[M.g.Mb] = 1, ve[M.g.ed] = 1, ve[M.g.gd] = 1, ve[M.g.xa] = 1, ve[M.g.Nb] = 1, ve[M.g.Ob] = 1, ve[M.g.Wa] = 1, ve[M.g.Fa] = 1, ve[M.g.Qa] = 1, ve[M.g.ia] = 1, ve)),
        xe = {},
        ye = Object.freeze((xe[M.g.mj] = "s", xe[M.g.oj] = "y", xe[M.g.lj] = "p", xe[M.g.nj] = "h", xe[M.g.Wg] = "a", xe[M.g.kj] = "m", xe));
    Object.freeze(M.g);
    var ze = {},
        Ae = F.google_tag_manager = F.google_tag_manager || {},
        Be = Math.random();
    ze.Qf = "42l0";
    ze.vd = Number("0") || 0;
    ze.da = "dataLayer";
    ze.Lm = "ChAIgIrxrgYQu9/hgpufq41SEiQAOJRaVkTMflF0oGek3Xpq0NX29fhU1AYeCEh5Mi/90HRxYwgaAuNN";
    var Ce = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        De = {
            __paused: 1,
            __tg: 1
        },
        Ee;
    for (Ee in Ce) Ce.hasOwnProperty(Ee) && (De[Ee] = 1);
    var Fe = Ga(""),
        Ge, He = !1;
    Ge = He;
    var Ie, Je = !1;
    Ie = Je;
    var Ke, Le = !1;
    Ke = Le;
    ze.Ic = "www.googletagmanager.com";
    var Me = "" + ze.Ic + (Ge ? "/gtag/js" : "/gtm.js"),
        Ne = null,
        Oe = null,
        Pe = {},
        Qe = {},
        Re = function() {
            var a = Ae.sequence || 1;
            Ae.sequence = a + 1;
            return a
        };
    ze.ij = "";
    var Se = "";
    ze.Ne = Se;
    var Te = new function() {
            this.h = "";
            this.s = !1;
            this.M = this.J = this.T = this.C = ""
        },
        Ue = function() {
            var a = Te.C.length;
            return "/" === Te.C[a - 1] ? Te.C.substring(0, a - 1) : Te.C
        };

    function Ve(a) {
        for (var b = {}, c = ia(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var We = new Ca,
        Xe = {},
        Ye = {},
        af = {
            name: ze.da,
            set: function(a, b) {
                A(Ra(a, b), Xe);
                Ze()
            },
            get: function(a) {
                return $e(a, 2)
            },
            reset: function() {
                We = new Ca;
                Xe = {};
                Ze()
            }
        },
        $e = function(a, b) {
            return 2 != b ? We.get(a) : bf(a)
        },
        bf = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Xe, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        cf = function(a, b) {
            Ye.hasOwnProperty(a) || (We.set(a, b), A(Ra(a, b), Xe), Ze())
        },
        Ze = function(a) {
            k(Ye, function(b, c) {
                We.set(b, c);
                A(Ra(b), Xe);
                A(Ra(b,
                    c), Xe);
                a && delete Ye[b]
            })
        },
        df = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? bf(a) : We.get(a);
            "array" === Wa(d) || "object" === Wa(d) ? c = A(d) : c = d;
            return c
        };
    var hf = [];

    function jf(a) {
        switch (a) {
            case 0:
                return 0;
            case 89:
                return 19;
            case 42:
                return 14;
            case 52:
                return 11;
            case 53:
                return 12;
            case 56:
                return 13;
            case 54:
                return 15;
            case 79:
                return 16;
            case 83:
                return 20;
            case 88:
                return 18;
            case 41:
                return 21
        }
    }

    function P(a) {
        hf[a] = !0;
        var b = jf(a);
        void 0 !== b && (gd[b] = !0)
    }
    P(5);
    P(6);
    P(7);
    P(8);
    P(9);
    P(10);
    P(11);
    P(14);
    P(12);
    P(15);
    P(18);
    P(19);
    P(21);
    P(22);
    P(25);
    P(26);
    P(27);
    P(29);
    P(30);
    P(34);
    P(36);
    P(39);
    P(40);
    P(43);
    P(44);
    P(45);
    P(47);
    P(48);
    P(49);
    P(54);
    P(57);
    P(62);
    P(66);
    P(71);
    P(73);
    P(76);
    P(77);
    P(78);
    P(79);
    kf(28, 87);
    P(91);
    hd[1] = Number('60000') || 6E4;
    hd[2] = Number('') || 50;

    function kf(a, b) {
        for (var c = void 0, d = void 0, e = 0; c === d;)
            if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
        c ? P(a) : P(b)
    }

    function R(a) {
        return !!hf[a]
    }
    var lf = function(a) {
        gb("HEALTH", a)
    };
    var mf;
    try {
        mf = JSON.parse(eb("eyIwIjoiSU4iLCIxIjoiSU4tS0wiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        K(123), lf(2), mf = {}
    }
    var nf = function() {
            return mf["0"] || ""
        },
        of = function() {
            var a = !1;
            return a
        },
        pf = function() {
            var a = "";
            return a
        },
        qf = function() {
            var a = !1;
            return a
        },
        rf = function() {
            var a = "";
            return a
        };
    var sf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var tf = function(a) {
        tf[" "](a);
        return a
    };
    tf[" "] = function() {};
    var vf = function() {
        var a = uf,
            b = "kg";
        if (a.kg && a.hasOwnProperty(b)) return a.kg;
        var c = new a;
        return a.kg = c
    };
    var uf = function() {
        var a = {};
        this.h = function() {
            var b = sf.h,
                c = sf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[sf.h] = !0
        }
    };
    var wf = !1,
        xf = !1,
        yf = {},
        zf = {},
        Af = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Bf() {
        var a = Rb("google_tag_data", {});
        return a.ics = a.ics || new Cf
    }
    var Cf = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Cf.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        gb("TAGGING", 19);
        void 0 == b ? gb("TAGGING", 18) : Df(this, a, "granted" === b, c, d, e, f)
    };
    Cf.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Df(this, a[c], void 0, void 0, "", "", b)
    };
    var Df = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if ("" === e || p === f || (p === e ? n !== f : !p && !n)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                t = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = t;
            q && F.setTimeout(function() {
                    l[b] === t && t.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
                },
                h)
        }
    };
    ba = Cf.prototype;
    ba.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in yf) yf.hasOwnProperty(d) && yf[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var h = ia(c), l = h.next(); !l.done; l = h.next()) Ef(this, l.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ia(c), n = m.next(); !n.done; n = m.next()) Ef(this, n.value)
    };
    ba.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    ba.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || m === e || (m === d ? l !== e : !m && !l)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    ba.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    ba.getConsentState = function(a) {
        id(21) && "ad_user_data" === a && (a = "ad_storage");
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (yf.hasOwnProperty(a)) {
            var e = b[yf[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.implicit;
        return void 0 !== d ? d ? 3 : 4 : id(19) && Af.hasOwnProperty(a) ? (gb("TAGGING", 22), Af[a] ? 3 : 4) : 0
    };
    ba.setCps = function() {};
    ba.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Wk: b
        })
    };
    var Ef = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Ii = !0)
        }
    };
    Cf.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Ii) {
                d.Ii = !1;
                try {
                    d.Wk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Ff = function(a) {
            var b = Bf();
            b.accessedAny = !0;
            return (g(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Gf = function(a) {
            var b = Bf();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Hf = function() {
            var a = {},
                b;
            for (b in zf) zf.hasOwnProperty(b) && (a[b] = {
                enabled: zf[b].enabled,
                region: zf[b].region
            });
            for (var c = {}, d = ia(Object.keys(a)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                c[f] = a[f].enabled
            }
            return c
        },
        If = function(a) {
            var b = Bf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Jf = function() {
            if (!vf().h()) return !1;
            var a = Bf();
            a.accessedAny = !0;
            return a.active
        },
        Kf = function(a, b) {
            if (id(21)) {
                for (var c = [], d = a.find(function(l) {
                        return "ad_storage" === l
                    }), e = ia(a), f = e.next(); !f.done; f = e.next()) {
                    var h = f.value;
                    if ("ad_user_data" === h) {
                        if (d) continue;
                        c.push("ad_storage")
                    }
                    c.push(h)
                }
                Bf().addListener(c, b)
            } else Bf().addListener(a, b)
        },
        Lf = function(a, b) {
            Bf().notifyListeners(a, b)
        },
        Mf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!If(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Kf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Nf = function(a, b) {
            function c() {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Ff(n) && !f[n] && l.push(n)
                }
                return l
            }

            function d(l) {
                for (var m = 0; m < l.length; m++) f[l[m]] = !0
            }
            var e = g(b) ? [b] : b,
                f = {},
                h = c();
            h.length !== e.length && (d(h), Kf(e, function(l) {
                function m(q) {
                    0 !== q.length && (d(q), l.consentTypes = q, a(l))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : F.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function Of() {}

    function Pf() {};
    var Qf = [M.g.F, M.g.O, M.g.K, M.g.Ba],
        Rf = function(a) {
            for (var b = a[M.g.ae], c = Array.isArray(b) ? b : [b], d = {
                    Hd: 0
                }; d.Hd < c.length; d = {
                    Hd: d.Hd
                }, ++d.Hd) k(a, function(e) {
                return function(f, h) {
                    if (f !== M.g.ae) {
                        var l = c[e.Hd],
                            m = nf(),
                            n = mf["1"] || "";
                        xf = !0;
                        wf && gb("TAGGING", 20);
                        Bf().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Sf = function(a) {
            var b = a[M.g.ae];
            b && K(40);
            var c = a[M.g.Mg];
            c && K(41);
            for (var d = za(b) ? b : [b], e = {
                    Id: 0
                }; e.Id < d.length; e = {
                    Id: e.Id
                }, ++e.Id) k(a, function(f) {
                return function(h, l) {
                    if (h !== M.g.ae && h !== M.g.Mg) {
                        var m = d[f.Id],
                            n = Number(c),
                            p = nf(),
                            q = mf["1"] || "";
                        wf = !0;
                        xf && gb("TAGGING", 20);
                        Bf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Xf = function(a, b) {
            k(a, function(c, d) {
                wf = !0;
                xf && gb("TAGGING", 20);
                Bf().update(c, d)
            });
            Lf(b.eventId, b.priorityId)
        },
        S = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Ff(b)
            })
        },
        Yf = function(a, b) {
            Nf(a, b)
        },
        Zf = function(a, b) {
            Mf(a, b)
        },
        $f = function() {
            var a = [M.g.F, M.g.Ba, M.g.K];
            Bf().waitForUpdate(a, 500)
        },
        ag = function(a) {
            for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                Bf().clearTimeout(d, void 0)
            }
            Lf()
        };
    var bg = function() {
        function a(b) {
            Ae.pscdl = b
        }
        if (void 0 === Ae.pscdl) try {
            "cookieDeprecationLabel" in Pb ? (a("pending"), Pb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var cg = /[A-Z]+/,
        dg = /\s/,
        eg = function(a, b) {
            if (g(a)) {
                a = Ja(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (cg.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || dg.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            X: d + "-" + f[0],
                            N: f
                        }
                    }
                }
            }
        },
        gg = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = eg(a[d], b);
                e && (c[e.id] = e)
            }
            fg(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function fg(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var hg = /:[0-9]+$/,
        ig = /^\d+\.fls\.doubleclick\.net$/,
        jg = function(a, b, c) {
            for (var d = ia(a.split("&")), e = d.next(); !e.done; e = d.next()) {
                var f = ia(e.value.split("=")),
                    h = f.next().value,
                    l = ja(f);
                if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
                    var m = l.join("=");
                    return c ? m : decodeURIComponent(m.replace(/\+/g, " "))
                }
            }
        },
        mg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = kg(a.protocol) || kg(F.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : F.location.port) ||
                ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || F.location.hostname).replace(hg, "").toLowerCase());
            return lg(a, b, c, d, e)
        },
        lg = function(a, b, c, d, e) {
            var f, h = kg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ng(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(hg, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" ===
                        h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || gb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = jg(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        kg = function(a) {
            return a ? a.replace(":", "").toLowerCase() :
                ""
        },
        ng = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        og = {},
        pg = 0,
        qg = function(a) {
            var b = og[a];
            if (!b) {
                var c = G.createElement("a");
                a && (c.href = a);
                var d = c.pathname;
                "/" !== d[0] && (a || gb("TAGGING", 1), d = "/" + d);
                var e = c.hostname.replace(hg, "");
                b = {
                    href: c.href,
                    protocol: c.protocol,
                    host: c.host,
                    hostname: e,
                    pathname: d,
                    search: c.search,
                    hash: c.hash,
                    port: c.port
                };
                5 > pg && (og[a] = b, pg++)
            }
            return b
        },
        rg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = qg(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        sg = function(a) {
            var b = qg(F.location.href),
                c = mg(b, "host", !1);
            if (c && c.match(ig)) {
                var d = mg(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var tg = {
        "https://www.google.com": "/g",
        "https://www.googlesyndication.com": "/gs",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function ug(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return qg("" + c + b).href
        }
    }

    function vg() {
        return Te.s || Ie
    }

    function wg() {
        return !!ze.Ne && "SGTM_TOKEN" !== ze.Ne.split("@@").join("")
    }

    function xg(a) {
        for (var b = ia([M.g.ed, M.g.Nb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    }

    function yg(a, b) {
        return Te.s ? "" + Ue() + (b ? tg[a] || "" : "") : a
    };
    var zg = function(a) {
            var b = String(a[nc.ma] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        Ag = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency=");
    var Cg = function(a) {
            var b = Bg();
            b.pending || (b.pending = []);
            Aa(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        Dg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        Bg = function() {
            var a = Rb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new Dg, a.tidr = b);
            return b
        };
    var Eg = {},
        Fg = !1,
        Gg = {
            ctid: "GTM-52Z53QV",
            canonicalContainerId: "67942198",
            Gi: "GTM-52Z53QV",
            Hi: "GTM-52Z53QV"
        };
    Eg.rd = Ga("");
    var Jg = function() {
            var a = Hg();
            return Fg ? a.map(Ig) : a
        },
        Lg = function() {
            var a = Kg();
            return Fg ? a.map(Ig) : a
        },
        Ng = function() {
            return Mg(Gg.ctid)
        },
        Og = function() {
            return Mg(Gg.canonicalContainerId || "_" + Gg.ctid)
        },
        Hg = function() {
            return Gg.Gi ? Gg.Gi.split("|") : [Gg.ctid]
        },
        Kg = function() {
            return Gg.Hi ? Gg.Hi.split("|") : []
        },
        Rg = function() {
            var a = Pg(Qg());
            if (a) {
                for (; a.parent;) {
                    var b = Pg(a.parent);
                    if (!b) break;
                    a = b
                }
                return a
            }
        },
        Pg = function(a) {
            var b = Bg();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        Mg = function(a) {
            return Fg ?
                Ig(a) : a
        },
        Ig = function(a) {
            return "siloed_" + a
        },
        Tg = function(a) {
            return Fg ? Sg(a) : a
        };

    function Sg(a) {
        a = String(a);
        return 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
    var Ug = function() {
        var a = !1;
        if (a) {
            var b = Bg();
            if (b.siloed) {
                for (var c = [], d = Hg().map(Ig), e = Kg().map(Ig), f = {}, h = 0; h < b.siloed.length; f = {
                        Re: void 0
                    }, h++) f.Re = b.siloed[h], !Fg && Aa(f.Re.isDestination ? e : d, function(l) {
                    return function(m) {
                        return m === l.Re.ctid
                    }
                }(f)) ? Fg = !0 : c.push(f.Re);
                b.siloed = c
            }
        }
    };

    function Vg() {
        var a = Bg();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Jg(), f = Lg(), h = {}, l = 0; l < a.pending.length; h = {
                    Ud: void 0
                }, l++) h.Ud = a.pending[l], Aa(h.Ud.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ud.target.ctid
                }
            }(h)) ? d || (b = h.Ud.onLoad, d = !0) : c.push(h.Ud);
            a.pending = c;
            if (b) try {
                b(Og())
            } catch (m) {}
        }
    }
    var Wg = function() {
            for (var a = Gg.ctid, b = Jg(), c = Lg(), d = function(n, p) {
                    var q = {
                        canonicalContainerId: Gg.canonicalContainerId,
                        scriptContainerId: a,
                        state: 2,
                        containers: b.slice(),
                        destinations: c.slice()
                    };
                    Qb && (q.scriptSource = Qb);
                    var t = p ? e.destination : e.container,
                        r = t[n];
                    r ? (p && 0 === r.state && K(93), Object.assign(r, q)) : t[n] = q
                }, e = Bg(), f = ia(b), h = f.next(); !h.done; h = f.next()) d(h.value, !1);
            for (var l = ia(c), m = l.next(); !m.done; m = l.next()) d(m.value, !0);
            e.canonical[Og()] = {};
            Vg()
        },
        Qg = function() {
            return {
                ctid: Ng(),
                isDestination: Eg.rd
            }
        };

    function Xg(a) {
        var b = Bg();
        (b.siloed = b.siloed || []).push(a)
    }
    var Yg = function() {
            var a = Bg().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Zg = function() {
            var a = {};
            k(Bg().destination, function(b, c) {
                0 === c.state && (a[Sg(b)] = c)
            });
            return a
        },
        $g = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var ah = {
            sampleRate: "0.005000",
            dj: "",
            cj: Number("5"),
            Gn: Number("")
        },
        bh = [];

    function ch(a) {
        bh.push(a)
    }
    var dh = !1,
        eh;
    if (!(eh = Ag)) {
        var fh = Math.random(),
            gh = ah.sampleRate;
        eh = fh < Number(gh)
    }
    var hh = eh,
        ih = "/a?id=" + Gg.ctid,
        jh = "https://www.googletagmanager.com" + ih,
        kh = void 0,
        lh = {},
        mh = void 0,
        nh = new function() {
            var a = 5;
            0 < ah.cj && (a = ah.cj);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        oh = 1E3;

    function ph(a, b) {
        var c = kh;
        if (void 0 === c)
            if (b) c = Re();
            else return "";
        for (var d = [yg("https://www.googletagmanager.com"), ih], e = ia(bh), f = e.next(); !f.done; f = e.next())
            for (var h = f.value, l = h({
                    eventId: c,
                    Za: !!a,
                    ef: function() {
                        dh = !0
                    }
                }), m = ia(l), n = m.next(); !n.done; n = m.next()) {
                var p = ia(n.value),
                    q = p.next().value,
                    t = p.next().value;
                d.push("&" + q + "=" + t)
            }
        d.push("&z=0");
        return d.join("")
    }

    function qh() {
        mh && (F.clearTimeout(mh), mh = void 0);
        if (void 0 !== kh && rh) {
            var a;
            (a = lh[kh]) || (a = nh.h < nh.s ? !1 : 1E3 > La() - nh.C[nh.h % nh.s]);
            if (a || 0 >= oh--) K(1), lh[kh] = !0;
            else {
                var b = nh.h++ % nh.s;
                nh.C[b] = La();
                var c = ph(!0);
                $b(c);
                if (dh) {
                    var d = c.replace("/a?", "/td?");
                    $b(d)
                }
                rh = dh = !1
            }
        }
    }
    var rh = !1;

    function sh(a) {
        lh[a] || (a !== kh && (qh(), kh = a), rh = !0, mh || (mh = F.setTimeout(qh, 500)), 2022 <= ph().length && qh())
    }
    var th = Ba();

    function uh() {
        th = Ba()
    }

    function vh() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", th]
        ]
    };
    var wh = "",
        xh = [];

    function yh(a) {
        var b = [];
        wh && b.push(["dl", encodeURIComponent(wh)]);
        0 < xh.length && b.push(["tdp", xh.join(".")]);
        a.Za && (wh = "", xh.length = 0, b.length && a.ef());
        return b
    };
    var zh = [];

    function Ah(a) {
        if (!zh.length) return [];
        var b = [
            ["tdc", zh.join("!")]
        ];
        a.Za && (a.ef(), zh.length = 0);
        return b
    };
    var Bh = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Ch = {},
        Dh = Object.freeze((Ch[M.g.Ka] = !0, Ch)),
        Eh = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        Gh = function(a, b, c) {
            if (hh && "config" === a && !(1 < eg(b).N.length)) {
                var d, e = Rb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = A(c.J);
                A(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Fh(d[l], f);
                    m.length && (Eh && console.log(m), h.push(l))
                }
                h.length && (h.length && hh && zh.push(b + "*" + h.join(".")), gb("TAGGING", Bh[G.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Hh(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Fh(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var r = t[q];
                return void 0 === r ? Dh[q] : r
            },
            f;
        for (f in Hh(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Wa(l) || "array" === Wa(l),
                p = "object" === Wa(m) || "array" === Wa(m);
            if (n && p) Fh(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Nh = function(a, b, c, d, e, f, h, l, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.J = f;
            this.s = h;
            this.eventMetadata = l;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Oh = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.J)
            }
            return c
        },
        U = function(a, b, c, d) {
            for (var e = ia(Oh(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                if (void 0 !== h[b]) return h[b]
            }
            return c
        },
        Ph = function(a) {
            for (var b = {}, c = Oh(a, 4), d = ia(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), h = ia(f), l = h.next(); !l.done; l = h.next()) b[l.value] = 1;
            return Object.keys(b)
        },
        Qh = function(a, b, c) {
            function d(n) {
                Ya(n) && k(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                h = Oh(a, void 0 === c ? 3 : c);
            h.reverse();
            for (var l = ia(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Rh = function(a) {
            for (var b = [M.g.Oc,
                    M.g.Kc, M.g.Lc, M.g.Mc, M.g.Nc, M.g.Pc, M.g.Qc
                ], c = Oh(a, 3), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, h = {}, l = !1, m = ia(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (h[p] = f[p], l = !0)
                }
                var q = l ? h : void 0;
                if (q) return q
            }
            return {}
        },
        Sh = function(a, b) {
            this.Ie = a;
            this.Je = b;
            this.C = {};
            this.Db = {};
            this.h = {};
            this.J = {};
            this.Ac = {};
            this.Cb = {};
            this.s = {};
            this.Ia = function() {};
            this.T = function() {};
            this.M = !1
        },
        Th = function(a, b) {
            a.C = b;
            return a
        },
        Uh = function(a, b) {
            a.Db = b;
            return a
        },
        Vh = function(a, b) {
            a.h = b;
            return a
        },
        Wh = function(a, b) {
            a.J = b;
            return a
        },
        Xh = function(a, b) {
            a.Ac = b;
            return a
        },
        Yh = function(a, b) {
            a.Cb = b;
            return a
        },
        Zh = function(a, b) {
            a.s = b || {};
            return a
        },
        $h = function(a, b) {
            a.Ia = b;
            return a
        },
        ai = function(a, b) {
            a.T = b;
            return a
        },
        bi = function(a, b) {
            a.M = b;
            return a
        },
        ci = function(a) {
            return new Nh(a.Ie, a.Je, a.C, a.Db, a.h, a.J, a.Cb, a.s, a.Ia, a.T, a.M)
        };
    var di = {};

    function ei(a, b, c) {
        hh && void 0 !== a && (di[a] = di[a] || [], di[a].push(c + b), sh(a))
    }

    function fi(a) {
        var b = a.eventId,
            c = a.Za,
            d = [],
            e = di[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete di[b];
        return d
    };
    var hi = function(a, b, c, d) {
            var e = eg(c, d.isGtmEvent);
            e && gi.push("event", [b, a], e, d)
        },
        ii = function(a, b, c, d) {
            var e = eg(c, d.isGtmEvent);
            e && gi.push("get", [a, b], e, d)
        },
        ji = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.M = {};
            this.T = null;
            this.C = {};
            this.s = !1
        },
        ki = function(a, b, c, d) {
            var e = La();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        li = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        mi = function(a, b) {
            var c = b.X;
            return a.s[c] = a.s[c] || new ji
        },
        ni = function(a, b, c, d) {
            if (d.h) {
                var e = mi(a, d.h),
                    f = e.T;
                if (f) {
                    var h =
                        A(c),
                        l = A(e.J[d.h.id]),
                        m = A(e.C),
                        n = A(e.h),
                        p = A(a.C),
                        q = {};
                    if (hh) try {
                        q = A(Xe)
                    } catch (v) {
                        K(72)
                    }
                    var t = d.h.prefix,
                        r = function(v) {
                            ei(d.messageContext.eventId, t, v)
                        },
                        u = ci(bi(ai($h(Zh(Xh(Wh(Yh(Vh(Uh(Th(new Sh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        ei(d.messageContext.eventId, t, "1"), Gh(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        ei(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    li.prototype.register = function(a, b, c) {
        var d = mi(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (A(d.h, c), d.h = c), this.flush())
    };
    li.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === mi(this, c).status && (mi(this, c).status = 2, this.push("require", [{}], c, {})), mi(this, c).s && (d.deferrable = !1));
        this.h.push(new ki(a, c, b, d));
        d.deferrable || this.flush()
    };
    li.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                Qb: void 0,
                cg: void 0
            }) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || mi(this, h).s ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== mi(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.s[0], function(t, r) {
                            A(Ra(t, r), b.C)
                        });
                        break;
                    case "config":
                        var l = mi(this, h);
                        e.Qb = {};
                        k(f.s[0], function(t) {
                            return function(r, u) {
                                A(Ra(r, u), t.Qb)
                            }
                        }(e));
                        var m = !!e.Qb[M.g.Ob];
                        delete e.Qb[M.g.Ob];
                        var n = h.X === h.id;
                        m || (n ? l.C = {} : l.J[h.id] = {});
                        l.s && m || ni(this, M.g.aa, e.Qb, f);
                        l.s = !0;
                        n ? A(e.Qb, l.C) : (A(e.Qb, l.J[h.id]), K(70));
                        d = !0;
                        break;
                    case "event":
                        e.cg = {};
                        k(f.s[0], function(t) {
                            return function(r, u) {
                                A(Ra(r, u), t.cg)
                            }
                        }(e));
                        ni(this, f.s[1], e.cg, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[M.g.kb] = f.s[0], p[M.g.vb] = f.s[1], p);
                        ni(this, M.g.Ma, q, f)
                }
                this.h.shift();
                oi(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var oi = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = mi(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.M)
                                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        pi = function(a, b) {
            var c = gi,
                d = A(b);
            A(mi(c, a).h, d);
            mi(c, a).h = d
        },
        gi = new li;

    function qi(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ri = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        si = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var ti = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ui() {
        return ob ? !!vb && !!vb.platform : !1
    }

    function vi() {
        return yb("iPhone") && !yb("iPod") && !yb("iPad")
    }

    function wi() {
        vi() || yb("iPad") || yb("iPod")
    };
    Ab();
    zb() || yb("Trident") || yb("MSIE");
    yb("Edge");
    !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
    ui() || yb("Macintosh");
    ui() || yb("Windows");
    (ui() ? "Linux" === vb.platform : yb("Linux")) || ui() || yb("CrOS");
    ui() || yb("Android");
    vi();
    yb("iPad");
    yb("iPod");
    wi();
    ub().toLowerCase().indexOf("kaios");
    var xi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        yi = /#|$/,
        zi = function(a, b) {
            var c = a.search(yi),
                d = xi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Ai = /[?&]($|#)/,
        Bi = function(a, b, c) {
            for (var d, e = a.search(yi), f = 0, h, l = []; 0 <= (h = xi(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Ai, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var r = d.indexOf("?"),
                    u;
                0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
                q = [d.slice(0, r), u, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Ci = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        tf(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Di = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Ei(a) {
        if (!a || !G.head) return null;
        var b = Fi("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Gi = function(a) {
            if (F.top == F) return 0;
            if (void 0 === a ? 0 : a) {
                var b = F.location.ancestorOrigins;
                if (b) return b[b.length - 1] == F.location.origin ? 1 : 2
            }
            return Ci(F.top) ? 1 : 2
        },
        Fi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Hi(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Fi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = jb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            ti(e, "load", f);
            ti(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ji = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Di(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Ii(c, b)
        },
        Ii = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Hi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Ki = function() {};
    var Li = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Mi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.M = {};
            this.Ia = 0;
            var c;
            this.T = null != (c = b.Yi) ? c : 500;
            var d;
            this.J = null != (d = b.un) ? d : !1;
            this.C = null
        };
    ra(Mi, Ki);
    var Oi = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Ni(a)
    };
    Mi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = si(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Li(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Pi(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Mi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Pi(this, "removeEventListener", null, a.listenerId)
    };
    var Ri = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Qi(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Qi(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Qi(a.purpose.legitimateInterests,
                b) && Qi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Qi = function(a, b) {
            return !(!a || !a[b])
        },
        Pi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Ni(a)) {
                Si(a);
                var f = ++a.Ia;
                a.M[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Ni = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Si = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, ti(a.s, "message", a.C))
        },
        Ti = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Li(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Ji({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ui = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Vi() {
        var a = Ae.tcf || {};
        return Ae.tcf = a
    }
    var aj = function() {
        var a = Vi(),
            b = new Mi(F, {
                Yi: -1
            });
        Oi(b) && !Wi() && !Xi() && K(124);
        if (!a.active && Oi(b)) {
            Wi() && (a.active = !0, a.Fb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Bf().active = !0, a.tcString = "tcunavailable");
            $f();
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Yi(a), ag([M.g.F, M.g.Ba, M.g.K]), Bf().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Xi() && (a.active = !0), !Zi(c) || Wi() || Xi()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Ui) Ui.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (Zi(c)) {
                            var h = {},
                                l;
                            for (l in Ui)
                                if (Ui.hasOwnProperty(l))
                                    if ("1" === l) {
                                        var m, n = c,
                                            p = {
                                                bl: !0
                                            };
                                        p = void 0 === p ? {} : p;
                                        m = Ti(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.bl || "string" !== typeof n.tcString || !n.tcString.length ? !p.zn : Ri(n, "1", 0) : !1;
                                        h["1"] = m
                                    } else h[l] = Ri(c, l, Ui[l]);
                            d = h
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.Fb = d;
                            var q = {},
                                t = (q[M.g.F] = a.Fb["1"] ? "granted" :
                                    "denied", q);
                            !0 !== a.gdprApplies ? (ag([M.g.F, M.g.Ba, M.g.K]), Bf().active = !0) : (t[M.g.Ba] = a.Fb["3"] && a.Fb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? t[M.g.K] = a.Fb["1"] && a.Fb["7"] ? "granted" : "denied" : ag([M.g.K]), Xf(t, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: $i() || ""
                            }))
                        }
                    } else ag([M.g.F, M.g.Ba, M.g.K])
                })
            } catch (c) {
                Yi(a), ag([M.g.F, M.g.Ba, M.g.K]), Bf().active = !0
            }
        }
    };

    function Yi(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Zi(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var Wi = function() {
        return !0 === F.gtag_enable_tcf_support
    };

    function Xi() {
        return !0 === Vi().enableAdvertiserConsentMode
    }
    var $i = function() {
            var a = Vi();
            if (a.active) return a.tcString
        },
        bj = function() {
            var a = Vi();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        cj = function(a) {
            if (!Ui.hasOwnProperty(String(a))) return !0;
            var b = Vi();
            return b.active && b.Fb ? !!b.Fb[String(a)] : !0
        },
        dj = function() {
            return Oi(new Mi(F, {
                Yi: -1
            }))
        };
    var ej = [M.g.F, M.g.O, M.g.K, M.g.Ba],
        fj = {},
        gj = (fj[M.g.F] = 1, fj[M.g.O] = 2, fj);

    function hj(a) {
        if (void 0 === a) return 0;
        switch (U(a, M.g.fa)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var ij = function(a) {
            var b = hj(a);
            if (3 === b) return !1;
            switch (Gf(M.g.Ba)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        jj = function() {
            return Jf() || !Ff(M.g.F) || !Ff(M.g.O)
        },
        kj = function() {
            var a = {},
                b;
            for (b in gj) gj.hasOwnProperty(b) && (a[gj[b]] = Gf(b));
            return "G1" + mc(a[1] || 0) + mc(a[2] || 0)
        },
        lj = {},
        mj = (lj[M.g.F] = 0, lj[M.g.O] = 1, lj[M.g.K] = 2, lj[M.g.Ba] = 3, lj);

    function nj(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var oj = function(a) {
            for (var b = "1", c = 0; c < ej.length; c++) {
                var d = b,
                    e, f = ej[c],
                    h = yf[f];
                e = void 0 === h ? 0 : mj.hasOwnProperty(h) ? 12 | mj[h] : 8;
                var l = Bf();
                l.accessedAny = !0;
                var m = l.entries[f] || {};
                e = e << 2 | nj(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [nj(m.declare) << 4 | nj(m.default) << 2 | nj(m.update)])
            }
            var n = b,
                p;
            p = "" + (Jf() << 2 | hj(a));
            return n + p
        },
        pj = function() {
            var a;
            a = void 0 === a ? {} : a;
            if (!Ff(M.g.K)) return "-";
            for (var b =
                    Hf(), c = "", d = ia(Object.keys(ye)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                !1 !== b[f] && !1 !== a[f] && (c += ye[f])
            }
            return "" === c ? "-" : c
        },
        qj = function() {
            return !1 !== mf["6"] || (Wi() || Xi()) && "1" === bj() ? "1" : "0"
        },
        rj = function() {
            return (!1 !== mf["6"] ? !0 : !(!Wi() && !Xi()) && "1" === bj()) || !Ff(M.g.K)
        },
        sj = function() {
            var a = "0",
                b = "0",
                c;
            var d = Vi();
            c = d.active ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c &
                63
            ]);
            var e = "0",
                f;
            var h = Vi();
            f = h.active ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            !1 !== mf["6"] && (l |= 1);
            "1" === bj() && (l |= 2);
            Wi() && (l |= 4);
            var m;
            var n = Vi();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            Bf().waitPeriodTimedOut && (l |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };
    var tj = function() {
        var a = !1;
        return a
    };
    var uj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        vj = function(a, b) {
            var c = Gg.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = Gg.ctid;
            d.qm = ze.vd;
            d.xm = ze.Qf;
            d.Ql = Eg.rd ? 2 : 1;
            d.ri = Gg.canonicalContainerId;
            d.ri !== a && (d.hf = a);
            R(63) ? d.Ui = 2 : R(64) && (d.Ui = 1);
            Ge ? (d.df = uj[c], d.df || (d.df = 0)) : d.df = Ke ? 13 : 10;
            Ie ? d.ug = 1 : tj() ? d.ug = 2 : d.ug = 3;
            var e = {};
            e[6] = Fg;
            R(87) && !Fg && (e[1] = !0);
            d.Mk = e;
            var f;
            var h = d.df,
                l = d.ug;
            void 0 === h ? f = "" : (l || (l = 0), f = "" + Fd(1, 1) + lc(h << 2 | l));
            var m = d.tn,
                n = 4 + f + (m ? "" + Fd(2, 1) + lc(m) : ""),
                p, q = d.xm;
            p = q && Ed.test(q) ?
                "" + Fd(3, 2) + q : "";
            var t, r = d.qm;
            t = r ? "" + Fd(4, 1) + lc(r) : "";
            var u;
            var v = d.ctid;
            if (v && b) {
                var w = v.split("-"),
                    x = w[0].toUpperCase();
                if ("GTM" !== x && "OPT" !== x) u = "";
                else {
                    var y = w[1];
                    u = "" + Fd(5, 3) + lc(1 + y.length) + (d.Ql || 0) + y
                }
            } else u = "";
            var B = d.Ui,
                z = d.ri,
                C = d.hf,
                H = d.En,
                E = n + p + t + u + (B ? "" + Fd(6, 1) + lc(B) : "") + (z ? "" + Fd(7, 3) + lc(z.length) + z : "") + (C ? "" + Fd(8, 3) + lc(C.length) + C : "") + (H ? "" + Fd(9, 3) + lc(H.length) + H : ""),
                D;
            var J = d.Mk;
            J = void 0 === J ? {} : J;
            for (var L = [], O = ia(Object.keys(J)), T = O.next(); !T.done; T = O.next()) {
                var N = T.value;
                L[Number(N)] =
                    J[N]
            }
            if (L.length) {
                var Q = Fd(10, 3),
                    da;
                if (0 === L.length) da = lc(0);
                else {
                    for (var aa = [], V = 0, ta = !1, fa = 0; fa < L.length; fa++) {
                        ta = !0;
                        var ua = fa % 6;
                        L[fa] && (V |= 1 << ua);
                        5 === ua && (aa.push(lc(V)), V = 0, ta = !1)
                    }
                    ta && aa.push(lc(V));
                    da = aa.join("")
                }
                var Ha = da;
                D = "" + Q + lc(Ha.length) + Ha
            } else D = "";
            return E + D
        };
    var wj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var zj = function(a, b, c, d) {
            return xj(d) ? wj(a, String(b || yj()), c) : []
        },
        Cj = function(a, b, c, d, e) {
            if (xj(e)) {
                var f = Aj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Bj(f, function(h) {
                        return h.Se
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Bj(f, function(h) {
                        return h.Td
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Dj(a, b, c, d) {
        var e = yj(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var h = yj();
        return e != h || void 0 != c && 0 <= zj(b, h, !1, d).indexOf(c)
    }
    var Hj = function(a, b, c) {
            function d(r, u, v) {
                if (null == v) return delete h[u], r;
                h[u] = v;
                return r + "; " + u + "=" + v
            }

            function e(r, u) {
                if (null == u) return delete h[u], r;
                h[u] = !0;
                return r + "; " + u
            }
            if (!xj(c.rb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ej(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.An);
            f = d(f, "samesite",
                c.Cn);
            c.Dn && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Fj(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!Gj(q, c.path) && Dj(t, a, b, c.rb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Gj(m, c.path) ? 1 : Dj(f, a, b, c.rb) ? 0 : 1
        },
        Ij = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Hj(a, b, c)
        };

    function Bj(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Aj(a, b, c) {
        for (var d = [], e = zj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Se: 1 * m[0] || 1,
                    Td: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Ej = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Jj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Kj = /(^|\.)doubleclick\.net$/i,
        Gj = function(a, b) {
            return Kj.test(window.document.location.hostname) || "/" === b && Jj.test(a)
        },
        yj = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        Fj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Kj.test(e) || Jj.test(e) || a.push("none");
            return a
        },
        xj = function(a) {
            return a && vf().h() ? (g(a) ? [a] : a).every(function(b) {
                return If(b) && Ff(b)
            }) : !0
        },
        Lj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Mj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        },
        Nj = function(a, b) {
            var c = "" + Lj(a),
                d = Mj(b);
            1 < d && (c += "-" + d);
            return c
        };
    var Oj = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c;
            if (a) {
                var d = 1,
                    e, f, h;
                if (a)
                    for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 !== e ? d ^ e >> 21 : d;
                c = String(b ^ d & 2147483647)
            } else c = String(b);
            return c
        },
        Pj = function(a) {
            return [Oj(a), Math.round(La() / 1E3)].join(".")
        },
        Qj = function(a, b, c, d, e) {
            var f = Lj(b);
            return Cj(a, f, Mj(c), d, e)
        },
        Rj = function(a, b, c, d) {
            return [b, Nj(c, d), a].join(".")
        };

    function Sj(a, b, c, d) {
        var e, f = Number(null != a.Ub ? a.Ub : void 0);
        0 !== f && (e = new Date((b || La()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            rb: d
        }
    };
    var Tj;
    var Xj = function() {
            var a = Uj,
                b = Vj,
                c = Wj(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                ac(G, "mousedown", d);
                ac(G, "keyup", d);
                ac(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Yj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Wj().decorators.push(f)
        },
        Zj = function(a, b, c) {
            for (var d = Wj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = h.placement;
                    void 0 == t && (t = h.fragment ? 2 : 1);
                    t === b && Oa(e, h.callback())
                }
            }
            return e
        };

    function Wj() {
        var a = Rb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var ak = /(.*?)\*(.*?)\*(.*)/,
        bk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ck = /^(?:www\.|m\.|amp\.)+/,
        dk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function ek(a) {
        var b = dk.exec(a);
        if (b) return {
            Ag: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function fk(a, b) {
        var c = [Pb.userAgent, (new Date).getTimezoneOffset(), Pb.userLanguage || Pb.language, Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Tj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Tj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Tj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function gk() {
        return function(a) {
            var b = qg(F.location.href),
                c = b.search.replace("?", ""),
                d = jg(c, "_gl", !0) || "";
            a.query = hk(d) || {};
            var e = mg(b, "fragment"),
                f;
            var h = -1;
            if (Qa(e, "_gl=")) h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h) f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = hk(f || "") || {}
        }
    }
    var ik = function(a) {
            var b = gk(),
                c = Wj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Oa(d, e.query), a && Oa(d, e.fragment));
            return d
        },
        hk = function(a) {
            try {
                var b = jk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = eb(d[e + 1]);
                        c[f] = h
                    }
                    gb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                gb("TAGGING", 8)
            }
        };

    function jk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ak.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === fk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                gb("TAGGING", 7)
            }
        }
    }

    function kk(a, b, c, d, e) {
        function f(p) {
            var q = p,
                t = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                r = q;
            if (t) {
                var u = t[2],
                    v = t[4];
                r = t[1];
                v && (r = r + u + v)
            }
            p = r;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var h = ek(c);
        if (!h) return "";
        var l = h.query || "",
            m = h.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.Ag + l + m
    }

    function lk(a, b) {
        function c(n, p, q) {
            var t;
            a: {
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        t = !0;
                        break a
                    }
                t = !1
            }
            if (t) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(db(String(x))))
                    }
                var y = v.join("*");
                u = ["1", fk(y), y].join("*");
                d ? (id(13) || id(11) || !p) && mk("_gl", u, a, p, q) : nk("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = Zj(b, 1, d),
            f = Zj(b, 2, d),
            h = Zj(b, 4, d),
            l = Zj(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        id(11) && c(h, !0, !0);
        for (var m in l) l.hasOwnProperty(m) && ok(m, l[m], a)
    }

    function ok(a, b, c) {
        "a" === c.tagName.toLowerCase() ? nk(a, b, c) : "form" === c.tagName.toLowerCase() && mk(a, b, c)
    }

    function nk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !id(16) || d)) {
                var l = F.location.href,
                    m = ek(c.href),
                    n = ek(l);
                h = !(m && n && m.Ag === n.Ag && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = kk(a, b, c.href, d, e);
            Lb.test(p) && (c.href = p)
        }
    }

    function mk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var h = kk(a, b, c.action, d, e);
                    Lb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = G.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Uj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || lk(e, e.hostname)
            }
        } catch (h) {}
    }

    function Vj(a) {
        try {
            if (a.action) {
                var b = mg(qg(a.action), "host");
                lk(a, b)
            }
        } catch (c) {}
    }
    var pk = function(a, b, c, d) {
            Xj();
            Yj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        qk = function(a, b) {
            Xj();
            Yj(a, [lg(F.location, "host", !0)], b, !0, !0)
        },
        rk = function() {
            var a = G.location.hostname,
                b = bk.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(ck, ""),
                m = e.replace(ck, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        sk = function(a, b) {
            return !1 === a ? !1 : a || b || rk()
        };
    var tk = ["1"],
        uk = {},
        vk = {},
        Ak = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = wk(a.prefix);
            if (!uk[c])
                if (xk(c, a.path, a.domain)) {
                    var d = vk[wk(a.prefix)];
                    yk(a, d ? d.id : void 0, d ? d.rg : void 0)
                } else {
                    var e = sg("auiddc");
                    if (e) gb("TAGGING", 17), uk[c] = e;
                    else if (b) {
                        var f = wk(a.prefix),
                            h = Pj();
                        if (0 === zk(f, h, a)) {
                            var l = Rb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        xk(c, a.path, a.domain)
                    }
                }
        };

    function yk(a, b, c) {
        var d = wk(a.prefix),
            e = uk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1E3)));
                    zk(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function zk(a, b, c, d) {
        var e = Rj(b, "1", c.domain, c.path),
            f = Sj(c, d);
        f.rb = Bk();
        return Ij(a, e, f)
    }

    function xk(a, b, c) {
        var d = Qj(a, b, c, tk, Bk());
        if (!d) return !1;
        Ck(a, d);
        return !0
    }

    function Ck(a, b) {
        var c = b.split(".");
        5 === c.length ? (uk[a] = c.slice(0, 2).join("."), vk[a] = {
            id: c.slice(2, 4).join("."),
            rg: Number(c[4]) || 0
        }) : 3 === c.length ? vk[a] = {
            id: c.slice(0, 2).join("."),
            rg: Number(c[2]) || 0
        } : uk[a] = b
    }

    function wk(a) {
        return (a || "_gcl") + "_au"
    }

    function Dk(a) {
        function b() {
            Ff(c) && a()
        }
        var c = Bk();
        Mf(function() {
            b();
            Ff(c) || Nf(b, c)
        }, c)
    }

    function Ek(a) {
        var b = ik(!0),
            c = wk(a.prefix);
        Dk(function() {
            var d = b[c];
            if (d) {
                Ck(c, d);
                var e = 1E3 * Number(uk[c].split(".")[1]);
                if (e) {
                    gb("TAGGING", 16);
                    var f = Sj(a, e);
                    f.rb = Bk();
                    var h = Rj(d, "1", a.domain, a.path);
                    Ij(c, h, f)
                }
            }
        })
    }

    function Fk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = Qj(a, e.path, e.domain, tk, Bk());
            l && (h[a] = l);
            return h
        };
        Dk(function() {
            pk(f, b, c, d)
        })
    }

    function Bk() {
        return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var Gk = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Jg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function Hk(a, b) {
        var c = Gk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Jg] || (d[c[e].Jg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Z: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].Jg].push(h)
            }
        }
        return d
    };
    var Ik = {},
        Jk = (Ik.k = {
            Ga: /^[\w-]+$/
        }, Ik.b = {
            Ga: /^[\w-]+$/,
            Fg: !0
        }, Ik.i = {
            Ga: /^[1-9]\d*$/
        }, Ik),
        Kk = {},
        Lk = (Kk[5] = {
            version: "2",
            Jm: ["2"],
            Oi: "ad_storage",
            si: ["k", "i", "b"]
        }, Kk);

    function Mk(a, b) {
        var c = b.Ga;
        return "function" === typeof c ? c(a) : c.test(a)
    }

    function Nk(a) {
        for (var b = ia(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Ad: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Ad = Jk[e];
            d.Ad ? d.Ad.Fg ? a[e] = Array.isArray(f) ? f.filter(function(h) {
                return function(l) {
                    return Mk(l, h.Ad)
                }
            }(d)) : void 0 : "string" === typeof f && Mk(f, d.Ad) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    }

    function Ok(a) {
        var b = Lk[5];
        if (b) {
            for (var c = [], d = zj(a, void 0, void 0, b.Oi), e = ia(d), f = e.next(); !f.done; f = e.next()) {
                var h = f.value.split("."),
                    l = h.shift();
                if (-1 !== b.Jm.indexOf(l)) {
                    h.shift();
                    var m = h.join("."),
                        n = c,
                        p = n.push,
                        q;
                    var t = {},
                        r = Lk[5];
                    if (r) {
                        for (var u = r.si, v = ia(m.split("$")), w = v.next(); !w.done; w = v.next()) {
                            var x = w.value,
                                y = x[0];
                            if (-1 !== u.indexOf(y)) try {
                                var B = decodeURIComponent(x.substring(1)),
                                    z = Jk[y];
                                z && (z.Fg ? (t[y] = t[y] || [], t[y].push(B)) : t[y] = B)
                            } catch (C) {}
                        }
                        q = Nk(t)
                    } else q = void 0;
                    p.call(n, q)
                }
            }
            return c
        }
    }

    function Pk(a, b, c, d) {
        c = c || {};
        var e;
        var f = Lk[5];
        if (f) {
            for (var h = [], l = ia(f.si), m = l.next(); !m.done; m = l.next()) {
                var n = m.value,
                    p = Jk[n];
                if (p) {
                    var q = b[n];
                    if (void 0 !== q)
                        if (p.Fg && Array.isArray(q))
                            for (var t = ia(q), r = t.next(); !r.done; r = t.next()) h.push(encodeURIComponent("" + n + r.value));
                        else h.push(encodeURIComponent("" + n + q))
                }
            }
            e = h.join("$")
        } else e = void 0;
        var u = e;
        if (u) {
            var v = Lk[5],
                w = [v.version, Nj(c.domain, c.path), u].join(".");
            Ij(a, w, Sj(c, d, void 0, v.Oi))
        }
    };
    var Qk = /^\w+$/,
        Rk = /^[\w-]+$/,
        Sk = {
            ag: "_ag",
            aw: "_aw",
            dc: "_dc",
            gb: "_gb",
            gf: "_gf",
            gp: "_gp",
            ha: "_ha"
        };

    function Tk() {
        return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var Uk = function(a) {
            return !vf().h() || Ff(a)
        },
        Vk = function(a) {
            function b() {
                var d = Uk(c);
                d && a();
                return d
            }
            var c = Tk();
            Mf(function() {
                b() || Nf(b, c)
            }, c)
        },
        Xk = function(a) {
            return Wk(a).map(function(b) {
                return b.Z
            })
        };

    function Yk(a, b, c, d, e) {
        var f = Aa(a, function(h) {
            return h.Z === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d), f.labels = Zk(f.labels || [], e || [])) : a.push({
            version: b,
            Z: c,
            timestamp: d,
            labels: e
        })
    }
    var Wk = function(a) {
            for (var b = [], c = zj(a, G.cookie, void 0, Tk()), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                var f = $k(e.value);
                if (null != f) {
                    var h = f;
                    Yk(b, h.version, h.Z, h.timestamp, h.labels)
                }
            }
            b.sort(function(l, m) {
                return m.timestamp - l.timestamp
            });
            return al(b)
        },
        ll = function(a) {
            if (!id(20)) return [];
            for (var b = Ok(a) || [], c = [], d = ia(b), e = d.next(); !e.done; e = d.next()) {
                var f = e.value,
                    h = f,
                    l = f ? 1E3 * (Number(f.i) || 0) : 0;
                l && Yk(c, "2", h.k, l, h.b || [])
            }
            return c.sort(function(m, n) {
                return n.timestamp - m.timestamp
            })
        };

    function Zk(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function ml(a) {
        return a && "string" == typeof a && a.match(Qk) ? a : "_gcl"
    }

    function nl(a, b) {
        var c = id(20),
            d = qg(a),
            e = mg(d, "query", !1, void 0, "gclid"),
            f = mg(d, "query", !1, void 0, "gclsrc"),
            h = mg(d, "query", !1, void 0, "wbraid"),
            l;
        c && (l = mg(d, "query", !1, void 0, "gbraid"));
        var m = mg(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !h || c && !l)) {
            var n = d.hash.replace("#", "");
            e = e || jg(n, "gclid");
            f = f || jg(n, "gclsrc");
            h = h || jg(n, "wbraid");
            c && (l = l || jg(n, "gbraid"))
        }
        return ol(e, f, m, h, l)
    }
    var pl = function() {
            return nl(F.location.href, !0)
        },
        ol = function(a, b, c, d, e) {
            var f = {},
                h = function(l, m) {
                    f[m] || (f[m] = []);
                    f[m].push(l)
                };
            f.gclid = a;
            f.gclsrc = b;
            f.dclid = c;
            if (void 0 !== a && a.match(Rk)) switch (b) {
                case void 0:
                    h(a, "aw");
                    break;
                case "aw.ds":
                    h(a, "aw");
                    h(a, "dc");
                    break;
                case "ds":
                    h(a, "dc");
                    break;
                case "3p.ds":
                    h(a, "dc");
                    break;
                case "gf":
                    h(a, "gf");
                    break;
                case "ha":
                    h(a, "ha")
            }
            c && h(c, "dc");
            void 0 !== d && Rk.test(d) && (f.wbraid = d, h(d, "gb"));
            id(20) && void 0 !== e && Rk.test(e) && (f.gbraid = e, h(e, "ag"));
            return f
        },
        rl = function(a) {
            var b =
                pl();
            if (id(18)) {
                for (var c = !0, d = ia(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                    if (void 0 !== b[e.value]) {
                        c = !1;
                        break
                    }
                c && (b = nl(F.document.referrer, !1))
            }
            ql(b, !1, a)
        };

    function ql(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = ml(c.prefix);
        d = d || La();
        var h = Math.round(d / 1E3),
            l = Tk(),
            m = !1,
            n = !1,
            p = function() {
                if (Uk(l)) {
                    var q = Sj(c, d, !0);
                    q.rb = l;
                    for (var t = function(E, D) {
                            var J = sl(E, f);
                            J && (Ij(J, D, q), "gb" !== E && (m = !0))
                        }, r = function(E) {
                            var D = ["GCL", h, E];
                            0 < e.length && D.push(e.join("."));
                            return D.join(".")
                        }, u = ia(["aw", "dc", "gf", "ha", "gp"]), v = u.next(); !v.done; v = u.next()) {
                        var w = v.value;
                        a[w] && t(w, r(a[w][0]))
                    }
                    if (!m && a.gb) {
                        var x = a.gb[0],
                            y = sl("gb", f);
                        !b && Wk(y).some(function(E) {
                            return E.Z === x && E.labels &&
                                0 < E.labels.length
                        }) || t("gb", r(x))
                    }
                }
                if (!n && id(20) && a.gbraid && Uk("ad_storage") && (n = !0, !m)) {
                    var B = a.gbraid,
                        z = sl("ag", f);
                    if (b || !ll(z).some(function(E) {
                            return E.Z === B && E.labels && 0 < E.labels.length
                        })) {
                        var C = {},
                            H = (C.k = B, C.i = h, C.b = e, C);
                        Pk(z, H, c, d)
                    }
                }
            };
        Mf(function() {
            p();
            Uk(l) || Nf(p, l)
        }, l)
    }
    var ul = function(a, b) {
            var c = ik(!0);
            Vk(function() {
                for (var d = ml(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Sk[f]) {
                        var h = sl(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(tl(l), La()),
                                n;
                            b: {
                                for (var p = m, q = zj(h, G.cookie, void 0, Tk()), t = 0; t < q.length; ++t)
                                    if (tl(q[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var r = Sj(b, m, !0);
                                r.rb = Tk();
                                Ij(h, l, r)
                            }
                        }
                    }
                }
                ql(ol(c.gclid, c.gclsrc), !1, b)
            })
        },
        sl = function(a, b) {
            var c = Sk[a];
            if (void 0 !== c) return b + c
        },
        tl = function(a) {
            return 0 !== vl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function $k(a) {
        var b = vl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Z: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function vl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Rk.test(a[2]) ? [] : a
    }
    var wl = function(a, b, c, d, e) {
            if (za(b) && "null" !== F.origin) {
                var f = ml(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = sl(a[m], f);
                            if (n) {
                                var p = zj(n, G.cookie, void 0, Tk());
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Vk(function() {
                    pk(h, b, c, d)
                })
            }
        },
        al = function(a) {
            return a.filter(function(b) {
                return Rk.test(b.Z)
            })
        },
        xl = function(a, b) {
            if ("null" !== F.origin) {
                for (var c = ml(b.prefix), d = {}, e = 0; e < a.length; e++) Sk[a[e]] && (d[a[e]] = Sk[a[e]]);
                Vk(function() {
                    k(d, function(f, h) {
                        var l = zj(c + h, G.cookie, void 0, Tk());
                        l.sort(function(r,
                            u) {
                            return tl(u) - tl(r)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = tl(m),
                                p = 0 !== vl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== vl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            ql(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function yl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var zl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Jf()) {
                var c = pl();
                if (yl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    id(20) && b(d, "gbraid", c.gbraid);
                    qk(function() {
                        return d
                    }, 3);
                    qk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Al = function(a) {
            if (!id(11)) return null;
            var b = ik(!0).gad_source;
            if (null != b) return F.location.hash = "", b;
            if (id(12)) {
                var c = qg(F.location.href);
                b = mg(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = pl();
                if (yl(d,
                        a)) return "0"
            }
            return null
        },
        Bl = function(a) {
            var b = Al(a);
            null != b && qk(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        Cl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Uk(Tk())) return e;
            var f = Wk(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m / 1E3), l.Z].concat(l.labels || [], [b]).join("."),
                    p = Sj(c, m, !0);
                p.rb = Tk();
                Ij(a, n, p)
            }
            return e
        };

    function Dl(a, b) {
        var c = ml(b),
            d = sl(a, c);
        if (!d) return 0;
        for (var e = Wk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function El(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Fl = function(a) {
        var b = Math.max(Dl("aw", a), El(Uk(Tk()) ? Hk() : {}));
        return Math.max(Dl("gb", a), El(Uk(Tk()) ? Hk("_gac_gb", !0) : {})) > b
    };
    var Wl, Xl = !1,
        Yl = function(a) {
            if (!Xl) {
                Xl = !0;
                Wl = Wl || {}
            }
            return Wl[a]
        };
    var Zl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = A(c.eventMetadata || {});
        this.isAborted = !1
    };
    Zl.prototype.copyToHitData = function(a, b, c) {
        var d = U(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && g(d) && R(47)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var $l = function(a) {
            return a.metadata.source_canonical_id
        },
        am = function(a, b, c) {
            var d = Yl(a.target.X);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    var bm = function() {
        Ae.dedupe_gclid || (Ae.dedupe_gclid = "" + Pj());
        return Ae.dedupe_gclid
    };
    var cm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        dm = /^www.googleadservices.com$/,
        fm = function(a) {
            a || (a = em());
            return a.Im ? !1 : a.wl || a.xl || a.yl || a.ig || a.Ve || a.al || a.ml ? !0 : !1
        },
        em = function() {
            var a = {},
                b = ik(!0);
            a.Im = !!b._up;
            var c = pl();
            a.wl = void 0 !== c.aw;
            a.xl = void 0 !== c.dc;
            a.yl = void 0 !== c.wbraid;
            var d = qg(F.location.href),
                e = mg(d, "query", !1, void 0, "gad");
            a.ig = void 0 !== e;
            if (!a.ig) {
                var f = d.hash.replace("#", ""),
                    h = jg(f, "gad");
                a.ig = void 0 !== h
            }
            a.Ve = void 0;
            if (R(54)) {
                var l = mg(d, "query", !1, void 0, "gad_source");
                a.Ve =
                    l;
                if (void 0 === a.Ve) {
                    var m = d.hash.replace("#", ""),
                        n = jg(m, "gad_source");
                    a.Ve = n
                }
            }
            var p = G.referrer ? mg(qg(G.referrer), "host") : "";
            a.ml = cm.test(p);
            a.al = dm.test(p);
            return a
        };
    var gm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        hm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        im = /^\d+\.fls\.doubleclick\.net$/,
        jm = /;gac=([^;?]+)/,
        km = /;gacgb=([^;?]+)/,
        lm = /;gclaw=([^;?]+)/,
        mm = /;gclgb=([^;?]+)/;

    function nm(a, b) {
        if (im.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(gm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].Z);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var om = function(a, b, c) {
        var d = Uk(Tk()) ? Hk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = Cl("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            Zk: f ? e.join(";") : "",
            Yk: nm(d, km)
        }
    };

    function pm(a, b, c) {
        if (im.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(hm)) return [{
                Z: d[1]
            }]
        } else return Wk((a || "_gcl") + b);
        return []
    }
    var qm = function(a) {
            return pm(a, "_aw", lm).map(function(b) {
                return b.Z
            }).join(".")
        },
        rm = function(a) {
            return pm(a, "_gb", mm).map(function(b) {
                return b.Z
            }).join(".")
        },
        sm = function(a) {
            return im.test(G.location.host) ? !(lm.test(G.location.href) || jm.test(G.location.href)) : Fl(a)
        },
        tm = function(a, b) {
            var c = Cl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var um = function() {
        if (xa(F.__uspapi)) {
            var a = "";
            try {
                F.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };

    function Cm(a) {
        var b = U(a.o, M.g.xb),
            c = U(a.o, M.g.wb);
        b && !c ? (a.eventName !== M.g.aa && a.eventName !== M.g.be && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
    }

    function Dm(a) {
        var b = S(M.g.F) ? Ae.pscdl : "denied";
        a.h[M.g.je] = b
    };
    var Lm = function(a, b, c, d) {
        var e = Yb(),
            f;
        if (1 === e) a: {
            var h = Me;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != F.location.protocol ? a : b) + c
    };

    function Ym(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.o, b)
            },
            yn: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var en = function() {
            var a = F.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        fn = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle) return !0;
            var c = F.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = F.getComputedStyle(d, null))
            }
            return !1
        };
    var go = {
        yk: Number('') || 500,
        hk: Number('') || 5E3,
        Xh: Number('20') || 10,
        pj: Number('') || 5E3
    };

    function ho(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var io = function(a, b) {
        var c;
        return c
    };
    var jo = "https://" + ze.Ic,
        ko = jo + "/gtm/static/",
        lo = Number('') || 5,
        mo = Number('') || 50,
        no = jo,
        oo = ko,
        po = !1,
        qo = 0,
        ro = Ba();

    function Co() {
        var a = !1;
        return a
    }

    function Do(a) {
        var b = Math.round(La());
    }

    function Eo(a, b, c) {}

    function zo(a, b, c, d) {}

    function to(a, b, c, d, e) {}

    function Fo(a, b, c, d) {}

    function Go(a, b, c, d) {}

    function Ho(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            P: b,
            af: u
        }
    }
    var Io = void 0;

    function Jo(a) {
        var b = [];
        return b
    };
    Bb();
    vi() || yb("iPod");
    yb("iPad");
    !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
    Cb();
    !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || wi();
    var Ko = {},
        Lo = null,
        Mo = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Lo) {
                Lo = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    Ko[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Lo[q] && (Lo[q] = p)
                    }
                }
            }
            for (var t = Ko[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    B = b[v + 2],
                    z = t[x >> 2],
                    C = t[(x & 3) << 4 | y >> 4],
                    H = t[(y & 15) << 2 | B >> 6],
                    E = t[B & 63];
                r[w++] = "" + z + C + H + E
            }
            var D = 0,
                J = u;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], J = t[(D & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    r[w] = "" + t[L >> 2] + t[(L & 3) << 4 | D >> 4] + J + u
            }
            return r.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var No = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Oo() {
        var a;
        return null != (a = F.google_tag_data) ? a : F.google_tag_data = {}
    }

    function Po() {
        var a = F.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Qo() {
        var a, b;
        return null != (b = null == (a = F.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Ro() {
        var a, b;
        return "function" === typeof(null == (a = F.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function So() {
        if (!Ro()) return null;
        var a = Oo();
        if (a.uach_promise) return a.uach_promise;
        var b = F.navigator.userAgentData.getHighEntropyValues(No).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function Yo() {
        return "attribution-reporting"
    }

    function Zo(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var $o = !1;

    function ap() {
        if (Zo("join-ad-interest-group") && xa(Pb.joinAdInterestGroup)) return !0;
        $o || (Ei('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), $o = !0);
        return Zo("join-ad-interest-group") && xa(Pb.joinAdInterestGroup)
    }

    function bp(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && La() - d < (void 0 == hd[1] ? 6E4 : hd[1])) {
                gb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length >= (void 0 == hd[2] ? 50 : hd[2])) {
                gb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: La()
        }, c)
    }

    function cp() {
        return "https://td.doubleclick.net"
    };
    var Wp = {
        D: {
            Lg: "ads_conversion_hit",
            Hc: "container_execute_start",
            Pg: "container_setup_end",
            qf: "container_setup_start",
            Ng: "container_blocking_end",
            Og: "container_execute_end",
            Qg: "container_yield_end",
            rf: "container_yield_start",
            Qh: "event_execute_end",
            Ph: "event_evaluation_end",
            Mf: "event_evaluation_start",
            Rh: "event_setup_end",
            qd: "event_setup_start",
            Sh: "ga4_conversion_hit",
            sd: "page_load",
            jn: "pageview",
            Eb: "snippet_load",
            hi: "tag_callback_error",
            ii: "tag_callback_failure",
            ji: "tag_callback_success",
            ki: "tag_execute_end",
            Bc: "tag_execute_start"
        }
    };

    function Xp() {
        function a(c, d) {
            var e = ib(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Yp = !1;
    var Fq = function(a, b) {},
        Gq = function(a, b) {},
        Hq = function(a, b) {},
        Iq = function(a, b) {},
        Jq = function() {
            var a = {};
            return a
        },
        xq = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Kq = function() {},
        Lq = function(a, b) {},
        Mq = function(a, b, c) {};
    var Nq = function(a, b) {
        var c, d = F.GooglebQhCsO;
        d || (d = {}, F.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Oq = function(a, b, c) {
        var d = zi(a, "fmt");
        if (b) {
            var e = zi(a, "random"),
                f = zi(a, "label") || "";
            if (!e) return !1;
            var h = Mo(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Nq(h, b)) return !1
        }
        d && 4 != d && (a = Bi(a, "rfmt", d));
        var l = Bi(a, "fmt", 4);
        Xb(l, function() {
            F.google_noFurtherRedirects && b && b.call && (F.google_noFurtherRedirects = null, b())
        }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var er = function() {
            this.h = {}
        },
        fr = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        gr = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        ir = function(a, b, c, d) {};

    function kr(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var mr = function(a) {
            var b = Og(),
                c;
            c = void 0 === c ? !1 : c;
            lr().addRestriction(0, b, a, c)
        },
        nr = function(a) {
            var b = Og(),
                c;
            c = void 0 === c ? !1 : c;
            lr().addRestriction(1, b, a, c)
        },
        or = function() {
            var a = Og();
            return lr().getRestrictions(1, a)
        },
        pr = function() {
            this.h = {};
            this.s = {}
        },
        qr = function(a, b) {
            var c = a.h[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.h[b] = c);
            return c
        };
    pr.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.s[b]) {
            var e = qr(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    pr.prototype.getRestrictions = function(a, b) {
        var c = qr(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ka((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ka((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, h;
            return [].concat(ka((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ka((null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) || []))
        }
        return []
    };
    pr.prototype.getExternalRestrictions = function(a, b) {
        var c = qr(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    pr.prototype.removeExternalRestrictions = function(a) {
        var b = qr(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.s[a] = !0
    };

    function lr() {
        var a = Ae.r;
        a || (a = new pr, Ae.r = a);
        return a
    };
    var rr = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        sr = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        tr = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ur = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        xr = function(a) {
            var b = $e("gtm.allowlist") || $e("gtm.whitelist");
            b && K(9);
            Ge && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            vr() && (Ge ? K(116) : (K(117), wr && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Pa(Ia(b), sr),
                d = $e("gtm.blocklist") || $e("gtm.blacklist");
            d || (d = $e("tagTypeBlacklist")) && K(3);
            d ? K(8) : d = [];
            vr() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ia(d).indexOf("google") && K(2);
            var e = d && Pa(Ia(d), tr),
                f = {};
            return function(h) {
                var l = h && h[nc.ma];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Qe[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        K(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var r = 0 <= e.indexOf(l);
                    if (r) t = r;
                    else {
                        var u = Da(e, m || []);
                        u && K(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Da(e, ur));
                return f[l] = v
            }
        },
        wr = !1;
    wr = !0;
    var vr = function() {
            return rr.test(F.location && F.location.hostname)
        },
        yr = function() {
            Fg && mr(function(a) {
                var b = {};
                b[nc.ma] = "__" + a.entityId;
                for (var c in void 0)(void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
                var d;
                if (bd(b)) {
                    var e = b[nc.ma];
                    if (!e) throw "Error: No function name given for function call.";
                    var f = Pc[e];
                    d = !!f && !!f.runInSiloedMode
                } else d = !!kr(b[nc.ma], 4);
                return d
            })
        };
    var bs = function(a, b, c, d) {
            if (!Vr()) {
                var e = d.siloed ? Ig(a) : a;
                if (!Bg().container[e]) {
                    var f = "?id=" + encodeURIComponent(a) + "&l=" + ze.da,
                        h = 0 === a.indexOf("GTM-");
                    h || (f += "&cx=c");
                    R(35) && (f += "&gtm=" + vj());
                    var l = wg();
                    l && (f += "&sign=" + ze.Ne);
                    var m = c ? "/gtag/js" : "/gtm.js",
                        n = vg() ? ug(b, m + f) : void 0;
                    if (!n) {
                        var p = ze.Ic + m;
                        l && Qb && h ? (p = Qb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], n = Lm("https://", "http://", p + f)) : n = Te.s ? Ue() + m + f : Lm("https://", "http://", p + f)
                    }
                    d.siloed && Xg({
                        ctid: e,
                        isDestination: !1
                    });
                    var q = Qg();
                    Bg().container[e] = {
                        state: 1,
                        context: d,
                        parent: q
                    };
                    Cg({
                        ctid: e,
                        isDestination: !1
                    });
                    Xb(n)
                }
            }
        },
        cs = function(a, b, c) {
            if (!Vr()) {
                var d = c.siloed ? Ig(a) : a,
                    e = Bg().destination[d];
                if (!e || !e.state)
                    if (!c.siloed && Yg()) Bg().destination[d] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Qg()
                    }, Cg({
                        ctid: d,
                        isDestination: !0
                    }), K(91);
                    else {
                        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ze.da + "&cx=c";
                        R(35) && (f += "&gtm=" + vj());
                        wg() && (f += "&sign=" + ze.Ne);
                        var h = vg() ? ug(b, f) : void 0;
                        h || (h = Te.s ? Ue() + f : Lm("https://", "http://", ze.Ic + f));
                        c.siloed && Xg({
                            ctid: d,
                            isDestination: !0
                        });
                        Bg().destination[d] = {
                            state: 1,
                            context: c,
                            parent: Qg()
                        };
                        Cg({
                            ctid: d,
                            isDestination: !0
                        });
                        Xb(h)
                    }
            }
        };

    function Vr() {
        if (tj()) {
            return !0
        }
        return !1
    };
    var ds = !1,
        es = 0,
        fs = [];

    function gs(a) {
        if (!ds) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                ds = !0;
                for (var e = 0; e < fs.length; e++) I(fs[e])
            }
            fs.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function hs() {
        if (!ds && 140 > es) {
            es++;
            try {
                G.documentElement.doScroll("left"), gs()
            } catch (a) {
                F.setTimeout(hs, 50)
            }
        }
    }
    var is = function(a) {
        ds ? a() : fs.push(a)
    };
    var js = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Ng()
        }
    };
    var ls = function(a, b) {
            this.h = !1;
            this.J = [];
            this.M = {
                tags: []
            };
            this.T = !1;
            this.s = this.C = 0;
            ks(this, a, b)
        },
        ms = function(a, b, c, d) {
            if (De.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ya(d) && (e = A(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        ns = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        os = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        ks = function(a, b, c) {
            void 0 !== b && ps(a, b);
            c && F.setTimeout(function() {
                return os(a)
            }, Number(c))
        },
        ps =
        function(a, b) {
            var c = Na(function() {
                return I(function() {
                    b(Ng(), a.M)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        qs = function(a) {
            a.C++;
            return Na(function() {
                a.s++;
                a.T && a.s >= a.C && os(a)
            })
        },
        rs = function(a) {
            a.T = !0;
            a.s >= a.C && os(a)
        };
    var ss = {},
        us = function() {
            return F[ts()]
        },
        vs = !1;

    function ts() {
        return F.GoogleAnalyticsObject || "ga"
    }
    var ys = function(a) {},
        zs = function(a, b) {
            return function() {
                var c = us(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Es = ["es", "1"],
        Fs = {},
        Gs = {};

    function Hs(a, b) {
        if (hh) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Fs[a] = [
                ["e", c],
                ["eid", a]
            ];
            sh(a)
        }
    }

    function Is(a) {
        var b = a.eventId,
            c = a.Za;
        if (!Fs[b]) return [];
        var d = [];
        Gs[b] || d.push(Es);
        d.push.apply(d, ka(Fs[b]));
        c && (Gs[b] = !0);
        return d
    };
    var Js = {},
        Ks = {},
        Ls = {};

    function Ms(a, b, c, d) {
        hh && R(26) && ((void 0 === d ? 0 : d) ? (Ls[b] = Ls[b] || 0, ++Ls[b]) : void 0 !== c ? (Ks[a] = Ks[a] || {}, Ks[a][b] = Math.round(c)) : (Js[a] = Js[a] || {}, Js[a][b] = (Js[a][b] || 0) + 1))
    }

    function Ns(a) {
        var b = a.eventId,
            c = a.Za,
            d = Js[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Js[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Os(a) {
        var b = a.eventId,
            c = a.Za,
            d = Ks[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Ks[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Ps() {
        for (var a = [], b = ia(Object.keys(Ls)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Ls[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var Qs = {},
        Rs = {};

    function Ss(a, b, c) {
        if (hh && b) {
            var d = zg(b);
            Qs[a] = Qs[a] || [];
            Qs[a].push(c + d);
            var e = (bd(b) ? "1" : "2") + d;
            Rs[a] = Rs[a] || [];
            Rs[a].push(e);
            sh(a)
        }
    }

    function Ts(a) {
        var b = a.eventId,
            c = a.Za,
            d = [],
            e = Qs[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Rs[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Qs[b], delete Rs[b]);
        return d
    };

    function Us(a, b, c, d) {
        var e = Nc[a],
            f = Vs(a, b, c, d);
        if (!f) return null;
        var h = Zc(e[nc.gi], c, []);
        if (h && h.length) {
            var l = h[0];
            f = Us(l.index, {
                onSuccess: f,
                onFailure: 1 === l.xi ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Vs(a, b, c, d) {
        function e() {
            if (f[nc.mk]) l();
            else {
                var w = $c(f, c, []),
                    x = w[nc.gj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!S(x[y])) {
                            l();
                            return
                        }
                var B = ms(c.Pb, String(f[nc.ma]), Number(f[nc.xd]), w[nc.nk]),
                    z = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var E = La() - H;
                        Ss(c.id, Nc[a], "5");
                        ns(c.Pb, B, "success", E);
                        R(16) && Mq(c, f, Wp.D.ji);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var E = La() - H;
                        Ss(c.id, Nc[a], "6");
                        ns(c.Pb, B, "failure", E);
                        R(16) && Mq(c, f, Wp.D.ii);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Ss(c.id, f, "1");
                var C = function() {
                    lf(3);
                    var E = La() - H;
                    Ss(c.id, f, "7");
                    ns(c.Pb, B, "exception", E);
                    R(16) && Mq(c, f, Wp.D.hi);
                    z || (z = !0, l())
                };
                R(16) && Lq(c, f);
                var H = La();
                try {
                    Yc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
                R(16) && Mq(c, f, Wp.D.ki)
            }
        }
        var f = Nc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Zc(f[nc.li], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Us(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 ===
                p.xi ? m : q
        }
        if (f[nc.ai] || f[nc.qk]) {
            var t = f[nc.ai] ? Oc : c.Cm,
                r = h,
                u = l;
            if (!t[a]) {
                e = Na(e);
                var v = Ws(a, t, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                t[a](r, u)
            }
        }
        return e
    }

    function Ws(a, b, c) {
        var d = [],
            e = [];
        b[a] = Xs(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Ys;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Zs;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Xs(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ys(a) {
        a()
    }

    function Zs(a, b) {
        b()
    };
    var at = function(a, b) {
            return 1 === arguments.length ? $s("config", a) : $s("config", a, b)
        },
        bt = function(a, b, c) {
            c = c || {};
            c[M.g.Mb] = a;
            return $s("event", b, c)
        };

    function $s(a) {
        return arguments
    }
    var ct = function() {
        this.h = [];
        this.s = []
    };
    ct.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (h) {}
    };
    ct.prototype.listen = function(a) {
        this.s.push(a)
    };
    ct.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ct.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var et = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = Gg.canonicalContainerId;
            dt().enqueue(a, b, c)
        },
        gt = function() {
            var a = ft;
            dt().listen(a)
        };

    function dt() {
        var a = Ae.mb;
        a || (a = new ct, Ae.mb = a);
        return a
    }
    var ot = function(a) {
            var b = Ae.zones;
            return b ? b.getIsAllowedFn(Jg(), a) : function() {
                return !0
            }
        },
        pt = function() {
            nr(function(a) {
                var b = a.originalEventData["gtm.uniqueEventId"],
                    c = Ae.zones;
                return c ? c.isActive(Jg(), b) : !0
            });
            R(75) && mr(function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return ot(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
            })
        };
    var st = function(a, b) {
        for (var c = [], d = 0; d < Nc.length; d++)
            if (a[d]) {
                var e = Nc[d];
                var f = qs(b.Pb);
                try {
                    var h = Us(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[nc.ma];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Pc[l];
                        c.push({
                            Wi: d,
                            Ji: (m ? m.priorityOverride || 0 : 0) || kr(e[nc.ma], 1) || 0,
                            execute: h
                        })
                    } else qt(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(rt);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function rt(a, b) {
        var c, d = b.Ji,
            e = a.Ji;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Wi,
                l = b.Wi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function qt(a, b) {
        if (hh) {
            var c = function(d) {
                var e = b.isBlocked(Nc[d]) ? "3" : "4",
                    f = Zc(Nc[d][nc.gi], b, []);
                f && f.length && c(f[0].index);
                Ss(b.id, Nc[d], e);
                var h = Zc(Nc[d][nc.li], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var vt = !1,
        tt;
    var Bt = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (R(16)) {}
        if ("gtm.js" === d) {
            if (vt) return !1;
            vt = !0
        }
        var e, f = !1,
            h = or(),
            l = A(a);
        if (h.every(function(u) {
                return u({
                    originalEventData: l
                })
            })) e = ot(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = ot(Number.MAX_SAFE_INTEGER)
        }
        Hs(b, d);
        var m =
            a.eventCallback,
            n = a.eventTimeout,
            p = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: wt(e, l, f),
                Cm: [],
                logMacroError: function() {
                    K(6);
                    lf(0)
                },
                cachedModelValues: xt(),
                Pb: new ls(function() {
                    if (R(16)) {}
                    m &&
                        m.apply(m, [].slice.call(arguments, 0))
                }, n),
                originalEventData: l
            };
        R(26) && hh && (p.reportMacroDiscrepancy = Ms);
        R(16) && Hq(p.id, p.name);
        var q = ed(p);
        R(16) && Iq(p.id, p.name);
        f && (q = zt(q));
        if (R(16)) {}
        var t = st(q, p),
            r = !1;
        rs(p.Pb);
        "gtm.js" !== d && "gtm.sync" !== d || ys(Ng());
        return At(q, t) || r
    };

    function xt() {
        var a = {};
        a.event = df("event", 1);
        a.ecommerce = df("ecommerce", 1);
        a.gtm = df("gtm");
        a.eventModel = df("eventModel");
        return a
    }

    function wt(a, b, c) {
        var d = xr(a);
        return function(e) {
            if (d(e)) return !0;
            var f = e && e[nc.ma];
            if (!f || "string" != typeof f) return !0;
            f = f.replace(/^_*/, "");
            var h, l = Og();
            h = lr().getRestrictions(0, l);
            var m = b;
            c && (m = A(b), m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var n = Qe[f] || [], p = ia(h), q = p.next(); !q.done; q = p.next()) {
                var t = q.value;
                try {
                    if (!t({
                            entityId: f,
                            securityGroups: n,
                            originalEventData: m
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function zt(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Nc[c][nc.ma]);
                if (Ce[d] || void 0 !== Nc[c][nc.rk] || kr(d, 2)) b[c] = !0
            }
        return b
    }

    function At(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Nc[c] && !De[String(Nc[c][nc.ma])]) return !0;
        return !1
    }
    var Ct = {},
        Dt = {},
        Et = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Cg: void 0,
                    hg: void 0
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.Cg = eg(h, b), e.Cg) {
                        var l = Lg();
                        Aa(l, function(t) {
                            return function(r) {
                                return t.Cg.X === r
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = Ct[h] || [];
                    e.hg = {};
                    m.forEach(function(t) {
                        return function(r) {
                            return t.hg[r] = !0
                        }
                    }(e));
                    for (var n = Jg(), p = 0; p < n.length; p++)
                        if (e.hg[n[p]]) {
                            c = c.concat(Lg());
                            break
                        }
                    var q = Dt[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Sl: c,
                Ul: d
            }
        },
        Ft = function(a) {
            k(Ct, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Gt = function(a) {
            k(Dt, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Ht = "HA GF G UA AW DC MC".split(" "),
        It = !1,
        Jt = !1;

    function Kt(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Re()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Lt = void 0,
        Mt = void 0;

    function Nt(a, b, c) {
        var d = A(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && K(136);
        var e = A(b);
        A(c, e);
        et(at(Jg()[0], e), a.eventId, d)
    }

    function Ot(a) {
        for (var b = ia([M.g.ed, M.g.Nb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || gi.C[d];
            if (e) return e
        }
    }
    var Pt = {
            config: function(a, b) {
                var c = R(27),
                    d = Kt(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = eg(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!Eg.rd) {
                                var n = Pg(Qg());
                                if ($g(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Zl: Pg(p),
                                        Rl: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var t = m;
                        t && (h = t.Zl, l = t.Rl);
                        Hs(d.eventId, "gtag.config");
                        var r = f.X,
                            u = f.id !== r;
                        if (u ? -1 === Lg().indexOf(r) : -1 === Jg().indexOf(r)) {
                            if (!(c && b.inheritParentConfig || e[M.g.xb])) {
                                var v = Ot(e);
                                if (u) cs(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(r)) {
                                    var w = e;
                                    Lt ? Nt(b, w, Lt) : Mt || (Mt = A(w))
                                } else bs(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                Mt ? (Nt(b, Mt, y), x = !1) : (!y[M.g.Ob] && Fe && Lt || (Lt = A(y)), x = !0);
                                x && h.containers && h.containers.join(",");
                                return
                            }
                            if (Fe && !u && !e[M.g.Ob]) {
                                var B = Jt;
                                Jt = !0;
                                if (B) return
                            }
                            It || K(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Gt(f.id);
                                    var z = f.id,
                                        C = e[M.g.xe] ||
                                        "default";
                                    C = String(C).split(",");
                                    for (var H = 0; H < C.length; H++) {
                                        var E = Dt[C[H]] || [];
                                        Dt[C[H]] = E;
                                        0 > E.indexOf(z) && E.push(z)
                                    }
                                } else {
                                    Ft(f.id);
                                    var D = f.id,
                                        J = e[M.g.xe] || "default";
                                    J = J.toString().split(",");
                                    for (var L = 0; L < J.length; L++) {
                                        var O = Ct[J[L]] || [];
                                        Ct[J[L]] = O;
                                        0 > O.indexOf(D) && O.push(D)
                                    }
                                }
                            delete e[M.g.xe];
                            var T = b.eventMetadata || {};
                            T.hasOwnProperty("is_external_event") || (T.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = T;
                            delete e[M.g.Xc];
                            for (var N = u ? [f.id] : Lg(), Q = 0; Q < N.length; Q++) {
                                var da = e,
                                    aa = N[Q],
                                    V = A(b),
                                    ta = eg(aa, V.isGtmEvent);
                                ta && gi.push("config", [da], ta, V)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    K(39);
                    var c = Kt(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[M.g.K] && K(139), e[M.g.Ba] && K(140));
                    "default" === d ? Sf(e) : "update" === d ? Xf(e, c) : "declare" === d && b.fromContainerExecution && Rf(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel = A(e), e[M.g.Xc] && (h.eventCallback =
                        e[M.g.Xc]), e[M.g.ue] && (h.eventTimeout = e[M.g.ue]));
                    var l = Kt(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        t = q && q[M.g.Mb];
                    void 0 === t && (t = $e(M.g.Mb, 2), void 0 === t && (t = "default"));
                    if (g(t) || za(t)) {
                        var r;
                        b.isGtmEvent ? r = g(t) ? [t] : t : r = t.toString().replace(/\s+/g, "").split(",");
                        var u = Et(r, b.isGtmEvent),
                            v = u.Sl,
                            w = u.Ul;
                        if (w.length)
                            for (var x = Ot(q), y = 0; y < w.length; y++) {
                                var B = eg(w[y], b.isGtmEvent);
                                B && cs(B.X, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = gg(v, b.isGtmEvent)
                    } else p = void 0;
                    var z = p;
                    if (z) {
                        Hs(m, c);
                        for (var C = [], H = 0; H < z.length; H++) {
                            var E = z[H],
                                D = A(b);
                            if (-1 !== Ht.indexOf(Tg(E.prefix))) {
                                var J = A(d),
                                    L = D.eventMetadata || {};
                                L.hasOwnProperty("is_external_event") || (L.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = L;
                                delete J[M.g.Xc];
                                hi(c, J, E.id, D)
                            }
                            C.push(E.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < z.length ? h.eventModel[M.g.Mb] = C.join() : delete h.eventModel[M.g.Mb];
                        It || K(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[M.g.wb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                K(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
                    var c = eg(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        It || K(43);
                        var f = Ot();
                        if (!Aa(Lg(), function(l) {
                                return c.X === l
                            })) cs(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Ht.indexOf(Tg(c.prefix))) {
                            Kt(a, b);
                            var h = {};
                            Of(A((h[M.g.kb] = d, h[M.g.vb] = e, h)));
                            ii(d, function(l) {
                                I(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    It = !0;
                    var c = Kt(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Ya(a[1]) ? c = A(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Ya(a[2]) || za(a[2]) ? c[a[1]] = A(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Kt(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    A(c);
                    var h = A(c);
                    gi.push("set", [h], void 0,
                        b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    R(10) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Qt = {
            policy: !0
        };
    var Rt = function(a) {
            var b = F[ze.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        St = function(a) {
            var b = F[ze.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Tt = !1,
        Ut = [];

    function Vt() {
        if (!Tt) {
            Tt = !0;
            for (var a = 0; a < Ut.length; a++) I(Ut[a])
        }
    }
    var Wt = function(a) {
        Tt ? I(a) : Ut.push(a)
    };
    var mu = function(a) {
        if (lu(a)) return a;
        this.h = a
    };
    mu.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var lu = function(a) {
        return !a || "object" !== Wa(a) || Ya(a) ? !1 : "getUntrustedMessageValue" in a
    };
    mu.prototype.getUntrustedMessageValue = mu.prototype.getUntrustedMessageValue;
    var nu = 0,
        ou = {},
        pu = [],
        qu = [],
        ru = !1,
        su = !1;

    function tu(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var uu = function(a) {
            return F[ze.da].push(a)
        },
        vu = function(a, b) {
            if (!ya(b) || 0 > b) b = 0;
            var c = Ae[ze.da],
                d = 0,
                e = !1,
                f = void 0;
            f = F.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (F.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function wu(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && cf(e), cf(e, f))
        });
        Ne || (Ne = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Re(), a["gtm.uniqueEventId"] = d, cf("gtm.uniqueEventId", d));
        return Bt(a)
    }

    function xu(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function yu() {
        var a;
        if (qu.length) a = qu.shift();
        else if (pu.length) a = pu.shift();
        else return;
        var b;
        var c = a;
        if (ru || !xu(c.message)) b = c;
        else {
            ru = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Re());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            pu.unshift(l, c);
            if (hh) {
                var m = Gg.ctid;
                if (m) {
                    var n, p = Pg(Qg());
                    n = p && p.context;
                    var q, t = qg(F.location.href);
                    q = t.hostname + t.pathname;
                    var r = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Gg.canonicalContainerId,
                        w = Eg.rd;
                    hh && (wh || (wh = q), xh.push(m + ";" + v + ";" + (r ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function zu() {
        for (var a = !1, b; !su && (b = yu());) {
            su = !0;
            delete Xe.eventModel;
            Ze();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) su = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = $e(l, 1);
                        if (za(m) || Ya(m)) m = A(m);
                        Ye[l] = m
                    }
                try {
                    if (xa(d)) try {
                        d.call(af)
                    } catch (C) {} else if (za(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                r = $e(p.join("."), 2);
                            if (null != r) try {
                                r[q].apply(r, t)
                            } catch (C) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ea(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = Pt[d[0]];
                                    if (w && (!e.fromContainerExecution || !Qt[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && K(101)
                        }
                        else u = d;
                        if (u) {
                            var x = wu(u, e);
                            a = x || a;
                            v && x && K(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ze(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var B = ou[String(y)] || [], z = 0; z < B.length; z++) qu.push(Au(B[z]));
                        B.length && qu.sort(tu);
                        delete ou[String(y)];
                        y > nu && (nu = y)
                    }
                    su = !1
                }
            }
        }
        return !a
    }

    function Bu() {
        if (R(16)) {
            var a = Cu();
        }
        var b = zu();
        if (R(16)) {}
        try {
            Rt(Ng())
        } catch (c) {}
        return b
    }

    function ft(a) {
        if (nu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            ou[b] = ou[b] || [];
            ou[b].push(a)
        } else qu.push(Au(a)), qu.sort(tu), I(function() {
            su || zu()
        })
    }

    function Au(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Du = function() {
            function a(f) {
                var h = {};
                if (lu(f)) {
                    var l = f;
                    f = lu(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Rb(ze.da, []),
                c = Ae[ze.da] = Ae[ze.da] || {};
            !0 === c.pruned && K(83);
            ou = dt().get();
            gt();
            is(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Wt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Ae.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new mu(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                pu.push.apply(pu, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (K(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return zu() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            pu.push.apply(pu, e);
            if (Cu()) {
                if (R(16)) {}
                I(Bu)
            }
        },
        Cu = function() {
            var a = !0;
            return a
        };

    function Eu(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    }

    function Fu(a) {
        return a && 0 === a.indexOf("pending:") ? Eu(a.substr(8)) : !1
    };
    var $u = function() {};
    var av = function() {};
    av.prototype.toString = function() {
        return "undefined"
    };
    var bv = new av;
    var Gv = F.clearTimeout,
        Hv = F.setTimeout,
        W = function(a, b, c, d) {
            if (tj()) {
                b && I(b)
            } else return Xb(a, b, c, d)
        },
        Iv = function() {
            return new Date
        },
        Jv = function() {
            return F.location.href
        },
        Kv = function(a) {
            return mg(qg(a), "fragment")
        },
        Lv = function(a) {
            return ng(qg(a))
        },
        Mv = function(a, b) {
            return $e(a, b || 2)
        },
        Nv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = uu(a)) : d = uu(a);
            return d
        },
        Ov = function(a, b) {
            F[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === F[a] || c && !F[a]) && (F[a] = b);
            return F[a]
        },
        Pv = function(a, b, c) {
            return zj(a, b, void 0 === c ? !0 : !!c)
        },
        Qv = function(a, b, c) {
            return 0 === Ij(a, b, c)
        },
        Rv = function(a, b) {
            if (tj()) {
                b && I(b)
            } else Zb(a, b)
        },
        Sv = function(a) {
            return !!mv(a, "init", !1)
        },
        Tv = function(a) {
            kv(a, "init", !0)
        };

    function pw(a, b) {
        function c(h) {
            var l = qg(h),
                m = mg(l, "protocol"),
                n = mg(l, "host", !0),
                p = mg(l, "port"),
                q = mg(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function qw(a) {
        return rw(a) ? 1 : 0
    }

    function rw(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = A(a, {});
                A({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (qw(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < wd.length; h++) {
                            var l = wd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var t = a.ignore_case ? "i" : void 0;
                try {
                    var r = String(c) + t,
                        u = xd.get(r);
                    u || (u = new RegExp(c, t), xd.set(r, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return pw(b, c)
        }
        return !1
    };

    function sw() {
        var a = [
            ["cv", "3"],
            ["rv", ze.Qf],
            ["tc", Nc.filter(function(b) {
                return b
            }).length]
        ];
        ze.vd && a.push(["x", ze.vd]);
        Te.h && a.push(["tag_exp", Te.h]);
        return a
    };

    function tw() {
        var a = nf();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var uw;

    function vw() {
        try {
            null != uw || (uw = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = uw) ? 0 : a.length) ? [
            ["exp_tz", uw]
        ] : []
    };
    var ww = [];

    function xw(a) {
        var b = [];
        if (!ww.length) return b;
        for (var c = ia(ww), d = c.next(); !d.done; d = c.next()) b.push([d.value, "1"]);
        a.Za && (a.ef(), ww.length = 0);
        return b
    };

    function yw(a) {
        if (a.scriptSource) {
            var b;
            try {
                b = jc().getEntriesByType("resource")
            } catch (h) {}
            if (b) {
                for (var c = {}, d = 0; d < b.length; ++d) {
                    var e = b[d],
                        f = e.initiatorType;
                    if ("script" === f && e.name === a.scriptSource) return {
                        vm: d,
                        wm: c
                    };
                    c[f] = 1 + (c[f] || 0)
                }
                K(146)
            } else K(145)
        }
    }

    function zw() {
        if (hh && R(91)) {
            var a = Rg();
            if (!a) K(144);
            else if (a.canonicalContainerId) {
                var b = yw(a);
                if (b) {
                    var c = !1;
                    ch(function(d) {
                        if (c) return [];
                        d.Za && (c = !0);
                        d.ef();
                        return [
                            ["rtg", a.canonicalContainerId],
                            ["rlo", b.vm],
                            ["slo", b.wm.script || 0]
                        ]
                    })
                }
            }
        }
    };
    var fx = function() {
        var a = !0;
        cj(7) && cj(9) && cj(10) || (a = !1);
        return a
    };
    qf();

    function fy() {
        return F.gaGlobal = F.gaGlobal || {}
    }
    var gy = function() {
            var a = fy();
            a.hid = a.hid || Ba();
            return a.hid
        },
        hy = function(a, b) {
            var c = fy();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Py = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        Qy = function(a, b) {
            a.h = b;
            return a
        },
        Ry = function(a, b) {
            a.J = b;
            return a
        };

    function Sy(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function Ty(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Ya(b) ? b : {}, f = ia(d), h = f.next(); !h.done; h = f.next()) c(h.value, e)
        }
    };
    var hz = window,
        iz = document,
        jz = function(a) {
            var b = hz._gaUserPrefs;
            if (b && b.ioo && b.ioo() || iz.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === hz["ga-disable-" + a]) return !0;
            try {
                var c = hz.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = wj("AMP_TOKEN", String(iz.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return iz.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function sz(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[M.g.Xa] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Az = function(a, b) {};

    function zz(a, b) {
        var c = function() {};
        return c
    }

    function Bz(a, b, c) {};
    var Cz = zz;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Ez = encodeURI,
        Y = encodeURIComponent,
        Fz = function(a, b, c) {
            $b(a, b, c)
        },
        Gz = function(a, b) {
            if (!a) return !1;
            var c = mg(qg(a),
                "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Hz = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !0;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !0;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = Mv("gtm.referrer", 1) || G.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? mg(qg(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Lv(String(b)) : String(b)
            })
        }();
    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Mv("gtm.url", 1)) || Jv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Lv(String(c));
                var e = qg(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? za(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = mg(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = mg(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();




















    var cB = {};
    cB.dataLayer = af;
    cB.callback = function(a) {
        Pe.hasOwnProperty(a) && xa(Pe[a]) && Pe[a]();
        delete Pe[a]
    };
    cB.bootstrap = 0;
    cB._spx = !1;

    function dB() {
        Ae[Ng()] = Ae[Ng()] || cB;
        Wg();
        Yg() || k(Zg(), function(d, e) {
            cs(d, e.transportUrl, e.context);
            K(92)
        });
        Oa(Qe, Z.securityGroups);
        var a = Pg(Qg()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || K(142);
        Uc = fd
    }
    (function(a) {
        function b() {
            m = G.documentElement.getAttribute("data-tag-assistant-present");
            Eu(m) && (l = h.fk)
        }
        if (!F["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = qg(G.referrer);
                c = "cct.google" === lg(d, "host")
            }
            if (!c) {
                var e = zj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (F["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        if (Ke) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    Ge ? (v = "OGT", w = "GTAG") : Ke && (w = v = "OPT");
                    var x = F["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        F["google.tagmanager.debugui2.queue"] = x, Xb("https://" + ze.Ic + "/debug/bootstrap?id=" + Gg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + vj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Qb,
                            containerProduct: v,
                            debug: !1,
                            id: Gg.ctid,
                            targetRef: {
                                ctid: Gg.ctid,
                                isDestination: Eg.rd
                            },
                            aliases: Hg(),
                            destinations: Kg()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    ze.ij && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Xm: 1,
                    gk: 2,
                    tk: 3,
                    jj: 4,
                    fk: 5
                },
                l = void 0,
                m = void 0,
                n = mg(F.location, "query", !1, void 0, "gtm_debug");
            Eu(n) && (l = h.gk);
            if (!l && G.referrer) {
                var p = qg(G.referrer);
                "tagassistant.google.com" === lg(p, "host") && (l = h.tk)
            }
            if (!l) {
                var q = zj("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.jj)
            }
            l || b();
            if (!l && Fu(m)) {
                var t = function() {
                        if (r) return !0;
                        r = !0;
                        b();
                        l && Qb ? f(l) : a()
                    },
                    r = !1;
                ac(G, "TADebugSignal", function() {
                    t()
                }, !1);
                F.setTimeout(function() {
                    t()
                }, 200)
            } else l && Qb ? f(l) : a()
        }
    })(function() {
        try {
            Ug();
            if (R(16)) {}
            vf().s();
            aj();
            (R(76) || R(77) || R(78)) &&
            bg();
            var a = Og();
            if (Bg().canonical[a]) {
                var b = Ae.zones;
                b && b.unregisterChild(Jg());
                lr().removeExternalRestrictions(Og());
            } else {
                Te.h = "";
                Te.C = "";
                Te.T = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Te.J = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Te.M = "ad_storage|analytics_storage|ad_user_data";
                yr();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Kc.push(d[e]);
                for (var f = c.tags || [], h = 0; h < f.length; h++) Nc.push(f[h]);
                for (var l = c.predicates || [], m = 0; m < l.length; m++) Mc.push(l[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], t = {}, r = 0; r <
                        q.length; r++) {
                        var u = q[r][0];
                        t[u] = Array.prototype.slice.call(q[r], 1);
                        "if" !== u && "unless" !== u || Tc(t[u])
                    }
                    Lc.push(t)
                }
                Pc = Z;
                Qc = qw;
                dB();
                if (!Ke)
                    for (var v = !1 !== mf["6"] ? R(90) ? Ve(Te.M) : Ve(Te.J) : Ve(Te.T), w = 0; w < Qf.length; w++) {
                        var x = Qf[w],
                            y = x,
                            B = v[x] ? "granted" : "denied";
                        Bf().implicit(y, B)
                    }
                Du();
                ds = !1;
                es = 0;
                if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) gs();
                else {
                    ac(G, "DOMContentLoaded", gs);
                    ac(G, "readystatechange", gs);
                    if (G.createEventObject && G.documentElement.doScroll) {
                        var z = !0;
                        try {
                            z = !F.frameElement
                        } catch (J) {}
                        z && hs()
                    }
                    ac(F, "load", gs)
                }
                Tt = !1;
                "complete" === G.readyState ? Vt() : ac(F, "load", Vt);
                hh && (ch(vh), F.setInterval(uh, 864E5));
                ch(sw);
                ch(Is);
                ch(Xp);
                ch(fi);
                ch(Ts);
                ch(Ah);
                ch(Jo);
                ch(yh);
                R(26) && (ch(Ns), ch(Os), ch(Ps));
                hh && R(84) && (ch(tw), ch(vw));
                zw();
                R(95) && ch(xw);
                $u();
                lf(1);
                pt();
                Oe = La();
                cB.bootstrap = Oe;
                if (R(16)) {}
            }
        } catch (J) {
            if (lf(4),
                hh) {
                var D = ph(!0, !0);
                $b(D)
            }
        }
    });

})()