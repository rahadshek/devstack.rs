import { Suspense } from "react";
import Banner from "./Banner";
import Nave from "./Nave";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./Types/Types"


const technologiesFetch = async ():Promise <ITechnology[]> => {
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
          <div>
            <h2>Loading</h2>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Technologies technologiesPromise ={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
