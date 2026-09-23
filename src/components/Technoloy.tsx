import { use } from "react";
import type { ITechnology } from "../Types/Types";
import Technologies from "./Technologies";
import StockTechnologies from "./StockTechnologies";

interface ITechnoloyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technoloy = ({ technologiesPromise }: ITechnoloyProps) => {
  const Technoloy = use(technologiesPromise);
  return (
    <div className=" container mx-auto">
      <div className="pb-12 space-y-2">
        <h1 className="font-extrabold text-4xl">
          Explore the
          <span className="bg-linear-to-r ml-1.5 from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ">
            Technologies
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-md font-medium  leading-7 text-gray-500 sm:text-[16] lg:mx-0">
          Pick one technology per category to build your ideal stack.
        </p>

      </div >

      <div className=" grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <Technologies technologies={Technoloy} /> 
      </div>
      

      <div className="col-span-3">
        <StockTechnologies />
      </div>
      </div>
      
    </div>
  );
};

export default Technoloy;
