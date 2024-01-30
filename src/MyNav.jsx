import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => (
  <Navbar expand="md" bg="danger" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Collapse>
        <Navbar.Text className="me-3">
          <a href="#home">
            <h4>Home</h4>
          </a>
        </Navbar.Text>
        <Navbar.Text className="me-3">
          <a href="#about">About</a>
        </Navbar.Text>
        <Navbar.Text className="me-3">
          <a href="#Browse">Browse</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
