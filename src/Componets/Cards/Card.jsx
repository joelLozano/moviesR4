import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent(props) {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.portada} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}