import React from "react";
import heroImage from "../public/assets/images/HeroPage.jpeg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col pt-52 md:pt-24">
      <div className="relative w-full h-[800px]">
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="hero"
        />
        <div className="absolute top-0 left-0 bottom-0 w-full h-full flex items-center md:items-end justify-center">
          <h2 className="text-black font-light text-[50px] p-14 ">
            Buy PlayStation®5
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
