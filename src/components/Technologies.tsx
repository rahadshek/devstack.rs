import React from "react";

const Technologies = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
        Explore the 
        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-[16] lg:mx-0">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
  );
};

export default Technologies;
