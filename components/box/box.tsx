"use client";
import React, { useRef, useState } from "react";
import Header from "../headers/header";
import {
  IconBrandGit,
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

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
      className="bg-[#000E22]/30 backdrop-blur-lg border border-[#607C97]/20 shadow-2xl shadow-black/50 w-[1300px] h-[700px] rounded-2xl mx-10 px-5 z-10 flex flex-col text-[#607C97]"
      ref={boxRef}
    >
      {/* header */}
      <Header maximize={maximize} />
      {/* content */}
      {children}
      {/* footer */}
      <footer className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          find me |{" "}
          <a
            href="https://twitter.com/halonthe"
            target="_blank"
            className="flex items-center cursor-pointer hover:text-blue-700"
          >
            <IconBrandTwitterFilled className="w-4 h-4" />
            @halonthe
          </a>
          <a
            href="https://www.linkedin.com/in/yudhadr/"
            target="_blank"
            className="flex items-center cursor-pointer hover:text-blue-700"
          >
            <IconBrandLinkedinFilled className="w-4 h-4" />
            yudhadr
          </a>
        </div>
        <a
          href="https://github.com/halonthe"
          target="_blank"
          className="flex items-center hover:text-blue-700"
        >
          <IconBrandGit className="w-4 h-4" />
          main*
        </a>
      </footer>
    </div>
  );
};

export default Box;
