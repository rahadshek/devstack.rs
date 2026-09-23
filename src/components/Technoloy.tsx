import { use, useState } from "react";
import type { ITechnology } from "../Types/Types";
import Technologies from "./Technologies";
import StockTechnologies from "./StockTechnologies";

interface ITechnoloyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technoloy = ({ technologiesPromise }: ITechnoloyProps) => {
  const Technoloy = use(technologiesPromise);

  const [Added, setAdded] = useState<ITechnology[]>([]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="space-y-2 pb-8 sm:pb-10 lg:pb-12">
        <h1 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          Explore the
          <span className="ml-1.5 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="max-w-2xl text-sm font-medium leading-6 text-gray-500 sm:text-base sm:leading-7">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Technologies */}
        <div className="lg:col-span-9">
          <Technologies
            technologies={Technoloy}
            Added={Added}
            setAdded={setAdded}
          />
        </div>

        {/* Stack */}
        <div className="lg:col-span-3">
          <StockTechnologies Added={Added} setAdded={setAdded} />
        </div>
      </div>
    </div>
  );
};

export default Technoloy;
