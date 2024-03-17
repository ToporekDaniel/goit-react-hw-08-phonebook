import { createGlobalStyle } from 'styled-components';

export const DarkModeStyles = createGlobalStyle`
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#f0f0f0')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : 'black')};
}
form {
 
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#0f0f0f56' : 'white')};
}


`;
