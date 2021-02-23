/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * @component
 * @param {import("react-lazy-load-image-component").LazyLoadImageProps | HTMLImageElement | {removeClassOrStyleOnLoad: bool}} props
 */
const LazyImage = ({
  placeholder,
  src,
  removeClassOrStyleOnLoad = false,
  ...imageProps
}) => {
  const initialClassOrStyleValue =
    imageProps.wrapperProps?.style || imageProps.wrapperClassName || "";
  const [classOrStyleProp, setClassOrStyleProp] = useState(
    initialClassOrStyleValue
  );
  const hasClassName = typeof initialClassOrStyleValue === "string";

  const props = {
    // image src
    src: process.env.PUBLIC_URL + src,
    // default/passed props
    ...imageProps,
    wrapperProps: {
      ...imageProps.wrapperProps,
    },
  };

  // Only set this if it's given by default
  // Allows us to remove the className or style
  // on the placeholder element
  if (initialClassOrStyleValue) {
    if (hasClassName) {
      props.wrapperClassName = classOrStyleProp;
    } else {
      props.wrapperProps.style = classOrStyleProp;
    }
    if (removeClassOrStyleOnLoad) {
      props.afterLoad = () => {
        if (classOrStyleProp && removeClassOrStyleOnLoad) {
          if (hasClassName) setClassOrStyleProp("");
          else setClassOrStyleProp({});
        }
      };
    }
  }

  return <LazyLoadImage {...props} />;
};

export default LazyImage;
