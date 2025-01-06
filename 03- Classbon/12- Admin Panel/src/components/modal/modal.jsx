import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import "./modal.css";

const Modal = ({ isOpen, open, title, body, children }) => {
  return (
    <div className="modal" onClick={() => open(false)}>
      {isOpen &&
        createPortal(
          <div
            className="modal-wrapper"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div className="title">{title}</div>
                <BiX
                  onClick={() => open(false)}
                  style={{ cursor: "pointer" }}
                ></BiX>
              </div>
              <div className="modal-body">{body}</div>
              <div className="modal-footer">{children}</div>
            </div>
          </div>,
          document.querySelector("#modal")
        )}
    </div>
  );
};

export default Modal;
