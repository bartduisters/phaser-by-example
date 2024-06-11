import {
  P as Phaser$1,
  c as commonjsGlobal,
  g as getAugmentedNamespace,
  a as getDefaultExportFromCjs,
} from "./phaser-CYd07urT.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const s of e)
        if ("childList" === s.type)
          for (const e of s.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "bootloader" });
  }
  preload() {
    this.createBars(),
      this.setLoadEvents(),
      Array(15)
        .fill(0)
        .forEach((e, t) => {
          this.load.image(`cloud${t}`, `assets/images/cloud${t}.png`);
        }),
      this.load.image("pello", "assets/images/pello.png"),
      this.load.image("sensei", "assets/images/sensei.png"),
      this.load.audio("win", "assets/sounds/win.mp3"),
      this.load.audio("drip", "assets/sounds/drip.mp3"),
      this.load.audio("fail", "assets/sounds/fail.mp3"),
      this.load.bitmapFont(
        "mainFont",
        "assets/fonts/hiro.png",
        "assets/fonts/hiro.xml"
      ),
      this.registry.set("score", 0);
  }
  setLoadEvents() {
    this.load.on(
      "progress",
      function (e) {
        this.progressBar.clear(),
          this.progressBar.fillStyle(8966732, 1),
          this.progressBar.fillRect(
            this.cameras.main.width / 4,
            this.cameras.main.height / 2 - 16,
            (this.cameras.main.width / 2) * e,
            16
          );
      },
      this
    ),
      this.load.on(
        "complete",
        () => {
          this.scene.start("game");
        },
        this
      );
  }
  createBars() {
    (this.loadBar = this.add.graphics()),
      this.loadBar.fillStyle(33923, 1),
      this.loadBar.fillRect(
        this.cameras.main.width / 4 - 2,
        this.cameras.main.height / 2 - 18,
        this.cameras.main.width / 2 + 4,
        20
      ),
      (this.progressBar = this.add.graphics());
  }
}
class Player {
  constructor(e, t) {
    (this.scene = e),
      (this.name = t),
      (this.score = 0),
      (this.lastMessage = null),
      (this.dead = !1),
      (this.penalties = 0);
  }
  hasSpammed() {
    return (
      !!this.lastMessage &&
      (new Date() - this.lastMessage) / 1e3 < this.scene.spamTimeWait
    );
  }
  setPenalty() {
    this.penalties++,
      (this.score = 0),
      (this.dead = !0),
      this.scene.time.delayedCall(
        1e4 * this.penalties,
        () => {
          this.dead = !1;
        },
        null,
        this
      );
  }
}
var client$1 = { exports: {} };
const __viteBrowserExternal = {},
  __viteBrowserExternal$1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: __viteBrowserExternal },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  require$$1 = getAugmentedNamespace(__viteBrowserExternal$1);
var utils = { exports: {} };
const actionMessageRegex = /^\u0001ACTION ([^\u0001]+)\u0001$/,
  justinFanRegex = /^(justinfan)(\d+$)/,
  unescapeIRCRegex = /\\([sn:r\\])/g,
  escapeIRCRegex = /([ \n;\r\\])/g,
  ircEscapedChars = { s: " ", n: "", ":": ";", r: "" },
  ircUnescapedChars = { " ": "s", "\n": "n", ";": ":", "\r": "r" },
  urlRegex = new RegExp(
    "^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$",
    "i"
  ),
  regexEmoteRegex = /[|\\^$*+?:#]/,
  _$4 = (utils.exports = {
    get: (e, t) => (void 0 === e ? t : e),
    hasOwn: (e, t) => ({}).hasOwnProperty.call(e, t),
    promiseDelay: (e) => new Promise((t) => setTimeout(t, e)),
    isFinite: (e) => isFinite(e) && !isNaN(parseFloat(e)),
    toNumber(e, t) {
      if (null === e) return 0;
      const s = Math.pow(10, _$4.isFinite(t) ? t : 0);
      return Math.round(e * s) / s;
    },
    isInteger: (e) => !isNaN(_$4.toNumber(e, 0)),
    isRegex: (e) => regexEmoteRegex.test(e),
    isURL: (e) => urlRegex.test(e),
    justinfan: () => `justinfan${Math.floor(8e4 * Math.random() + 1e3)}`,
    isJustinfan: (e) => justinFanRegex.test(e),
    channel(e) {
      const t = (e || "").toLowerCase();
      return "#" === t[0] ? t : "#" + t;
    },
    username(e) {
      const t = (e || "").toLowerCase();
      return "#" === t[0] ? t.slice(1) : t;
    },
    token: (e) => (e ? e.toLowerCase().replace("oauth:", "") : ""),
    password(e) {
      const t = _$4.token(e);
      return t ? `oauth:${t}` : "";
    },
    actionMessage: (e) => e.match(actionMessageRegex),
    replaceAll(e, t) {
      if (null == e) return null;
      for (const s in t) e = e.replace(new RegExp(s, "g"), t[s]);
      return e;
    },
    unescapeHtml: (e) =>
      e
        .replace(/\\&amp\\;/g, "&")
        .replace(/\\&lt\\;/g, "<")
        .replace(/\\&gt\\;/g, ">")
        .replace(/\\&quot\\;/g, '"')
        .replace(/\\&#039\\;/g, "'"),
    unescapeIRC: (e) =>
      e && "string" == typeof e && e.includes("\\")
        ? e.replace(unescapeIRCRegex, (e, t) =>
            t in ircEscapedChars ? ircEscapedChars[t] : t
          )
        : e,
    escapeIRC: (e) =>
      e && "string" == typeof e
        ? e.replace(escapeIRCRegex, (e, t) =>
            t in ircUnescapedChars ? `\\${ircUnescapedChars[t]}` : t
          )
        : e,
    addWord: (e, t) => (e.length ? e + " " + t : e + t),
    splitLine(e, t) {
      let s = e.substring(0, t).lastIndexOf(" ");
      return -1 === s && (s = t - 1), [e.substring(0, s), e.substring(s + 1)];
    },
    extractNumber(e) {
      const t = e.split(" ");
      for (let s = 0; s < t.length; s++) if (_$4.isInteger(t[s])) return ~~t[s];
      return 0;
    },
    formatDate(e) {
      let t = e.getHours(),
        s = e.getMinutes();
      return (
        (t = (t < 10 ? "0" : "") + t),
        (s = (s < 10 ? "0" : "") + s),
        `${t}:${s}`
      );
    },
    inherits(e, t) {
      e.super_ = t;
      const s = function () {};
      (s.prototype = t.prototype),
        (e.prototype = new s()),
        (e.prototype.constructor = e);
    },
    isNode() {
      try {
        return (
          "object" == typeof process &&
          "[object process]" === Object.prototype.toString.call(process)
        );
      } catch (e) {}
      return !1;
    },
  });
var utilsExports = utils.exports;
const fetch$1 = require$$1,
  _$3 = utilsExports;
var api = function (e, t) {
  let s = void 0 !== e.url ? e.url : e.uri;
  if (
    (_$3.isURL(s) ||
      (s = `https://api.twitch.tv/kraken${"/" === s[0] ? s : `/${s}`}`),
    _$3.isNode())
  ) {
    const i = Object.assign({ method: "GET", json: !0 }, e);
    i.qs && (s += `?${new URLSearchParams(i.qs)}`);
    const n = {};
    "fetchAgent" in this.opts.connection &&
      (n.agent = this.opts.connection.fetchAgent);
    const o = fetch$1(s, {
      ...n,
      method: i.method,
      headers: i.headers,
      body: i.body,
    });
    let r = {};
    o.then(
      (e) => (
        (r = { statusCode: e.status, headers: e.headers }),
        i.json ? e.json() : e.text()
      )
    ).then(
      (e) => t(null, r, e),
      (e) => t(e, r, null)
    );
  } else {
    const i = Object.assign({ method: "GET", headers: {} }, e, { url: s }),
      n = new XMLHttpRequest();
    n.open(i.method, i.url, !0);
    for (const e in i.headers) n.setRequestHeader(e, i.headers[e]);
    (n.responseType = "json"),
      n.addEventListener("load", (e) => {
        4 === n.readyState &&
          (200 !== n.status
            ? t(n.status, null, null)
            : t(null, null, n.response));
      }),
      n.send();
  }
};
const _$2 = utilsExports;
function followersonly(e, t) {
  return (
    (e = _$2.channel(e)),
    (t = _$2.get(t, 30)),
    this._sendCommand(null, e, `/followers ${t}`, (s, i) => {
      this.once("_promiseFollowers", (n) => {
        n ? i(n) : s([e, ~~t]);
      });
    })
  );
}
function followersonlyoff(e) {
  return (
    (e = _$2.channel(e)),
    this._sendCommand(null, e, "/followersoff", (t, s) => {
      this.once("_promiseFollowersoff", (i) => {
        i ? s(i) : t([e]);
      });
    })
  );
}
function part(e) {
  return (
    (e = _$2.channel(e)),
    this._sendCommand(null, null, `PART ${e}`, (t, s) => {
      this.once("_promisePart", (i) => {
        i ? s(i) : t([e]);
      });
    })
  );
}
function r9kbeta(e) {
  return (
    (e = _$2.channel(e)),
    this._sendCommand(null, e, "/r9kbeta", (t, s) => {
      this.once("_promiseR9kbeta", (i) => {
        i ? s(i) : t([e]);
      });
    })
  );
}
function r9kbetaoff(e) {
  return (
    (e = _$2.channel(e)),
    this._sendCommand(null, e, "/r9kbetaoff", (t, s) => {
      this.once("_promiseR9kbetaoff", (i) => {
        i ? s(i) : t([e]);
      });
    })
  );
}
function slow(e, t) {
  return (
    (e = _$2.channel(e)),
    (t = _$2.get(t, 300)),
    this._sendCommand(null, e, `/slow ${t}`, (s, i) => {
      this.once("_promiseSlow", (n) => {
        n ? i(n) : s([e, ~~t]);
      });
    })
  );
}
function slowoff(e) {
  return (
    (e = _$2.channel(e)),
    this._sendCommand(null, e, "/slowoff", (t, s) => {
      this.once("_promiseSlowoff", (i) => {
        i ? s(i) : t([e]);
      });
    })
  );
}
var commands = {
  action(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = `ACTION ${t}`),
      this._sendMessage(this._getPromiseDelay(), e, t, (s, i) => {
        s([e, t]);
      })
    );
  },
  ban(e, t, s) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      (s = _$2.get(s, "")),
      this._sendCommand(null, e, `/ban ${t} ${s}`, (i, n) => {
        this.once("_promiseBan", (o) => {
          o ? n(o) : i([e, t, s]);
        });
      })
    );
  },
  clear(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/clear", (t, s) => {
        this.once("_promiseClear", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  color(e, t) {
    return (
      (t = _$2.get(t, e)),
      this._sendCommand(null, "#tmijs", `/color ${t}`, (e, s) => {
        this.once("_promiseColor", (i) => {
          i ? s(i) : e([t]);
        });
      })
    );
  },
  commercial(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.get(t, 30)),
      this._sendCommand(null, e, `/commercial ${t}`, (s, i) => {
        this.once("_promiseCommercial", (n) => {
          n ? i(n) : s([e, ~~t]);
        });
      })
    );
  },
  deletemessage(e, t) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, `/delete ${t}`, (t, s) => {
        this.once("_promiseDeletemessage", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  emoteonly(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/emoteonly", (t, s) => {
        this.once("_promiseEmoteonly", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  emoteonlyoff(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/emoteonlyoff", (t, s) => {
        this.once("_promiseEmoteonlyoff", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  followersonly: followersonly,
  followersmode: followersonly,
  followersonlyoff: followersonlyoff,
  followersmodeoff: followersonlyoff,
  host(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(2e3, e, `/host ${t}`, (s, i) => {
        this.once("_promiseHost", (n, o) => {
          n ? i(n) : s([e, t, ~~o]);
        });
      })
    );
  },
  join(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(void 0, null, `JOIN ${e}`, (t, s) => {
        const i = "_promiseJoin";
        let n = !1;
        const o = (r, a) => {
          e === _$2.channel(a) &&
            (this.removeListener(i, o), (n = !0), r ? s(r) : t([e]));
        };
        this.on(i, o);
        const r = this._getPromiseDelay();
        _$2.promiseDelay(r).then(() => {
          n || this.emit(i, "No response from Twitch.", e);
        });
      })
    );
  },
  mod(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(null, e, `/mod ${t}`, (s, i) => {
        this.once("_promiseMod", (n) => {
          n ? i(n) : s([e, t]);
        });
      })
    );
  },
  mods(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/mods", (t, s) => {
        this.once("_promiseMods", (i, n) => {
          i
            ? s(i)
            : (n.forEach((t) => {
                this.moderators[e] || (this.moderators[e] = []),
                  this.moderators[e].includes(t) || this.moderators[e].push(t);
              }),
              t(n));
        });
      })
    );
  },
  part: part,
  leave: part,
  ping() {
    return this._sendCommand(null, null, "PING", (e, t) => {
      (this.latency = new Date()),
        (this.pingTimeout = setTimeout(
          () => {
            null !== this.ws &&
              ((this.wasCloseCalled = !1),
              this.log.error("Ping timeout."),
              this.ws.close(),
              clearInterval(this.pingLoop),
              clearTimeout(this.pingTimeout));
          },
          _$2.get(this.opts.connection.timeout, 9999)
        )),
        this.once("_promisePing", (t) => e([parseFloat(t)]));
    });
  },
  r9kbeta: r9kbeta,
  r9kmode: r9kbeta,
  r9kbetaoff: r9kbetaoff,
  r9kmodeoff: r9kbetaoff,
  raw(e) {
    return this._sendCommand(null, null, e, (t, s) => {
      t([e]);
    });
  },
  say(e, t) {
    return (
      (e = _$2.channel(e)),
      (t.startsWith(".") && !t.startsWith("..")) ||
      t.startsWith("/") ||
      t.startsWith("\\")
        ? "me " === t.substr(1, 3)
          ? this.action(e, t.substr(4))
          : this._sendCommand(null, e, t, (s, i) => {
              s([e, t]);
            })
        : this._sendMessage(this._getPromiseDelay(), e, t, (s, i) => {
            s([e, t]);
          })
    );
  },
  slow: slow,
  slowmode: slow,
  slowoff: slowoff,
  slowmodeoff: slowoff,
  subscribers(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/subscribers", (t, s) => {
        this.once("_promiseSubscribers", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  subscribersoff(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/subscribersoff", (t, s) => {
        this.once("_promiseSubscribersoff", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  timeout(e, t, s, i) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      null === s || _$2.isInteger(s) || ((i = s), (s = 300)),
      (s = _$2.get(s, 300)),
      (i = _$2.get(i, "")),
      this._sendCommand(null, e, `/timeout ${t} ${s} ${i}`, (n, o) => {
        this.once("_promiseTimeout", (r) => {
          r ? o(r) : n([e, t, ~~s, i]);
        });
      })
    );
  },
  unban(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(null, e, `/unban ${t}`, (s, i) => {
        this.once("_promiseUnban", (n) => {
          n ? i(n) : s([e, t]);
        });
      })
    );
  },
  unhost(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(2e3, e, "/unhost", (t, s) => {
        this.once("_promiseUnhost", (i) => {
          i ? s(i) : t([e]);
        });
      })
    );
  },
  unmod(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(null, e, `/unmod ${t}`, (s, i) => {
        this.once("_promiseUnmod", (n) => {
          n ? i(n) : s([e, t]);
        });
      })
    );
  },
  unvip(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(null, e, `/unvip ${t}`, (s, i) => {
        this.once("_promiseUnvip", (n) => {
          n ? i(n) : s([e, t]);
        });
      })
    );
  },
  vip(e, t) {
    return (
      (e = _$2.channel(e)),
      (t = _$2.username(t)),
      this._sendCommand(null, e, `/vip ${t}`, (s, i) => {
        this.once("_promiseVip", (n) => {
          n ? i(n) : s([e, t]);
        });
      })
    );
  },
  vips(e) {
    return (
      (e = _$2.channel(e)),
      this._sendCommand(null, e, "/vips", (e, t) => {
        this.once("_promiseVips", (s, i) => {
          s ? t(s) : e(i);
        });
      })
    );
  },
  whisper(e, t) {
    return (e = _$2.username(e)) === this.getUsername()
      ? Promise.reject("Cannot send a whisper to the same account.")
      : this._sendCommand(null, "#tmijs", `/w ${e} ${t}`, (e, t) => {
          this.once("_promiseWhisper", (e) => {
            e && t(e);
          });
        }).catch((s) => {
          if (
            s &&
            "string" == typeof s &&
            0 !== s.indexOf("No response from Twitch.")
          )
            throw s;
          const i = _$2.channel(e),
            n = Object.assign(
              {
                "message-type": "whisper",
                "message-id": null,
                "thread-id": null,
                username: this.getUsername(),
              },
              this.globaluserstate
            );
          return (
            this.emits(
              ["whisper", "message"],
              [
                [i, n, t, !0],
                [i, n, t, !0],
              ]
            ),
            [e, t]
          );
        });
  },
};
function EventEmitter() {
  (this._events = this._events || {}),
    (this._maxListeners = this._maxListeners || void 0);
}
var events = EventEmitter;
function isFunction(e) {
  return "function" == typeof e;
}
function isNumber(e) {
  return "number" == typeof e;
}
function isObject(e) {
  return "object" == typeof e && null !== e;
}
function isUndefined(e) {
  return void 0 === e;
}
(EventEmitter.EventEmitter = EventEmitter),
  (EventEmitter.prototype._events = void 0),
  (EventEmitter.prototype._maxListeners = void 0),
  (EventEmitter.defaultMaxListeners = 10),
  (EventEmitter.prototype.setMaxListeners = function (e) {
    if (!isNumber(e) || e < 0 || isNaN(e))
      throw TypeError("n must be a positive number");
    return (this._maxListeners = e), this;
  }),
  (EventEmitter.prototype.emit = function (e) {
    var t, s, i, n, o, r;
    if (
      (this._events || (this._events = {}),
      "error" === e &&
        (!this._events.error ||
          (isObject(this._events.error) && !this._events.error.length)))
    ) {
      if ((t = arguments[1]) instanceof Error) throw t;
      throw TypeError('Uncaught, unspecified "error" event.');
    }
    if (isUndefined((s = this._events[e]))) return !1;
    if (isFunction(s))
      switch (arguments.length) {
        case 1:
          s.call(this);
          break;
        case 2:
          s.call(this, arguments[1]);
          break;
        case 3:
          s.call(this, arguments[1], arguments[2]);
          break;
        default:
          (n = Array.prototype.slice.call(arguments, 1)), s.apply(this, n);
      }
    else if (isObject(s))
      for (
        n = Array.prototype.slice.call(arguments, 1),
          i = (r = s.slice()).length,
          o = 0;
        o < i;
        o++
      )
        r[o].apply(this, n);
    return !0;
  }),
  (EventEmitter.prototype.addListener = function (e, t) {
    var s;
    if (!isFunction(t)) throw TypeError("listener must be a function");
    return (
      this._events || (this._events = {}),
      this._events.newListener &&
        this.emit("newListener", e, isFunction(t.listener) ? t.listener : t),
      this._events[e]
        ? isObject(this._events[e])
          ? this._events[e].push(t)
          : (this._events[e] = [this._events[e], t])
        : (this._events[e] = t),
      isObject(this._events[e]) &&
        !this._events[e].warned &&
        (s = isUndefined(this._maxListeners)
          ? EventEmitter.defaultMaxListeners
          : this._maxListeners) &&
        s > 0 &&
        this._events[e].length > s &&
        ((this._events[e].warned = !0),
        console.error(
          "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
          this._events[e].length
        ),
        "function" == typeof console.trace && console.trace()),
      this
    );
  }),
  (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
  (EventEmitter.prototype.once = function (e, t) {
    if (!isFunction(t)) throw TypeError("listener must be a function");
    var s = !1;
    if (this._events.hasOwnProperty(e) && "_" === e.charAt(0)) {
      var i = 1,
        n = e;
      for (var o in this._events)
        this._events.hasOwnProperty(o) && o.startsWith(n) && i++;
      e += i;
    }
    function r() {
      "_" !== e.charAt(0) ||
        isNaN(e.substr(e.length - 1)) ||
        (e = e.substring(0, e.length - 1)),
        this.removeListener(e, r),
        s || ((s = !0), t.apply(this, arguments));
    }
    return (r.listener = t), this.on(e, r), this;
  }),
  (EventEmitter.prototype.removeListener = function (e, t) {
    var s, i, n, o;
    if (!isFunction(t)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[e]) return this;
    if (
      ((n = (s = this._events[e]).length),
      (i = -1),
      s === t || (isFunction(s.listener) && s.listener === t))
    ) {
      if (
        (delete this._events[e],
        this._events.hasOwnProperty(e + "2") && "_" === e.charAt(0))
      ) {
        var r = e;
        for (var a in this._events)
          this._events.hasOwnProperty(a) &&
            a.startsWith(r) &&
            (isNaN(parseInt(a.substr(a.length - 1))) ||
              ((this._events[e + parseInt(a.substr(a.length - 1) - 1)] =
                this._events[a]),
              delete this._events[a]));
        (this._events[e] = this._events[e + "1"]), delete this._events[e + "1"];
      }
      this._events.removeListener && this.emit("removeListener", e, t);
    } else if (isObject(s)) {
      for (o = n; o-- > 0; )
        if (s[o] === t || (s[o].listener && s[o].listener === t)) {
          i = o;
          break;
        }
      if (i < 0) return this;
      1 === s.length
        ? ((s.length = 0), delete this._events[e])
        : s.splice(i, 1),
        this._events.removeListener && this.emit("removeListener", e, t);
    }
    return this;
  }),
  (EventEmitter.prototype.removeAllListeners = function (e) {
    var t, s;
    if (!this._events) return this;
    if (!this._events.removeListener)
      return (
        0 === arguments.length
          ? (this._events = {})
          : this._events[e] && delete this._events[e],
        this
      );
    if (0 === arguments.length) {
      for (t in this._events)
        "removeListener" !== t && this.removeAllListeners(t);
      return (
        this.removeAllListeners("removeListener"), (this._events = {}), this
      );
    }
    if (isFunction((s = this._events[e]))) this.removeListener(e, s);
    else if (s) for (; s.length; ) this.removeListener(e, s[s.length - 1]);
    return delete this._events[e], this;
  }),
  (EventEmitter.prototype.listeners = function (e) {
    return this._events && this._events[e]
      ? isFunction(this._events[e])
        ? [this._events[e]]
        : this._events[e].slice()
      : [];
  }),
  (EventEmitter.prototype.listenerCount = function (e) {
    if (this._events) {
      var t = this._events[e];
      if (isFunction(t)) return 1;
      if (t) return t.length;
    }
    return 0;
  }),
  (EventEmitter.listenerCount = function (e, t) {
    return e.listenerCount(t);
  });
const _$1 = utilsExports;
let currentLevel = "info";
const levels = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
function log(e) {
  return function (t) {
    levels[e] >= levels[currentLevel] &&
      console.log(`[${_$1.formatDate(new Date())}] ${e}: ${t}`);
  };
}
var logger = {
  setLevel(e) {
    currentLevel = e;
  },
  trace: log("trace"),
  debug: log("debug"),
  info: log("info"),
  warn: log("warn"),
  error: log("error"),
  fatal: log("fatal"),
};
const _ = utilsExports,
  nonspaceRegex = /\S+/g;
function parseComplexTag(e, t, s = ",", i = "/", n) {
  const o = e[t];
  if (void 0 === o) return e;
  const r = "string" == typeof o;
  if (((e[t + "-raw"] = r ? o : null), !0 === o)) return (e[t] = null), e;
  if (((e[t] = {}), r)) {
    const r = o.split(s);
    for (let s = 0; s < r.length; s++) {
      const o = r[s].split(i);
      let a = o[1];
      void 0 !== n && a && (a = a.split(n)), (e[t][o[0]] = a || null);
    }
  }
  return e;
}
var parser = {
  badges: (e) => parseComplexTag(e, "badges"),
  badgeInfo: (e) => parseComplexTag(e, "badge-info"),
  emotes: (e) => parseComplexTag(e, "emotes", "/", ":", ","),
  emoteRegex(e, t, s, i) {
    nonspaceRegex.lastIndex = 0;
    const n = new RegExp("(\\b|^|\\s)" + _.unescapeHtml(t) + "(\\b|$|\\s)");
    let o;
    for (; null !== (o = nonspaceRegex.exec(e)); )
      n.test(o[0]) &&
        ((i[s] = i[s] || []),
        i[s].push([o.index, nonspaceRegex.lastIndex - 1]));
  },
  emoteString(e, t, s, i) {
    let n;
    for (nonspaceRegex.lastIndex = 0; null !== (n = nonspaceRegex.exec(e)); )
      n[0] === _.unescapeHtml(t) &&
        ((i[s] = i[s] || []),
        i[s].push([n.index, nonspaceRegex.lastIndex - 1]));
  },
  transformEmotes(e) {
    let t = "";
    return (
      Object.keys(e).forEach((s) => {
        (t = `${t + s}:`),
          e[s].forEach((e) => (t = `${t + e.join("-")},`)),
          (t = `${t.slice(0, -1)}/`);
      }),
      t.slice(0, -1)
    );
  },
  formTags(e) {
    const t = [];
    for (const s in e) {
      const i = _.escapeIRC(e[s]);
      t.push(`${s}=${i}`);
    }
    return `@${t.join(";")}`;
  },
  msg(e) {
    const t = { raw: e, tags: {}, prefix: null, command: null, params: [] };
    let s = 0,
      i = 0;
    if (64 === e.charCodeAt(0)) {
      if (((i = e.indexOf(" ")), -1 === i)) return null;
      const n = e.slice(1, i).split(";");
      for (let e = 0; e < n.length; e++) {
        const s = n[e],
          i = s.split("=");
        t.tags[i[0]] = s.substring(s.indexOf("=") + 1) || !0;
      }
      s = i + 1;
    }
    for (; 32 === e.charCodeAt(s); ) s++;
    if (58 === e.charCodeAt(s)) {
      if (((i = e.indexOf(" ", s)), -1 === i)) return null;
      for (t.prefix = e.slice(s + 1, i), s = i + 1; 32 === e.charCodeAt(s); )
        s++;
    }
    if (((i = e.indexOf(" ", s)), -1 === i))
      return e.length > s ? ((t.command = e.slice(s)), t) : null;
    for (t.command = e.slice(s, i), s = i + 1; 32 === e.charCodeAt(s); ) s++;
    for (; s < e.length; ) {
      if (((i = e.indexOf(" ", s)), 58 === e.charCodeAt(s))) {
        t.params.push(e.slice(s + 1));
        break;
      }
      if (-1 === i) {
        if (-1 === i) {
          t.params.push(e.slice(s));
          break;
        }
      } else
        for (t.params.push(e.slice(s, i)), s = i + 1; 32 === e.charCodeAt(s); )
          s++;
    }
    return t;
  },
};
class Queue {
  constructor(e) {
    (this.queue = []),
      (this.index = 0),
      (this.defaultDelay = void 0 === e ? 3e3 : e);
  }
  add(e, t) {
    this.queue.push({ fn: e, delay: t });
  }
  next() {
    const e = this.index++,
      t = this.queue[e];
    if (!t) return;
    const s = this.queue[this.index];
    if ((t.fn(), s)) {
      const e = void 0 === s.delay ? this.defaultDelay : s.delay;
      setTimeout(() => this.next(), e);
    }
  }
}
var timer = Queue;
!(function (e) {
  const t =
      void 0 !== commonjsGlobal
        ? commonjsGlobal
        : "undefined" != typeof window
          ? window
          : {},
    s = t.WebSocket || require$$1,
    i = t.fetch || require$$1,
    n = api,
    o = commands,
    r = events.EventEmitter,
    a = logger,
    h = parser,
    c = timer,
    l = utilsExports;
  let m = !1;
  const d = function e(t) {
    if (this instanceof e == 0) return new e(t);
    (this.opts = l.get(t, {})),
      (this.opts.channels = this.opts.channels || []),
      (this.opts.connection = this.opts.connection || {}),
      (this.opts.identity = this.opts.identity || {}),
      (this.opts.options = this.opts.options || {}),
      (this.clientId = l.get(this.opts.options.clientId, null)),
      (this._globalDefaultChannel = l.channel(
        l.get(this.opts.options.globalDefaultChannel, "#tmijs")
      )),
      (this._skipMembership = l.get(this.opts.options.skipMembership, !1)),
      (this._skipUpdatingEmotesets = l.get(
        this.opts.options.skipUpdatingEmotesets,
        !1
      )),
      (this._updateEmotesetsTimer = null),
      (this._updateEmotesetsTimerDelay = l.get(
        this.opts.options.updateEmotesetsTimer,
        6e4
      )),
      (this.maxReconnectAttempts = l.get(
        this.opts.connection.maxReconnectAttempts,
        1 / 0
      )),
      (this.maxReconnectInterval = l.get(
        this.opts.connection.maxReconnectInterval,
        3e4
      )),
      (this.reconnect = l.get(this.opts.connection.reconnect, !0)),
      (this.reconnectDecay = l.get(this.opts.connection.reconnectDecay, 1.5)),
      (this.reconnectInterval = l.get(
        this.opts.connection.reconnectInterval,
        1e3
      )),
      (this.reconnecting = !1),
      (this.reconnections = 0),
      (this.reconnectTimer = this.reconnectInterval),
      (this.secure = l.get(
        this.opts.connection.secure,
        !this.opts.connection.server && !this.opts.connection.port
      )),
      (this.emotes = ""),
      (this.emotesets = {}),
      (this.channels = []),
      (this.currentLatency = 0),
      (this.globaluserstate = {}),
      (this.lastJoined = ""),
      (this.latency = new Date()),
      (this.moderators = {}),
      (this.pingLoop = null),
      (this.pingTimeout = null),
      (this.reason = ""),
      (this.username = ""),
      (this.userstate = {}),
      (this.wasCloseCalled = !1),
      (this.ws = null);
    let s = "error";
    this.opts.options.debug && (s = "info"), (this.log = this.opts.logger || a);
    try {
      a.setLevel(s);
    } catch (i) {}
    this.opts.channels.forEach((e, t, s) => (s[t] = l.channel(e))),
      r.call(this),
      this.setMaxListeners(0);
  };
  l.inherits(d, r);
  for (const u in o) d.prototype[u] = o[u];
  (d.prototype.emits = function (e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = s < t.length ? t[s] : t[t.length - 1];
      this.emit.apply(this, [e[s]].concat(i));
    }
  }),
    (d.prototype.api = function (...e) {
      m ||
        (this.log.warn(
          "Client.prototype.api is deprecated and will be removed for version 2.0.0"
        ),
        (m = !0)),
        n(...e);
    }),
    (d.prototype.handleMessage = function (e) {
      if (!e) return;
      this.listenerCount("raw_message") &&
        this.emit("raw_message", JSON.parse(JSON.stringify(e)), e);
      const t = l.channel(l.get(e.params[0], null));
      let s = l.get(e.params[1], null);
      const i = l.get(e.tags["msg-id"], null),
        n = (e.tags = h.badges(h.badgeInfo(h.emotes(e.tags))));
      for (const o in n) {
        if ("emote-sets" === o || "ban-duration" === o || "bits" === o)
          continue;
        let e = n[o];
        "boolean" == typeof e
          ? (e = null)
          : "1" === e
            ? (e = !0)
            : "0" === e
              ? (e = !1)
              : "string" == typeof e && (e = l.unescapeIRC(e)),
          (n[o] = e);
      }
      if (null === e.prefix)
        switch (e.command) {
          case "PING":
            this.emit("ping"), this._isConnected() && this.ws.send("PONG");
            break;
          case "PONG": {
            const e = new Date();
            (this.currentLatency =
              (e.getTime() - this.latency.getTime()) / 1e3),
              this.emits(["pong", "_promisePing"], [[this.currentLatency]]),
              clearTimeout(this.pingTimeout);
            break;
          }
          default:
            this.log.warn(
              `Could not parse message with no prefix:\n${JSON.stringify(
                e,
                null,
                4
              )}`
            );
        }
      else if ("tmi.twitch.tv" === e.prefix)
        switch (e.command) {
          case "002":
          case "003":
          case "004":
          case "372":
          case "375":
          case "CAP":
          case "SERVERCHANGE":
            break;
          case "001":
            this.username = e.params[0];
            break;
          case "376": {
            this.log.info("Connected to server."),
              (this.userstate[this._globalDefaultChannel] = {}),
              this.emits(
                ["connected", "_promiseConnect"],
                [[this.server, this.port], [null]]
              ),
              (this.reconnections = 0),
              (this.reconnectTimer = this.reconnectInterval),
              (this.pingLoop = setInterval(() => {
                this._isConnected() && this.ws.send("PING"),
                  (this.latency = new Date()),
                  (this.pingTimeout = setTimeout(
                    () => {
                      null !== this.ws &&
                        ((this.wasCloseCalled = !1),
                        this.log.error("Ping timeout."),
                        this.ws.close(),
                        clearInterval(this.pingLoop),
                        clearTimeout(this.pingTimeout),
                        clearTimeout(this._updateEmotesetsTimer));
                    },
                    l.get(this.opts.connection.timeout, 9999)
                  ));
              }, 6e4));
            let e = l.get(this.opts.options.joinInterval, 2e3);
            e < 300 && (e = 300);
            const t = new c(e),
              s = [...new Set([...this.opts.channels, ...this.channels])];
            this.channels = [];
            for (let i = 0; i < s.length; i++) {
              const e = s[i];
              t.add(() => {
                this._isConnected() &&
                  this.join(e).catch((e) => this.log.error(e));
              });
            }
            t.next();
            break;
          }
          case "NOTICE": {
            const n = [null],
              o = [t, i, s],
              r = [t, !0],
              a = [t, !1],
              h = [o, n],
              c = [o, [i]],
              l = `[${t}] ${s}`;
            switch (i) {
              case "subs_on":
                this.log.info(
                  `[${t}] This room is now in subscribers-only mode.`
                ),
                  this.emits(
                    ["subscriber", "subscribers", "_promiseSubscribers"],
                    [r, r, n]
                  );
                break;
              case "subs_off":
                this.log.info(
                  `[${t}] This room is no longer in subscribers-only mode.`
                ),
                  this.emits(
                    ["subscriber", "subscribers", "_promiseSubscribersoff"],
                    [a, a, n]
                  );
                break;
              case "emote_only_on":
                this.log.info(`[${t}] This room is now in emote-only mode.`),
                  this.emits(["emoteonly", "_promiseEmoteonly"], [r, n]);
                break;
              case "emote_only_off":
                this.log.info(
                  `[${t}] This room is no longer in emote-only mode.`
                ),
                  this.emits(["emoteonly", "_promiseEmoteonlyoff"], [a, n]);
                break;
              case "slow_on":
              case "slow_off":
              case "followers_on_zero":
              case "followers_on":
              case "followers_off":
              case "host_on":
              case "host_off":
                break;
              case "r9k_on":
                this.log.info(`[${t}] This room is now in r9k mode.`),
                  this.emits(
                    ["r9kmode", "r9kbeta", "_promiseR9kbeta"],
                    [r, r, n]
                  );
                break;
              case "r9k_off":
                this.log.info(`[${t}] This room is no longer in r9k mode.`),
                  this.emits(
                    ["r9kmode", "r9kbeta", "_promiseR9kbetaoff"],
                    [a, a, n]
                  );
                break;
              case "room_mods": {
                const e = s.split(": "),
                  i = (e.length > 1 ? e[1] : "")
                    .toLowerCase()
                    .split(", ")
                    .filter((e) => e);
                this.emits(
                  ["_promiseMods", "mods"],
                  [
                    [null, i],
                    [t, i],
                  ]
                );
                break;
              }
              case "no_mods":
                this.emits(
                  ["_promiseMods", "mods"],
                  [
                    [null, []],
                    [t, []],
                  ]
                );
                break;
              case "vips_success": {
                s.endsWith(".") && (s = s.slice(0, -1));
                const e = s.split(": "),
                  i = (e.length > 1 ? e[1] : "")
                    .toLowerCase()
                    .split(", ")
                    .filter((e) => e);
                this.emits(
                  ["_promiseVips", "vips"],
                  [
                    [null, i],
                    [t, i],
                  ]
                );
                break;
              }
              case "no_vips":
                this.emits(
                  ["_promiseVips", "vips"],
                  [
                    [null, []],
                    [t, []],
                  ]
                );
                break;
              case "already_banned":
              case "bad_ban_admin":
              case "bad_ban_anon":
              case "bad_ban_broadcaster":
              case "bad_ban_global_mod":
              case "bad_ban_mod":
              case "bad_ban_self":
              case "bad_ban_staff":
              case "usage_ban":
                this.log.info(l), this.emits(["notice", "_promiseBan"], c);
                break;
              case "ban_success":
                this.log.info(l), this.emits(["notice", "_promiseBan"], h);
                break;
              case "usage_clear":
                this.log.info(l), this.emits(["notice", "_promiseClear"], c);
                break;
              case "usage_mods":
                this.log.info(l),
                  this.emits(["notice", "_promiseMods"], [o, [i, []]]);
                break;
              case "mod_success":
                this.log.info(l), this.emits(["notice", "_promiseMod"], h);
                break;
              case "usage_vips":
                this.log.info(l),
                  this.emits(["notice", "_promiseVips"], [o, [i, []]]);
                break;
              case "usage_vip":
              case "bad_vip_grantee_banned":
              case "bad_vip_grantee_already_vip":
              case "bad_vip_max_vips_reached":
              case "bad_vip_achievement_incomplete":
                this.log.info(l),
                  this.emits(["notice", "_promiseVip"], [o, [i, []]]);
                break;
              case "vip_success":
                this.log.info(l), this.emits(["notice", "_promiseVip"], h);
                break;
              case "usage_mod":
              case "bad_mod_banned":
              case "bad_mod_mod":
                this.log.info(l), this.emits(["notice", "_promiseMod"], c);
                break;
              case "unmod_success":
                this.log.info(l), this.emits(["notice", "_promiseUnmod"], h);
                break;
              case "unvip_success":
                this.log.info(l), this.emits(["notice", "_promiseUnvip"], h);
                break;
              case "usage_unmod":
              case "bad_unmod_mod":
                this.log.info(l), this.emits(["notice", "_promiseUnmod"], c);
                break;
              case "usage_unvip":
              case "bad_unvip_grantee_not_vip":
                this.log.info(l), this.emits(["notice", "_promiseUnvip"], c);
                break;
              case "color_changed":
                this.log.info(l), this.emits(["notice", "_promiseColor"], h);
                break;
              case "usage_color":
              case "turbo_only_color":
                this.log.info(l), this.emits(["notice", "_promiseColor"], c);
                break;
              case "commercial_success":
                this.log.info(l),
                  this.emits(["notice", "_promiseCommercial"], h);
                break;
              case "usage_commercial":
              case "bad_commercial_error":
                this.log.info(l),
                  this.emits(["notice", "_promiseCommercial"], c);
                break;
              case "hosts_remaining": {
                this.log.info(l);
                const e = isNaN(s[0]) ? 0 : parseInt(s[0]);
                this.emits(["notice", "_promiseHost"], [o, [null, ~~e]]);
                break;
              }
              case "bad_host_hosting":
              case "bad_host_rate_exceeded":
              case "bad_host_error":
              case "usage_host":
                this.log.info(l),
                  this.emits(["notice", "_promiseHost"], [o, [i, null]]);
                break;
              case "already_r9k_on":
              case "usage_r9k_on":
                this.log.info(l), this.emits(["notice", "_promiseR9kbeta"], c);
                break;
              case "already_r9k_off":
              case "usage_r9k_off":
                this.log.info(l),
                  this.emits(["notice", "_promiseR9kbetaoff"], c);
                break;
              case "timeout_success":
                this.log.info(l), this.emits(["notice", "_promiseTimeout"], h);
                break;
              case "delete_message_success":
                this.log.info(`[${t} ${s}]`),
                  this.emits(["notice", "_promiseDeletemessage"], h);
                break;
              case "already_subs_off":
              case "usage_subs_off":
                this.log.info(l),
                  this.emits(["notice", "_promiseSubscribersoff"], c);
                break;
              case "already_subs_on":
              case "usage_subs_on":
                this.log.info(l),
                  this.emits(["notice", "_promiseSubscribers"], c);
                break;
              case "already_emote_only_off":
              case "usage_emote_only_off":
                this.log.info(l),
                  this.emits(["notice", "_promiseEmoteonlyoff"], c);
                break;
              case "already_emote_only_on":
              case "usage_emote_only_on":
                this.log.info(l),
                  this.emits(["notice", "_promiseEmoteonly"], c);
                break;
              case "usage_slow_on":
                this.log.info(l), this.emits(["notice", "_promiseSlow"], c);
                break;
              case "usage_slow_off":
                this.log.info(l), this.emits(["notice", "_promiseSlowoff"], c);
                break;
              case "usage_timeout":
              case "bad_timeout_admin":
              case "bad_timeout_anon":
              case "bad_timeout_broadcaster":
              case "bad_timeout_duration":
              case "bad_timeout_global_mod":
              case "bad_timeout_mod":
              case "bad_timeout_self":
              case "bad_timeout_staff":
                this.log.info(l), this.emits(["notice", "_promiseTimeout"], c);
                break;
              case "untimeout_success":
              case "unban_success":
                this.log.info(l), this.emits(["notice", "_promiseUnban"], h);
                break;
              case "usage_unban":
              case "bad_unban_no_ban":
                this.log.info(l), this.emits(["notice", "_promiseUnban"], c);
                break;
              case "usage_delete":
              case "bad_delete_message_error":
              case "bad_delete_message_broadcaster":
              case "bad_delete_message_mod":
                this.log.info(l),
                  this.emits(["notice", "_promiseDeletemessage"], c);
                break;
              case "usage_unhost":
              case "not_hosting":
                this.log.info(l), this.emits(["notice", "_promiseUnhost"], c);
                break;
              case "whisper_invalid_login":
              case "whisper_invalid_self":
              case "whisper_limit_per_min":
              case "whisper_limit_per_sec":
              case "whisper_restricted":
              case "whisper_restricted_recipient":
                this.log.info(l), this.emits(["notice", "_promiseWhisper"], c);
                break;
              case "no_permission":
              case "msg_banned":
              case "msg_room_not_found":
              case "msg_channel_suspended":
              case "tos_ban":
              case "invalid_user":
                this.log.info(l),
                  this.emits(
                    [
                      "notice",
                      "_promiseBan",
                      "_promiseClear",
                      "_promiseUnban",
                      "_promiseTimeout",
                      "_promiseDeletemessage",
                      "_promiseMods",
                      "_promiseMod",
                      "_promiseUnmod",
                      "_promiseVips",
                      "_promiseVip",
                      "_promiseUnvip",
                      "_promiseCommercial",
                      "_promiseHost",
                      "_promiseUnhost",
                      "_promiseJoin",
                      "_promisePart",
                      "_promiseR9kbeta",
                      "_promiseR9kbetaoff",
                      "_promiseSlow",
                      "_promiseSlowoff",
                      "_promiseFollowers",
                      "_promiseFollowersoff",
                      "_promiseSubscribers",
                      "_promiseSubscribersoff",
                      "_promiseEmoteonly",
                      "_promiseEmoteonlyoff",
                      "_promiseWhisper",
                    ],
                    [o, [i, t]]
                  );
                break;
              case "msg_rejected":
              case "msg_rejected_mandatory":
                this.log.info(l), this.emit("automod", t, i, s);
                break;
              case "unrecognized_cmd":
              case "cmds_available":
              case "host_target_went_offline":
              case "msg_censored_broadcaster":
              case "msg_duplicate":
              case "msg_emoteonly":
              case "msg_verified_email":
              case "msg_ratelimit":
              case "msg_subsonly":
              case "msg_timedout":
              case "msg_bad_characters":
              case "msg_channel_blocked":
              case "msg_facebook":
              case "msg_followersonly":
              case "msg_followersonly_followed":
              case "msg_followersonly_zero":
              case "msg_slowmode":
              case "msg_suspended":
              case "no_help":
              case "usage_disconnect":
              case "usage_help":
              case "usage_me":
              case "unavailable_command":
                this.log.info(l), this.emit("notice", t, i, s);
                break;
              default:
                s.includes("Login unsuccessful") ||
                s.includes("Login authentication failed") ||
                s.includes("Error logging in") ||
                s.includes("Improperly formatted auth")
                  ? ((this.wasCloseCalled = !1),
                    (this.reconnect = !1),
                    (this.reason = s),
                    this.log.error(this.reason),
                    this.ws.close())
                  : s.includes("Invalid NICK")
                    ? ((this.wasCloseCalled = !1),
                      (this.reconnect = !1),
                      (this.reason = "Invalid NICK."),
                      this.log.error(this.reason),
                      this.ws.close())
                    : (this.log.warn(
                        `Could not parse NOTICE from tmi.twitch.tv:\n${JSON.stringify(
                          e,
                          null,
                          4
                        )}`
                      ),
                      this.emit("notice", t, i, s));
            }
            break;
          }
          case "USERNOTICE": {
            const e = n["display-name"] || n.login,
              o = n["msg-param-sub-plan"] || "",
              r =
                l.unescapeIRC(l.get(n["msg-param-sub-plan-name"], "")) || null,
              a = { prime: o.includes("Prime"), plan: o, planName: r },
              h = ~~(n["msg-param-streak-months"] || 0),
              c =
                n["msg-param-recipient-display-name"] ||
                n["msg-param-recipient-user-name"],
              m = ~~n["msg-param-mass-gift-count"];
            switch (((n["message-type"] = i), i)) {
              case "resub":
                this.emits(["resub", "subanniversary"], [[t, e, h, s, n, a]]);
                break;
              case "sub":
                this.emits(["subscription", "sub"], [[t, e, a, s, n]]);
                break;
              case "subgift":
                this.emit("subgift", t, e, h, c, a, n);
                break;
              case "anonsubgift":
                this.emit("anonsubgift", t, h, c, a, n);
                break;
              case "submysterygift":
                this.emit("submysterygift", t, e, m, a, n);
                break;
              case "anonsubmysterygift":
                this.emit("anonsubmysterygift", t, m, a, n);
                break;
              case "primepaidupgrade":
                this.emit("primepaidupgrade", t, e, a, n);
                break;
              case "giftpaidupgrade": {
                const s =
                  n["msg-param-sender-name"] || n["msg-param-sender-login"];
                this.emit("giftpaidupgrade", t, e, s, n);
                break;
              }
              case "anongiftpaidupgrade":
                this.emit("anongiftpaidupgrade", t, e, n);
                break;
              case "raid": {
                const e = n["msg-param-displayName"] || n["msg-param-login"],
                  s = +n["msg-param-viewerCount"];
                this.emit("raided", t, e, s, n);
                break;
              }
              case "ritual": {
                const i = n["msg-param-ritual-name"];
                "new_chatter" === i
                  ? this.emit("newchatter", t, e, n, s)
                  : this.emit("ritual", i, t, e, n, s);
                break;
              }
              default:
                this.emit("usernotice", i, t, n, s);
            }
            break;
          }
          case "HOSTTARGET": {
            const e = s.split(" "),
              i = ~~e[1] || 0;
            "-" === e[0]
              ? (this.log.info(`[${t}] Exited host mode.`),
                this.emits(["unhost", "_promiseUnhost"], [[t, i], [null]]))
              : (this.log.info(
                  `[${t}] Now hosting ${e[0]} for ${i} viewer(s).`
                ),
                this.emit("hosting", t, e[0], i));
            break;
          }
          case "CLEARCHAT":
            if (e.params.length > 1) {
              const i = l.get(e.tags["ban-duration"], null);
              null === i
                ? (this.log.info(`[${t}] ${s} has been banned.`),
                  this.emit("ban", t, s, null, e.tags))
                : (this.log.info(
                    `[${t}] ${s} has been timed out for ${i} seconds.`
                  ),
                  this.emit("timeout", t, s, null, ~~i, e.tags));
            } else
              this.log.info(`[${t}] Chat was cleared by a moderator.`),
                this.emits(["clearchat", "_promiseClear"], [[t], [null]]);
            break;
          case "CLEARMSG":
            if (e.params.length > 1) {
              const e = s,
                i = n.login;
              (n["message-type"] = "messagedeleted"),
                this.log.info(`[${t}] ${i}'s message has been deleted.`),
                this.emit("messagedeleted", t, i, e, n);
            }
            break;
          case "RECONNECT":
            this.log.info("Received RECONNECT request from Twitch.."),
              this.log.info(
                `Disconnecting and reconnecting in ${Math.round(
                  this.reconnectTimer / 1e3
                )} seconds..`
              ),
              this.disconnect().catch((e) => this.log.error(e)),
              setTimeout(
                () => this.connect().catch((e) => this.log.error(e)),
                this.reconnectTimer
              );
            break;
          case "USERSTATE":
            (e.tags.username = this.username),
              "mod" === e.tags["user-type"] &&
                (this.moderators[t] || (this.moderators[t] = []),
                this.moderators[t].includes(this.username) ||
                  this.moderators[t].push(this.username)),
              l.isJustinfan(this.getUsername()) ||
                this.userstate[t] ||
                ((this.userstate[t] = n),
                (this.lastJoined = t),
                this.channels.push(t),
                this.log.info(`Joined ${t}`),
                this.emit("join", t, l.username(this.getUsername()), !0)),
              e.tags["emote-sets"] !== this.emotes &&
                this._updateEmoteset(e.tags["emote-sets"]),
              (this.userstate[t] = n);
            break;
          case "GLOBALUSERSTATE":
            (this.globaluserstate = n),
              this.emit("globaluserstate", n),
              void 0 !== e.tags["emote-sets"] &&
                this._updateEmoteset(e.tags["emote-sets"]);
            break;
          case "ROOMSTATE":
            if (
              (l.channel(this.lastJoined) === t &&
                this.emit("_promiseJoin", null, t),
              (e.tags.channel = t),
              this.emit("roomstate", t, e.tags),
              !l.hasOwn(e.tags, "subs-only"))
            ) {
              if (l.hasOwn(e.tags, "slow"))
                if ("boolean" != typeof e.tags.slow || e.tags.slow) {
                  const s = [t, !0, ~~e.tags.slow];
                  this.log.info(`[${t}] This room is now in slow mode.`),
                    this.emits(
                      ["slow", "slowmode", "_promiseSlow"],
                      [s, s, [null]]
                    );
                } else {
                  const e = [t, !1, 0];
                  this.log.info(`[${t}] This room is no longer in slow mode.`),
                    this.emits(
                      ["slow", "slowmode", "_promiseSlowoff"],
                      [e, e, [null]]
                    );
                }
              if (l.hasOwn(e.tags, "followers-only"))
                if ("-1" === e.tags["followers-only"]) {
                  const e = [t, !1, 0];
                  this.log.info(
                    `[${t}] This room is no longer in followers-only mode.`
                  ),
                    this.emits(
                      [
                        "followersonly",
                        "followersmode",
                        "_promiseFollowersoff",
                      ],
                      [e, e, [null]]
                    );
                } else {
                  const s = [t, !0, ~~e.tags["followers-only"]];
                  this.log.info(
                    `[${t}] This room is now in follower-only mode.`
                  ),
                    this.emits(
                      ["followersonly", "followersmode", "_promiseFollowers"],
                      [s, s, [null]]
                    );
                }
            }
            break;
          default:
            this.log.warn(
              `Could not parse message from tmi.twitch.tv:\n${JSON.stringify(
                e,
                null,
                4
              )}`
            );
        }
      else if ("jtv" === e.prefix)
        "MODE" === e.command
          ? "+o" === s
            ? (this.moderators[t] || (this.moderators[t] = []),
              this.moderators[t].includes(e.params[2]) ||
                this.moderators[t].push(e.params[2]),
              this.emit("mod", t, e.params[2]))
            : "-o" === s &&
              (this.moderators[t] || (this.moderators[t] = []),
              this.moderators[t].filter((t) => t !== e.params[2]),
              this.emit("unmod", t, e.params[2]))
          : this.log.warn(
              `Could not parse message from jtv:\n${JSON.stringify(e, null, 4)}`
            );
      else
        switch (e.command) {
          case "353":
            this.emit("names", e.params[2], e.params[3].split(" "));
            break;
          case "366":
            break;
          case "JOIN": {
            const s = e.prefix.split("!")[0];
            l.isJustinfan(this.getUsername()) &&
              this.username === s &&
              ((this.lastJoined = t),
              this.channels.push(t),
              this.log.info(`Joined ${t}`),
              this.emit("join", t, s, !0)),
              this.username !== s && this.emit("join", t, s, !1);
            break;
          }
          case "PART": {
            let s = !1;
            const i = e.prefix.split("!")[0];
            if (this.username === i) {
              (s = !0), this.userstate[t] && delete this.userstate[t];
              let e = this.channels.indexOf(t);
              -1 !== e && this.channels.splice(e, 1),
                (e = this.opts.channels.indexOf(t)),
                -1 !== e && this.opts.channels.splice(e, 1),
                this.log.info(`Left ${t}`),
                this.emit("_promisePart", null);
            }
            this.emit("part", t, i, s);
            break;
          }
          case "WHISPER": {
            const t = e.prefix.split("!")[0];
            this.log.info(`[WHISPER] <${t}>: ${s}`),
              l.hasOwn(e.tags, "username") || (e.tags.username = t),
              (e.tags["message-type"] = "whisper");
            const i = l.channel(e.tags.username);
            this.emits(["whisper", "message"], [[i, e.tags, s, !1]]);
            break;
          }
          case "PRIVMSG":
            if (
              ((e.tags.username = e.prefix.split("!")[0]),
              "jtv" === e.tags.username)
            ) {
              const e = l.username(s.split(" ")[0]),
                i = s.includes("auto");
              if (s.includes("hosting you for")) {
                const n = l.extractNumber(s);
                this.emit("hosted", t, e, n, i);
              } else
                s.includes("hosting you") && this.emit("hosted", t, e, 0, i);
            } else {
              const i = l.get(this.opts.options.messagesLogLevel, "info"),
                n = l.actionMessage(s);
              if (
                ((e.tags["message-type"] = n ? "action" : "chat"),
                (s = n ? n[1] : s),
                l.hasOwn(e.tags, "bits"))
              )
                this.emit("cheer", t, e.tags, s);
              else {
                if (l.hasOwn(e.tags, "msg-id")) {
                  if ("highlighted-message" === e.tags["msg-id"]) {
                    const i = e.tags["msg-id"];
                    this.emit("redeem", t, e.tags.username, i, e.tags, s);
                  } else if ("skip-subs-mode-message" === e.tags["msg-id"]) {
                    const i = e.tags["msg-id"];
                    this.emit("redeem", t, e.tags.username, i, e.tags, s);
                  }
                } else if (l.hasOwn(e.tags, "custom-reward-id")) {
                  const i = e.tags["custom-reward-id"];
                  this.emit("redeem", t, e.tags.username, i, e.tags, s);
                }
                n
                  ? (this.log[i](`[${t}] *<${e.tags.username}>: ${s}`),
                    this.emits(["action", "message"], [[t, e.tags, s, !1]]))
                  : (this.log[i](`[${t}] <${e.tags.username}>: ${s}`),
                    this.emits(["chat", "message"], [[t, e.tags, s, !1]]));
              }
            }
            break;
          default:
            this.log.warn(
              `Could not parse message:\n${JSON.stringify(e, null, 4)}`
            );
        }
    }),
    (d.prototype.connect = function () {
      return new Promise((e, t) => {
        (this.server = l.get(
          this.opts.connection.server,
          "irc-ws.chat.twitch.tv"
        )),
          (this.port = l.get(this.opts.connection.port, 80)),
          this.secure && (this.port = 443),
          443 === this.port && (this.secure = !0),
          (this.reconnectTimer = this.reconnectTimer * this.reconnectDecay),
          this.reconnectTimer >= this.maxReconnectInterval &&
            (this.reconnectTimer = this.maxReconnectInterval),
          this._openConnection(),
          this.once("_promiseConnect", (s) => {
            s ? t(s) : e([this.server, ~~this.port]);
          });
      });
    }),
    (d.prototype._openConnection = function () {
      const e = `${this.secure ? "wss" : "ws"}://${this.server}:${this.port}/`,
        t = {};
      "agent" in this.opts.connection && (t.agent = this.opts.connection.agent),
        (this.ws = new s(e, "irc", t)),
        (this.ws.onmessage = this._onMessage.bind(this)),
        (this.ws.onerror = this._onError.bind(this)),
        (this.ws.onclose = this._onClose.bind(this)),
        (this.ws.onopen = this._onOpen.bind(this));
    }),
    (d.prototype._onOpen = function () {
      this._isConnected() &&
        (this.log.info(`Connecting to ${this.server} on port ${this.port}..`),
        this.emit("connecting", this.server, ~~this.port),
        (this.username = l.get(this.opts.identity.username, l.justinfan())),
        this._getToken()
          .then((e) => {
            const t = l.password(e);
            this.log.info("Sending authentication to server.."),
              this.emit("logon");
            let s = "twitch.tv/tags twitch.tv/commands";
            this._skipMembership || (s += " twitch.tv/membership"),
              this.ws.send("CAP REQ :" + s),
              t
                ? this.ws.send(`PASS ${t}`)
                : l.isJustinfan(this.username) &&
                  this.ws.send("PASS SCHMOOPIIE"),
              this.ws.send(`NICK ${this.username}`);
          })
          .catch((e) => {
            this.emits(
              ["_promiseConnect", "disconnected"],
              [[e], ["Could not get a token."]]
            );
          }));
    }),
    (d.prototype._getToken = function () {
      const e = this.opts.identity.password;
      let t;
      return "function" == typeof e
        ? ((t = e()), t instanceof Promise ? t : Promise.resolve(t))
        : Promise.resolve(e);
    }),
    (d.prototype._onMessage = function (e) {
      e.data
        .trim()
        .split("\r\n")
        .forEach((e) => {
          const t = h.msg(e);
          t && this.handleMessage(t);
        });
    }),
    (d.prototype._onError = function () {
      (this.moderators = {}),
        (this.userstate = {}),
        (this.globaluserstate = {}),
        clearInterval(this.pingLoop),
        clearTimeout(this.pingTimeout),
        clearTimeout(this._updateEmotesetsTimer),
        (this.reason =
          null === this.ws ? "Connection closed." : "Unable to connect."),
        this.emits(["_promiseConnect", "disconnected"], [[this.reason]]),
        this.reconnect &&
          this.reconnections === this.maxReconnectAttempts &&
          (this.emit("maxreconnect"),
          this.log.error("Maximum reconnection attempts reached.")),
        this.reconnect &&
          !this.reconnecting &&
          this.reconnections <= this.maxReconnectAttempts - 1 &&
          ((this.reconnecting = !0),
          (this.reconnections = this.reconnections + 1),
          this.log.error(
            `Reconnecting in ${Math.round(this.reconnectTimer / 1e3)} seconds..`
          ),
          this.emit("reconnect"),
          setTimeout(() => {
            (this.reconnecting = !1),
              this.connect().catch((e) => this.log.error(e));
          }, this.reconnectTimer)),
        (this.ws = null);
    }),
    (d.prototype._onClose = function () {
      (this.moderators = {}),
        (this.userstate = {}),
        (this.globaluserstate = {}),
        clearInterval(this.pingLoop),
        clearTimeout(this.pingTimeout),
        clearTimeout(this._updateEmotesetsTimer),
        this.wasCloseCalled
          ? ((this.wasCloseCalled = !1),
            (this.reason = "Connection closed."),
            this.log.info(this.reason),
            this.emits(
              ["_promiseConnect", "_promiseDisconnect", "disconnected"],
              [[this.reason], [null], [this.reason]]
            ))
          : (this.emits(["_promiseConnect", "disconnected"], [[this.reason]]),
            this.reconnect &&
              this.reconnections === this.maxReconnectAttempts &&
              (this.emit("maxreconnect"),
              this.log.error("Maximum reconnection attempts reached.")),
            this.reconnect &&
              !this.reconnecting &&
              this.reconnections <= this.maxReconnectAttempts - 1 &&
              ((this.reconnecting = !0),
              (this.reconnections = this.reconnections + 1),
              this.log.error(
                `Could not connect to server. Reconnecting in ${Math.round(
                  this.reconnectTimer / 1e3
                )} seconds..`
              ),
              this.emit("reconnect"),
              setTimeout(() => {
                (this.reconnecting = !1),
                  this.connect().catch((e) => this.log.error(e));
              }, this.reconnectTimer))),
        (this.ws = null);
    }),
    (d.prototype._getPromiseDelay = function () {
      return this.currentLatency <= 600 ? 600 : this.currentLatency + 100;
    }),
    (d.prototype._sendCommand = function (e, t, s, i) {
      return new Promise((n, o) => {
        if (!this._isConnected()) return o("Not connected to server.");
        if (
          ((null !== e && "number" != typeof e) ||
            (null === e && (e = this._getPromiseDelay()),
            l.promiseDelay(e).then(() => o("No response from Twitch."))),
          null !== t)
        ) {
          const e = l.channel(t);
          this.log.info(`[${e}] Executing command: ${s}`),
            this.ws.send(`PRIVMSG ${e} :${s}`);
        } else this.log.info(`Executing command: ${s}`), this.ws.send(s);
        "function" == typeof i ? i(n, o) : n();
      });
    }),
    (d.prototype._sendMessage = function (e, t, s, i) {
      return new Promise((n, o) => {
        if (!this._isConnected()) return o("Not connected to server.");
        if (l.isJustinfan(this.getUsername()))
          return o("Cannot send anonymous messages.");
        const r = l.channel(t);
        if ((this.userstate[r] || (this.userstate[r] = {}), s.length >= 500)) {
          const i = l.splitLine(s, 500);
          (s = i[0]),
            setTimeout(() => {
              this._sendMessage(e, t, i[1], () => {});
            }, 350);
        }
        this.ws.send(`PRIVMSG ${r} :${s}`);
        const a = {};
        Object.keys(this.emotesets).forEach((e) =>
          this.emotesets[e].forEach((e) =>
            (l.isRegex(e.code) ? h.emoteRegex : h.emoteString)(
              s,
              e.code,
              e.id,
              a
            )
          )
        );
        const c = Object.assign(
            this.userstate[r],
            h.emotes({ emotes: h.transformEmotes(a) || null })
          ),
          m = l.get(this.opts.options.messagesLogLevel, "info"),
          d = l.actionMessage(s);
        d
          ? ((c["message-type"] = "action"),
            this.log[m](`[${r}] *<${this.getUsername()}>: ${d[1]}`),
            this.emits(["action", "message"], [[r, c, d[1], !0]]))
          : ((c["message-type"] = "chat"),
            this.log[m](`[${r}] <${this.getUsername()}>: ${s}`),
            this.emits(["chat", "message"], [[r, c, s, !0]])),
          "function" == typeof i ? i(n, o) : n();
      });
    }),
    (d.prototype._updateEmoteset = function (e) {
      let t = void 0 !== e;
      if (
        (t && (e === this.emotes ? (t = !1) : (this.emotes = e)),
        this._skipUpdatingEmotesets)
      )
        return void (t && this.emit("emotesets", e, {}));
      const s = () => {
        this._updateEmotesetsTimerDelay > 0 &&
          (clearTimeout(this._updateEmotesetsTimer),
          (this._updateEmotesetsTimer = setTimeout(
            () => this._updateEmoteset(e),
            this._updateEmotesetsTimerDelay
          )));
      };
      this._getToken()
        .then((t) => {
          const s = `https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=${e}`,
            n = {};
          return (
            "fetchAgent" in this.opts.connection &&
              (n.agent = this.opts.connection.fetchAgent),
            i(s, {
              ...n,
              headers: {
                Accept: "application/vnd.twitchtv.v5+json",
                Authorization: `OAuth ${l.token(t)}`,
                "Client-ID": this.clientId,
              },
            })
          );
        })
        .then((e) => e.json())
        .then((t) => {
          (this.emotesets = t.emoticon_sets || {}),
            this.emit("emotesets", e, this.emotesets),
            s();
        })
        .catch(() => s());
    }),
    (d.prototype.getUsername = function () {
      return this.username;
    }),
    (d.prototype.getOptions = function () {
      return this.opts;
    }),
    (d.prototype.getChannels = function () {
      return this.channels;
    }),
    (d.prototype.isMod = function (e, t) {
      const s = l.channel(e);
      return (
        this.moderators[s] || (this.moderators[s] = []),
        this.moderators[s].includes(l.username(t))
      );
    }),
    (d.prototype.readyState = function () {
      return null === this.ws
        ? "CLOSED"
        : ["CONNECTING", "OPEN", "CLOSING", "CLOSED"][this.ws.readyState];
    }),
    (d.prototype._isConnected = function () {
      return null !== this.ws && 1 === this.ws.readyState;
    }),
    (d.prototype.disconnect = function () {
      return new Promise((e, t) => {
        null !== this.ws && 3 !== this.ws.readyState
          ? ((this.wasCloseCalled = !0),
            this.log.info("Disconnecting from server.."),
            this.ws.close(),
            this.once("_promiseDisconnect", () =>
              e([this.server, ~~this.port])
            ))
          : (this.log.error(
              "Cannot disconnect from server. Socket is not opened or connection is already closing."
            ),
            t(
              "Cannot disconnect from server. Socket is not opened or connection is already closing."
            ));
      });
    }),
    (d.prototype.off = d.prototype.removeListener),
    e.exports && (e.exports = d),
    "undefined" != typeof window && (window.tmi = { client: d, Client: d });
})(client$1);
var clientExports = client$1.exports;
const client = clientExports;
var tmi_js = { client: client, Client: client };
const tmi = getDefaultExportFromCjs(tmi_js);
class Chat {
  constructor(e, t, s, i) {
    (this.scene = e), (this._username = t), (this._password = s);
    const n = new URLSearchParams(window.location.search);
    (this.channel = n.get("channel") || "devdiaries"),
      (this.feedback = "1" == n.get("feedback")),
      (this.maxPlayers = this.isValidNumberWithMax(n.get("maxplayers"))
        ? +n.get("maxplayers")
        : 500),
      this.init();
  }
  init() {
    console.log(
      "Chat channel: ",
      this.channel,
      "feedback: ",
      this.feedback,
      "maxPlayers: ",
      this.maxPlayers
    ),
      (this.client = new tmi.Client({
        options: { debug: !1 },
        channels: [this.channel],
      })),
      this.client
        .connect()
        .then((e) => {
          console.log("Connected!, loading game"), this.scene.loadGame();
        })
        .catch(console.error),
      this.setOnJoinListener(),
      this.setOnMessageListener(),
      this.setOnChatListener;
  }
  setOnJoinListener() {
    this.client.on("join", (e, t, s) => {
      console.log("Somebody joined the chat: ", e, t),
        s && this.scene.addPlayer(t);
    });
  }
  setOnMessageListener() {
    this.client.on("message", (e, t, s, i) => {
      console.log(`Message: ${t.username} just ${s}`),
        this.processMessage(t.username, s);
    });
  }
  setOnChatListener() {
    this.client.on("chat", async (e, t, s, i) => {
      t.mod;
      const n = s.toLowerCase().split(" ");
      console.log("Received chat: ", e, t, n),
        this.processMessage(t["display-name"], s);
    });
  }
  processMessage(e, t) {
    this.isValidNumber(t) && this.scene.guess(e, +t);
  }
  sendAction(e, t) {
    console.log("Sending action: ", this.feedback, e, t),
      this.feedback && this.client.action(e, t);
  }
  say(e) {
    this.feedback && this.client.say(this.channel, e);
  }
  isValidNumberWithMax(e, t = 100) {
    return this.isValidNumber(e) && +e > 0 && +e <= t;
  }
  isValidNumber(e) {
    return !isNaN(e);
  }
}
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" }),
      (this.player = null),
      (this.score = 0),
      (this.scoreText = null),
      (this.nextOperator = ""),
      (this.lastMessage = null),
      (this.number = ""),
      (this.counter = 0),
      (this.failed = !1);
  }
  preload() {
    const e = new URLSearchParams(window.location.search);
    let t = e.get("background") || "#00b140";
    (t = parseInt(t.substring(1), 16)),
      (this.backgroundColor = "0x" + t.toString(16));
    let s = e.get("foreground") || "#F0EAD6";
    (s = parseInt(s.substring(1), 16)),
      (this.foregroundColor = "0x" + s.toString(16)),
      (this.spamTimeWait = 2),
      (this.result = Phaser.Math.Between(1, 9));
  }
  create() {
    (this.width = this.sys.game.config.width),
      (this.height = this.sys.game.config.height),
      (this.center_width = this.width / 2),
      (this.center_height = this.height / 2),
      this.cameras.main.setBackgroundColor(+this.foregroundColor),
      (this.allPlayers = {}),
      this.addChat(),
      this.loadAudios(),
      this.addUI();
  }
  addChat() {
    this.chat = new Chat(this);
  }
  loadGame() {
    this.generateNextOperation();
  }
  addUI() {
    (this.circle = this.add.circle(
      this.center_width,
      this.center_height - 50,
      100,
      15871022
    )),
      (this.numberText = this.add
        .bitmapText(
          this.center_width,
          this.center_height - 50,
          "mainFont",
          this.number,
          120
        )
        .setOrigin(0.5)
        .setTint(0)),
      (this.operatorText = this.add
        .bitmapText(
          this.center_width,
          this.center_height + 80,
          "mainFont",
          `${this.nextOperator}${this.number}`,
          50
        )
        .setOrigin(0.5)
        .setTint(0)),
      this.addClouds(),
      this.addScore(),
      (this.byText = this.add
        .bitmapText(
          this.center_width,
          this.height - 10,
          "mainFont",
          "by Pello",
          10
        )
        .setOrigin(0.5)
        .setTint(0));
  }
  addClouds() {
    (this.cloudLeft = this.add
      .image(
        this.center_width - 100,
        this.center_height - 120 + Phaser.Math.Between(-15, 15),
        "cloud" + Phaser.Math.Between(1, 14)
      )
      .setScale(0.1 * Phaser.Math.Between(5, 9))),
      (this.cloudRight = this.add
        .image(
          this.center_width + 100,
          this.center_height + 30 + Phaser.Math.Between(-15, 15),
          "cloud" + Phaser.Math.Between(1, 14)
        )
        .setScale(0.1 * Phaser.Math.Between(4, 6))),
      this.tweens.add({
        targets: [this.cloudLeft],
        x: { from: -156, to: this.width + 156 },
        duration: 3e4,
        onComplete: () => {
          this.cloudLeft.destroy();
        },
      }),
      this.tweens.add({
        targets: this.cloudRight,
        x: { from: this.width + 156, to: -156 },
        duration: 3e4,
        onComplete: () => {
          this.cloudLeft.destroy(), this.addClouds();
        },
      });
  }
  addScore() {
    const e = this.createScoreBoard();
    this.add
      .bitmapText(this.center_width, 25, "mainFont", "zenbaki", 25)
      .setOrigin(0.5)
      .setTint(0),
      e.slice(0, 3).forEach((e, t) => {
        const s = `${t + 1}.  ${e.name}: ${e.score}`;
        this.add
          .bitmapText(this.center_width, 100 + 50 * t, "mainFont", s, 30)
          .setOrigin(0.5)
          .setTint(this.foregroundColor)
          .setDropShadow(1, 2, 12526882, 0.7);
      }),
      (this.scoreText1 = this.add
        .bitmapText(
          this.center_width,
          this.center_height + 130,
          "mainFont",
          "",
          20
        )
        .setOrigin(0.5)
        .setTint(0)),
      (this.scoreText2 = this.add
        .bitmapText(
          this.center_width,
          this.center_height + 160,
          "mainFont",
          "",
          25
        )
        .setOrigin(0.5)
        .setTint(0));
  }
  addPlayer(e) {
    if (this.allPlayers[e]) return this.allPlayers[e];
    const t = new Player(this, e);
    return (
      (this.allPlayers[e] = t), this.chat.say(`Player ${e} joins game!`), t
    );
  }
  guess(e, t) {
    if (this.failed) return;
    console.log("Game> guess: ", e, t);
    const s = this.addPlayer(e);
    if (!s.dead && !s.hasSpammed())
      if (
        ((s.lastMessage = new Date()),
        console.log("Game> guess go on: ", e, t),
        this.result === parseInt(t))
      ) {
        const i = this.calculateScore();
        (s.score += i),
          this.showScore(e, i),
          this.generateNextOperation(),
          console.log("Player", e, "guess", t);
      } else
        this.number === parseInt(t)
          ? console.log("Player, ", e, " is too slow")
          : (this.cameras.main.shake(100, 0.01),
            this.playAudio("fail"),
            (this.failed = !0),
            s.setPenalty(),
            this.showShame(e),
            this.chat.say(`Player ${e} failed! Shame on you!`));
  }
  calculateScore() {
    return this.counter + { "+": 1, "-": 2, "*": 4, "/": 5 }[this.nextOperator];
  }
  loadAudios() {
    this.audios = {
      win: this.sound.add("win"),
      drip: this.sound.add("drip"),
      fail: this.sound.add("fail"),
    };
  }
  playAudio(e) {
    this.audios[e].play({ volume: 0.5 });
  }
  showResult() {
    const e = this.createScoreBoard();
    (this.scoreRectangle = this.add
      .rectangle(0, 0, this.width, this.height, this.foregroundColor, 0.9)
      .setOrigin(0, 0)),
      (this.scores = this.add.group()),
      (this.sensei = this.add
        .image(this.center_width, this.height - 60, "sensei")
        .setOrigin(0.5)
        .setScale(0.4)),
      this.scores.add(this.sensei),
      this.scores.add(
        this.add
          .bitmapText(this.center_width, 60, "mainFont", "Senseis:", 30)
          .setOrigin(0.5)
          .setTint(0)
      ),
      e.slice(0, 5).forEach((e, t) => {
        const s = `${t + 1}.  ${e.name}, ${e.score}`;
        this.scores.add(
          this.add
            .bitmapText(this.center_width, 100 + 20 * t, "mainFont", s, 15)
            .setOrigin(0.5)
            .setTint(0)
        );
      }),
      this.removeResult();
  }
  removeResult() {
    this.time.delayedCall(
      5e3,
      () => {
        this.tweens.add({
          targets: [this.scoreRectangle, this.scores, this.sensei],
          duration: 1e3,
          alpha: { from: 1, to: 0 },
          onComplete: () => {
            this.scoreRectangle.destroy(),
              this.scores.getChildren().forEach(function (e) {
                e.destroy();
              }, this),
              this.scores.clear(!0, !0);
          },
        }),
          this.resetScore(),
          this.generateNextOperation();
      },
      null,
      this
    );
  }
  createScoreBoard() {
    return [...Object.values(this.allPlayers)].sort(
      (e, t) => t.score - e.score
    );
  }
  resetScore() {
    (this.number = 0), (this.counter = 0), (this.failed = !1);
  }
  generateNextOperation() {
    this.counter++,
      (this.number = this.result),
      (this.nextOperand = Phaser.Math.Between(1, 9)),
      (this.nextOperator = this.selectOperator()),
      (this.result = parseInt(
        eval(this.number + this.nextOperator + this.nextOperand)
      )),
      console.log(
        "Current: ",
        this.number,
        " operator: ",
        this.nextOperator,
        " nextNumber: ",
        this.nextOperand,
        ", Result: ",
        this.result
      ),
      this.showNextOperation(this.nextOperator, this.nextOperand),
      this.playAudio("drip");
  }
  selectOperator() {
    return this.number % this.nextOperand == 0 && 1 !== this.nextOperand
      ? Phaser.Math.RND.pick(["+", "-", "+", "-", "/"])
      : this.number + this.nextOperand >= 100
        ? Phaser.Math.RND.pick(["-"])
        : this.number - this.nextOperand <= -100
          ? Phaser.Math.RND.pick(["+"])
          : Math.abs(this.number * this.nextOperand) < 100
            ? Phaser.Math.RND.pick(["+", "-", "+", "-", "*"])
            : Phaser.Math.RND.pick(["+", "-", "+", "-"]);
  }
  showScore(e, t) {
    this.scoreText1.setText("Great!").setAlpha(1),
      this.scoreText2.setText(`${e} +${t}`).setAlpha(1),
      this.tweens.add({
        targets: [this.scoreText1],
        alpha: { from: 1, to: 0 },
        ease: "Linear",
        duration: 3e3,
      });
  }
  showShame(e) {
    this.scoreText1
      .setText(
        Phaser.Math.RND.pick([
          "You're a disgrace",
          "Shame on you",
          "You dishonor us all",
          "You're a disappointment",
          "You're a failure",
          "You dishonor this dojo",
        ])
      )
      .setAlpha(1),
      this.scoreText2.setText(`${e}`).setAlpha(1),
      this.tweens.add({
        targets: [this.scoreText1, this.scoreText2],
        alpha: { from: 1, to: 0 },
        ease: "Linear",
        duration: 3e3,
        onComplete: () => {
          this.showResult();
        },
      });
  }
  showNextOperation(e, t) {
    this.numberText.setText(this.number), this.operatorText.setText(`${e}${t}`);
  }
}
const config = {
  width: 260,
  height: 380,
  scale: { autoCenter: Phaser$1.Scale.CENTER_BOTH },
  autoRound: !1,
  parent: "game-container",
  physics: { default: "arcade", arcade: { gravity: { y: 300 }, debug: !1 } },
  scene: [Bootloader, Game],
};
new Phaser$1.Game(config);
