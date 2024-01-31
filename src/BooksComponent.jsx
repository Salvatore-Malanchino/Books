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
      <Container>
        <Row>
          <Card className="col col-md-12 flex-row flex-wrap border border-black ">
            {fantasy.map((book) => {
              return (
                <Card.Body className=" d-flex flex-column   align-items-center  col col-md-3 border border-subtle m-2  ">
                  <Card.Title className="mt-1">{book.title}</Card.Title>
                  <Card.Img src={book.img} className="h-50" />
                  <Button variant="primary" className="mt-1">
                    {book.price}€
                  </Button>
                  <Card.Text>{book.category}</Card.Text>
                </Card.Body>
              );
            })}
          </Card>
        </Row>
      </Container>
    );
  }
}
export default BooksComponent;
