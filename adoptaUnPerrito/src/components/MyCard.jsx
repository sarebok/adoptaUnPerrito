import Tags from "./Tags";

const MyCard = ({ perrotes }) => {
  console.log("imprimiendo objeto desde card2 ", perrotes);

  return (
    <>
      <div className="my-card">
        <img src={perrotes.imagen} alt="perrito" />
        <h2>{perrotes.nombre}</h2>
        <p>{perrotes.descripcion}</p>
        <Tags texto={perrotes.raza} colour={perrotes.colorBadge}></Tags>
      </div>
    </>
  );
};
export default MyCard;
