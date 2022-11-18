import React from "react";
import Navbar from "./navbar";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-white relative w-full h-screen">
        <div className="container flex flex-col justify-center mx-auto h-screen">
          <h1 className="w-20 tracking-widest text-6xl font-bold uppercase text-gray">
            big words heading
          </h1>
          <h3 className="mt-7 text-2xl  w-96 lowercase text-gray">
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
