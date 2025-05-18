"use client";
import React, { useRef, useState } from "react";
import Header from "../headers/header";

const Box = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const maximize = () => {
    if (isFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      boxRef.current?.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div
      className="bg-[#000E22]/30 backdrop-blur-lg shadow-2xl shadow-black/50 w-[1300px] h-[700px] rounded-2xl mx-10 px-5 z-10 flex flex-col text-[#607C97]"
      ref={boxRef}
    >
      {/* header */}
      <Header maximize={maximize} />
      {/* content */}
      {children}
      {/* footer */}
      <div className="flex items-center">footer</div>
    </div>
  );
};

export default Box;
