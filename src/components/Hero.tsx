"use client";

//effect typhograpy library
import { useTypewriter, Cursor } from "react-simple-typewriter";

//next stuffs
import Image from "next/image";

// icons
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Hero() {
  const [typedText] = useTypewriter({
    words: ["Estudiante ing. Sistemas", "Fullstack Developer"],
    typeSpeed: 80,
    deleteSpeed: 70,
  });

  return (
    <header className="pt-24 bg-custom  overflow-hidden w-screen min-h-screen max-h-screen flex flex-col justify-around items-center px-2 md:px-0">
      <section className="z-10 flex flex-col justify-center items-center max-w-full">
        <div className="relative">
          <Image
            className="sqD -right-12 -bottom-12 absolute"
            width={100}
            height={100}
            src="/icons/js.svg"
            alt="decoration-icon"
          />
          <Image
            className="sqD -left-14 -top-8 absolute"
            width={100}
            height={100}
            src="/skills/star-outline.svg"
            alt="decoration-icon"
          />
          <h1 className="cursor-default  text-4xl md:text-5xl w-auto max-w-full text-center font-black mb-4 md:mb-6 tracking-1 animate-fade animate-ease-in-out animate-duration-[1000ms] animate-delay-[1000ms]">
            Emiliano Barea
          </h1>
        </div>
        <h2 className="min-h-[48px] md:min-h-[24px] overflow-hidden cursor-default text-center max-w-full text-md mb-6 uppercase tracking-[15px] text-gray-400 underline-offset-2">
          {typedText}
          <Cursor cursorBlinking={false} cursorColor="white" cursorStyle="" />
        </h2>
        <div className="space-x-6 md:space-x-12 ">
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#9089fc] via-[#ff80b5] to-[#9089fc] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/BE_CV.pdf"
              className="relative inline-flex bg-black/25 border border-white items-center justify-center px-6 py-4 font-semibold transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 ease active:scale-95"
              role="button"
              download="BE_CV.pdf"
            >
              Descarga CV
            </a>
          </div>
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#9089fc] via-[#ff80b5] to-[#9089fc] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              className="relative inline-flex bg-black/25 border border-white items-center justify-center px-6 py-4 font-semibold transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 ease active:scale-95"
              role="button"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
      {/* {bg decoration} */}
      <div
        aria-hidden="true"
        className="flex justify-center items-center pointer-events-none absolute inset-x-0 -top-10  md:-top-50  transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
        />
      </div>

      <section className="flex flex-col justify-center items-center w-auto max-w-screen ">
        <div className=" h-[30rem] mt-6 md:h-auto w-[22rem] max-w-full bg-gradient-to-b from-[#4db5ff] to-transparent rounded-t-[12rem] pt-[5rem] px-[1.5rem]">
          <Image
            width={455}
            height={304}
            src="/emiFa.png"
            alt="foto-perfil"
            className="-translate-y-12 relative mx-auto object-cover md:-translate-y-6 animate-fade animate-ease-in-out animate-duration-[1000ms] animate-delay-[1000ms] hover:scale-105 transition duration-300 ease-out  active:scale-90"
          />
        </div>
      </section>
      <div className="absolute bottom-0 w-screen flex px-4 justify-around items-end">
        <div className="hidden md:flex mb-6  flex-col  items-center gap-6 animate-jump-in animate-duration-1000 animate-ease-in-out">
          <a href="https://github.com/emibarea" target="_blank">
            <FaGithub className="w-4 h-4 text-[#4db5ff] hover:scale-150 hover:text-white transition duration-300" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCsmruGgvypq9GvmzMdUbfIg"
            target="_blank"
          >
            <FiYoutube className="w-4 h-4 text-[#4db5ff] hover:scale-150 hover:text-white transition duration-300" />
          </a>
          <a href="https://www.instagram.com/bareaemiliano/" target="_blank">
            <BsInstagram className="w-4 h-4 text-[#4db5ff] hover:scale-150 hover:text-white transition duration-300" />
          </a>

          <div className="w-[1px] h-12  bg-[#4db5ff]" />
        </div>
        <div className="hidden md:flex mb-6  flex-col  items-center gap-6 animate-jump-in animate-duration-1000 animate-ease-in-out">
          <a
            href="https://www.linkedin.com/in/emiliano-barea-monetti-781a00231/"
            target="_blank"
          >
            <BsLinkedin className="w-4 h-4 text-[#4db5ff] hover:scale-150 hover:text-white transition duration-300" />
          </a>
          <a href="mailto:emilianobarea8@gmail.com" target="_blank">
            <BiMailSend className="w-4 h-4 text-[#4db5ff] hover:scale-150 hover:text-white transition duration-300" />
          </a>

          <div className="w-[1px] h-12  bg-[#4db5ff]" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
