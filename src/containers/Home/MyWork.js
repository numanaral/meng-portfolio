import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import useModal from "components/Modal/useModal";
import SectionCard from "./SectionCard";
import { sections } from "./constants";

// const MyWork = () => (
//   <Row>
//     {sections.map((section) => (
//       <Col md="4">
//         <SectionCard {...section} />
//       </Col>
//     ))}
//   </Row>
// );

const MyWork = () => {
  const {
    action: {
      props: { link: link0 },
    },
    ...section0Props
  } = sections[0];
  const { action: action1, ...section1Props } = sections[1];
  const {
    action: {
      props: { link: link2 },
    },
    ...section2Props
  } = sections[2];

  const { push } = useHistory();
  const { modal, toggleModal } = useModal(action1.props);

  return (
    <>
      {modal}
      <Row className="my-work">
        <Col md="4">
          <SectionCard {...section0Props} onClick={() => push(link0)} />
        </Col>
        <Col md="4">
          <SectionCard {...section1Props} onClick={toggleModal} />
        </Col>
        <Col md="4">
          <SectionCard {...section2Props} onClick={() => push(link2)} />
        </Col>
      </Row>
    </>
  );
};

export default MyWork;
