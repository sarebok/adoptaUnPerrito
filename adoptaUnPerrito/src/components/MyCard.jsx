import Tags from "./Tags";

const MyCard = (props) => {
  return (
    <>
      <div className="my-card">
        <img src={props.imgUrl} alt="perrito" />
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <Tags texto={props.raza} colour={props.color}></Tags>
      </div>
    </>
  );
};
export default MyCard;
