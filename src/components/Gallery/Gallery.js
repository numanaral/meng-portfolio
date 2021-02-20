import React from "react";

import {
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Thumbnails from "./Thumbnails";
import useHook from "./useHook";

const capitalize = (s = "") => s[0].toUpperCase() + s.slice(1);
const fileNameToSentenceCase = (s = "") =>
  s.split(".")[0].split(/[-\s]/).join(" ");
const fileNameToSentence = (s) => capitalize(fileNameToSentenceCase(s));

const Gallery = ({ images = [], withSections = false }) => {
  let flattenedImages = images;
  if (withSections) {
    const mergedGroups = Object.values(images).reduce(
      (acc, group) => ({ ...acc, ...group }),
      {}
    );
    flattenedImages = Object.keys(mergedGroups).map((fileName) => {
      const prettyFileName = fileNameToSentence(fileName);
      return {
        src: mergedGroups[fileName],
        altText: prettyFileName,
        caption: prettyFileName,
      };
    });
  }

  const {
    activeIndex,
    onExiting,
    onExited,
    next,
    previous,
    goToIndex,
  } = useHook(flattenedImages);
  return (
    <>
      <div className="section pt-o p-5" id="carousel">
        <Row>
          <Col md="5">
            <Thumbnails
              images={images}
              onClick={goToIndex}
              withSections={withSections}
            />
          </Col>
          <Col md="7">
            <Card className="page-carousel">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={flattenedImages}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {flattenedImages.map((image) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={image.src}
                    >
                      <img src={image.src} alt={image.altText} />
                      <CarouselCaption
                        captionText={image.caption}
                        captionHeader=""
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
};

export default Gallery;
