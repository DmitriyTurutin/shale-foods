import Link from "next/link";
import React, { ReactNode } from "react";

interface ChildrenProps {
  children?: React.ReactNode;
}

export const ProductContainer: React.FC<ChildrenProps> = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const ProductBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-gray h-[30vh] lg:h-auto"> </div>
    <div className="bg-white h-[70vh] lg:min-h-screen"> </div>
  </div>
);

export const ProductLeft: React.FC<{
  children?: React.ReactNode;
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10"> {children}</div>
    </div>
  );
};

export const ProductRight: React.FC<{
  children?: React.ReactNode;
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

// Link to product
interface LinkProps {
  children?: React.ReactNode;
  href: string;
}
export const ProductLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link
      className="underline cursor-pointer underline-offset-8 decoration-1 "
      href={href}
    >
      {children}
    </Link>
  );
};
