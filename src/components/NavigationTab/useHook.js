import { useState } from "react";

const useHook = (items) => {
  const [activeTab, setActiveTab] = useState(0);
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return {
    activeTab,
    toggle,
  };
};

export default useHook;
