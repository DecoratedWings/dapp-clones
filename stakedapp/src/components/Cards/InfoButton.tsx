import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import useFocusTrap from '../../hooks/useFocusTrap.tsx';
import { StyledModalBody, StyledModalFooter,StyledModalHeader } from '../StyledComponents.tsx';

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
        centered
      >
        <StyledModalHeader closeButton>
          <Modal.Title>Token Information</Modal.Title>
        </StyledModalHeader>
        <StyledModalBody>
          {props.detail}
        </StyledModalBody>
        <StyledModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </StyledModalFooter>
      </Modal>
    </>
  );
}

export default InfoButton;
