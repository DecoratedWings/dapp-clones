import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFocusTrap from '../../hooks/useFocusTrap';

export interface InfoProps {
  detail: string;
}

function InfoButton(props: InfoProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleKeyDown = useFocusTrap(showModal);

  return (
    <>
      <Button variant="info" onClick={handleShow} style={{marginLeft:70}}>
        Info
      </Button>

         <Modal
        show={showModal}
        onHide={handleClose}
        onKeyDown={handleKeyDown}
        aria-labelledby="info-modal-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Token Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.detail}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoButton;
