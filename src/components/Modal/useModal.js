import React from "react";
import { getElementFromElementOrType } from "utils/react";
import Modal from "./Modal";
import useHook from "./useHook";

// (
//     <Button className="btn-round" color="danger" outline type="button">
//       Launch demo modal
//     </Button>
//   )

const useModal = ({ button, title, body, modalProps = {} }) => {
  const { isOpen, toggleModal } = useHook();
  return {
    modal: (
      <Modal
        button={button}
        title={title}
        body={getElementFromElementOrType(body)}
        isOpen={isOpen}
        toggleModal={toggleModal}
        {...modalProps}
      />
    ),
    isOpen,
    toggleModal,
  };
};

export default useModal;
