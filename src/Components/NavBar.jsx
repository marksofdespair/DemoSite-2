import { Link } from 'react-router-dom';
import '../Layout.css';

export function NavBar() {
  const accountType = localStorage.getItem('accountType');

  return (
    <ul className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Skills">Technical Skills</Link>
        {/* <Link to="/GraphicD">Graphic Design</Link> */}
        {/* <Link to="/Resume">Resume</Link> */}
        <Link to="/AboutMe">About Me</Link>
        <Link to="/ServiceSearch">Search for Services</Link>
    </ul>
  );
}
