import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export interface infoProps {
  detail: string;
}
function InfoButton(props: infoProps) {
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip id="button-tooltip" {...props}>
          {props.detail}
        </Tooltip>
      }
    >
      <Button variant="info">Info</Button>
    </OverlayTrigger>
  );
}

export default InfoButton;