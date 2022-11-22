import React, { useRef, useContext, useState, useCallback } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

{
  /*Add change theme throgh props*/
}

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div>
      <Navbar />

      <div
        ref={refContainer}
        className="bg-white relative -z-10 w-full h-screen dark:bg-black"
        style={{
          transform: `translateY(${progress * 30}vh)`,
        }}
      >
        <div className="container flex flex-col justify-center mx-auto h-screen">
          <h1 className="w-20 tracking-widest text-6xl font-bold uppercase text-gray darck:text-white">
            big words heading
          </h1>
          <h3 className="mt-7 text-2xl  w-96 lowercase text-gray dark:text-white">
            some small text under big words heading to tell what is going on
          </h3>
        </div>
        <img
          className="overflow-hidden absolute bottom-0 right-0"
          src="/nuts_bg.png"
          alt="Nuts bg"
          width={750}
        />
      </div>
    </div>
  );
};

export default Masthead;
