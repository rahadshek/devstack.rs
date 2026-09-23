import type { ITechnology } from "../Types/Types";

const TechnologiesCard = ({ technology }: { technology: ITechnology }) => {
  
  return (
    <div
      className="
    card
    m-2
    space-y-3
    rounded-2xl
    border border-gray-200
    bg-base-100
    p-4
    shadow-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
    sm:p-5
    lg:p-6
  "
    >
      {/* Icon + Badge */}
      <figure className="flex items-center justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="
        h-12 w-20
        object-contain
        -ml-2
        sm:h-14 sm:w-24
        sm:-ml-3
      "
        />

        <h2
          className="
        shrink-0
        rounded-full
        border-2 border-[#b6e2ee]
        bg-[#f3f7f8]
        px-3 py-1
        text-xs font-medium
        text-[#17b3df]
        sm:px-4 sm:py-1.5
        sm:text-sm
      "
        >
          {technology.badge}
        </h2>
      </figure>

      {/* Card Body */}
      <div className="card-body p-0 pt-3">
        {/* Technology Name */}
        <h2
          className="
        card-title
        text-2xl font-bold
        text-gray-900
        sm:text-3xl
      "
        >
          {technology.name}
        </h2>

        {/* Description */}
        <p
          className="
        text-sm
        leading-6
        text-gray-500
        sm:text-base
        sm:leading-7
        lg:text-lg
      "
        >
          {technology.description}
        </p>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Category + Difficulty + Rating */}
        <div
          className="
        my-4
        flex flex-wrap
        items-center
        justify-between
        gap-2
        sm:gap-3
      "
        >
          {/* Category */}
          <h3
            className="
          rounded-md
          bg-[#f4f7fa]
          px-3 py-1
          text-xs font-medium
          text-gray-500
          sm:px-4 sm:py-1.5
          sm:text-sm
        "
          >
            {technology.category}
          </h3>

          {/* Difficulty */}
          <h3
            className="       
          px-3 py-1
          text-xs font-medium
          text-gray-400
          sm:px-4 sm:py-1.5
          sm:text-sm
        "
          >
            {technology.difficulty}
          </h3>

          {/* Rating */}
          <h3
            className="
          flex items-center gap-1
          px-3 py-1
          text-xs font-semibold
          text-gray-700
          sm:px-4 sm:py-1.5
          sm:text-sm
        "
          >
            <span className="text-yellow-500">★</span>
            {technology.rating}
          </h3>
        </div>

        {/* Add To Stack Button */}
        <div className="card-actions justify-center pt-2">
          <button
            className="
          w-full
          rounded-xl
          border border-gray-800
          bg-black
          px-6 py-3
          text-base font-semibold
          text-white

          shadow-[0_5px_0_0_#17b3df]

          transition-all duration-300

          hover:-translate-y-1
          hover:bg-[#111827]
          hover:shadow-[0_8px_0_0_#17b3df]

          active:translate-y-1
          active:shadow-[0_3px_0_0_#17b3df]

          sm:w-auto
          sm:min-w-52
          sm:text-lg

          cursor-pointer
        "
          >
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
