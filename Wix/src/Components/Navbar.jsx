
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <>
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#">J.ALISSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            navbarScroll
          >
            
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/books">Books</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="clientalbum">Client Albums</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Navbars;