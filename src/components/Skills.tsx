import React from "react";
import { skills } from "@/utils/globals";
import Image from "next/image";
import dynamic from "next/dynamic";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-16 md:mr-10 md:mb-0 md:w-max mr-0 ">
        Mis Habilidades Técnicas
        <br />
        <span className="text-[#00c7ff] underline">skills</span>
      </h2>
      <Image
        width={120}
        height={120}
        alt="decoration-img"
        className="sqD absolute top-10 left-0 md:-top-10 md:left-[30%]"
        src="/skills/laptop.svg"
      />
      <Image
        width={100}
        height={100}
        alt="decoration-img"
        className="sqD absolute hidden md:block -bottom-10"
        src="/skills/coding.svg"
      />
      <Image
        width={90}
        height={90}
        alt="decoration-img"
        className="sqD absolute -top-16 right-0 md:hidden"
        src="/skills/youtube.svg"
      />
      <Image
        width={90}
        height={90}
        alt="decoration-img"
        className="sqD absolute hidden md:block bottom-4 left-[25%]"
        src="/skills/youtube.svg"
      />
      <Image
        width={120}
        height={120}
        alt="decoration-img"
        className="sqD absolute right-0 md:-right-10 bottom-0"
        src="/skills/fillStar.svg"
      />
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Skills), { ssr: true });
