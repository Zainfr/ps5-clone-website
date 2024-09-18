import React from "react";
import side from "../public/assets/images/SidePhoto.png";
import Image from "next/image";

const ChooseYourEdition = () => {
  return (
    <div className=" flex flex-col justify-between items-center pb-16">
      <div className="bg-gray-100 w-full py-14 flex flex-col justify-between items-center">
        <h2 className="text-5xl font-light p-8">Choose Your Edition</h2>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center p-10 mb-10">
            <p className="text-2xl p-6">PS5™ console</p>
            <p className="text-xl font-thin w-[700px]">
              Experience lightning-fast loading with an ultra-high-speed SSD,
              deeper immersion with support for haptic feedback, adaptive
              triggers and 3D Audio1, and an all-new generation of incredible
              PlayStation games.
            </p>
          </div>
          <Image src={side} height={500} width={500} alt="side" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-row justify-between py-16">
          <Image src={side} height={500} width={500} alt="side" />
          <div className="flex flex-col justify-center p-10 mb-10">
            <p className="text-2xl p-6">PS5 Digital Edition</p>
            <p className="text-xl font-thin w-[700px]">
              Experience lightning-fast loading with an ultra-high-speed SSD,
              deeper immersion with support for haptic feedback, adaptive
              triggers and 3D Audio1, and an all-new generation of incredible
              PlayStation games. PS5 Digital Edition is an all-digital version
              of the PS5 console with no disc drive. Sign into your account for
              PlayStation Network and go to PlayStation®Store to buy and
              download games.* *Account for PlayStation Network required. Full
              terms apply – playstation.com/PSNTerms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourEdition;
