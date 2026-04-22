import beepSound from "../assets/audios/gravitational_beep.mp3";

export function loadBeep() {
  const beep = new Audio(beepSound);
  beep.load();

  return () => {
    beep.currentTime = 0;
    beep.play();
  };
}
