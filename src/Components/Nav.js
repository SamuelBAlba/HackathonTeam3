import { Link } from "react-router-dom";
import "../Css/Nav.css";
import logo from "./logo.jpeg"

function Nav() {
  return (
    <nav className="navbar">

      <Link to="/"><img src={logo} alt="logo" width="150px"></img></Link>

      <Link to="/index"> View Locations </Link>

      <Link to="/index/info"> How To Recycle </Link>

      <Link to="/index/team"> Team </Link>

    </nav>
  );
}

export default Nav;