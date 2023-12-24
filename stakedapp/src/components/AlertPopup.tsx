import Alert from 'react-bootstrap/Alert';

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
      <Alert variant={props.variant} onClose={() => handleClose()} dismissible>
        <Alert.Heading>{props.msg}</Alert.Heading>
      </Alert>
    );
  }else return (<></>);
}

export default AlertPopup;