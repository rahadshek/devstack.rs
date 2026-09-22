import banner from "./assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 px-3 py-12 sm:px-8 sm:py-16 md:gap-12 md:py-20 lg:flex-row lg:px-10 lg:py-24">
      {/* Banner text */}
      <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-lg lg:mx-0">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden sm:block" />
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <button className="cursor-pointer rounded-md bg-linear-to-r from-[#f76c29] to-[#ec4993] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95">
            Explore Technologies
          </button>

          <button className="cursor-pointer rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-500 hover:shadow-md active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      {/* Banner image */}
      <div className="flex w-full justify-center lg:w-1/2">
        <img
          src={banner}
          alt="Development Stack"
          className="w-full max-w-xs object-contain transition-transform duration-500 hover:scale-105 sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
