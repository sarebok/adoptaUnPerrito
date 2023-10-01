import Tags from "./Tags";

const MyCard = (props) => {
  return (
    <>
      <div className="myCard">
        <img src={props.imgUrl} alt="perrito" />
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <Tags></Tags>
      </div>
    </>
  );
};
export default MyCard;
