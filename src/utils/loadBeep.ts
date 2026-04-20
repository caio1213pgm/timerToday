export function loadBeep() {
  // BAIXAR O AUDIO E ADICIONAR NA PASTA PUBLIC E COLOCAR
  const beep = new Audio("");
  beep.load();

  return () => {
    beep.currentTime = 0;
    beep.play();
  };
}
