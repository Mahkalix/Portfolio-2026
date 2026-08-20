import { useState } from "react";
import { useLanguage } from "../i18n/language.js";

function HeroSpider() {
  const [settled, setSettled] = useState(false);
  const [replayId, setReplayId] = useState(0);
  const { copy } = useLanguage();

  function replayAnimation() {
    if (settled) setReplayId((value) => value + 1);
  }

  return (
    <button
      className={`c-hero-spider${settled ? " is-settled" : ""}`}
      type="button"
      aria-label={copy.spider}
      onAnimationEnd={(event) => {
        if (event.animationName === "spider-descend") setSettled(true);
      }}
      onPointerEnter={replayAnimation}
      onFocus={replayAnimation}
      onClick={replayAnimation}
    >
      <span key={replayId} className={`c-hero-spider__motion${replayId ? " is-replaying" : ""}`}>
        <img src="/assets/figma/hero-spider.png" alt="" />
      </span>
    </button>
  );
}

export default HeroSpider;
