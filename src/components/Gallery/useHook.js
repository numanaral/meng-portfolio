import useIsMobile from "hooks/useIsMobile";
import { useState } from "react";

/**
 * @param {Array} items
 * @param {import("react").RefObject<HTMLDivElement>} carouselRef
 */
const useHook = (items, carouselRef) => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    /* eslint-disable no-unused-expressions */
    if (!isMobile) return;
    carouselRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    /* eslint-enable no-unused-expressions */
  };
  return {
    activeIndex,
    onExiting,
    onExited,
    next,
    previous,
    goToIndex,
  };
};

export default useHook;
