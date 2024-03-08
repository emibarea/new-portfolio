import Image from "next/image";
import React from "react";

interface PageTitlesProps {
  title: string;
  subtitle: string;
  icon: string;
}

const PageTitles = ({ title, subtitle, icon }: PageTitlesProps) => {
  return (
    <div className="pt-12 flex items-center justify-center flex-col">
      <h1 className="relative w-fit text-6xl mb-8">
        <Image
          src={icon}
          alt="decoration-icon"
          width={50}
          height={50}
          className="sqD absolute -right-10 -top-8"
        />
        {title}
      </h1>

      <h3 className="text-[#7b89a8] text-2xl text-center">{subtitle}</h3>
    </div>
  );
};

export default PageTitles;
