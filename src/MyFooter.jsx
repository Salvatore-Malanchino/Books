import Navbar from 'react-bootstrap/Navbar';

const FooterComponent = () => (
  <Navbar expand="md" bg="dark" data-bs-theme="dark">
    <Navbar.Collapse className="justify-content-around">
      <Navbar.Text>
        <a href="#about">Tutta l'azione che vuoi</a>
      </Navbar.Text>
      <Navbar.Text>
        <a href="#Browse">Aquista i tuoi libri preferiti!</a>
      </Navbar.Text>
      <Navbar.Text>
        <a href="#Browse">Prendi 3 e paghi 8</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);
export default FooterComponent;
