import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from './data/fantasy.json';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class BooksComponent extends Component {
  state = {
    activeFantasy: fantasy[0],
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Card
            className="col col-md-12 flex-row flex-wrap "
            style={{ width: 'rem' }}
          >
            {fantasy.map((book) => {
              return (
                <>
                  <Card.Body className="col col-md-4 ">
                    <Card.Title className="mt-1">{book.title}</Card.Title>
                    <Card.Img src={book.img} />
                    <Button variant="primary" className="mt-1">
                      {book.price}€
                    </Button>
                    <Card.Text>{book.category}</Card.Text>
                  </Card.Body>
                </>
              );
            })}
          </Card>
        </Row>
      </Container>
    );
  }
}
export default BooksComponent;
