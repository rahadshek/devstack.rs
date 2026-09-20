import { Suspense } from "react";
import Banner from "./Banner";
import Nave from "./Nave";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Nave />
      <Banner />
      <Suspense
        fallback={ 
          <span className="loading loading-dots loading-xl"> </span>
        }
      >
        <Technologies />
      </Suspense>
    </>
  );
}

export default App;
