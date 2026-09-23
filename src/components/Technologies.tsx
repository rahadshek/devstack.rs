import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../Types/Types";
import TechnologiesCard from "./TechnologiesCard";

interface ITechnologiesProps {
  technologies: ITechnology[] 
  Added:ITechnology[] 
  setAdded: Dispatch<SetStateAction<ITechnology[]>>
}

const Technologies = ({ technologies ,Added ,setAdded}: ITechnologiesProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((technology) => {
          return (
            <TechnologiesCard key={technology.id} technology={technology} Added={Added} setAdded={setAdded} />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
