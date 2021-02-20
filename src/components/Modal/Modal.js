import React, { cloneElement } from "react";
import { Modal as BsModal } from "reactstrap";

const Modal = ({ button, title, body, isOpen, toggleModal }) => (
  <>
    {button && cloneElement(button, { onClick: toggleModal })}
    <BsModal isOpen={isOpen} toggle={toggleModal} size="lg">
      <div className="modal-header">
        <button
          aria-label="Close"
          className="close"
          type="button"
          onClick={toggleModal}
        >
          <span aria-hidden={true}>×</span>
        </button>
        <h5 className="modal-title text-center" id="exampleModalLabel">
          {title}
        </h5>
      </div>
      <div className="modal-body text-center">{body}</div>
      {/* <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              type="button"
              onClick={toggleModal}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button className="btn-link" color="danger" type="button">
              Delete
            </Button>
          </div>
        </div> */}
    </BsModal>
  </>
);

export default Modal;
