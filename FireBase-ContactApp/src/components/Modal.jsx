import { createPortal } from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      {isOpen && (
        <div className='absolute top-0 backdrop-blur w-screen z-40 h-screen grid place-items-center'>

          <div className=" z-50 relative min-h-[200px] min-w-[80%] m-auto bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose}
              className="text-2xl self-end" />
            </div>
            {children}
          </div> 
        </div>
      )}
    </>
    ,document.getElementById("modal-root"));
};

export default Modal;
