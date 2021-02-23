import { useCallback, useState } from "react";

/** @see https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node */
const useClientRect = () => {
  /**
   * @type {[DOMRect,  React.Dispatch<DOMRect>]} Rect
   */
  const [rect, setRect] = useState(null);
  const ref = useCallback(
    /** @param {HTMLElement} node */ (node) => {
      if (node !== null) {
        setRect(node.getBoundingClientRect());
      }
    },
    []
  );
  return [rect, ref];
};

export default useClientRect;
