import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../Types/Types";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";

interface StockTechnologiesProps {
  Added: ITechnology[];
  setAdded: Dispatch<SetStateAction<ITechnology[]>>;
}

const StockTechnologies = ({ Added, setAdded }: StockTechnologiesProps) => {
  const handleDelete = (id: number) => {
    const restTechnology = Added.filter((technology) => technology.id !== id);

    setAdded(restTechnology);
    toast.error("Technology removed!");
  };

  const handleRemoveAll = () => {
    setAdded([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="container mx-auto my-2 px-4">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            {Added.length === 0
              ? "No technologies selected yet."
              : `${Added.length} technologies selected.`}
          </p>
        </div>

        <div className="min-h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 md:min-h-40">
          {Added.length === 0 ? (
            <div className="flex min-h-24 items-center justify-center">
              <p className="text-center text-sm text-gray-500">
                Your stack is empty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {Added.map((technology) => (
                <div
                  key={technology.id}
                  className="flex w-full items-center justify-between rounded-lg bg-white p-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-12 w-12 object-contain"
                    />

                    <div className="grid grid-cols-1 gap-1 ">
                      <span className="font-medium text-black">
                        {technology.name}
                      </span>

                      <span className=" text-gray-500 ">
                        {technology.badge}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(technology.id)}
                    className="text-2xl text-red-500 transition hover:text-red-700"
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
              className="rounded-md border border-red-400 px-8 py-1 text-red-500 transition hover:bg-red-50 cursor-pointer"
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
