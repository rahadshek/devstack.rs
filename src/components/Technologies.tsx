import type { ITechnology } from "../Types/Types";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = ({ technologies }: { technologies: ITechnology[] }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((technology) => {
          return (
            <TechnologiesCard key={technology.id} technology={technology} />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
