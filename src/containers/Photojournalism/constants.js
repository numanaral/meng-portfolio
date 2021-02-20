import requireFiles /* , {IMAGE_REGEX} */ from "utils/require-files";

// Even the regex cannot be dynamic..
const newsImages = requireFiles(
  require.context(
    "assets/img/news",
    false,
    /\.(PNG|png|JPE?G|jpe?g|SVG|svg)$/
    // "lazy"
  )
);
const featureImages = requireFiles(
  require.context(
    "assets/img/feature",
    false,
    /\.(PNG|png|JPE?G|jpe?g|SVG|svg)$/
    // "lazy"
  )
);
const sportsImages = requireFiles(
  require.context(
    "assets/img/sports",
    false,
    /\.(PNG|png|JPE?G|jpe?g|SVG|svg)$/
    // "lazy"
  )
);

const images = {
  News: newsImages,
  Feature: featureImages,
  Sports: sportsImages,
};

export { images };
