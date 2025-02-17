"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
  "/Logo7.png",
  "/Logo8.png",
  "/Logo9.png",
  "/Logo10.png",
];

const LogoMarquee = () => {
  return (
    <div className="flex flex-col gap-6 mt-14">
      {/* Заголовок */}
      <div className="mb-4 lg:ml-28 mr-5">
        <span className="bg-button-gradient text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Клиники
        </span>
        <h2 className="text-4xl font-semibold mt-2">Наши партнеры</h2>
      </div>

      {/* Верхняя линия (вправо) */}
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-5 flex items-center justify-center border rounded-lg w-[250px] h-[150px] p-4 bg-white "
          >
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={80}
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* Нижняя линия (влево) */}
      <Marquee speed={50} gradient={false} direction="right">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-5 flex items-center justify-center border rounded-lg w-[250px] h-[150px] p-4 bg-white "
          >
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={80}
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
