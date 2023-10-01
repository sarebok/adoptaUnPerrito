import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Tags = (props) => {
  return (
    <>
      <Badge className={props.colour} as={Button}>
        {props.texto}
      </Badge>
    </>
  );
};
export default Tags;
