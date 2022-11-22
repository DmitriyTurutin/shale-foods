import React, { useContext, useRef } from "react";
import s from "../styles/about.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress <= 1) return 1;
  return 0.2;
};

const About: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-gray text-white">
      <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.aboutText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Официальный представитель Moll Marzipan GmbH
          </div>
          <span
            className={`${s.aboutText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Расположены в Санкт-Петербурге, крупнейшем порту России, что
            позволяет предоставлять лучший товар по конкурентным ценам
          </span>
          <span
            className={`${s.aboutText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Традиционное высочайшего качества сырье, а также новые и интересные
            ингредиенты
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
