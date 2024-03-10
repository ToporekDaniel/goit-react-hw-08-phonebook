import { NavLink as RouterNavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

//stały header na stronie

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(RouterNavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }

  &.active {
    color: red;
  }
`;

export const Navigation = () => {
  return (
    <>
      <header>
        <Nav>
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
        </Nav>
      </header>
      <Outlet />
    </>
  );
};
