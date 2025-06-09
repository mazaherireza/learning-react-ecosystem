import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(({ children, buttonText }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      show() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
