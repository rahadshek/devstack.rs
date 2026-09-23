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
      className={`m-1 space-y-3 rounded-2xl bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:m-2 sm:p-5 lg:p-6 ${
        isButtonType ? "border-2 border-pink-500" : "border border-gray-200"
      }`}
    >
      {/* Icon + Badge */}
      <figure className="flex items-center justify-between gap-2 sm:gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-16 object-contain sm:h-14 sm:w-24 lg:h-16 lg:w-28"
        />

        <h2
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium sm:px-4 sm:py-1.5 sm:text-sm ${
            isButtonType
              ? "border-2 border-pink-300 bg-pink-50 text-pink-500"
              : "border-2 border-[#b6e2ee] bg-[#f3f7f8] text-[#17b3df]"
          }`}
        >
          {technology.badge}
        </h2>
      </figure>

      {/* Card Body */}
      <div className="pt-2 sm:pt-3">
        {/* Technology Name */}
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 lg:text-lg">
          {technology.description}
        </p>

        <div className="divider my-2 sm:my-3"></div>

        {/* Category + Difficulty + Rating */}
        <div className="my-3 grid grid-cols-3 items-center gap-1 sm:my-4 sm:gap-3">
          {/* Category */}
          <h3 className="min-w-0 truncate rounded-md bg-[#f4f7fa] px-1.5 py-1 text-[10px] font-medium text-gray-500 sm:px-3 sm:py-1.5 sm:text-sm">
            {technology.category}
          </h3>

          {/* Difficulty */}
          <h3 className="min-w-0 truncate px-1 py-1 text-center text-[10px] font-medium text-gray-400 sm:px-2 sm:py-1.5 sm:text-sm">
            {technology.difficulty}
          </h3>

          {/* Rating */}
          <h3 className="flex items-center justify-end gap-0.5 whitespace-nowrap px-1 py-1 text-[10px] font-semibold text-gray-700 sm:gap-1 sm:px-2 sm:py-1.5 sm:text-sm">
            <span className="text-yellow-500">★</span>
            {technology.rating}
          </h3>
        </div>

        {/* Add To Stack Button */}
        <div className="pt-2">
          <button
            onClick={handleAddType}
            disabled={isButtonType}
            className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:py-3 sm:text-base lg:text-lg ${
              isButtonType
                ? "cursor-not-allowed border border-pink-500 bg-white text-pink-500"
                : "cursor-pointer border border-gray-800 bg-black text-white shadow-[0_4px_0_0_#17b3df] hover:-translate-y-1 hover:bg-[#111827] hover:shadow-[0_7px_0_0_#17b3df] active:translate-y-1 active:shadow-[0_2px_0_0_#17b3df]"
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
