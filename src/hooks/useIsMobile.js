import { useEffect, useState } from "react";
import isMobile from "ismobilejs";

/** @see https://codesandbox.io/s/useismobile-k8p9t?file=/src/useIsMobile.js */
const useIsMobile = ({
  width = 768,
  customAgent = navigator.userAgent,
} = {}) => {
  const [isMobileState, setIsMobile] = useState(
    window.innerWidth <= width ||
      isMobile(customAgent).phone ||
      isMobile(customAgent).tablet
  );

  useEffect(() => {
    function handleResize() {
      if (
        global.window.innerWidth <= width ||
        isMobile(customAgent).phone ||
        isMobile(customAgent).tablet
      ) {
        if (!isMobileState) {
          setIsMobile(true);
        }
      } else if (isMobileState) {
        setIsMobile(false);
      }
    }

    global.window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      global.window.removeEventListener("resize", handleResize);
    };
  });

  return isMobileState;
};

export default useIsMobile;
