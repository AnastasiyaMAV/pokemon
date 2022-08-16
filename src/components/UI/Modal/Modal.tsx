/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import s from './Modal.module.scss';
import iconClose from '../../../assets/images/closeIcon.png';

interface IModal {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({ children, onClose }) => {
  return (
    <>
      <div className={s.modal}>
        <img
          src={iconClose}
          className={s.closeCross}
          onClick={onClose}
          alt="close"
        />
        {children}
      </div>
    </>
  );
};

export default Modal;
