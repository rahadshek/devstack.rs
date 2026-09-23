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
      <Nave />
      <Banner />
      <Suspense
        fallback={
          <div className="flex  items-center">
            <h2 className="font-extrabold text-md">Loading</h2>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Technoloy technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
