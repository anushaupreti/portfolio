import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink, NavHashLink, genericHashLink } from 'react-router-hash-link';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '',
  },
  {
    id: 2,
    name: 'About',
    path: 'about',
  },
  {
    id: 3,
    name: 'Resume',
    path: 'resume',
  },
  {
    id: 4,
    name: 'Project',
    path: 'project',
  },
  {
    id: 5,
    name: 'Contact',
    path: 'contact',
  },
];

function useScrollListener() {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  React.useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        };
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return data;
}

const Navbar = () => {
  const [navClassList, setNavClassList] = React.useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  React.useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push('nav-bar--hidden');
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  const MyHashLink = genericHashLink(HashLink);

  return (
    <nav className={navClassList.join(' ')}>
      <LogoTitle>
        <span className='firstLetter'>A</span>
        <span className='other'>nusha</span>
      </LogoTitle>
      <NavLinks>
        {navLinks.map((navLink) => (
          <NavLink key={navLink.id}>
            <MyHashLink
              smooth
              to={`#${navLink.path}`}
              activeClassName='selected'
              activeStyle={(test) => {
                console.log('test', test);
              }}
              isActive={(test) => {
                console.log('test', test);
              }}
            >
              {navLink.name}
            </MyHashLink>
          </NavLink>
        ))}
      </NavLinks>
    </nav>
  );
};
export default Navbar;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 50px 15px;
  position: fixed;
  width: 100%;
  // background: #fff;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const LogoTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
  z-index: 10;
  .firstLetter {
    background-color: #7b6079;
    color: #fff;
    border-radius: 50%;
    padding: 0px 9px;
  }
  .other {
    position: absolute;
    left: 240px;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  font-size: 15px;
`;

const NavLink = styled.li`
  margin: 0 25px;

  :hover {
    border-bottom: 2px solid purple;
  }

  .active {
    border-bottom: 2px solid purple;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;
