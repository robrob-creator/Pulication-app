import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Navbar bg="black" variant="dark"
    sticky="top" expand="lg">
        <Navbar.Brand className="logo">
           <span className="logo2 text-sm-left">
           <img src={logo} className="logoimg"/>
           PUBLICATION</span>
        </Navbar.Brand>
        <Navbar.Toggle className="togglebar color-blue" />
        <Navbar.Collapse>
    <Nav>
      <Nav.Link>
            <Link className="link" to="/">
            <i class="fas fa-home"></i>
              HOME
            </Link>
      </Nav.Link>
      
      <Nav.Link>
            <Link className="link" to="/about">
              ABOUT
            </Link>
      </Nav.Link>
      <Nav.Link>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
      </Nav.Link>
     
    </Nav>
</Navbar.Collapse>

</Navbar>
  );
}
