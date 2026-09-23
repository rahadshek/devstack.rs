import { Suspense } from "react";
import Banner from "./Banner";
import Nave from "./Nave";
import type { ITechnology } from "./Types/Types";
import Technoloy from "./components/Technoloy";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      {/* Navbar */}
      <Nave />

      {/* Banner */}
      <Banner />

      {/* Technologies */}
      <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <Suspense
          fallback={
            <div className="flex min-h-[200px] items-center  gap-2">
              <h2 className="text-sm font-extrabold sm:text-base md:text-lg">
                Loading
              </h2>

              <span className="loading loading-dots loading-md sm:loading-lg"></span>
            </div>
          }
        >
          <Technoloy technologiesPromise={technologiesPromise} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
