import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import EmptyImg from "../../assets/empty.jpeg";
import { Link } from 'react-router-dom';
import "./Card.css";

export default function CardComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerLike = () => {
    setIsFavorite(false);
  };

 const handlerImgError = (e) => {
  e.target.src = EmptyImg
 }

  return (
    <>
      <div className="card-movie backgroudPurple">
        <div >
          { props.portada == null ?  
            <img className="card-image" src={EmptyImg} alt="" /> 
            : <img className="card-image" src={props.portada} alt="" onError={handlerImgError}/>}
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
          <Link to={`/${props.item.genero}/${props.item.titulo}`} state={props.item}>
            <button className="btn btn-primary">PLAY</button>
            </Link>
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
