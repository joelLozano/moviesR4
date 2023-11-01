import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

export default function CardComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerLike = () => {
    setIsFavorite(false);
  };

  // const handlerLikeOff = () => {
  //   setIsFavorite(true);
  // }

  return (
    <>
      <div className="card-movie backgroudPurple">
        <div>
          <img className="card-image" src={props.portada} alt="" />
         <div className="card-title-custom">
         <h1 className="titles-custom">{props.title}</h1>
          {isFavorite ? (
            <FaHeart className="icon-heart" onClick={handlerLike} />
          ) : (
            <FaRegHeart
              className="icon-heart-empty"
              onClick={() => {
                setIsFavorite(true);
              }}
            />
          )}
         </div>

          <p className="text-custom">{props.description}</p>

          <div className="card-play">
            <span>Play</span>
          </div>
        </div>
      </div>
    </>
  );
}

// EXisten Hooks
// 1. useState -> para manejar estados

// Card de Boostrap

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={props.portada} />
//   <Card.Body>
//     <Card.Title>{props.title}</Card.Title>
//     <Card.Text>
//       {props.description}
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>

// Desestructuracion de objetos

// const person = {
//   name: "Juan",
//   lastName: "Perez",
//   age: 20
// }

// let name = person.name;
// let lastName = person.lastName;
// let age = person.age;

// let {name1, lastName1, age1} = person;
// console.log(name1, lastName1, age1)

// operador ternario
//    edad > 18 ? "Es mayor de edad" : "Es menor de edad"
