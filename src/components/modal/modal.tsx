import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp as Close } from "react-icons/io5";

type Props = {
  handleClose: () => void;
  children: ReactNode;
  title?: string;
  width?: string;
  extraClass?: string;
  titleClassName?: string;
  iconClassName?: string;
  isCustomModal?: boolean;
};

export default function Modal({
  handleClose,
  children,
  title,
  width,
  extraClass,
  titleClassName,
  iconClassName,
  isCustomModal,
}: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return createPortal(
    <>
      <div
        id="dialog"
        onClick={handleClose}
        className={
          "fixed left-0 top-0  w-screen h-screen z-9999 bg-[rgb(189,189,189,0.2)]"
        }
      ></div>
      {isCustomModal ? (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      ) : (
        <div
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  min-w-[300px] min-h-[400px] overflow-y-auto h-[90vh] bg-white z-99999 rounded px-3 py-4 max-w-[90%] ${
            width ? `w-[${width}]` : ""
          }
        ${extraClass || ""}
        `}
        >
          <div className="border-b border-solid border-b-meta-9 flex justify-between items-center pb-3">
            <span className={`font-bold ${titleClassName || ""}`}>{title}</span>
            <button onClick={handleClose} className={iconClassName}>
              <Close className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      )}
    </>,
    document.querySelector("#portal")!
  );
}
