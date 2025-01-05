/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect } from 'react';
import s from './Modal.module.scss';
import iconClose from '../../../assets/images/closeIcon.png';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  preventClose?: boolean;
  visible?: boolean;
}

export const Modal: React.FC<IModalProps> = ({
  children,
  onClose,
  preventClose,
  visible,
}) => {
  const handleClose = useCallback(() => {
    preventClose || onClose?.();
  }, [onClose, preventClose]);

  const handleHide = () => document.body.style.removeProperty('overflow-y');

  useEffect(() => {
    if (!visible) return;
    const handleKeydown = (e: KeyboardEvent) =>
      e.code === 'Escape' && handleClose();
    document.addEventListener('keydown', handleKeydown);
    document.body.style.setProperty('overflow-y', 'hidden');

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      handleHide();
    };
  }, [handleClose, visible]);

  return (
    <>
      <div className={s.modal}>
        <img
          src={iconClose}
          className={s.closeCross}
          onClick={handleClose}
          alt="close"
        />
        {children}
      </div>
    </>
  );
};
