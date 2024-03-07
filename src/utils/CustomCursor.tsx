//src/components/custom-cursor.tsx
// Import necessary React hooks and components
"use client";
import React, { useEffect, useRef, useState } from "react";

// Definir los colores del cursor
const CURSOR_COLORS: { [key: string]: string } = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

// Componente principal CustomCursor
const CustomCursor: React.FC = () => {
  // Referencia al elemento del cursor
  const cursorRef = useRef<HTMLDivElement>(null);

  // Estado para rastrear la posición del cursor
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Estado para rastrear el color del cursor
  const [cursorColor, setCursorColor] = useState<string>("sky-500");

  // Estado para rastrear el evento de clic
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    // Evento para el movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Evento para el clic del mouse
    const handleMouseDown = () => {
      setClicked(true);
      // Restablecer el estado de clic después de 800 milisegundos
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    // Evento para pasar el mouse sobre elementos HTML
    const handleMouseOver = (e: MouseEvent) => {
      // Obtener el nombre de la etiqueta HTML
      const tagName = (e.target as HTMLElement)?.tagName?.toLowerCase();
      // Establecer el color del cursor en función de la etiqueta, por defecto a "sky-500"
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    // Limpiar los eventos al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []); // useEffect se ejecuta solo una vez al montar

  return (
    <>
      {/* Elemento del cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-300 rounded-full w-3 h-3 bg-${cursorColor}`}
      />
      {/* Efecto de clic del cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-500 rounded-full w-8 h-8 border-2 border-${cursorColor} `}
      >
        <div
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor} ease-in transition-all duration-500 -z-10`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
