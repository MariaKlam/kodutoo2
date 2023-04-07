import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.pilt} />
      <h1>{props.linnaNimi}</h1>
      <div className="kirjeldus">{props.autor}</div>
    </div>
  );
}

export default Card;
