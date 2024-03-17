import React from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getDarkMode, getIsLoggedIn } from '../../redux/selectors';
import styled from 'styled-components';
import { toggleDarkMode } from '../../redux/darkmode/actions';
import { DarkModeStyles } from '../darkModeStyles';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  letter-spacing: 0;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};

  &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? 'green' : 'purple')};
  }

  &.active {
    color: ${({ isDarkMode }) => (isDarkMode ? 'red' : 'blue')};
  }
`;
const Spacer = styled.div`
  margin-left: auto;
`;

const Switch = styled.button`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#f0f0f0')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Navigation = () => {
  const userIsLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getDarkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <DarkModeStyles isDarkMode={isDarkMode} />
      <Header>
        <Nav>
          <StyledNavLink to="/" isDarkMode={isDarkMode}>
            Home
          </StyledNavLink>

          {userIsLoggedIn ? (
            <>
              <StyledNavLink to="contacts" isDarkMode={isDarkMode}>
                Contacts
              </StyledNavLink>
              <Spacer>
                <UserMenu />
              </Spacer>
            </>
          ) : (
            <>
              <StyledNavLink to="register" isDarkMode={isDarkMode}>
                Register
              </StyledNavLink>
              <StyledNavLink to="login" isDarkMode={isDarkMode}>
                Login
              </StyledNavLink>
            </>
          )}
          <Spacer>
            <Switch isDarkMode={isDarkMode} onClick={handleToggleDarkMode}>
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} style={{ color: 'yellow' }} />
              ) : (
                <FontAwesomeIcon icon={faMoon} style={{ color: 'darkblue' }} />
              )}
            </Switch>
          </Spacer>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
