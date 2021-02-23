/* eslint-disable no-await-in-loop */
const generateImageFiles = () => {
  const fs = require("fs");
  const path = require("path");
  const lqip = require("lqip");
  const { ExifImage } = require("exif");

  const capitalize = (s = "") => s[0].toUpperCase() + s.slice(1).toLowerCase();
  const fileNameToSentenceCase = (s = "") => {
    return s.split(".")[0].split(/[-\s]/).join(" ");
  };
  const fileNameToSentence = (s) => {
    return capitalize(fileNameToSentenceCase(s));
  };

  const getImageDescriptionFallback = (imageName) => {
    return fileNameToSentence(imageName);
  };

  const exif = new ExifImage();
  const getImageDescription = (filePath, fileName) => {
    return new Promise((resolve) => {
      try {
        exif.loadImage(filePath, (_, exifData) => {
          resolve(
            exifData?.image?.ImageDescription ||
              getImageDescriptionFallback(fileName)
          );
        });
      } catch (error) {
        resolve(getImageDescriptionFallback(fileName));
      }
    });
  };

  const PUBLIC_PATH = path.join(process.cwd(), "public/");
  const PUBLIC_IMAGE_PATH = path.join(PUBLIC_PATH, "images/");
  const OUT_JSON_PATH = path.join("src", "assets", "images.json");
  const sleep = (ms = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  class Timer {
    constructor() {
      this.i = 1;
      this.keepLooping = true;
      this.start();
    }

    async start() {
      while (this.keepLooping) {
        console.clear();
        console.log(
          `Generating images${Array(this.i++)
            .fill(".")
            .join("")}`
        );
        await sleep();
        if (this.i === 4) this.i = 1;
      }
    }

    stop() {
      this.keepLooping = false;
    }
  }

  const timer = new Timer();

  const generatePicJson = async () => {
    const base64Images = {};

    await Promise.all(
      fs.readdirSync(PUBLIC_IMAGE_PATH).map(async (folder) => {
        const folderPath = `${PUBLIC_IMAGE_PATH + folder}/`;
        const files = fs.readdirSync(folderPath);
        const capitalizedFolderName = capitalize(folder);
        base64Images[capitalizedFolderName] = {};
        await Promise.all(
          files.map(async (fileName) => {
            if (/\.(PNG|png|JPE?G|jpe?g|SVG|svg)$/.test(fileName)) {
              // capital extensions break lqip
              const src = (folderPath + fileName).toLowerCase();
              const lqImage = await lqip.base64(src);
              const caption = await getImageDescription(src, fileName);
              base64Images[capitalizedFolderName][fileName] = {
                lqip: lqImage,
                src: `/images/${folder}/${fileName}`,
                caption,
              };
            }
          })
        );
      })
    );

    fs.writeFileSync(OUT_JSON_PATH, JSON.stringify(base64Images, null, "\t"));
    timer.stop();
  };

  generatePicJson();
};

module.exports = generateImageFiles;
