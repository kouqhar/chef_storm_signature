import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollIntoView = ({ children }) => {
  const loc = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [loc]);

  return <>{children}</>;
};

export default ScrollIntoView;
