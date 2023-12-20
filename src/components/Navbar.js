import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Resume',
    path: '/resume',
  },
  {
    id: 4,
    name: 'Project',
    path: '/project',
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoTitle>
        <span className='firstLetter'>A</span>
        nusha
      </LogoTitle>
      <NavLinks>
        {navLinks.map((navLink) => (
          <NavLink key={navLink.id}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </NavLink>
        ))}
      </NavLinks>
    </NavWrapper>
  );
};
export default Navbar;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
  // padding: 20px 0px;
`;

const LogoTitle = styled.h1`
  font-family: 'Poppins', sans-serif;

  .firstLetter {
    font-size: 30px;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin: 0 5px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
