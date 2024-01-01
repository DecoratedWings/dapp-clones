import Alert from 'react-bootstrap/Alert';

import { StyledAlert } from './StyledComponents.tsx';

export interface popupProps {
    show: boolean;
    setShow: any;
    msg:string;
    variant:string;
}
function AlertPopup(props:popupProps) {

  const handleClose = () => props.setShow(false);

  if (props.show) {
    return (
      <StyledAlert variant={props.variant} onClose={() => handleClose()} dismissible>
        <Alert.Heading>{props.msg}</Alert.Heading>
      </StyledAlert>
    );
  }else return (<></>);
}

export default AlertPopup;