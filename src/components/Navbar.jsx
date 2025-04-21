import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <Link to="/about">
        <h2 className={ location.pathname === "/about" || location.pathname === "/" ? "nav_active" : "" }>
          About Me
        </h2>
      </Link>
      <Link to="/portfolio">
        <h2 className={ location.pathname === "/portfolio" ? "nav_active" : "" }>
          Portfolio
        </h2>
      </Link>
      <Link to="/contact">
        <h2 className={ location.pathname === "/contact" ? "nav_active" : "" }>
          Contact
        </h2>
      </Link>
      <Link to='/resume'>
        <h2 className={ location.pathname === "/resume" ? "nav_active" : "" }>
          Resume
        </h2>
      </Link>
    </>
  )
};