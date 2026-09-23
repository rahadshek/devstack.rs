import React from "react";

const StockTechnologies = () => {
  return (
    <div className="container mx-auto px-4 my-2">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            No technologies selected yet.
          </p>
        </div>

        <div className="flex min-h-32 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 sm:min-h-32 md:min-h-40">
          <p className="text-center text-sm text-gray-500 sm:text-base">
            Your stack is empty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockTechnologies;
