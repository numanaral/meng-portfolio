/**
 * returns object containing {fileName: path}
 *
 * @example
 * ```js
 * require.context("assets/img/faces", false, /\.(png|jpe?g|svg)$/);
 * // returns
 * // {
 * //   "ayo-ogunseinde-2.jpg": "/static/media/ayo-ogunseinde-2.bfc688ca.jpg",
 * //   "clem-onojeghuo-2.jpg": "/static/media/clem-onojeghuo-2.bb4b9ac9.jpg",
 * //   "clem-onojeghuo-3.jpg": "/static/media/clem-onojeghuo-3.ae11d928.jpg",
 * //   "erik-lucatero-2.jpg": "/static/media/erik-lucatero-2.2051e0e8.jpg",
 * //   "joe-gardner-2.jpg": "/static/media/joe-gardner-2.76ff47ae.jpg",
 * //   "kaci-baum-2.jpg": "/static/media/kaci-baum-2.e06d84cb.jpg"
 * // }
 * ```
 * @param {RequireContext} requireContext Context
 */
const requireFiles = (requireContext) => {
  const files = {};
  requireContext.keys().forEach((item) => {
    files[item.replace("./", "")] = requireContext(item);
  });
  return files;
};

const IMAGE_REGEX = /\.(PNG|png|JPE?G|jpe?g|SVG|svg)$/;

export { IMAGE_REGEX };
export default requireFiles;
