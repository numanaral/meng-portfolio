import React, { useEffect, createRef } from "react";
import { Container } from "reactstrap";
import IMAGES from "assets/images.json";

const HOME_BANNER_IMAGE = IMAGES.Home["banner.jpeg"];
const HOME_IMAGE = process.env.PUBLIC_URL + HOME_BANNER_IMAGE.src;
const HOME_LQIP = `url(${HOME_BANNER_IMAGE.lqip})`;

function LandingPageHeader() {
  /** @type {RefObject<HTMLDivElement>} */
  const pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.onload = () => {
      pageHeader.current.style.backgroundImage = `url(${HOME_IMAGE})`;
    };
    imageLoader.src = HOME_IMAGE;
  }, [pageHeader]);

  return (
    <>
      <div
        style={{
          backgroundImage: HOME_LQIP,
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Meng Wei</h1>
            <h3>Journalism Portfolio 2021</h3>
            <br />
            {/* <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
