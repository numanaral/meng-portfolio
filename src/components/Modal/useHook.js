import { useState } from "react";

const useHook = (open = false) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    toggleModal,
  };
};

export default useHook;
