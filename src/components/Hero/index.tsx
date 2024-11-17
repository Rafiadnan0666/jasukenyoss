"use client"
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update cursor position
  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Selamat Datang di Jasukenyoss!
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Temukan tempat paling keren untuk eksplorasi resep masakan
                autentik dari berbagai penjuru dunia. Gabung bersama Jasukenyoss
                dan mulailah petualangan kuliner yang tak terlupakan!
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/eksplorasi-resep"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                >
                  🍲 Eksplor Resep
                </Link>
                <Link
                  href="/bergabung-komunitas"
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  🌟 Bergabung Komunitas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute w-20 h-20 bg-yellow rounded-full pointer-events-none transform transition-all duration-150 ease-out -z-10"
        style={{
          top: cursorPos.y - 20 + "px", // offset the circle by half its size
          left: cursorPos.x - 20 + "px", // offset the circle by half its size
        }}
      ></div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        {/* Tambahkan dekorasi SVG atau gambar di sini */}
      </div>
    </section>
  );
};

export default Hero;
