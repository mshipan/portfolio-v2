import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/shared/Navbar/Navbar";
import FollowMe from "../components/FollowMe";
import EmailAndPhone from "../components/EmailAndPhone";
import Footer from "../components/shared/Footer/Footer";
import { useEffect } from "react";

const MainLayouts = () => {
  const [hideComponents, setHideComponents] = useState(false);

  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px", // Adjust the root margin as needed
  });

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setHideComponents(inView);
      } else {
        // Scrolling up
        setHideComponents(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, inView]);

  return (
    <div>
      <Navbar />
      {!hideComponents && (
        <>
          <EmailAndPhone />
          <FollowMe />
        </>
      )}
      <Outlet />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
