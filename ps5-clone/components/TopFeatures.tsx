import React from "react";

const TopFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[25rem]">
      <h2 className="text-5xl font-light p-8">Top Features</h2>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center p-4 mb-10">
          <p className="text-2xl p-6">Lightning speed</p>
          <p className="text-xl font-thin w-[450px]">
            Harness the power of a custom CPU, GPU, and SSD with Integrated I/O
            that rewrite the rules of what a PlayStation console can do.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-4 mb-10 ml-8 mr-8">
          <p className="text-2xl p-6">Stunning games</p>
          <p className="text-xl font-thin w-[450px]">
            Marvel at incredible graphics and experience new PS5 features.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-4 mb-10">
          <p className="text-2xl p-6">Breathtaking immersion</p>
          <p className="text-xl font-thin w-[450px]">
            Discover a deeper gaming experience with support for haptic
            feedback, adaptive triggers, and 3D Audio technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
