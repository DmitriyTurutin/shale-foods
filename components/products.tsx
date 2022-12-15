// refactor with map and array
import { spawn } from "child_process";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  ProductBackground,
  ProductContainer,
  ProductLeft,
  ProductLink,
  ProductRight,
} from "./product";
import Image from "next/image";

const Products = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <ProductBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <ProductContainer>
            <ProductLeft progress={progress}>
              <div>
                <ProductLink href="nuts">Орехи</ProductLink>
              </div>
              <div className="font-semibold text-4xl md:text-5xl">
                Миндаль, Фисташки, Фундук
              </div>
            </ProductLeft>
            <ProductRight progress={progress}>
              <Image
                src={"/nuts_block.png"}
                alt="nuts image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </ProductRight>
          </ProductContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <ProductContainer>
            <ProductLeft progress={progress}>
              <div>
                <ProductLink href="dried">Сухофрукты</ProductLink>
              </div>
              <div className="font-semibold text-4xl md:text-5xl">
                Чернослив, Цукаты
              </div>
            </ProductLeft>
            <ProductRight progress={progress}>
              <Image
                key={Date.now()}
                src={"/dried_fruits_block.png"}
                alt="nuts image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </ProductRight>
          </ProductContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <ProductContainer>
            <ProductLeft progress={progress}>
              <div>
                <ProductLink href="dried">Ингридиенты</ProductLink>
              </div>
              <div className="font-semibold text-4xl md:text-5xl">
                Марципан, Миндальная мука
              </div>
            </ProductLeft>
            <ProductRight progress={progress}>
              <Image
                key={Date.now()}
                src={"/ingredients_block.png"}
                alt="nuts image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </ProductRight>
          </ProductContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Products;
