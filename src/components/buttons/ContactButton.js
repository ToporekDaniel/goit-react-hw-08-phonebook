import styled from 'styled-components';

export const ContactButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`;
