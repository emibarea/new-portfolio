"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { footer } from "@/utils/globals";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <footer
      id="contacto"
      className="flex flex-col w-screen px-5 py-10 z-5 border-t border-[#141e33] bg-custom"
    >
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-[#7b89a8] text-sm font-bold ">
                {item.title}
              </h4>{" "}
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex hover:underline"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                alt="icon"
                                src={item.icon}
                                width={20}
                                height={20}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          className={`${
                            pathname === item.link
                              ? "underline underline-offset-2 text-[#00c7ff]"
                              : ""
                          } hover:underline hover:scale-105 transition duration-150 ease-in-out`}
                          href={item.link}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Apoya mi trabajo
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            <div>
              <a href="https://www.buymeacoffee.com/emibarea" target="_blank">
                <Image
                  width={200}
                  height={200}
                  alt="icon"
                  src="/icons/buy-me-a-coffee.svg"
                  className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                />
              </a>
            </div>

            <div>
              <a href="https://paypal.me/emibarea" target="_blank">
                <Image
                  width={200}
                  height={200}
                  alt="icon"
                  src="/icons/paypal.svg"
                  className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                />
              </a>
            </div>

            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="mt-2 text-xs ">
            Desarrollado por{" "}
            <a
              href="mailto:jonathan.ramos.business@gmail.com"
              className="text-fun-gray-light font-medium underline"
            >
              Emiliano Barea
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
