import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const ACTION_TYPES = {
  MODAL: "modal",
  LINK: "link",
};

const SectionCard = ({
  text: { title, subTitle, description },
  image: {
    src = require("assets/img/landing-page/landing-page.jpeg"),
    alt = "",
  },
  onClick = (e) => e.preventDefault(),
}) => {
  const wrappedClick = (cb) => (e) => {
    e.preventDefault();
    cb();
  };
  return (
    <Card className="card-profile card-plain">
      <div className="card-avatar">
        <a href={title.toLowerCase()} onClick={wrappedClick(onClick)}>
          <img alt={alt} src={src} />
        </a>
      </div>
      <CardBody>
        <a href={title.toLowerCase()} onClick={wrappedClick(onClick)}>
          <div className="author">
            <CardTitle tag="h4">{title}</CardTitle>
            {subTitle && <h6 className="card-category">{subTitle}</h6>}
          </div>
        </a>
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
  );
};

export { ACTION_TYPES };
export default SectionCard;
