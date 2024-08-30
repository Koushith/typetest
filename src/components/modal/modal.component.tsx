//@ts-nocheck
import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, title, children, width = '500px', height = 'auto' }:any) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent width={width} height={height} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #151729;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  z-index: 1001;
  color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

const ModalBody = styled.div`
  margin-top: 20px;
  color: #fff;
`;