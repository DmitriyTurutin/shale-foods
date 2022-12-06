import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import Image from "next/image";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          src={"/moll_marzipan.png"}
          width={150}
          height={50}
          alt="Moll Marzipan"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
