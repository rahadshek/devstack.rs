
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../Types/Types";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";

interface StockTechnologiesProps {
  Added: ITechnology[];
  setAdded: Dispatch<SetStateAction<ITechnology[]>>;
}

const StockTechnologies = ({
  Added,
  setAdded,
}: StockTechnologiesProps) => {
  const handleDelete = (id: number) => {
    const restTechnology = Added.filter(
      (technology) => technology.id !== id
    );

    setAdded(restTechnology);
    toast.error("Technology removed!");
  };

  const handleRemoveAll = () => {
    setAdded([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl lg:text-2xl">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            {Added.length === 0
              ? "No technologies selected yet."
              : `${Added.length} technologies selected.`}
          </p>
        </div>

        {/* Stack Content */}
        <div className="min-h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-3 sm:p-4 lg:min-h-40">
          {Added.length === 0 ? (
            <div className="flex min-h-24 items-center justify-center sm:min-h-28">
              <p className="text-center text-sm text-gray-500">
                Your stack is empty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {Added.map((technology) => (
                <div
                  key={technology.id}
                  className="flex w-full min-w-0 items-center justify-between gap-2 rounded-lg bg-white p-2.5 shadow-sm sm:p-3"
                >
                  {/* Technology Info */}
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                    />

                    <div className="min-w-0">
                      <span className="block truncate text-sm font-medium text-black sm:text-base">
                        {technology.name}
                      </span>

                      <span className="block truncate text-xs text-gray-500 sm:text-sm">
                        {technology.badge}
                      </span>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => handleDelete(technology.id)}
                    aria-label={`Remove ${technology.name}`}
                    className="shrink-0 cursor-pointer text-2xl text-red-500 transition hover:text-red-700 sm:text-3xl"
                  >
                    <TiDelete />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Remove All Button */}
        {Added.length > 0 && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleRemoveAll}
              className="w-full cursor-pointer rounded-md border border-red-400 px-6 py-2 text-sm text-red-500 transition hover:bg-red-50 sm:w-auto sm:px-8"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockTechnologies;

