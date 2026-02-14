// ==UserScript==
// @name         Don't execute this version; use for reverse engineering/learning only
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  Broken the UI a bit during refactor, but the logic in intact so use this to learn how the cheat works.
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
  espLinesVisible: false,
  wireframeEnabled: false
};

const keyToSetting = {
  KeyB: "aimbotEnabled",
  KeyL: "aimbotOnRightMouse",
  KeyM: "espEnabled",
  KeyN: "espLinesVisible",
  KeyK: "wireframeEnabled"
};

const gui = createGUI();
let scene;
const globals = {
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

globals.consoleLog("Waiting to inject...");

const proxiedPush = function (arr) {
  try {
    if (typeof arr === "object" && arr.parent && arr.parent.type === "Scene" && arr.parent.name === "Main") {
      globals.consoleLog("Found Scene!");
      scene = arr.parent;
      globals.ArrayPrototype.push = globals.ArrayPush;
    }
  } catch (error) {}
  return globals.ArrayPush.apply(this, arguments);
};

const tempVector = new THREE.Vector3();
const tempObject = new THREE.Object3D();
tempObject.rotation.order = "YXZ";

const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(5, 15, 5).translate(0, 7.5, 0));
const material = new THREE.RawShaderMaterial({
  vertexShader: `
    attribute vec3 position;
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position.z = 1.0;
    }
  `,
  fragmentShader: `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `
});

const line = new THREE.LineSegments(new THREE.BufferGeometry(), material);
line.frustumCulled = false;

const linePositions = new THREE.BufferAttribute(new Float32Array(600), 3);
line.geometry.setAttribute("position", linePositions);

let injectTimer = null;

function animate() {
  globals.requestAnimationFrame.call(globals.window, animate);

  if (!scene && !injectTimer) {
    const loadingBg = globals.querySelector.call(globals.document, "#loadingBg");
    if (loadingBg && loadingBg.style.display === "none") {
      globals.consoleLog("Inject timer started!");
      injectTimer = globals.setTimeout.call(globals.window, () => {
        globals.consoleLog("Injected!");
        globals.ArrayPrototype.push = proxiedPush;
      }, 2000);
    }
  }

  if (!scene || !scene.children) {
    return;
  }

  const objectsInScene = [];
  let playerObject;
  let closestDistance = Infinity;

  tempObject.matrix.copy(scene.children[0].matrix).invert();

  for (let i = 0; i < scene.children.length; i++) {
    const child = scene.children[i];

    if (child.type === "Object3D") {
      try {
        if (child.children[0].children[0].type === "PerspectiveCamera") {
          playerObject = child;
        } else {
          objectsInScene.push(child);
        }
      } catch (error) {}
    } else if (child.material) {
      child.material.wireframe = settings.wireframeEnabled;
    }
  }

  if (!playerObject) {
    globals.consoleLog("Player not found, finding new scene.");
    globals.ArrayPrototype.push = proxiedPush;
    return;
  }

  let linePositionIndex = 0;

  for (let i = 0; i < objectsInScene.length; i++) {
    const object = objectsInScene[i];

    if (!object.box) {
      const box = new THREE.LineSegments(geometry, material);
      box.frustumCulled = false;
      object.add(box);
      object.box = box;
    }

    if (object.position.x === playerObject.position.x && object.position.z === playerObject.position.z) {
      object.box.visible = false;
      if (line.parent !== object) {
        object.add(line);
      }
      continue;
    }

    linePositions.setXYZ(linePositionIndex++, 0, 10, -5);

    tempVector.copy(object.position);
    tempVector.y += 9;
    tempVector.applyMatrix4(tempObject.matrix);

    linePositions.setXYZ(linePositionIndex++, tempVector.x, tempVector.y, tempVector.z);

    object.visible = settings.espEnabled || object.visible;
    object.box.visible = settings.espEnabled;

    const distanceToPlayer = object.position.distanceTo(playerObject.position);
    if (distanceToPlayer < closestDistance) {
      closestDistance = distanceToPlayer;
    }
  }

  linePositions.needsUpdate = true;
  line.geometry.setDrawRange(0, linePositionIndex);
  line.visible = settings.espLinesVisible;

  if (!settings.aimbotEnabled || (settings.aimbotOnRightMouse && !rightMouseDown) || !playerObject) {
    return;
  }

  tempVector.setScalar(0);
  closestObject.children[0].children[0].localToWorld(tempVector);
  tempObject.position.copy(playerObject.position);
  tempObject.lookAt(tempVector);

  playerObject.children[0].rotation.x = -tempObject.rotation.x;
  playerObject.rotation.y = tempObject.rotation.y + Math.PI;
}

const controlPanel = document.createElement("div");
controlPanel.innerHTML = `
  <style>
    /* Custom styles */
  </style>
  <div class="msg" style="display: none;"></div>
  <div class="dialog">
    <div class="close" onclick="this.parentNode.style.display='none';"></div>
    <big>== Aimbot & ESP ==</big>
    <br>
    <br>
    [B] to toggle aimbot
    <br>
    [V] to toggle ESP
    <br>
    [L] to toggle aimbot on right mouse hold
    <br>
    [H] to show/hide help
    <br>
    <br>
    Cracked by Aureliustics
    <br>
    <br>
    <div align="center" style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5px;">
      "
    </div>
  </div>
`;

const msgEl = controlPanel.querySelector(".msg");
const dialogEl = controlPanel.querySelector(".dialog");
/* commented out UI because it broke the screen and game
window.addEventListener("DOMContentLoaded", function () {
  while (controlPanel.children.length > 0) {
    document.body.appendChild(controlPanel.children[0]);
  }
  document.body.appendChild(gui);
});
*/
let rightMouseDown = false;

function handleMouse(event) {
  if (event.button === 2) {
    rightMouseDown = event.type === "pointerdown" ? true : false;
  }
}

window.addEventListener("pointerdown", handleMouse);
window.addEventListener("pointerup", handleMouse);

window.addEventListener("keyup", function (event) {
  if (globals.document.activeElement && globals.document.activeElement.value !== undefined) {
    return;
  }

  if (keyToSetting[event.code]) {
    toggleSetting(keyToSetting[event.code]);
  }

  switch (event.code) {
    case "Slash":
      toggleElementVisibility(gui);
      break;
    case "KeyH":
      toggleElementVisibility(dialogEl);
      break;
  }
});

function toggleElementVisibility(element) {
  element.style.display = element.style.display === "" ? "none" : "";
}

function showMsg(message, status) {
  msgEl.innerText = `${message}: ${status ? "ON" : "OFF"}`;
  msgEl.style.display = "none";
  msgEl.offsetWidth;
  msgEl.style.display = "";
}

animate();

function createGUI() {
  const panel = fromHtml(`
    <div class="PixelRaiders">
      <div class="PixelRaiders-item PixelRaiders-header">
        <span>[/] Controls</span>
        <span class="Pixel
        <span class="PixelRaiders-item-value">[close]</span>
      </div>
      <div class="PixelRaiders-content"></div>
    </div>
  `);

  const header = panel.querySelector(".PixelRaiders-header");
  const content = panel.querySelector(".PixelRaiders-content");
  const closeButtonText = panel.querySelector(".PixelRaiders-item-value");

  header.onclick = function () {
    const isContentVisible = content.style.display === "none";
    content.style.display = isContentVisible ? "" : "none";
    closeButtonText.innerText = isContentVisible ? "[close]" : "[open]";
  };

  const keyBindings = {};
  for (const settingKey in keyToSetting) {
    keyBindings[keyToSetting[settingKey]] = settingKey;
  }

  for (const setting in settings) {
    let displayName = fromCamelCase(setting);
    let bindingKey = keyBindings[setting];

    if (bindingKey) {
      if (bindingKey.startsWith("Key")) {
        bindingKey = bindingKey.slice(3);
      }
      displayName = `[${bindingKey}] ${displayName}`;
    }

    const item = fromHtml(`
      <div class="PixelRaiders-item">
        <span>${displayName}</span>
        <span class="PixelRaiders-item-value"></span>
      </div>
    `);

    const valueElement = item.querySelector(".PixelRaiders-item-value");

    function updateDisplay() {
      const isEnabled = settings[setting];
      valueElement.innerText = isEnabled ? "ON" : "OFF";
      valueElement.style.color = isEnabled ? "green" : "red";
    }

    item.onclick = function () {
      settings[setting] = !settings[setting];
      updateDisplay();
    };

    updateDisplay();
    content.appendChild(item);

    const internalKey = `__${setting}`;
    settings[internalKey] = settings[setting];
    Object.defineProperty(settings, setting, {
      get() {
        return this[internalKey];
      },
      set(value) {
        this[internalKey] = value;
        updateDisplay();
      }
    });
  }

  content.appendChild(fromHtml(`
    <div class="PixelRaiders-item text">
      <span>Cracked by https://github.com/Aureliustics</span>
    </div>
  `));

  return panel;
}

function fromCamelCase(str) {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function fromHtml(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

function toggleSetting(settingKey) {
  settings[settingKey] = !settings[settingKey];
  showMsg(fromCamelCase(settingKey), settings[settingKey]);
}
