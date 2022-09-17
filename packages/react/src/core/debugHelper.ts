enum DebugMode {
  None = 0,
  ActivateDebuggers,
  ShowPrerender,
  PauseEngine,
}

const key = 'debugMode';

declare global {
  interface Window {
    __debugMode: (mode: DebugMode) => void;
  }
}

window.__debugMode = (mode: DebugMode) => {
  localStorage.setItem(key, mode.toString());
};

function readDebugMode(): DebugMode {
  return parseInt(localStorage.getItem(key) ?? '0');
}

export default {
  get activateDebuggers() {
    return readDebugMode() >= DebugMode.ActivateDebuggers;
  },
  get showPrerender() {
    return readDebugMode() >= DebugMode.ShowPrerender;
  },
  get pauseEngine() {
    return readDebugMode() >= DebugMode.PauseEngine;
  },
};
