import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisit(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isFirstVisit]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </div>
  );
}

export default App;
