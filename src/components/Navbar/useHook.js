import { useState, useEffect } from "react";

const useHook = (bgClassName) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(bgClassName);
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setIsNavbarOpen((v) => !v);
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const closeNavbarWhenUrlIsClicked = () => {
    if (!isNavbarOpen) return;
    toggleNavbarCollapse();
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor(bgClassName);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return {
    navbarColor,
    navbarCollapse,
    toggleNavbarCollapse,
    closeNavbarWhenUrlIsClicked,
  };
};

export default useHook;
