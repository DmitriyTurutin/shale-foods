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
              <div className="">
                <h1 className="absolute uppercase font-bold text-7xl text-red-600">
                  Тестовые картинки!
                </h1>
              </div>
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
              <div className=""></div>
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
              <div className=""></div>
            </ProductRight>
          </ProductContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Products;
