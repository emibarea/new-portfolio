"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiLogout, HiLogin } from "react-icons/hi";

function Nav() {
  const [underline, setUnderline] = useState("home");

  return (
    <nav
      id="Header"
      className="absolute w-screen flex justify-between px-6 lg:px-0 lg:justify-around items-center pt-4"
    >
      <div>
        <Image src="/emilogo.png" width={50} height={50} alt="profile-logo" />
      </div>

      {/* {right side} */}
      <div className="flex space-x-4">
        <Link
          href="/"
          className={`${
            underline === "home"
              ? "underline underline-offset-2 scale-110 transition duration-150 ease-in-out"
              : ""
          }`}
          onClick={() => setUnderline("home")}
        >
          Inicio
        </Link>

        <Link
          href="/proyectos"
          className={`${
            underline === "proyectos"
              ? "underline underline-offset-2 scale-110 transition duration-150 ease-in-out"
              : ""
          }`}
          onClick={() => setUnderline("proyectos")}
        >
          Proyectos
        </Link>

        <Link
          href="/certificados"
          className={`${
            underline === "certificados"
              ? "underline underline-offset-2 scale-110 transition duration-150 ease-in-out"
              : ""
          }`}
          onClick={() => setUnderline("certificados")}
        >
          Certificados
        </Link>
      </div>

      {/* mobile menu */}
      <div className="z-20 flex lg:hidden">
        <Dropdown inline label="Menu">
          <Dropdown.Item icon={AiOutlineHome}>
            <Link href="/">Inicio</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={AiOutlineUser}>
            <Link href="sobremi">Sobre mi</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={AiOutlineFolderOpen}>
            <Link href="proyectos">Portafolio</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={TbCertificate}>
            <Link href="certificados">Certificados</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={BiMessageSquareDetail}>
            <Link href="contacto">Contacto</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogin}>Iniciar Sesion</Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Nav;
