import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisit(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isFirstVisit]);
  return (
    <div className="bg-[#02050a]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <RouterProvider router={router} />
        </>
      )}
    </div>
  );
}

export default App;
