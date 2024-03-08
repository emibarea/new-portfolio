"use client";
import { Certifications } from "@/utils/certs";
import Image from "next/image";
const CertCard = ({ item }: { item: Certifications }) => {
  return (
    <div className="text-center border border-[#00c7ff] bg-[#111827] group antialiased flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 flex-grow-0 p-10 cursor-default ">
      {/* compony logo */}
      <div>
        <Image
          src={item.logo}
          alt="company logo"
          className="w-12 h-12 rounded-full xl:w-[50px] xl:h-[50px] object-cover object-center group-hover:scale-125 group-hover:drop-shadow-[0_0px_15px_#ffffff2f] transition ease-in-out duration-300 border-2"
          width={200}
          height={200}
        />
      </div>

      <div className="space-y-2">
        <h4 className="text-2xl sm:text-3xl  md:text-4xl pb-2">{item.name}</h4>
        <hr className="border-[#00c7ff]" />

        <a href={item.link} target="_blank">
          <Image
            src={item.img}
            width={100}
            height={100}
            className="w-full pt-2 object-cover"
            alt="certificate-image"
          />
        </a>
        <p className="text-[#7b89a8] text-base font-medium pt-2">
          Ofrecida por: <span className="text-slate-200">{item.por}</span>
        </p>
        <p className=" text-[#7b89a8] text-base font-medium">
          Status: <span className="text-slate-200">Completo</span>
        </p>
        {item.codigo ? (
          <p className="text-[#7b89a8] text-base font-medium">
            Codigo: <span className="text-slate-200">{item.codigo}</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CertCard;
