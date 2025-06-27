// ==UserScript==
// @name        Krunker Central Crack (6/26/2025)
// @namespace   Krunker Central Scripts
// @match       *://krunker.io/*
// @grant       none
// @version     1.1
// @author      Aureliustics
// @description Cracked by Aureliustics
// @run-at      document-start
// @noframes
// ==/UserScript==

localStorage.logs = true;
const consoleLog = console.log;
const serverUrl = "https://sub2krunkercentral.com";
const version = "1.5";
const publicKeyBuffer = new Uint8Array([48, 130, 1, 34, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 130, 1, 15, 0, 48, 130, 1, 10, 2, 130, 1, 1, 0, 229, 111, 226, 207, 86, 246, 233, 241, 116, 242, 253, 123, 32, 118, 31, 184, 74, 86, 236, 84, 216, 171, 62, 143, 22, 141, 124, 163, 18, 182, 250, 248, 207, 30, 46, 243, 178, 216, 202, 237, 161, 56, 151, 161, 24, 13, 74, 110, 134, 208, 64, 71, 168, 198, 247, 92, 29, 190, 12, 158, 166, 240, 72, 216, 57, 245, 117, 201, 213, 249, 95, 179, 97, 236, 151, 105, 250, 218, 181, 193, 104, 154, 171, 42, 46, 58, 109, 29, 12, 56, 203, 132, 226, 20, 88, 236, 228, 201, 204, 47, 80, 55, 48, 182, 143, 120, 51, 150, 157, 121, 20, 7, 99, 120, 88, 127, 17, 127, 181, 89, 219, 85, 136, 167, 21, 100, 253, 43, 15, 218, 32, 80, 146, 237, 110, 236, 137, 58, 115, 63, 208, 11, 201, 39, 168, 166, 79, 159, 12, 226, 147, 98, 213, 213, 216, 67, 205, 252, 81, 8, 56, 103, 200, 20, 221, 227, 178, 38, 185, 198, 66, 28, 81, 32, 252, 245, 147, 44, 197, 79, 121, 153, 36, 55, 228, 16, 128, 200, 177, 68, 192, 81, 129, 139, 232, 223, 146, 214, 224, 60, 81, 48, 126, 147, 68, 205, 56, 103, 81, 124, 86, 34, 52, 116, 169, 185, 233, 192, 91, 154, 29, 61, 8, 201, 56, 56, 107, 255, 238, 174, 185, 125, 42, 178, 26, 50, 83, 84, 74, 110, 165, 66, 105, 72, 229, 241, 154, 127, 249, 117, 129, 71, 31, 1, 234, 39, 2, 3, 1, 0, 1]).buffer;
/* disable authentication and version checker
crypto.subtle.importKey("spki", publicKeyBuffer, {
  name: "RSASSA-PKCS1-v1_5",
  hash: {
    name: "SHA-256"
  }
}, true, ["verify"]).then(async _0x344992 => {
  async function _0x217f3c(_0x27a927) {
    let _0x502969;
    try {
      _0x502969 = JSON.parse(atob(_0x27a927));
    } catch {
      console.log("Couldn't verify key: invalid encoding");
      return false;
    }
    if (!(parseInt(_0x502969.message) > Date.now())) {
      console.log("Couldn't verify key: bad time");
      return false;
    }
    const _0x5a23c0 = await crypto.subtle.verify({
      name: "RSASSA-PKCS1-v1_5"
    }, _0x344992, new Uint8Array(_0x502969.signature), new TextEncoder().encode(_0x502969.message));
    if (!_0x5a23c0) {
      console.log("Couldn't verify key: bad signature");
      return false;
    }
    return parseInt(_0x502969.message);
  }
  let _0x1cb440 = localStorage.dogewareLicenseKey;
  if (location.href.includes("?dogewaere_license_key=")) {
    _0x1cb440 = location.href.slice(location.href.indexOf("?dogewaere_license_key=") + "?dogewaere_license_key=".length);
  }
  if (_0x1cb440 && (await _0x217f3c(_0x1cb440))) {
    localStorage.dogewareLicenseKey = _0x1cb440;
  } else {
    alert("This cheat requires you to obtain a license to use it. Click OK to get one for free");
    location.assign("https://krunkercentral.com/key");
  }
});

fetch(serverUrl + "/current-version").then(_0x4bf36b => _0x4bf36b.text()).then(_0x1d0d3e => {
  if (_0x1d0d3e !== version) {
    const _0x4a67eb = confirm("This version of the cheat is no longer working, we have released a new version of the cheat (" + version + " -> " + _0x1d0d3e + "),\n\nPress OK to be directed to Krunkercentral.com, once you're there download the hack from the latest post");
    if (_0x4a67eb) {
      location.href = "https://krunkercentral.com/";
    }
  }
});
*/
const id = "_" + Math.random().toString(36).slice(2);
window[id] = cheat;
function cheat() {
  delete window[id];
  class _0x21b685 {
    constructor() {
      this.hash = this.genHash(8);
      window[this.hash] = this;
      this.settings = Object.assign({}, {
        aimbot: 0,
        superSilent: false,
        AImbot: false,
        frustumCheck: false,
        weaponZoom: 1,
        wallbangs: false,
        alwaysAim: false,
        pitchHack: 0,
        thirdPerson: false,
        autoReload: false,
        speedHack: false,
        rangeCheck: false,
        alwaysTrail: false,
        spinAimFrames: 10,
        animatedBillboards: false,
        esp: 0,
        espFontSize: 10,
        tracers: false,
        showGuiButton: true,
        awtv: false,
        uwtv: false,
        forceUnsilent: false,
        bhop: 0,
        spinBot: false,
        markTarget: true,
        skinHack: false,
        aimOffset: 0,
        aimNoise: 0,
        keybinds: true,
        antikick: true,
        fovbox: false,
        drawFovbox: false,
        fovBoxSize: 1,
        guiOnMMB: false,
        hideAdverts: false,
        hideStreams: false,
        hideMerch: false,
        hideNewsConsole: false,
        hideCookieButton: false,
        chams: false,
        chamsCol: 1,
        wireframe: false,
        customCSS: "",
        teamChams: false,
        autoNuke: false,
        chamsInterval: 500,
        preventMeleeThrowing: false,
        forceNametagsOn: false,
        aimbotRange: 0,
        autoServer: true,
        botNametags: true
      });
      this.state = Object.assign({}, {
        bindAimbotOn: true,
        quickscopeCanShoot: true,
        spinFrame: 0,
        pressedKeys: new Set(),
        spinCounter: 0,
        activeTab: 0,
        nameTags: false,
        frame: 0
      });
      this.gaybow = 0;
      this.colors = {
        White: "#FFFFFF",
        Black: "#000000",
        Purple: "#9400D3",
        Pink: "#FF1493",
        Blue: "#1E90FF",
        DarkBlue: "#0000FF",
        Aqua: "#00FFFF",
        Green: "#008000",
        Lime: "#7FFF00",
        Orange: "#FF8C00",
        Yellow: "#FFFF00",
        Red: "#FF0000"
      };
      this.isProxy = Symbol("isProxy");
      this.GUI = {};
      try {
        this.onLoad();
      } catch (_0x50e75e) {
        console.error("ERROR " + _0x50e75e.name);
        console.error(_0x50e75e.message);
        console.log(_0x50e75e.stack);
      }
    }
    onLoad() {
      this.defines();
      this.createListeners();
    }
    defines() {
      const _0x53a59b = Symbol("origSkins");
      const _0x596390 = Symbol("localSkins");
      Object.defineProperties(Object.prototype, {
        canvas: {
          set(_0x8dae73) {
            this._canvas = _0x8dae73;
            if (_0x8dae73.id == "game-overlay") {
              _0x28c200.overlay = this;
              _0x28c200.ctx = _0x8dae73.getContext("2d");
              Object.defineProperties(this, {
                render: {
                  set(_0x123964) {
                    this._render = new Proxy(_0x123964, {
                      apply(_0xa53baa, _0x4ce758, _0x3956e9) {
                        ["scale", "game", "controls", "renderer", "me"].forEach((_0x21ecfe, _0x464537) => {
                          _0x28c200[_0x21ecfe] = _0x3956e9[_0x464537];
                        });
                        Reflect.apply(...arguments);
                        if (_0x28c200.isDefined(_0x28c200.renderer) && _0x28c200.isDefined(_0x28c200.renderer.adsFovMlt)) {
                          try {
                            _0x28c200.renderer.adsFovMlt.fill(_0x28c200.settings.weaponZoom);
                          } catch (_0x3c5029) {
                            console.error(_0x3c5029);
                          }
                        }
                        if (_0x28c200.me && _0x28c200.ctx) {
                          _0x28c200.ctx.save();
                          _0x28c200.ctx.scale(_0x28c200.scale, _0x28c200.scale);
                          _0x28c200.render();
                          _0x28c200.ctx.restore();
                          if (!_0x28c200.me.procInputs[_0x28c200.isProxy]) {
                            _0x28c200.me.procInputs = new Proxy(_0x28c200.me.procInputs, {
                              apply(_0x35fc30, _0xe52885, [_0x237848, _0x947d94, _0x2ef56a, _0x3af5ef]) {
                                if (_0xe52885) {
                                  _0x28c200.inputs(_0x237848);
                                }
                                return Reflect.apply(...arguments);
                              },
                              get(_0xcabfea, _0x415a25) {
                                if (_0x415a25 === _0x28c200.isProxy) {
                                  return true;
                                } else {
                                  return Reflect.get(_0xcabfea, _0x415a25);
                                }
                              }
                            });
                          }
                          _0x28c200.game.map.manager.objects.filter(_0x23e5be => {
                            return _0x23e5be.penetrable;
                          }).map((_0x46c730, _0xf35eee, _0x1bea90) => {
                            _0x46c730.transparent = _0x28c200.settings.wallbangs;
                          });
                        }
                      }
                    });
                  },
                  get() {
                    return this._render;
                  }
                }
              });
            }
          },
          get() {
            return this._canvas;
          }
        },
        OBJLoader: {
          set(_0x3b2c14) {
            _0x28c200.three = this;
            this._value = _0x3b2c14;
          },
          get() {
            return this._value;
          }
        },
        skins: {
          set(_0x5ad225) {
            this[_0x53a59b] = _0x5ad225;
            if (this.localSkins == undefined || !this.localSkins.length) {
              this[_0x596390] = Array.apply(null, Array(25000)).map((_0x596dee, _0x29b400) => {
                return {
                  ind: _0x29b400,
                  cnt: 1
                };
              });
            }
            return _0x5ad225;
          },
          get() {
            if (_0x28c200.settings.skinHack && this.stats) {
              return this[_0x596390];
            } else {
              return this[_0x53a59b];
            }
          }
        },
        useLooseClient: {
          enumerable: false,
          get() {
            return this._ulc;
          },
          set(_0x4415cb) {
            _0x28c200.config = this;
            Object.defineProperty(this, "nameVisRate", {
              value: 0,
              writable: false,
              configurable: true
            });
            this._ulc = _0x4415cb;
          }
        },
        trail: {
          enumerable: false,
          get() {
            return _0x28c200.settings.alwaysTrail || this._trail;
          },
          set(_0x5e8ef6) {
            this._trail = _0x5e8ef6;
          }
        },
        showTracers: {
          enumerable: false,
          get() {
            return _0x28c200.settings.alwaysTrail || this._showTracers;
          },
          set(_0x10bace) {
            this._showTracers = _0x10bace;
          }
        },
        shaderId: {
          enumerable: false,
          get() {
            if (this.src && this.src.startsWith("pubs/")) {
              if (_0x28c200.settings.animatedBillboards) {
                return 1;
              } else {
                return this.rshaderId;
              }
            } else {
              return this.rshaderId;
            }
          },
          set(_0x1a253c) {
            this.rshaderId = _0x1a253c;
          }
        },
        idleTimer: {
          enumerable: false,
          get() {
            if (_0x28c200.settings.antikick) {
              return 0;
            } else {
              return this._idleTimer;
            }
          },
          set(_0x420385) {
            this._idleTimer = _0x420385;
          }
        },
        kickTimer: {
          enumerable: false,
          get() {
            if (_0x28c200.settings.antikick) {
              return Infinity;
            } else {
              return this._kickTimer;
            }
          },
          set(_0x52a326) {
            this._kickTimer = _0x52a326;
          }
        },
        cnBSeen: {
          set(_0x50f04c) {
            this.inView = _0x50f04c;
          },
          get() {
            let _0x458a7f = !_0x28c200.isDefined(_0x28c200.me) || !_0x28c200.me.team || _0x28c200.me.team != this.team;
            return this.inView || _0x458a7f && _0x28c200.state.nameTags;
          }
        },
        canBSeen: {
          set(_0x4efd10) {
            this.inView2 = _0x4efd10;
          },
          get() {
            return this.inView2 || _0x28c200.settings.botNametags;
          }
        },
        events: {
          set(_0x5eeb29) {
            this._events = _0x5eeb29;
            if (this.ahNum !== 0) {
              return;
            }
            _0x28c200.wsSend = this.send.bind(this);
            _0x28c200.wsEvent = this._dispatchEvent.bind(this);
            _0x28c200.socket = this;
            this.send = new Proxy(this.send, {
              apply(_0x4972eb, _0x345924, [_0x2faba4, _0x4bb145]) {
                if (_0x2faba4 === "en") {
                  _0x28c200.skins = {
                    main: _0x4bb145[2][0],
                    secondary: _0x4bb145[2][1],
                    hat: _0x4bb145[3],
                    body: _0x4bb145[4],
                    knife: _0x4bb145[9],
                    dye: _0x4bb145[14],
                    waist: _0x4bb145[17]
                  };
                }
                return Reflect.apply(...arguments);
              }
            });
            this._dispatchEvent = new Proxy(this._dispatchEvent, {
              apply(_0x45aa67, _0x3c623e, [_0x288bd6, _0x61b5e7]) {
                if (_0x28c200.settings.skinHack && _0x288bd6 === "0") {
                  let _0x40a4ed = _0x61b5e7[0];
                  let _0x1364d2 = 38;
                  while (_0x40a4ed.length % _0x1364d2 !== 0) {
                    _0x1364d2++;
                  }
                  for (let _0x560496 = 0; _0x560496 < _0x40a4ed.length; _0x560496 += _0x1364d2) {
                    _0x40a4ed[_0x560496 + 12] = [_0x28c200.skins.main, _0x28c200.skins.secondary];
                    _0x40a4ed[_0x560496 + 13] = _0x28c200.skins.hat;
                    _0x40a4ed[_0x560496 + 14] = _0x28c200.skins.body;
                    _0x40a4ed[_0x560496 + 19] = _0x28c200.skins.knife;
                    _0x40a4ed[_0x560496 + 24] = _0x28c200.skins.dye;
                    _0x40a4ed[_0x560496 + 33] = _0x28c200.skins.waist;
                  }
                }
                return Reflect.apply(...arguments);
              }
            });
          },
          get() {
            return this._events;
          }
        },
        thirdPerson: {
          set(_0x3958ac) {
            this._thirdPerson = _0x3958ac;
          },
          get() {
            return this._thirdPerson || _0x28c200.settings.thirdPerson;
          }
        }
      });
    }
    createListeners() {
      this.loadSettings();
      this.waitFor(() => window.instructionsUpdate).then(_0x3b504a => {
        this.createObserver(_0x3b504a, "style", _0x5e3857 => {
          if (location.host == "krunker.io" && _0x5e3857.textContent.includes("Connection Banned")) {
            localStorage.removeItem("krunker_token");
            alert("You Have Been Banned And Sign Out, You Will Now Be Redirected to Krunkers Proxy 'browserfps'");
            location.assign("https://browserfps.com/");
          } else if (this.settings.autoServer && this.arrayTest(_0x5e3857, ["Kicked", "Banned", "Disconnected", "Error", "Game is full"], _0x2f7d2f => _0x5e3857.innerHTML.includes(_0x2f7d2f))) {
            location = document.location.origin;
          }
        });
      });
      this.waitFor(() => window.windows).then(_0x1313d9 => {
        this.initGUI();
      });
      document.addEventListener("DOMContentLoaded", () => {
        this.customCSS();
        const _0x2c2a5d = ["#aContainer, #aHolder, #endAContainer, #aMerger, #onetrust-consent-sdk { display: none !important; }", "#chatList * { user-select: text; }"];
        new Array(...document.styleSheets).map(_0x127ee9 => {
          if (_0x127ee9.href) {
            let _0x157a72 = /http.*?krunker.io\/css\/(\w+.css).+/.exec(_0x127ee9.href);
            if (_0x157a72 && _0x157a72[1]) {
              let _0x7b4482 = _0x157a72[1];
              if (_0x7b4482 && _0x7b4482.includes("main_custom")) {
                _0x2c2a5d.forEach((_0x3754ed, _0x13ac91, _0x3dad2b) => {
                  _0x127ee9.insertRule(_0x3754ed);
                });
              }
            }
          }
        });
      });
      window.addEventListener("mouseup", _0x70edd9 => {
        if (_0x70edd9.which === 2 && _0x28c200.settings.guiOnMMB) {
          _0x70edd9.preventDefault();
          _0x28c200.showGUI();
        }
      });
      window.addEventListener("keyup", _0x2ccb94 => {
        if (this.state.pressedKeys.has(_0x2ccb94.code)) {
          this.state.pressedKeys.delete(_0x2ccb94.code);
        }
        if (document.activeElement.tagName !== "INPUT" && (!!window.endUI || !window.endUI.style.display) && _0x28c200.settings.keybinds) {
          switch (_0x2ccb94.code) {
            case "KeyY":
              this.state.bindAimbotOn = !this.state.bindAimbotOn;
              this.wsEvent("ch", [null, "Aimbot " + (this.state.bindAimbotOn ? "on" : "off"), 1]);
              break;
            case "KeyH":
              this.settings.esp = (this.settings.esp + 1) % 4;
              this.wsEvent("ch", [null, "ESP: " + ["disabled", "nametags", "box", "full"][this.settings.esp], 1]);
              break;
          }
        }
      });
      window.addEventListener("keydown", _0x531d2f => {
        if (_0x531d2f.code == "F1") {
          _0x531d2f.preventDefault();
          _0x28c200.showGUI();
        }
        if (document.activeElement.tagName == "INPUT" || !window.endUI && window.endUI.style.display) {
          return;
        }
        switch (_0x531d2f.code) {
          case "NumpadSubtract":
            document.exitPointerLock();
            console.dirxml(this);
            break;
          default:
            if (!this.state.pressedKeys.has(_0x531d2f.code)) {
              this.state.pressedKeys.add(_0x531d2f.code);
            }
            break;
        }
      });
    }
    loadSettings() {
      let _0x2a67ba = {};
      try {
        _0x2a67ba = JSON.parse(window.localStorage.getItem("dogeware"));
      } catch (_0x5daaf6) {
        let _0x472ca5 = document.cookie.split(";");
        for (let _0x322ee8 of _0x472ca5) {
          _0x322ee8 = _0x322ee8.trim();
          if (_0x322ee8.indexOf("dogeware=") == 0) {
            _0x2a67ba = JSON.parse(decodeURIComponent(_0x322ee8.substring("dogeware=".length, _0x322ee8.length)));
            break;
          }
        }
      }
      for (let _0x354ffb in _0x2a67ba) {
        if (this.settings[_0x354ffb] != undefined) {
          this.settings[_0x354ffb] = _0x2a67ba[_0x354ffb];
        }
      }
      this.saveSettings(true);
    }
    deleteSettings() {
      try {
        window.localStorage.removeItemonload("dogeware");
        location.reload();
      } catch (_0x323712) {}
    }
    saveSettings(_0x2dadb7) {
      try {
        window.localStorage.setItem("dogeware", JSON.stringify(this.settings));
      } catch (_0x1b1c69) {
        let _0x2c1001 = new Date();
        _0x2c1001.setTime(_0x2c1001.getTime() + 31104000000);
        let _0x4ecf98 = "expires=" + _0x2c1001.toGMTString();
        document.cookie = "dogeware=" + encodeURIComponent(JSON.stringify(this.settings)) + "; " + _0x4ecf98;
      }
      if (_0x2dadb7) {
        console.log("[Dogeware] Settings loaded：", this.settings);
      }
    }
    inputs(_0x305ed1) {
      const _0x17b1a2 = {
        frame: 0,
        delta: 1,
        xdir: 2,
        ydir: 3,
        moveDir: 4,
        shoot: 5,
        scope: 6,
        jump: 7,
        reload: 8,
        crouch: 9,
        weaponScroll: 10,
        weaponSwap: 11,
        moveLock: 12
      };
      this.state.frame = _0x305ed1[_0x17b1a2.frame];
      this.state.nameTags = [1, 2].some(_0x12d5aa => _0x12d5aa == this.settings.esp) || this.settings.forceNametagsOn;
      if (this.me) {
        if (this.settings.autoNuke && Object.keys(this.me.streaks).length) {
          this.wsSend("k", 0);
        }
        if (this.settings.bhop) {
          if (this.state.pressedKeys.has("Space") || this.settings.bhop % 2) {
            this.controls.keys[this.controls.binds.jump.val] ^= 1;
            if (this.controls.keys[this.controls.binds.jump.val]) {
              this.controls.didPressed[this.controls.binds.jump.val] = 1;
            }
            if (this.state.pressedKeys.has("Space") || this.settings.bhop == 3) {
              if (this.me.velocity.y < -0.03 && this.me.canSlide) {
                setTimeout(() => {
                  this.controls.keys[this.controls.binds.crouch.val] = 0;
                }, this.me.slideTimer || 325);
                this.controls.keys[this.controls.binds.crouch.val] = 1;
                this.controls.didPressed[this.controls.binds.crouch.val] = 1;
              }
            }
          }
        }
        if (this.settings.forceNametagsOn) {
          try {
            Object.defineProperty(this.game.config, "nameTags", {
              get() {
                if (_0x28c200.settings.forceNametagsOn) {
                  return false;
                } else {
                  return this.game._nametags;
                }
              },
              set(_0x33c371) {
                this.game._nametags = _0x33c371;
              }
            });
          } catch (_0xa0e923) {}
        }
        if (this.settings.spinBot) {
          const _0x9eb53b = 1;
          if (_0x305ed1[_0x17b1a2.moveDir] !== -1) {
            _0x305ed1[_0x17b1a2.moveDir] = (_0x305ed1[_0x17b1a2.moveDir] + this.state.spinCounter - Math.round(_0x305ed1[_0x17b1a2.ydir] / (Math.PI * 2000) * 7)) % 7;
          }
          _0x305ed1[_0x17b1a2.ydir] = this.state.spinCounter / 7 * (Math.PI * 2000);
          if (_0x305ed1[_0x17b1a2.frame] % _0x9eb53b === 0) {
            this.state.spinCounter = (this.state.spinCounter + 1) % 7;
          }
        }
        if (this.settings.autoReload && this.me.ammos[this.me.weaponIndex] === 0) {
          _0x305ed1[_0x17b1a2.reload] = 1;
        }
        if (this.settings.pitchHack) {
          switch (this.settings.pitchHack) {
            case 1:
              _0x305ed1[_0x17b1a2.xdir] = -Math.PI * 500;
              break;
            case 2:
              _0x305ed1[_0x17b1a2.xdir] = Math.PI * 500;
              break;
            case 3:
              _0x305ed1[_0x17b1a2.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500;
              break;
            case 4:
              _0x305ed1[_0x17b1a2.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500;
              break;
            case 5:
              _0x305ed1[_0x17b1a2.xdir] = _0x305ed1[_0x17b1a2.frame] % 2 ? Math.PI * 500 : -Math.PI * 500;
              break;
            case 6:
              _0x305ed1[_0x17b1a2.xdir] = (Math.random() * Math.PI - Math.PI / 2) * 1000;
              break;
          }
        }
        const _0x390882 = () => (Math.random() * 2 - 1) * this.settings.aimNoise;
        this.game.players.list.forEach(_0x2c91a4 => {
          _0x2c91a4.pos = {
            x: _0x2c91a4.x,
            y: _0x2c91a4.y,
            z: _0x2c91a4.z
          };
          _0x2c91a4.npos = {
            x: _0x2c91a4.x + _0x390882(),
            y: _0x2c91a4.y + _0x390882(),
            z: _0x2c91a4.z + _0x390882()
          };
          _0x2c91a4.isTarget = false;
        });
        function _0x5481dc(_0x280943, _0x1dd2ba) {
          if (_0x280943?.name === _0x1dd2ba) {
            return _0x280943;
          }
          for (const _0x23c989 of _0x280943.children) {
            const _0x9f156a = _0x5481dc(_0x23c989, _0x1dd2ba);
            if (_0x9f156a) {
              return _0x9f156a;
            }
          }
          return null;
        }
        if (this.game.AI.ais) {
          this.game.AI.ais.forEach(_0x414472 => {
            if (_0x414472.mesh) {
              const _0x598d5b = _0x5481dc(_0x414472.mesh, "Head");
              if (_0x598d5b) {
                const _0x3f1144 = {
                  ..._0x598d5b.getWorldPosition()
                };
                _0x3f1144.y -= 8;
                return _0x414472.npos = _0x414472.pos = _0x3f1144;
              }
            }
            _0x414472.npos = _0x414472.pos = {
              x: _0x414472.x,
              y: _0x414472.y,
              z: _0x414472.z
            };
          });
        }
        if (this.renderer && this.renderer.frustum && this.me.active) {
          this.controls.target = null;
          let _0x2dc7f6 = this.game.players.list.filter(_0x1b03c7 => !_0x1b03c7.isYTMP && _0x1b03c7.hasOwnProperty("npos") && (!this.settings.frustumCheck || this.containsPoint(_0x1b03c7.npos)) && (this.me.team === null || _0x1b03c7.team !== this.me.team) && _0x1b03c7.health > 0 && _0x1b03c7.inView).sort((_0x5a8b7a, _0x3b483c) => this.getDistance(this.me.x, this.me.z, _0x5a8b7a.npos.x, _0x5a8b7a.npos.z) - this.getDistance(this.me.x, this.me.z, _0x3b483c.npos.x, _0x3b483c.npos.z));
          let _0x1df593 = false;
          if (this.game.AI.ais && this.settings.AImbot) {
            let _0x5ec1fc = this.game.AI.ais.filter(_0x343bfb => _0x343bfb.mesh && _0x343bfb.mesh.visible && _0x343bfb.health && _0x343bfb.pos && _0x343bfb.inView2 && _0x343bfb.team !== this.me.team).sort((_0xbd3cea, _0x308226) => this.getDistance(this.me.x, this.me.z, _0xbd3cea.pos.x, _0xbd3cea.pos.z) - this.getDistance(this.me.x, this.me.z, _0x308226.pos.x, _0x308226.pos.z));
            _0x2dc7f6.push(..._0x5ec1fc);
          }
          let _0x3cfb73 = _0x2dc7f6[0];
          if (this.settings.fovbox) {
            const _0x70aade = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
            const _0x49d759 = innerWidth / _0x70aade;
            const _0x42f51e = innerHeight / _0x70aade;
            let _0x10dcff = false;
            for (let _0x17c7e2 = 0; _0x17c7e2 < _0x2dc7f6.length; _0x17c7e2++) {
              if (!this.three) {
                this.three = this.renderer.THREE;
              }
              const _0x46de63 = _0x2dc7f6[_0x17c7e2];
              const _0xa70f35 = this.world2Screen(new this.three.Vector3(_0x46de63.x, _0x46de63.y, _0x46de63.z), _0x49d759, _0x42f51e, _0x46de63.height / 2);
              let _0x12152b = [_0x49d759 / 3, _0x42f51e / 4, _0x49d759 * (1 / 3), _0x42f51e / 2];
              switch (this.settings.fovBoxSize) {
                case 2:
                  _0x12152b = [_0x49d759 * 0.4, _0x42f51e / 3, _0x49d759 * 0.2, _0x42f51e / 3];
                  break;
                case 3:
                  _0x12152b = [_0x49d759 * 0.45, _0x42f51e * 0.4, _0x49d759 * 0.1, _0x42f51e * 0.2];
                  break;
              }
              if (_0xa70f35.x >= _0x12152b[0] && _0xa70f35.x <= _0x12152b[0] + _0x12152b[2] && _0xa70f35.y >= _0x12152b[1] && _0xa70f35.y < _0x12152b[1] + _0x12152b[3]) {
                _0x3cfb73 = _0x2dc7f6[_0x17c7e2];
                _0x10dcff = true;
                break;
              }
            }
            if (!_0x10dcff) {
              _0x3cfb73 = void "kpal";
            }
          }
          const _0x4a9341 = _0x305ed1[_0x17b1a2.shoot];
          if (_0x3cfb73 && this.settings.aimbot && this.state.bindAimbotOn && (!this.settings.aimbotRange || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x3cfb73.x, _0x3cfb73.y, _0x3cfb73.z) < this.settings.aimbotRange) && (!this.settings.rangeCheck || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x3cfb73.x, _0x3cfb73.y, _0x3cfb73.z) <= this.me.weapon.range) && !this.me.reloadTimer) {
            if (this.settings.awtv) {
              _0x305ed1[_0x17b1a2.scope] = 1;
            }
            _0x3cfb73.isTarget = this.settings.markTarget;
            const _0x631721 = (this.getDir(this.me.z, this.me.x, _0x3cfb73.npos.z, _0x3cfb73.npos.x) || 0) * 1000;
            const _0x13f755 = _0x3cfb73.isAI ? ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x3cfb73.npos.x, _0x3cfb73.npos.y, _0x3cfb73.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000 : ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x3cfb73.npos.x, _0x3cfb73.npos.y - _0x3cfb73.crouchVal * 3 + this.me.crouchVal * 3 + this.settings.aimOffset, _0x3cfb73.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000;
            if (this.settings.forceUnsilent) {
              this.controls.target = {
                xD: _0x13f755 / 1000,
                yD: _0x631721 / 1000
              };
              this.controls.update(400);
            }
            switch (this.settings.aimbot) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 10:
                {
                  let _0x4bb00d = [5, 6, 9].some(_0x306f25 => _0x306f25 == this.settings.aimbot);
                  if (this.settings.aimbot === 5 && _0x305ed1[_0x17b1a2.scope] || this.settings.aimbot === 10) {
                    this.controls.target = {
                      xD: _0x13f755 / 1000,
                      yD: _0x631721 / 1000
                    };
                    this.controls.update(400);
                  }
                  if ([2, 10].some(_0x1e8431 => _0x1e8431 == this.settings.aimbot) || this.settings.aimbot === 1 && this.me.weapon.id) {
                    if (!this.me.weapon.melee) {
                      _0x305ed1[_0x17b1a2.scope] = 1;
                    }
                  }
                  if (this.me.didShoot) {
                    _0x305ed1[_0x17b1a2.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot && (!_0x4bb00d || _0x305ed1[_0x17b1a2.scope])) {
                    if (!this.me.weapon.melee) {
                      _0x305ed1[_0x17b1a2.scope] = 1;
                    }
                    if (!this.settings.superSilent && this.settings.aimbot !== 9) {
                      _0x305ed1[_0x17b1a2.ydir] = _0x631721;
                      _0x305ed1[_0x17b1a2.xdir] = _0x13f755;
                    }
                    if (this.settings.aimbot !== 9 && (!this.me.aimVal || this.me.weapon.noAim || this.me.weapon.melee) || this.settings.aimbot === 9 && _0x4a9341) {
                      _0x305ed1[_0x17b1a2.ydir] = _0x631721;
                      _0x305ed1[_0x17b1a2.xdir] = _0x13f755;
                      _0x305ed1[_0x17b1a2.shoot] = 1;
                    }
                  }
                }
                break;
              case 4:
              case 7:
              case 8:
              case 11:
                if (_0x305ed1[_0x17b1a2.scope] || this.settings.aimbot === 11) {
                  this.controls.target = {
                    xD: _0x13f755 / 1000,
                    yD: _0x631721 / 1000
                  };
                  this.controls.update({
                    4: 400,
                    7: 110,
                    8: 70,
                    11: 400
                  }[this.settings.aimbot]);
                  if ([4, 11].some(_0x1bb974 => _0x1bb974 == this.settings.aimbot)) {
                    _0x305ed1[_0x17b1a2.xdir] = _0x13f755;
                    _0x305ed1[_0x17b1a2.ydir] = _0x631721;
                  }
                  if (this.me.didShoot) {
                    _0x305ed1[_0x17b1a2.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot) {
                    _0x305ed1[this.me.weapon.melee ? _0x17b1a2.shoot : _0x17b1a2.scope] = 1;
                  }
                } else {
                  this.controls.target = null;
                }
                break;
              case 12:
                {
                  if (!this.three || !this.renderer || !this.renderer.camera || !this.game || !this.game.players || !this.game.players.list.length || !_0x305ed1[_0x17b1a2.scope] || this.me.aimVal) {
                    break;
                  }
                  if (!this.state.raycaster) {
                    this.state.raycaster = new this.three.Raycaster();
                    this.state.mid = new this.three.Vector2(0, 0);
                  }
                  const _0x2bbfe0 = [];
                  for (let _0x501f33 = 0; _0x501f33 < this.game.players.list.length; _0x501f33++) {
                    let _0x1b3a3a = this.game.players.list[_0x501f33];
                    if (!_0x1b3a3a || !_0x1b3a3a.objInstances || _0x1b3a3a.isYTMP || this.me.team !== null && _0x1b3a3a.team === this.me.team || !_0x1b3a3a.inView) {
                      continue;
                    }
                    _0x2bbfe0.push(_0x1b3a3a.objInstances);
                  }
                  const _0x66a587 = this.state.raycaster;
                  _0x66a587.setFromCamera(this.state.mid, this.renderer.camera);
                  if (_0x66a587.intersectObjects(_0x2bbfe0, true).length) {
                    _0x305ed1[_0x17b1a2.shoot] = this.me.didShoot ? 0 : 1;
                  }
                }
                break;
            }
          } else {
            if (this.settings.uwtv) {
              _0x305ed1[_0x17b1a2.scope] = 0;
            }
            this.state.spinFrame = 0;
          }
        }
        if (this.settings.alwaysAim) {
          _0x305ed1[_0x17b1a2.scope] = 1;
        }
        if (this.settings.preventMeleeThrowing && this.me.weapon.melee) {
          _0x305ed1[_0x17b1a2.scope] = 0;
        }
      }
      return _0x305ed1;
    }
    render() {
      var _0x55e3d1 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
      let _0x221285 = innerWidth / _0x55e3d1;
      let _0x2fa5df = innerHeight / _0x55e3d1;
      let _0x33fc90 = (_0x431a6a, _0x27950c = 0) => {
        _0x431a6a.y += _0x27950c;
        _0x431a6a.project(this.renderer.camera);
        _0x431a6a.x = (_0x431a6a.x + 1) / 2;
        _0x431a6a.y = (-_0x431a6a.y + 1) / 2;
        _0x431a6a.x *= _0x221285;
        _0x431a6a.y *= _0x2fa5df;
        return _0x431a6a;
      };
      let _0x24d2c1 = (_0x6d1c61, _0x24f92d, _0x2569f1, _0xbc0bff, _0x2a3965, _0x14a29f) => {
        this.ctx.save();
        this.ctx.lineWidth = _0x2a3965 + 2;
        this.ctx.beginPath();
        this.ctx.moveTo(_0x6d1c61, _0x24f92d);
        this.ctx.lineTo(_0x2569f1, _0xbc0bff);
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        this.ctx.stroke();
        this.ctx.lineWidth = _0x2a3965;
        this.ctx.strokeStyle = _0x14a29f;
        this.ctx.stroke();
        this.ctx.restore();
      };
      let _0x4e35b7 = (_0x477aab, _0x33f820, _0x16ab14, _0x247b8d, _0x2f08ee, _0x3dfe53, _0x1099f2, _0x596654) => {
        this.ctx.save();
        this.ctx.translate(~~_0x477aab, ~~_0x33f820);
        this.ctx.beginPath();
        if (_0x596654) {
          this.ctx.fillStyle = _0x1099f2;
        } else {
          this.ctx.strokeStyle = _0x1099f2;
        }
        this.ctx.rect(_0x16ab14, _0x247b8d, _0x2f08ee, _0x3dfe53);
        if (_0x596654) {
          this.ctx.fill();
        } else {
          this.ctx.stroke();
        }
        this.ctx.closePath();
        this.ctx.restore();
      };
      let _0x4724e6 = _0x3289a7 => {
        for (let _0x26d1be = 0; _0x26d1be < _0x3289a7.length; _0x26d1be++) {
          _0x3289a7[_0x26d1be] = ~~this.ctx.measureText(_0x3289a7[_0x26d1be]).width;
        }
        return _0x3289a7;
      };
      let _0x2130f7 = (_0x3be54d, _0x2a8527, _0x57e120, _0x50b4b0, _0x34e6f1) => {
        const _0x109fac = this.ctx.createLinearGradient(_0x3be54d, _0x2a8527, _0x57e120, _0x50b4b0);
        for (let _0x2c07e2 = 0; _0x2c07e2 < _0x34e6f1.length; _0x2c07e2++) {
          _0x109fac.addColorStop(_0x2c07e2, _0x34e6f1[_0x2c07e2]);
        }
        return _0x109fac;
      };
      let _0x4e95cf = (_0x5807da, _0x26497c, _0x5e6c82, _0x365a5d, _0x4a47cb) => {
        this.ctx.save();
        this.ctx.translate(~~_0x365a5d, ~~_0x4a47cb);
        this.ctx.fillStyle = _0x5e6c82;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.font = _0x26497c;
        this.ctx.lineWidth = 1;
        this.ctx.strokeText(_0x5807da, 0, 0);
        this.ctx.fillText(_0x5807da, 0, 0);
        this.ctx.restore();
      };
      const _0x5e9158 = 2;
      if (!this.three) {
        this.three = this.renderer.THREE;
      }
      for (const _0xca1270 of this.game.players.list.filter(_0x3ee500 => !_0x3ee500.isYTMP && _0x3ee500.active && (_0x3ee500.pos = {
        x: _0x3ee500.x,
        y: _0x3ee500.y,
        z: _0x3ee500.z
      }))) {
        const _0x23804 = new this.three.Vector3(_0xca1270.pos.x, _0xca1270.pos.y, _0xca1270.pos.z);
        const _0x1d1c30 = _0x33fc90(_0x23804.clone());
        const _0x16f6a0 = _0x33fc90(_0x23804.clone(), _0xca1270.height);
        const _0x56cb1f = ~~(_0x1d1c30.y - _0x16f6a0.y);
        const _0xe2b80c = ~~(_0x56cb1f * 0.6);
        const _0x4c98b7 = this.settings.espFontSize + "px GameFont";
        const _0x671a85 = this.me.team === null || _0xca1270.team !== this.me.team;
        if (!this.containsPoint(_0xca1270.pos)) {
          continue;
        }
        if (this.settings.tracers) {
          _0x24d2c1(_0x221285 / 2, _0x28c200.settings.tracers === 2 ? _0x2fa5df / 2 : _0x2fa5df - 1, _0x1d1c30.x, _0x1d1c30.y, 2, _0xca1270.team === null ? "#FF4444" : _0xca1270.team === this.me.team ? "#44AAFF" : "#FF4444");
        }
        const _0x348772 = _0xca1270.objInstances;
        if (this.isDefined(_0x348772)) {
          if (!_0x348772.visible) {
            Object.defineProperty(_0xca1270.objInstances, "visible", {
              value: true,
              writable: false
            });
          } else {
            let _0x413581 = this.settings.chams;
            if (_0x28c200.gaybow >= 360) {
              _0x28c200.gaybow = 0;
            } else {
              _0x28c200.gaybow++;
            }
            _0x348772.traverse(_0x17a5f5 => {
              if (_0x17a5f5 && _0x17a5f5.type == "Mesh" && this.isDefined(_0x17a5f5.material)) {
                if (!_0x17a5f5.hasOwnProperty(this.hash)) {
                  _0x17a5f5[this.hash] = _0x17a5f5.material;
                } else if (_0x17a5f5.hasOwnProperty(this.hash)) {
                  Object.defineProperty(_0x17a5f5, "material", {
                    get() {
                      if (!_0x413581 || !_0x671a85 && !_0x28c200.settings.teamChams) {
                        return this[_0x28c200.hash];
                      } else {
                        return new _0x28c200.three.MeshBasicMaterial({
                          color: new _0x28c200.three.Color(_0x28c200.settings.chamsCol == 12 ? "hsl(" + _0x28c200.gaybow + ",100%, 50%)" : Object.values(_0x28c200.colors)[_0x28c200.settings.chamsCol]),
                          depthTest: false,
                          transparent: true,
                          fog: false,
                          wireframe: _0x28c200.settings.wireframe
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        }
        if (this.settings.esp > 1) {
          if (_0xca1270.isTarget) {
            this.ctx.save();
            const _0x56e674 = _0x4724e6(["TARGET"]);
            _0x4e95cf("TARGET", _0x4c98b7, "#FFFFFF", _0x16f6a0.x - _0x56e674[0] / 2, _0x16f6a0.y - this.settings.espFontSize * 1.5);
            this.ctx.beginPath();
            this.ctx.translate(_0x16f6a0.x, _0x16f6a0.y + Math.abs(_0x56cb1f / 2));
            this.ctx.arc(0, 0, Math.abs(_0x56cb1f / 2) + 10, 0, Math.PI * 2);
            this.ctx.strokeStyle = "#FFFFFF";
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
          }
          if (this.settings.esp === 2) {
            this.ctx.save();
            this.ctx.strokeStyle = this.me.team === null || _0xca1270.team !== this.me.team ? "#FF4444" : "#44AAFF";
            this.ctx.strokeRect(_0x16f6a0.x - _0xe2b80c / 2, _0x16f6a0.y, _0xe2b80c, _0x56cb1f);
            this.ctx.restore();
            continue;
          }
          _0x4e35b7(_0x16f6a0.x - _0xe2b80c / 2 - 7, ~~_0x16f6a0.y - 1, 0, 0, 4, _0x56cb1f + 2, "#000000", false);
          _0x4e35b7(_0x16f6a0.x - _0xe2b80c / 2 - 7, ~~_0x16f6a0.y - 1, 0, 0, 4, _0x56cb1f + 2, "#44FF44", true);
          _0x4e35b7(_0x16f6a0.x - _0xe2b80c / 2 - 7, ~~_0x16f6a0.y - 1, 0, 0, 4, ~~((_0xca1270.maxHealth - _0xca1270.health) / _0xca1270.maxHealth * (_0x56cb1f + 2)), "#000000", true);
          this.ctx.save();
          this.ctx.lineWidth = 4;
          this.ctx.translate(~~(_0x16f6a0.x - _0xe2b80c / 2), ~~_0x16f6a0.y);
          this.ctx.beginPath();
          this.ctx.rect(0, 0, _0xe2b80c, _0x56cb1f);
          this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
          this.ctx.stroke();
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = _0xca1270.team === null ? "#FF4444" : this.me.team === _0xca1270.team ? "#44AAFF" : "#FF4444";
          this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.restore();
          const _0x223fbb = ~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, _0xca1270.pos.x, _0xca1270.pos.y, _0xca1270.pos.z) / 10);
          this.ctx.save();
          this.ctx.font = _0x4c98b7;
          const _0x5f280e = _0x4724e6(["[", _0x223fbb, "m]", _0xca1270.level, "©", _0xca1270.name]);
          this.ctx.restore();
          const _0x402a35 = _0x2130f7(0, 0, _0x5f280e[4] * 5, 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]);
          if (_0xca1270.level) {
            const _0x1b8afd = _0x2130f7(0, 0, _0x5f280e[4] * 2 + _0x5f280e[3] + _0x5e9158 * 3, 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"]);
            _0x4e35b7(~~(_0x16f6a0.x - _0xe2b80c / 2) - 12 - _0x5f280e[4] * 2 - _0x5f280e[3] - _0x5e9158 * 3, ~~_0x16f6a0.y - _0x5e9158, 0, 0, _0x5f280e[4] * 2 + _0x5f280e[3] + _0x5e9158 * 3, _0x5f280e[4] + _0x5e9158 * 2, _0x1b8afd, true);
            _0x4e95cf("" + _0xca1270.level, _0x4c98b7, "#FFFFFF", ~~(_0x16f6a0.x - _0xe2b80c / 2) - 16 - _0x5f280e[3], ~~_0x16f6a0.y + _0x5f280e[4] * 1);
          }
          _0x4e35b7(~~(_0x16f6a0.x + _0xe2b80c / 2) + _0x5e9158, ~~_0x16f6a0.y - _0x5e9158, 0, 0, _0x5f280e[4] * 5, _0x5f280e[4] * 4 + _0x5e9158 * 2, _0x402a35, true);
          _0x4e95cf(_0xca1270.name, _0x4c98b7, _0xca1270.team === null ? "#FFCDB4" : this.me.team === _0xca1270.team ? "#B4E6FF" : "#FFCDB4", _0x16f6a0.x + _0xe2b80c / 2 + 4, _0x16f6a0.y + _0x5f280e[4] * 1);
          if (_0xca1270.clan) {
            _0x4e95cf("[" + _0xca1270.clan + "]", _0x4c98b7, "#AAAAAA", _0x16f6a0.x + _0xe2b80c / 2 + 8 + _0x5f280e[5], _0x16f6a0.y + _0x5f280e[4] * 1);
          }
          _0x4e95cf(_0xca1270.health + " HP", _0x4c98b7, "#33FF33", _0x16f6a0.x + _0xe2b80c / 2 + 4, _0x16f6a0.y + _0x5f280e[4] * 2);
          _0x4e95cf(_0xca1270.weapon.name, _0x4c98b7, "#DDDDDD", _0x16f6a0.x + _0xe2b80c / 2 + 4, _0x16f6a0.y + _0x5f280e[4] * 3);
          _0x4e95cf("[", _0x4c98b7, "#AAAAAA", _0x16f6a0.x + _0xe2b80c / 2 + 4, _0x16f6a0.y + _0x5f280e[4] * 4);
          _0x4e95cf("" + _0x223fbb, _0x4c98b7, "#DDDDDD", _0x16f6a0.x + _0xe2b80c / 2 + 4 + _0x5f280e[0], _0x16f6a0.y + _0x5f280e[4] * 4);
          _0x4e95cf("m]", _0x4c98b7, "#AAAAAA", _0x16f6a0.x + _0xe2b80c / 2 + 4 + _0x5f280e[0] + _0x5f280e[1], _0x16f6a0.y + _0x5f280e[4] * 4);
        }
      }
      if (this.settings.fovbox && this.settings.drawFovbox) {
        let _0x5d0219 = [_0x221285 / 3, _0x2fa5df / 4, _0x221285 * (1 / 3), _0x2fa5df / 2];
        switch (this.settings.fovBoxSize) {
          case 2:
            _0x5d0219 = [_0x221285 * 0.4, _0x2fa5df / 3, _0x221285 * 0.2, _0x2fa5df / 3];
            break;
          case 3:
            _0x5d0219 = [_0x221285 * 0.45, _0x2fa5df * 0.4, _0x221285 * 0.1, _0x2fa5df * 0.2];
            break;
        }
        this.ctx.save();
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(..._0x5d0219);
        this.ctx.restore();
      }
    }
    customCSS() {
      if (!this.isDefined(this.CSSres) && this.settings.kpalCSS) {
        this.CSSres.rel = "stylesheet";
        this.CSSres.disabled = false;
        (document.head || document.getElementsByTagName("head")[0]).appendChild(this.CSSres);
      }
      if (this.settings.customCSS.startsWith("http") && this.settings.customCSS.endsWith(".css")) {
        this.CSSres.href = this.settings.customCSS;
      } else {
        this.CSSres = undefined;
      }
    }
    initGUI() {
      function _0x83f54e(_0x4c65be, _0x3d285f, _0x2ba02a) {
        const _0x52d8ce = document.querySelector("#menuItemContainer");
        const _0x23277d = document.createElement("div");
        const _0x19da70 = document.createElement("div");
        const _0x669e71 = document.createElement("div");
        _0x23277d.className = "menuItem";
        _0x19da70.className = "menuItemIcon";
        _0x669e71.className = "menuItemTitle";
        _0x669e71.innerHTML = _0x4c65be;
        _0x19da70.style.backgroundImage = "url(\"https://cdn.discordapp.com/attachments/1150183816258928780/1387960643453190150/image.png?ex=685f3e94&is=685ded14&hm=4dbf7038d3a2ed94f022b7a5967dc4f64f33cd7ce4c34c3378ebcdd7ec838838&\")";
        _0x19da70.style.width = "50px";
        _0x19da70.style.height = "50px";
        _0x19da70.style.backgroundSize = "contain";
        _0x23277d.append(_0x19da70, _0x669e71);
        _0x52d8ce.append(_0x23277d);
        _0x23277d.addEventListener("click", _0x2ba02a);
      }
      _0x28c200.GUI.setSetting = function (_0x3b868c, _0xd43dee) {
        switch (_0x3b868c) {
          case "customCSS":
            _0x28c200.settings.customCSS = _0xd43dee;
            _0x28c200.customCSS();
            break;
          default:
            console.log("SET ", _0x3b868c, " ", _0xd43dee);
            _0x28c200.settings[_0x3b868c] = _0xd43dee;
        }
        _0x28c200.saveSettings();
      };
      _0x28c200.GUI.settings = {
        aimbot: {
          val: this.settings.aimbot
        }
      };
      _0x28c200.GUI.windowObj = {
        header: "CH33T",
        html: "",
        gen() {
          return _0x28c200.getGuiHtml();
        }
      };
      window.windows = {
        ...window.windows,
        length: window.windows.length
      };
      Object.setPrototypeOf(window.windows, Array.prototype);
      _0x28c200.GUI.windowIndex = window.windows.length + 1;
      Object.defineProperty(window.windows, window.windows.length, {
        value: _0x28c200.GUI.windowObj
      });
      if (this.settings.showGuiButton) {
        _0x83f54e("CH33TS", null, () => {
            /*
          if (!this.shownAds) {
            this.shownAds = false; // disbale ads
            //window.open("");
            console.log("ad prevented");
          }
            */
          window.showWindow(_0x28c200.GUI.windowIndex);
        });
      }
    }
    showGUI() {
      if (document.pointerLockElement || document.mozPointerLockElement) {
        document.exitPointerLock();
      }
      window.showWindow(this.GUI.windowIndex);
    }
    getGuiHtml() {
      const _0x708530 = {
        checkbox: (_0x5e93f3, _0x16da13, _0x31759a = "", _0x5c09d6 = false) => "<div class=\"settName\" title=\"" + _0x31759a + "\">" + _0x5e93f3 + " " + (_0x5c09d6 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='" + this.hash + ".GUI.setSetting(\"" + _0x16da13 + "\", this.checked)' " + (_0x28c200.settings[_0x16da13] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        client_setting: (_0x228d1c, _0x4f2371, _0x65115c = "", _0x24465f = true) => "<div class=\"settName\" title=\"" + _0x65115c + "\">" + _0x228d1c + " " + (_0x24465f ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='doge_setsetting(\"" + _0x4f2371 + "\", this.checked?\"1\":\"0\")' " + (_0x28c200.settings[_0x4f2371] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        select: (_0x5a4ccb, _0x9c0c72, _0x4d0608, _0x45b85b = "", _0x4c9259 = false) => {
          let _0x5178de = "<div class=\"settName\" title=\"" + _0x45b85b + "\">" + _0x5a4ccb + " " + (_0x4c9259 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<select onchange='" + this.hash + ".GUI.setSetting(\"" + _0x9c0c72 + "\", parseInt(this.value))' class=\"inputGrey2\">";
          for (const _0x4d7dde in _0x4d0608) {
            if (_0x4d0608.hasOwnProperty(_0x4d7dde)) {
              _0x5178de += "<option value=\"" + _0x4d0608[_0x4d7dde] + "\" " + (_0x28c200.settings[_0x9c0c72] == _0x4d0608[_0x4d7dde] ? "selected" : "") + ">" + _0x4d7dde + "</option>,";
            }
          }
          return _0x5178de + "</select></div>";
        },
        slider: (_0x38bdb5, _0x3d86ac, _0x9bd3f5, _0x1726c5, _0x17a508, _0x5b1660 = "") => "<div class=\"settName\" title=\"" + _0x5b1660 + "\">" + _0x38bdb5 + " <input type=\"number\" class=\"sliderVal\" id=\"slid_input_" + _0x3d86ac + "\" min=\"" + _0x9bd3f5 + "\" max=\"" + _0x1726c5 + "\" value=\"" + _0x28c200.settings[_0x3d86ac] + "\" onkeypress=\"" + this.hash + ".GUI.setSetting('" + _0x3d86ac + "', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_" + _0x3d86ac + "').value=this.value\" style=\"margin-right:0;border-width:0\"><div class=\"slidecontainer\" style=\"\"><input type=\"range\" id=\"slid_" + _0x3d86ac + "\" min=\"" + _0x9bd3f5 + "\" max=\"" + _0x1726c5 + "\" step=\"" + _0x17a508 + "\" value=\"" + _0x28c200.settings[_0x3d86ac] + "\" class=\"sliderM\" oninput=\"" + this.hash + ".GUI.setSetting('" + _0x3d86ac + "', parseFloat(this.value));document.querySelector('#slid_input_" + _0x3d86ac + "').value=this.value\"></div></div>",
        input: (_0x5559a2, _0x2ca8ad, _0x3a5369, _0x314ebd, _0x31bfae) => "<div class=\"settName\" title=\"" + _0x314ebd + "\">" + _0x5559a2 + " <input type=\"" + _0x3a5369 + "\" name=\"" + _0x3a5369 + "\" id=\"slid_utilities_" + _0x2ca8ad + "\"\n" + (_0x3a5369 == "color" ? "style=\"float:right;margin-top:5px\"" : "class=\"inputGrey2\" placeholder=\"" + _0x31bfae + "\"") + "\nvalue=\"" + _0x28c200.settings[_0x2ca8ad] + "\" oninput=\"" + this.hash + ".GUI.setSetting('" + _0x2ca8ad + "', this.value)\"/></div>",
        label: (_0x4e3f8b, _0x17250e) => "<br><span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x4e3f8b + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0x17250e || "") + "</span><br>",
        nobrlabel: (_0x48fc82, _0x440de4) => "<span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x48fc82 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0x440de4 || "") + "</span><br>",
        br: () => "<br>",
        style: _0x5ff3ca => "<style>" + _0x5ff3ca + "</style>"
      };
      let _0x4cd06d = "<div id=\"settHolder\">\n<img src=\"https://cdn.discordapp.com/attachments/1150183816258928780/1387960643453190150/image.png?ex=685f3e94&is=685ded14&hm=4dbf7038d3a2ed94f022b7a5967dc4f64f33cd7ce4c34c3378ebcdd7ec838838&\" width=\"100%\">\n";
      Object.keys(_0x708530).forEach(_0x5d22e2 => {
        const _0x2c1a7b = _0x708530[_0x5d22e2];
        _0x708530[_0x5d22e2] = function () {
          _0x4cd06d += _0x2c1a7b.apply(this, arguments);
          return "";
        };
      });
      const _0x209d1a = ["Weapon", "Wallhack", "Visual", "Tweaks", "Movement", "Other"];
      if (_0x28c200.isClient) {
        _0x209d1a.push("Client");
      }
      _0x708530.style(".cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}");
      this.GUI.changeTab = function (_0x405a09) {
        const _0x145bd1 = _0x405a09.innerText;
        document.getElementById("cheat-tabbtn-" + _0x209d1a[_0x28c200.state.activeTab]).classList.remove("cheatTabActive");
        document.getElementById("cheat-tab-" + _0x209d1a[_0x28c200.state.activeTab]).style.display = "none";
        _0x405a09.classList.add("cheatTabActive");
        document.getElementById("cheat-tab-" + _0x145bd1).style.display = "block";
        _0x28c200.state.activeTab = _0x209d1a.indexOf(_0x145bd1);
      };
      _0x4cd06d += "<table style=\"width: 100%; margin-bottom: 30px\"><tr>";
      for (let _0x1ccd0d = 0; _0x1ccd0d < _0x209d1a.length; _0x1ccd0d++) {
        const _0x4e6834 = _0x209d1a[_0x1ccd0d];
        _0x4cd06d += "<td id=\"cheat-tabbtn-" + _0x4e6834 + "\" onclick=\"" + this.hash + ".GUI.changeTab(this)\" class=\"cheatTabButton " + (_0x209d1a[_0x28c200.state.activeTab] === _0x4e6834 ? "cheatTabActive" : "") + "\">";
        _0x4cd06d += _0x4e6834;
        _0x4cd06d += "</td>";
      }
      _0x4cd06d += "</table></tr>";
      function _0x272abc(_0x5d7069, _0x3c53ff) {
        _0x4cd06d += "<div style=\"display: " + (_0x28c200.state.activeTab === _0x5d7069 ? "block" : "none") + "\" class=\"cheat-tab\" id=\"cheat-tab-" + _0x209d1a[_0x5d7069] + "\">";
        _0x3c53ff();
        _0x4cd06d += "</div>";
      }
      _0x272abc(0, () => {
        _0x708530.select("Aimbot [Y]", "aimbot", {
          None: 0,
          "Quickscope / Auto pick": 1,
          "Silent aimbot": 2,
          "Aim assist": 4,
          "Easy aim assist": 11,
          "SP Trigger bot": 12,
          "Silent on aim": 6,
          Smooth: 7,
          Unsilent: 10,
          "Unsilent on aim": 5,
          "Aim correction": 9
        });
        _0x708530.select("Spin aimbot speed", "spinAimFrames", {
          "1": 30,
          "2": 20,
          "3": 15,
          "4": 10,
          "5": 5
        });
        _0x708530.slider("Aim range", "aimbotRange", 0, 1000, 10, "Set above 0 to make the aimbot pick enemies only at the selected range");
        _0x708530.slider("Aim offset", "aimOffset", -4, 1, 0.1, "The lower it is, the lower the aimbot will shoot (0 - head, -4 - body)");
        _0x708530.slider("Aim noise", "aimNoise", 0, 2, 0.005, "The higher it is, the lower is the aimbot accuracy");
        _0x708530.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim, makes it almost invisible that you're looking at somebody when you're shooting at him");
        _0x708530.checkbox("Aim at bots", "AImbot", "Makes the aimbot shoot at NPCs");
        _0x708530.checkbox("FOV check", "frustumCheck", "Makes you only shoot at enemies that are in your field of view. Prevents 180 flicks");
        _0x708530.checkbox("FOV box", "fovbox", "Creates a box in which enemies can be targetted, enable with FOV check");
        _0x708530.select("FOV box size", "fovBoxSize", {
          Big: 1,
          Medium: 2,
          Small: 3
        });
        _0x708530.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind walls");
        _0x708530.checkbox("Aimbot range check", "rangeCheck", "Checks if the enemy is in range of your weapon before shooting it, disable for rocket launcher");
        _0x708530.checkbox("Auto reload", "autoReload", "Automatically reloads your weapon when it's out of ammo");
        _0x708530.checkbox("Prevent melee throwing", "preventMeleeThrowing", "Prevents you from throwing your knife");
      });
      _0x272abc(1, () => {
        _0x708530.select("ESP [H]", "esp", {
          None: 0,
          Nametags: 1,
          "Box ESP": 2,
          "Full ESP": 3
        });
        _0x708530.select("ESP Font Size", "espFontSize", {
          "30px": 30,
          "25px": 25,
          "20px": 20,
          "15px": 15,
          "10px": 10,
          "5px": 5
        });
        _0x708530.select("Tracers", "tracers", {
          None: 0,
          Bottom: 1,
          Middle: 2
        }, "Draws lines to players");
        _0x708530.checkbox("Bot nametags", "botNametags", "Always show nametags for bots such as zombies.");
        _0x708530.checkbox("Mark aimbot target", "markTarget", "Shows who is the aimbot targetting at the time, useful for aim assist/aim correction");
        _0x708530.checkbox("Draw FOV box", "drawFovbox", "Draws the FOV box from aimbot settings");
        _0x708530.checkbox("Chams", "chams");
        _0x708530.select("Chams colour", "chamsCol", {
          White: 0,
          Black: 1,
          Purple: 2,
          Pink: 3,
          Blue: 4,
          DarkBlue: 5,
          Aqua: 6,
          Green: 7,
          Lime: 8,
          Orange: 9,
          Yellow: 10,
          Red: 11,
          Gaybow: 12
        });
        _0x708530.checkbox("Friendly chams", "teamChams", "Show Chams for friendly players");
        _0x708530.checkbox("Wireframe", "wireframe");
        _0x708530.slider("RGB interval", "chamsInterval", 50, 1000, 50, "How fast will the RGB chams change colour");
      });
      _0x272abc(2, () => {
        _0x708530.checkbox("Third person mode", "thirdPerson");
        _0x708530.checkbox("Skin hack", "skinHack", "Makes you able to use any skin in game, only shows on your side");
        _0x708530.checkbox("Billboard shaders", "animatedBillboards", "Disable if you get fps drops");
        _0x708530.checkbox("Any weapon trail", "alwaysTrail");
        _0x708530.slider("Weapon Zoom", "weaponZoom", 0, 20, 0.1, "Weapon Zoom Multiplier Adjust");
      });
      _0x272abc(3, () => {
        _0x708530.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies  faster. Only use if ur good at bhopping");
        _0x708530.checkbox("Aim when target visible", "awtv");
        _0x708530.checkbox("Unaim when no target visible", "uwtv");
        _0x708530.checkbox("Force unsilent", "forceUnsilent");
      });
      _0x272abc(4, () => {
        _0x708530.select("Auto bhop", "bhop", {
          None: 0,
          "Auto Jump": 1,
          "Key Jump": 2,
          "Auto Slide": 3,
          "Key Slide": 4
        });
        _0x708530.label("Only use with silent aim");
        _0x708530.select("Pitch hax", "pitchHack", {
          Disabled: 0,
          Downward: 1,
          Upward: 2,
          "sin(time)": 3,
          "sin(time/5)": 4,
          double: 5,
          random: 6
        }, "Only use with aimbot on");
        _0x708530.checkbox("Spin bot", "spinBot");
      });
      _0x272abc(5, () => {
        _0x708530.checkbox("Show GUI button", "showGuiButton", "Disable if you don't want the dog under settings to be visible");
        _0x708530.checkbox("GUI on middle mouse button", "guiOnMMB", "Makes it possible to open this menu by clicking the mouse wheel");
        _0x708530.checkbox("Keybinds", "keybinds", "Turn keybinds on/off, Aimbot - Y, ESP - H");
        _0x708530.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity' message (client side, but works)");
        _0x708530.checkbox("Auto nuke", "autoNuke", "Automatically nukes when you are able to");
        _0x708530.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags");
        _0x708530.input("Custom CSS", "customCSS", "url", "", "URL to CSS file");
      });
      if (_0x28c200.isClient) {
        _0x272abc(6, () => {
          _0x708530.nobrlabel("Restart is required after changing any of these settings");
          _0x708530.br();
          _0x708530.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync");
          _0x708530.client_setting("Adblock", "adblock", "Disables ads");
        });
      }
      _0x4cd06d += "</div>";
      return _0x4cd06d;
    }
    getDistance(_0x7007d0, _0x36dfe5, _0x1d4a78, _0xd6b629) {
      return Math.sqrt((_0x1d4a78 -= _0x7007d0) * _0x1d4a78 + (_0xd6b629 -= _0x36dfe5) * _0xd6b629);
    }
    getDistance3D(_0x2ba9e6, _0x1b840b, _0x5b5dd2, _0x1fb01, _0x3d3e09, _0x476597) {
      let _0x1c547d = _0x2ba9e6 - _0x1fb01;
      let _0x5be871 = _0x1b840b - _0x3d3e09;
      let _0x4a03de = _0x5b5dd2 - _0x476597;
      return Math.sqrt(_0x1c547d * _0x1c547d + _0x5be871 * _0x5be871 + _0x4a03de * _0x4a03de);
    }
    getXDir(_0x4cfc3d, _0x3552a6, _0x1682e3, _0x30f234, _0x4ef42d, _0x4988db) {
      let _0x50df8a = Math.abs(_0x3552a6 - _0x4ef42d);
      let _0x4b8d32 = this.getDistance3D(_0x4cfc3d, _0x3552a6, _0x1682e3, _0x30f234, _0x4ef42d, _0x4988db);
      return Math.asin(_0x50df8a / _0x4b8d32) * (_0x3552a6 > _0x4ef42d ? -1 : 1);
    }
    getDir(_0x2a437f, _0xbebf8a, _0x27fe52, _0xbf5f68) {
      return Math.atan2(_0xbebf8a - _0xbf5f68, _0x2a437f - _0x27fe52);
    }
    getAngleDist(_0x2c27ef, _0x41e67a) {
      return Math.atan2(Math.sin(_0x41e67a - _0x2c27ef), Math.cos(_0x2c27ef - _0x41e67a));
    }
    containsPoint(_0x53f968) {
      let _0x229d25 = this.renderer.frustum.planes;
      for (let _0x9e0e36 = 0; _0x9e0e36 < 6; _0x9e0e36++) {
        if (_0x229d25[_0x9e0e36].distanceToPoint(_0x53f968) < 0) {
          return false;
        }
      }
      return true;
    }
    world2Screen(_0x4d12da, _0x243c5b, _0x5ef6f1, _0x331fd7 = 0) {
      _0x4d12da.y += _0x331fd7;
      _0x4d12da.project(this.renderer.camera);
      _0x4d12da.x = (_0x4d12da.x + 1) / 2;
      _0x4d12da.y = (-_0x4d12da.y + 1) / 2;
      _0x4d12da.x *= _0x243c5b;
      _0x4d12da.y *= _0x5ef6f1;
      return _0x4d12da;
    }
    isType(_0x52458a, _0x572e1f) {
      return typeof _0x52458a === _0x572e1f;
    }
    isDefined(_0x52e37a) {
      return !this.isType(_0x52e37a, "undefined") && _0x52e37a !== null;
    }
    arrayTest(_0x556388, _0x5d9107, _0x291cb7) {
      return _0x5d9107.some(_0x1158f7 => _0x291cb7(_0x1158f7));
    }
    createElement(_0x201019, _0x557662, _0x433338) {
      let _0x3d66f3 = document.createElement(_0x201019);
      if (_0x433338) {
        _0x3d66f3.id = _0x433338;
      }
      _0x3d66f3.innerHTML = _0x557662;
      return _0x3d66f3;
    }
    createObserver(_0x1ef21c, _0x40345f, _0x270de5, _0x3d2465 = true) {
      return new MutationObserver((_0x54d1fc, _0x4e91a4) => {
        if (_0x40345f == "src" || _0x3d2465 && _0x54d1fc[0].target.style.display == "block" || !_0x3d2465) {
          _0x270de5(_0x54d1fc[0].target);
        }
      }).observe(_0x1ef21c, _0x40345f == "childList" ? {
        childList: true
      } : {
        attributes: true,
        attributeFilter: [_0x40345f]
      });
    }
    genHash(_0x3ff8e3) {
      return [...Array(_0x3ff8e3)].map(_0x369c6b => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(Math.random() * 52)]).join("");
    }
    saveAs(_0xc6da8a, _0x58790d) {
      let _0x2813f1 = new Blob([_0x58790d], {
        type: "text/plain"
      });
      let _0x2b7326 = window.document.createElement("a");
      _0x2b7326.href = window.URL.createObjectURL(_0x2813f1);
      _0x2b7326.download = _0xc6da8a;
      window.document.body.appendChild(_0x2b7326);
      _0x2b7326.click();
      window.document.body.removeChild(_0x2b7326);
    }
    async store(_0xe8620a) {
      const _0x469a33 = "dogeware";
      switch (_0xe8620a) {
        case "get":
          return GM.getValue(_0x469a33).then(_0x36453c => this.isDefined(_0x36453c) ? JSON.parse(_0x36453c) : this.settings);
        case "set":
          return GM.setValue(_0x469a33, JSON.stringify(this.settings));
        case "reset":
          return GM.deleteValue(_0x469a33);
      }
    }
    async waitFor(_0x4e461d, _0x4aae43 = Infinity, _0x5d943f = null) {
      let _0x1cc21a = _0x3c327d => new Promise(_0x31156b => setTimeout(_0x31156b, _0x3c327d));
      return new Promise(async (_0x431011, _0x102b3f) => {
        if (typeof _0x4aae43 != "number") {
          _0x102b3f("Timeout argument not a number in waitFor(selector, timeout_ms)");
        }
        let _0x3f74d0;
        let _0x48c83c = 100;
        while (_0x3f74d0 === undefined || _0x3f74d0 === false || _0x3f74d0 === null || _0x3f74d0.length === 0) {
          if (_0x5d943f && _0x5d943f instanceof Function) {
            _0x5d943f();
          }
          ;
          if (_0x4aae43 % 10000 < _0x48c83c) {
            console.log("waiting for: ", _0x4e461d);
          }
          if ((_0x4aae43 -= _0x48c83c) < 0) {
            console.log("Timeout : ", _0x4e461d);
            _0x431011(false);
            return;
          }
          await _0x1cc21a(_0x48c83c);
          _0x3f74d0 = typeof _0x4e461d === "string" ? Function(_0x4e461d)() : _0x4e461d();
        }
        console.log("Passed : ", _0x4e461d);
        _0x431011(_0x3f74d0);
      });
    }
  }
  ;
  const _0x28c200 = new _0x21b685();
  for (let _0x5ebef5 = 0; _0x5ebef5 < 5; _0x5ebef5++) {
    console.log(_0x5ebef5 % 2 ? "" : " ");
  }
  console.log("DEBUG VERSION");
  for (let _0x4641ba = 0; _0x4641ba < 5; _0x4641ba++) {
    console.log(_0x4641ba % 2 ? "" : " ");
  }
  window.doge = _0x28c200;
}
let tokenPromiseResolve;
const tokenPromise = new Promise(_0xb8cce6 => tokenPromiseResolve = _0xb8cce6);
const ifr = document.createElement("iframe");
ifr.src = location.href;
ifr.style.display = "none";
document.documentElement.append(ifr);
const ifrFetch = ifr.contentWindow.fetch;
Object.defineProperty(ifr.contentWindow, "fetch", {
  get() {
    if (ifr.contentWindow?.windows?.length > 0) {
      return function (_0x4f3dcc) {
        if (_0x4f3dcc.includes("/seek-game")) {
          ifr.remove();
          tokenPromiseResolve(_0x4f3dcc);
          return;
        }
        return ifrFetch.apply(this, arguments);
      };
    }
    return ifrFetch;
  }
});
const _fetch = window.fetch;
window.fetch = async function (_0x13021f, _0x457d0c) {
  if (typeof _0x13021f === "string" && _0x13021f.includes("/seek-game")) {
    _0x13021f = await tokenPromise;
  }
  return _fetch.apply(this, arguments);
};
function downloadFileSync(_0xa21ded) {
  var _0x3e2c96 = new XMLHttpRequest();
  _0x3e2c96.open("GET", _0xa21ded, false);
  _0x3e2c96.send();
  if (_0x3e2c96.status === 200) {
    return _0x3e2c96.response;
  }
}
const observer = new MutationObserver(function (_0x11b240) {
  _0x11b240.forEach(function (_0x4d2d18) {
    if (_0x4d2d18.addedNodes) {
      for (var _0x416a4c = 0; _0x416a4c < _0x4d2d18.addedNodes.length; _0x416a4c++) {
        const _0xa6128c = _0x4d2d18.addedNodes[_0x416a4c];
        if (_0xa6128c.tagName === "SCRIPT") {
          if (_0xa6128c.src.startsWith("https://krunker.io/static/index-")) {
            //_0xa6128c.remove();
            const _0x3815db = downloadFileSync(serverUrl + "/game_1_4.js?" + Math.random().toString().slice(2));
            window.addEventListener("load", () => {
              Function(id + "();\n\n" + _0x3815db)();
            }, 1000);
          }
        }
      }
    }
  });
});
observer.observe(document, {
  childList: true,
  subtree: true
});
