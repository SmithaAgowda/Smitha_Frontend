import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const Cards = (props)=> {
  return (
    <Container>
    <Card>
    <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <h5>{props.name}</h5>
        <p> {props.designation}</p>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Cards;