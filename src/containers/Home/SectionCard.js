import LazyImage from "components/LazyImage";
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./SectionCard.scss";

const ACTION_TYPES = {
  MODAL: "modal",
  LINK: "link",
};

const SectionCard = ({
  text: { title, subTitle, description },
  image: { src, caption, lqip },
  onClick = (e) => e.preventDefault(),
}) => {
  const wrappedClick = (cb) => (e) => {
    e.preventDefault();
    cb();
  };
  return (
    <a href={title.toLowerCase()} onClick={wrappedClick(onClick)}>
      <Card className="section-card">
        <LazyImage
          src={src}
          alt={caption}
          placeholderSrc={lqip}
          className="card-img-top"
        />
        <CardBody>
          <div className="author">
            <CardTitle tag="h4">{title}</CardTitle>
            {subTitle && <h6 className="card-category">{subTitle}</h6>}
          </div>
          {description && (
            <p className="card-description text-center">{description}</p>
          )}
        </CardBody>
        {/* <CardFooter className="text-center">
        <Button
          className="btn-just-icon btn-neutral"
          color="link"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fa fa-twitter" />
        </Button>
      </CardFooter> */}
      </Card>
    </a>
  );
};

export { ACTION_TYPES };
export default SectionCard;
