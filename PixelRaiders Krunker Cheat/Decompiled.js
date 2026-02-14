// ==UserScript==
// @name         Krunker.IO Aimbot & ESP by PixelRaiders cracked by Aureliustics
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  Locks aim to the nearest player in krunker.io and shows players behind walls. Also shows a line between you and them.
// @author       PixelRaiders-01
// @match        *://krunker.io/*
// @match        *://browserfps.com/*
// @exclude      *://krunker.io/social*
// @exclude      *://krunker.io/editor*
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        none
// @run-at       document-start
// @require      https://unpkg.com/three@0.150.0/build/three.min.js
// ==/UserScript==


const THREE = window.THREE;
delete window.THREE;
const settings = {
  aimbotEnabled: true,
  aimbotOnRightMouse: true,
  espEnabled: true,
  espLines: false,
  wireframe: false
};
const keyToSetting = {
  KeyB: "aimbotEnabled",
  KeyL: "aimbotOnRightMouse",
  KeyM: "espEnabled",
  KeyN: "espLines",
  KeyK: "wireframe"
};
const gui = createGUI();
let scene;
const x = {
  window: window,
  document: document,
  querySelector: document.querySelector,
  consoleLog: console.log,
  ReflectApply: Reflect.apply,
  ArrayPrototype: Array.prototype,
  ArrayPush: Array.prototype.push,
  ObjectPrototype: Object.prototype,
  clearInterval: window.clearInterval,
  setTimeout: window.setTimeout,
  reToString: RegExp.prototype.toString,
  indexOf: String.prototype.indexOf,
  requestAnimationFrame: window.requestAnimationFrame
};
x.consoleLog("Waiting to inject...");
const proxied = function (_0xd7038f) {
  try {
    if (typeof _0xd7038f === "object" && typeof _0xd7038f.parent === "object" && _0xd7038f.parent.type === "Scene" && _0xd7038f.parent.name === "Main") {
      x.consoleLog("Found Scene!");
      scene = _0xd7038f.parent;
      x.ArrayPrototype.push = x.ArrayPush;
    }
  } catch (_0x4dccbb) {}
  return x.ArrayPush.apply(this, arguments);
};
const tempVector = new THREE.Vector3();
const tempObject = new THREE.Object3D();
tempObject.rotation.order = "YXZ";
const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(5, 15, 5).translate(0, 7.5, 0));
const material = new THREE.RawShaderMaterial({
  vertexShader: "\n\n\tattribute vec3 position;\n\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 modelViewMatrix;\n\n\tvoid main() {\n\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\tgl_Position.z = 1.0;\n\n\t}\n\n\t",
  fragmentShader: "\n\n\tvoid main() {\n\n\t\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n\n\t}\n\n\t"
});
const line = new THREE.LineSegments(new THREE.BufferGeometry(), material);
line.frustumCulled = false;
const linePositions = new THREE.BufferAttribute(new Float32Array(600), 3);
line.geometry.setAttribute("position", linePositions);
let injectTimer = null;
function animate() {
  x.requestAnimationFrame.call(x.window, animate);
  if (!scene && !injectTimer) {
    const _0x2af4a7 = x.querySelector.call(x.document, "#loadingBg");
    if (_0x2af4a7 && _0x2af4a7.style.display === "none") {
      x.consoleLog("Inject timer started!");
      injectTimer = x.setTimeout.call(x.window, () => {
        x.consoleLog("Injected!");
        x.ArrayPrototype.push = proxied;
      }, 2000);
    }
  }
  if (scene === undefined || !scene.children) {
    return;
  }
  const _0x1a5957 = [];
  let _0x5696d1;
  for (let _0x5b0c68 = 0; _0x5b0c68 < scene.children.length; _0x5b0c68++) {
    const _0x37893f = scene.children[_0x5b0c68];
    if (_0x37893f.type === "Object3D") {
      try {
        if (_0x37893f.children[0].children[0].type === "PerspectiveCamera") {
          _0x5696d1 = _0x37893f;
        } else {
          _0x1a5957.push(_0x37893f);
        }
      } catch (_0xc72fe8) {}
    } else if (_0x37893f.material) {
      _0x37893f.material.wireframe = settings.wireframe;
    }
  }
  if (!_0x5696d1) {
    x.consoleLog("Player not found, finding new scene.");
    x.ArrayPrototype.push = proxied;
    return;
  }
  let _0x35d065 = 0;
  let _0x352cda;
  let _0x4078b3 = Infinity;
  tempObject.matrix.copy(_0x5696d1.matrix).invert();
  for (let _0x3ecd76 = 0; _0x3ecd76 < _0x1a5957.length; _0x3ecd76++) {
    const _0x5dce50 = _0x1a5957[_0x3ecd76];
    if (!_0x5dce50.box) {
      const _0x4e2626 = new THREE.LineSegments(geometry, material);
      _0x4e2626.frustumCulled = false;
      _0x5dce50.add(_0x4e2626);
      _0x5dce50.box = _0x4e2626;
    }
    if (_0x5dce50.position.x === _0x5696d1.position.x && _0x5dce50.position.z === _0x5696d1.position.z) {
      _0x5dce50.box.visible = false;
      if (line.parent !== _0x5dce50) {
        _0x5dce50.add(line);
      }
      continue;
    }
    linePositions.setXYZ(_0x35d065++, 0, 10, -5);
    tempVector.copy(_0x5dce50.position);
    tempVector.y += 9;
    tempVector.applyMatrix4(tempObject.matrix);
    linePositions.setXYZ(_0x35d065++, tempVector.x, tempVector.y, tempVector.z);
    _0x5dce50.visible = settings.espEnabled || _0x5dce50.visible;
    _0x5dce50.box.visible = settings.espEnabled;
    const _0x2d418a = _0x5dce50.position.distanceTo(_0x5696d1.position);
    if (_0x2d418a < _0x4078b3) {
      _0x352cda = _0x5dce50;
      _0x4078b3 = _0x2d418a;
    }
  }
  linePositions.needsUpdate = true;
  line.geometry.setDrawRange(0, _0x35d065);
  line.visible = settings.espLines;
  if (settings.aimbotEnabled === false || settings.aimbotOnRightMouse && !rightMouseDown || _0x352cda === undefined) {
    return;
  }
  tempVector.setScalar(0);
  _0x352cda.children[0].children[0].localToWorld(tempVector);
  tempObject.position.copy(_0x5696d1.position);
  tempObject.lookAt(tempVector);
  _0x5696d1.children[0].rotation.x = -tempObject.rotation.x;
  _0x5696d1.rotation.y = tempObject.rotation.y + Math.PI;
}
const el = document.createElement("div");
el.innerHTML = "<style>\n\n/* ===== PixelRaiders UI REDESIGN ===== */\n\n:root {\n  --bg: rgba(15, 15, 20, 0.75);\n  --bg-dark: rgba(10, 10, 14, 0.9);\n  --border: rgba(255, 255, 255, 0.08);\n  --neon-red: #ff3c3c;\n  --neon-green: #00ff9c;\n  --text: #eaeaea;\n  --muted: #9aa0a6;\n}\n\n.dialog {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  padding: 22px;\n  width: 340px;\n  background: var(--bg);\n  backdrop-filter: blur(14px);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  color: var(--text);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index: 999999;\n  box-shadow: 0 0 30px rgba(255, 60, 60, 0.25);\n  font-family: \"Segoe UI\", monospace;\n}\n\n.dialog big {\n  font-size: 20px;\n  letter-spacing: 1px;\n  color: var(--neon-red);\n}\n\n.close {\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n\n.close:hover { opacity: 1; }\n\n.close:before,\n.close:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  top: 50%;\n  left: 0;\n}\n\n.close:before { transform: rotate(45deg); }\n.close:after { transform: rotate(-45deg); }\n\n.btn {\n  padding: 10px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #ff3c3c, #ff1f6a);\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0 12px rgba(255, 60, 60, 0.6);\n}\n\n.msg {\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  background: var(--bg-dark);\n  color: var(--text);\n  padding: 14px 18px;\n  border-radius: 12px;\n  font-weight: bold;\n  border-left: 4px solid var(--neon-red);\n  animation: slideIn 0.4s ease forwards, slideOut 0.4s ease 2.8s forwards;\n  z-index: 999999;\n}\n\n@keyframes slideIn {\n  from { transform: translateX(-120%); opacity: 0; }\n  to   { transform: translateX(0); opacity: 1; }\n}\n\n@keyframes slideOut {\n  to { transform: translateX(-120%); opacity: 0; }\n}\n\n/* ===== Main GUI ===== */\n\n.PixelRaiders {\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 260px;\n  background: var(--bg);\n  backdrop-filter: blur(14px);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  box-shadow: 0 0 25px rgba(0,0,0,0.6);\n  font-family: \"Segoe UI\", monospace;\n  color: var(--text);\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.PixelRaiders-header {\n  padding: 12px 16px;\n  background: linear-gradient(90deg, #ff3c3c, #ff1f6a);\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\n.PixelRaiders-content {\n  padding: 6px 0;\n}\n\n.PixelRaiders-item {\n  padding: 10px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n\n.PixelRaiders-item:hover {\n  background: rgba(255,255,255,0.06);\n}\n\n.PixelRaiders-item-value {\n  font-weight: bold;\n}\n\n.PixelRaiders-item.text {\n  justify-content: center;\n  color: var(--muted);\n  font-size: 12px;\n  cursor: default;\n}\n\n</style>\n<div class=\"msg\" style=\"display: none;\"></div>\n<div class=\"dialog\"><div class=\"close\" onclick=\"this.parentNode.style.display='none';\"></div>\n\t<big>== Aimbot & ESP ==</big>\n\t<br>\n\t<br>\n\t[B] to toggle aimbot\n\t<br>\n\t[V] to toggle ESP\n\t<br>\n\t[L] to toggle aimbot on <br>right mouse hold\n\t<br>\n\t[H] to show/hide help\n\t<br>\n\t<br>\n\tCracked by Aureliustics\n\t<br>\n\t<br>\n\t<div align=\"center\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5px;\">\n\t\t\"\n\t</div>\n\t\n</div>";
const msgEl = el.querySelector(".msg");
const dialogEl = el.querySelector(".dialog");
window.addEventListener("DOMContentLoaded", function () {
  while (el.children.length > 0) {
    document.body.appendChild(el.children[0]);
  }
  document.body.appendChild(gui);
});
let rightMouseDown = false;
function handleMouse(_0x51b8fc) {
  if (_0x51b8fc.button === 2) {
    rightMouseDown = _0x51b8fc.type === "pointerdown" ? true : false;
  }
}
window.addEventListener("pointerdown", handleMouse);
window.addEventListener("pointerup", handleMouse);
window.addEventListener("keyup", function (_0x22c524) {
  if (x.document.activeElement && x.document.activeElement.value !== undefined) {
    return;
  }
  if (keyToSetting[_0x22c524.code]) {
    toggleSetting(keyToSetting[_0x22c524.code]);
  }
  switch (_0x22c524.code) {
    case "Slash":
      toggleElementVisibility(gui);
      break;
    case "KeyH":
      toggleElementVisibility(dialogEl);
      break;
  }
});
function toggleElementVisibility(_0x285fc4) {
  _0x285fc4.style.display = _0x285fc4.style.display === "" ? "none" : "";
}
function showMsg(_0xc998f7, _0x51d91e) {
  msgEl.innerText = _0xc998f7 + ": " + (_0x51d91e ? "ON" : "OFF");
  msgEl.style.display = "none";
  msgEl.offsetWidth;
  msgEl.style.display = "";
}
animate();
function createGUI() {
  const _0x3e37e3 = fromHtml("<div class=\"PixelRaiders\">\n\t\t<div class=\"PixelRaiders-item PixelRaiders-header\">\n\t\t\t<span>[/] Controls</span>\n\t\t\t<span class=\"PixelRaiders-item-value\">[close]</span>\n\t\t</div>\n\t\t<div class=\"PixelRaiders-content\"></div>\n\t</div>");
  const _0x489b58 = _0x3e37e3.querySelector(".PixelRaiders-header");
  const _0x5b68db = _0x3e37e3.querySelector(".PixelRaiders-content");
  const _0x30b5b1 = _0x3e37e3.querySelector(".PixelRaiders-item-value");
  _0x489b58.onclick = function () {
    const _0x18b86f = _0x5b68db.style.display === "none";
    _0x5b68db.style.display = _0x18b86f ? "" : "none";
    _0x30b5b1.innerText = _0x18b86f ? "[close]" : "[open]";
  };
  const _0x3a3b5b = {};
  for (const _0x31ed97 in keyToSetting) {
    _0x3a3b5b[keyToSetting[_0x31ed97]] = _0x31ed97;
  }
  for (const _0x2d3485 in settings) {
    let _0x31a902 = fromCamel(_0x2d3485);
    let _0x2400df = _0x3a3b5b[_0x2d3485];
    if (_0x2400df) {
      if (_0x2400df.startsWith("Key")) {
        _0x2400df = _0x2400df.slice(3);
      }
      _0x31a902 = "[" + _0x2400df + "] " + _0x31a902;
    }
    const _0xeb586d = fromHtml("<div class=\"PixelRaiders-item\">\n\t\t\t<span>" + _0x31a902 + "</span>\n\t\t\t<span class=\"PixelRaiders-item-value\"></span>\n\t\t</div>");
    const _0x59daac = _0xeb586d.querySelector(".PixelRaiders-item-value");
    function _0x55f4a3() {
      const _0x36fcad = settings[_0x2d3485];
      _0x59daac.innerText = _0x36fcad ? "ON" : "OFF";
      _0x59daac.style.color = _0x36fcad ? "green" : "red";
    }
    _0xeb586d.onclick = function () {
      settings[_0x2d3485] = !settings[_0x2d3485];
    };
    _0x55f4a3();
    _0x5b68db.appendChild(_0xeb586d);
    const _0x2a2c69 = "__" + _0x2d3485;
    settings[_0x2a2c69] = settings[_0x2d3485];
    Object.defineProperty(settings, _0x2d3485, {
      get() {
        return this[_0x2a2c69];
      },
      set(_0x5bc51f) {
        this[_0x2a2c69] = _0x5bc51f;
        _0x55f4a3();
      }
    });
  }
  _0x5b68db.appendChild(fromHtml("<div class=\"PixelRaiders-item text\">\n\t\t<span>Created by https://github.com/Aureliustics</span>\n\t</div>"));
  return _0x3e37e3;
}
function fromCamel(_0x201555) {
  const _0x495bcc = _0x201555.replace(/([A-Z])/g, " $1");
  return _0x495bcc.charAt(0).toUpperCase() + _0x495bcc.slice(1);
}
function fromHtml(_0x5865b5) {
  const _0x5e1e77 = document.createElement("div");
  _0x5e1e77.innerHTML = _0x5865b5;
  return _0x5e1e77.children[0];
}
function toggleSetting(_0x52a480) {
  settings[_0x52a480] = !settings[_0x52a480];
  showMsg(fromCamel(_0x52a480), settings[_0x52a480]);
}