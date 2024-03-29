/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import iconClose from '../../../assets/images/closeIcon.png';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const handleClose = (event: any) => {
      if (event.key === 'Escape' || event.isTrusted === true) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleClose);
    document.addEventListener('mousedown', handleClose);
  }, [onClose]);

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
