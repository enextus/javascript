! function (e) {
    var o = {};

    function t(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = o, t.d = function (e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: n
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var r in e) t.d(n, r, function (o) {
                return e[o]
            }.bind(null, r));
        return n
    }, t.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function (e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, t.p = "/", t(t.s = 325)
}({
    325: function (e, o, t) {
        e.exports = t(326)
    },
    326: function (e, o) {
        var t = "a2fb15d5dd3bbb6c547cf96a2f8a41f662a2d07c",
            n = function (e, o) {
                var t = document.createElement("div");
                t.style.cssText = "color:white;background-color:red;padding:5em;font-weight:bold;text-align:center;", t.innerHTML = e + '<br/><b>More information can be found at<br/><br/><a href="https://help.spreadshirt.com/hc/en-us/articles/207487815">https://help.spreadshirt.com/hc/en-us/articles/207487815</a></b>', o ? o.parentNode.insertBefore(t, o) : document.body.appendChild(t)
            },
            r = function (e) {
                if (e && "object" == typeof e || n("Could not embed SpreadShop: No 'spread_shop_config' object found in window"), ["baseId", "prefix", "shopName"].forEach(function (o) {
                        if (!e[o]) throw n("<h2>Could not embed your SpreadShop!</h2><p>Please provide a '" + o + "' in the spread_shop_config object.</p>"), new Error("Could not embed SpreadShop: Element with id '" + e.baseId + "' not found")
                    }), e.integrationProvider) {
                    e.integrationProvider.match(/^[A-Za-z\s0-9.\-_]*$/i) || (console.error("[SpreadShop] Invalid integrationProvider '" + e.integrationProvider + "' found - will not use this! Valid values are strings/numbers (and whitespaces, ., -, _)."), delete e.integrationProvider)
                }
            },
            d = function (e, o) {
                if (!o) {
                    var t = "<h2>Could not embed your SpreadShop!</h2><p>Please add a container with the id '" + e.baseId + "' to your HTML file.</p>";
                    throw n(t), new Error("Could not embed SpreadShop: Element with id '" + e.baseId + "' not found")
                }
            },
            i = function (e, o) {
                if (null === document.doctype) {
                    console.error("[SpreadShop] Could embed shop '" + e.shopName + "' because of missing doctype. Please add '<!DOCTYPE html>' at the beginning of your html file.");
                    n('\n    <h2>Could not properly render your SpreadShop!</h2>\n    <p>This HTML Document does not specify a doctype. This can lead to very strange layout and styling errors.</p> \n    <p>Please add \'&lt;!DOCTYPE html&gt;\' at the beginning of your html file.</p>\n    <br />\n    <small>For more information read the documentation of <a href="https://www.w3schools.com/tags/tag_doctype.asp">doctype</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_quirks_mode_behavior">quirks mode</a>.</small>\n  ', o)
                }
            },
            a = function (e, o) {
                var t = document.createElement("link");
                t.rel = "stylesheet", t.type = "text/css", t.id = "sprd-css", t.href = e + "/shopfiles/css/shop_prefixed." + o + ".css";
                var n = document.getElementById("sprd-css");
                n && n.parentNode.removeChild(n), document.head.appendChild(t)
            },
            s = function (e, o) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = e + "/js/shop.bundle." + o + ".js", t.onerror = function () {
                    n("Could not embed SpreadShop: Failed to load shop script")
                }, document.head.appendChild(t)
            };

        function p(e) {
            r(e);
            var o = document.getElementById(e.baseId);
            d(e, o), i(e, o);
            var n, p, l = (n = e.prefix, p = "/", -1 !== n.indexOf(p, n.length - p.length) ? e.prefix.substring(0, e.prefix.length - 1) : e.prefix);
            window.sprd_public_path = l + "/", s(l, t), a(l, t)
        }
        var l = !1,
            c = window.spread_shop_config;
        c && "object" == typeof c && (document.getElementById(c.baseId) && (p(c), l = !0));
        l || document.addEventListener("DOMContentLoaded", function () {
            p(c)
        })
    }
});