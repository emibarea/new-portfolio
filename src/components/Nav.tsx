"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Dropdown } from "flowbite-react";

import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const pathname = usePathname();

  return (
    <nav
      id="Header"
      className="absolute w-screen flex justify-between px-6 lg:px-0 lg:justify-around items-center pt-4"
    >
      <div>
        <Image src="/emilogo.png" width={50} height={50} alt="profile-logo" />
      </div>

      {/* {right side} */}
      <div className="hidden lg:flex space-x-4">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "underline underline-offset-2 text-[#00c7ff]"
              : ""
          } p-1 hover:underline hover:scale-105 transition duration-150 ease-in-out`}
        >
          Inicio
        </Link>

        <Link
          href="/proyectos"
          className={`${
            pathname === "/proyectos"
              ? "underline underline-offset-2 text-[#00c7ff]"
              : ""
          } p-1 hover:underline hover:scale-105 transition duration-150 ease-in-out`}
        >
          Proyectos
        </Link>

        <Link
          href="/certificados"
          className={`${
            pathname === "/certificados"
              ? "underline underline-offset-2 text-[#00c7ff]"
              : ""
          } p-1 hover:underline hover:scale-105 transition duration-150 ease-in-out`}
        >
          Certificados
        </Link>
      </div>

      {/* mobile menu */}
      <div className="z-20 flex lg:hidden">
        <Dropdown
          inline
          arrowIcon={false}
          label={<AiOutlineMenu className="w-6 h-6" />}
        >
          <Dropdown.Header>
            <a
              href="mailto:emilianobarea8@gmail.com"
              className="block truncate text-sm font-medium underline underline-offset-1"
            >
              emilianobarea8@gmail.com
            </a>
          </Dropdown.Header>
          <Dropdown.Item icon={AiOutlineHome}>
            <Link href="/">Inicio</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={AiOutlineFolderOpen}>
            <Link href="proyectos">Proyectos</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={TbCertificate}>
            <Link href="certificados">Certificados</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={BiMessageSquareDetail}>
            <Link href={`${pathname === "/" ? "#contacto" : "/#contacto"} `}>
              Contacto
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Nav;
