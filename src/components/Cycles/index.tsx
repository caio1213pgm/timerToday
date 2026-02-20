import style from "./Cycles.module.css";

export default function Cycles() {
  return (
    <div className={style.boxCycles}>
      <span>Ciclos:</span>
      <div className={style.cycles}>
        <span className={style.cycleWork}></span>
        <span className={style.cycleShort}></span>
        <span className={style.cycleLong}></span>
      </div>
    </div>
  );
}
