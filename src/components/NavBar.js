import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import '../styles/navbar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
      className: ({ isActive }) => (isActive ? 'active' : ''),
    },
    {
      id: 2,
      path: '/missions',
      className: ({ isActive }) => (isActive ? 'active missions' : 'missions'),
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my_profile',
      text: 'My Profile',
      className: ({ isActive }) => (isActive ? 'active' : ''),
    },
  ];

  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img className="logo" src={planet} alt="planet logo" />
        <span className="logoTitle">Space Travelers&apos; Hub</span>
      </div>
      <ul className="rightLinks">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className={link.className} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
