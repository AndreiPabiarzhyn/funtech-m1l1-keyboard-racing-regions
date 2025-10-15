// js/lang.js
export const STR = {
  base: {
    title: '1Keyboard Rush',
    subtitle: '1Press the highlighted letters to reach the finish!',
    start: '1Start!!!',
    next: '1Next Level',
    restartTop: '1Restart',
    startTile: '1START',
    winTitle: '1Level Complete!',
    timeoutTitle: "1Time’s up!",
    timeoutMsg: '1Try again from this level.',
    restartLevel: '1Restart Level',
    level: (n) => `1Level ${n}`,
    progress: (c, t) => `${c}/${t}`,
  }
};

export const i18n = {
  t(key, ...args) {
    const v = STR.base[key];
    return typeof v === 'function' ? v(...args) : (v ?? key);
  }
};

// Подставляет статические надписи на старте/рестарте
export function applyStaticTexts() {
  const set = (sel, prop, val) => {
    const el = document.querySelector(sel);
    if (el) el[prop] = val;
  };
  set('#title', 'textContent', i18n.t('title'));
  set('#subtitle', 'textContent', i18n.t('subtitle'));
  set('#start-btn', 'textContent', i18n.t('start'));
  set('#restart-top-btn', 'textContent', `🔄 ${i18n.t('restartTop')}`);

  // win-modal
  const win = document.querySelector('#win-modal');
  if (win) {
    const h3 = win.querySelector('h3');
    const btn = win.querySelector('.btn-gradient');
    if (h3) h3.textContent = i18n.t('winTitle');
    if (btn) btn.textContent = i18n.t('next');
  }
}
