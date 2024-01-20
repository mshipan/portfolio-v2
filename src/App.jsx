import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Store from "./redux/Store";

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
          <Provider store={Store}>
            <Toaster />
            <RouterProvider router={router} />
          </Provider>
        </>
      )}
    </div>
  );
}

export default App;
