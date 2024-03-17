import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDarkMode } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')};
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative; /* Dodaj pozycję względną */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')};
`;

const Modal = ({ isOpen, closeModal, children }) => {
  const isDarkMode = useSelector(getDarkMode);
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent isDarkMode={isDarkMode}>
        {children}
        <CloseButton isDarkMode={isDarkMode} onClick={closeModal}>
          &#x2716;
        </CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
