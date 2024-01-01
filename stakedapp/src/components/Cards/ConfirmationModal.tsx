import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StyledModalBody, StyledModalHeader, StyledModalFooter } from '../StyledComponents'
import useFocusTrap from '../../hooks/useFocusTrap';

interface ConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  tokenName: string;
  amount: number;
  action: 'stake' | 'unstake'| '';
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ show, onHide, onConfirm, tokenName, amount, action }) => {
  const amountInDollars = amount; 
  const handleKeyDown = useFocusTrap(show);

  return (
    <Modal
      show={show}
      onHide={onHide}
      onKeyDown={handleKeyDown}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autoFocus={true}
      enforceFocus={true}
    >
      <StyledModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm {action.charAt(0).toUpperCase() + action.slice(1)}
        </Modal.Title>
      </StyledModalHeader>
      <StyledModalBody>
        <h2>{tokenName}</h2>
        <p>Amount: ${amountInDollars.toFixed(2)}</p>
        <p>Are you sure you want to {action} this amount?</p>
      </StyledModalBody>
      <StyledModalFooter>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={onConfirm}>Confirm</Button>
      </StyledModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
