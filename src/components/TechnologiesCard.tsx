import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../Types/Types";
import { toast } from "react-toastify";

interface ITechnologiesCardProps {
  technology: ITechnology;
  Added: ITechnology[];
  setAdded: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologiesCard = ({
  technology,
  Added,
  setAdded,
}: ITechnologiesCardProps) => {
  // Check whether this technology is already added
  const isButtonType = Added.some((item) => item.id === technology.id);

  const handleAddType = () => {
    // Prevent duplicate technology
    if (isButtonType) return;

    setAdded((prev) => [...prev, technology]);

    toast.success(`${technology.name} technology added successfully!`);
  };

  return (
    <div
      className={`card m-2 space-y-3 rounded-2xl bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 lg:p-6 ${
        isButtonType ? "border-2 border-pink-500" : "border border-gray-200"
      }`}
    >
      {/* Icon + Badge */}
      <figure className="flex items-center justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="-ml-2 h-12 w-20 object-contain sm:-ml-3 sm:h-14 sm:w-24"
        />

        <h2
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm ${
            isButtonType
              ? "border-2 border-pink-300 bg-pink-50 text-pink-500"
              : "border-2 border-[#b6e2ee] bg-[#f3f7f8] text-[#17b3df]"
          }`}
        >
          {technology.badge}
        </h2>
      </figure>

      {/* Card Body */}
      <div className="card-body p-0 pt-3">
        <h2 className="card-title text-2xl font-bold text-gray-900 sm:text-3xl">
          {technology.name}
        </h2>

        <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 lg:text-lg">
          {technology.description}
        </p>

        <div className="divider my-2"></div>

        {/* Category + Difficulty + Rating */}
        <div className="my-4 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3">
          <h3 className="w-fit rounded-md bg-[#f4f7fa] px-2 py-1 text-xs font-medium text-gray-500 sm:px-3 sm:py-1.5 sm:text-sm">
            {technology.category}
          </h3>

          <h3 className="truncate px-1 py-1 text-center text-xs font-medium text-gray-400 sm:px-2 sm:py-1.5 sm:text-sm">
            {technology.difficulty}
          </h3>

          <h3 className="flex items-center justify-self-end gap-1 whitespace-nowrap px-1 py-1 text-xs font-semibold text-gray-700 sm:px-2 sm:py-1.5 sm:text-sm">
            <span className="text-yellow-500">★</span>
            {technology.rating}
          </h3>
        </div>

        {/* Add To Stack Button */}
        <div className="card-actions justify-center pt-2">
          <button
            onClick={handleAddType}
            disabled={isButtonType}
            className={`w-full rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 sm:w-auto sm:min-w-52 sm:text-lg ${
              isButtonType
                ? "cursor-not-allowed border border-pink-500 bg-white text-pink-500"
                : "cursor-pointer border border-gray-800 bg-black text-white shadow-[0_5px_0_0_#17b3df] hover:-translate-y-1 hover:bg-[#111827] hover:shadow-[0_8px_0_0_#17b3df] active:translate-y-1 active:shadow-[0_3px_0_0_#17b3df]"
            }`}
          >
            {isButtonType ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
