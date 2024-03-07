import React from "react";
import dynamic from "next/dynamic";
function CTA() {
  return (
    <div className="pt-36 relative w-full h-auto">
      <img className="w-30 m-auto mb-2" src="/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Estas interesado en contactarme?
        </h2>
        <a
          href="mailto:emilianobarea8@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-black/10 hover:bg-[#00c7ff] hover:border-transparent active:scale-105 transition-colors"
        >
          Hablemos!
        </a>
      </div>

      <img
        className="absolute -bottom-12 sm:-bottom-22 md:-bottom-36 left-1/2 transform -translate-x-1/2 lg:w-[1000px] -z-50"
        src="/doodles/fancyLines.svg"
        alt="decoration-img"
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(CTA), { ssr: true });
