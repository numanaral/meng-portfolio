/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";

import {
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import LazyImage from "components/LazyImage";
import toggleFullScreen from "utils/toggleFullScreen";
import Thumbnails from "./Thumbnails";
import useHook from "./useHook";
import "./Gallery.scss";

const Gallery = ({ images = [], withSections = false }) => {
  /** @type {React.RefObject<HTMLDivElement>} */
  const carouselRef = useRef();
  let flattenedImages = images;
  if (withSections) {
    const mergedGroups = Object.values(images).reduce(
      (acc, group) => ({ ...acc, ...group }),
      {}
    );
    flattenedImages = Object.keys(mergedGroups).map((fileName) => {
      const { src, lqip, caption } = mergedGroups[fileName];
      return {
        src,
        lqip,
        altText: caption,
        caption,
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
  } = useHook(flattenedImages, carouselRef);

  return (
    <>
      <div className="section py-3 px-5" id="carousel">
        <Row>
          <Col md="5">
            <Thumbnails
              images={images}
              onClick={goToIndex}
              withSections={withSections}
            />
          </Col>
          <Col md="7 pt-2">
            <Card className="page-carousel">
              <span ref={carouselRef} />
              <a
                className="right carousel-control full-screen-image-button"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const pageCarousel = carouselRef.current.parentNode;
                  const fullScreenButton = e.currentTarget.childNodes[0];
                  toggleFullScreen(pageCarousel, () => {
                    pageCarousel.classList.toggle("full-screen-carousel");
                    fullScreenButton.classList.toggle("fa-arrows-alt");
                    fullScreenButton.classList.toggle("fa-times");
                  });
                }}
                role="button"
              >
                <span className="fa fa-arrows-alt" />
                <span className="sr-only">Full Screen</span>
              </a>
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
                      <LazyImage
                        placeholderSrc={image.lqip}
                        wrapperClassName="carousel-image-placeholder"
                        wrapperProps={{
                          style: {
                            backgroundImage: `url(${image.lqip})`,
                          },
                        }}
                        src={image.src}
                        alt={image.caption}
                      />
                      <CarouselCaption
                        captionText={image.caption}
                        captionHeader=""
                        className="show-on-hover bg-dark"
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#"
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
                  href="#"
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
