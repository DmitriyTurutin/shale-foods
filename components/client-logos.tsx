import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import Image from "next/image";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/krasniy_oktyabr.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/babaevskiy.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/moll_marzipan.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/krasniy_oktyabr.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/babaevskiy.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/moll_marzipan.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/krasniy_oktyabr.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/babaevskiy.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
      <SliderItem width={150}>
            <Image
              key={Date.now()}
              src={"/partners/moll_marzipan.png"}
              width='0'
              height='0'
              sizes='100vw'
              alt='image'
              className="w-full h-auto"
              />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
