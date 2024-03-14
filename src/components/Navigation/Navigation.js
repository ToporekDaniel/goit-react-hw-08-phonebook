import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink as RouterNavLink, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/selectors';
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
  const userIsLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>
        <Nav>
          <NavLink to="/">Home</NavLink>

          {userIsLoggedIn ? (
            <>
              <NavLink to="contacts">Contacts</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="register">Register</NavLink>
              <NavLink to="login">Login</NavLink>
            </>
          )}
        </Nav>
      </header>
      <Outlet />
    </>
  );
};
