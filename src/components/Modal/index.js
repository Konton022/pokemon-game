import cn from "classnames";

import s from "./style.module.css";
const Modal = ({ isOpen, title, children, onCloseModal }) => {
  const handleCloseModal = () => {
    onCloseModal && onCloseModal(false);
  };
  return (
    <div className={cn(s.root, { [s.open]: isOpen })}>
      <div className={cn(s.modal)}>
        <div className={cn(s.head)}>
          {title}
          <span className={cn(s.btnClose)} onClick={handleCloseModal}></span>
        </div>
        <div className={cn(s.content)}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
