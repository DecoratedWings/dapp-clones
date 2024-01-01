import React from 'react';
import { Button,Modal } from 'react-bootstrap';

import useFocusTrap from '../../hooks/useFocusTrap.tsx';
import { StyledModalBody, StyledModalFooter, StyledModalHeader } from '../StyledComponents.tsx'

interface ConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  tokenName: string;
  amount: number;
  tokenAmount: number;
  action: 'stake' | 'unstake'| '';
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ show, onHide, onConfirm, tokenName, amount, tokenAmount, action }) => {
  const amountInDollars = amount; 
  const handleKeyDown = useFocusTrap(show);

  return (
    <Modal
      show={show}
      onHide={onHide}
      onKeyDown={handleKeyDown}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      enforceFocus={true}
    >
      <StyledModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm {action.charAt(0).toUpperCase() + action.slice(1)}
        </Modal.Title>
      </StyledModalHeader>
      <StyledModalBody>
        <h2>{tokenName}</h2>
        <p>Value: ${amountInDollars.toFixed(2)}</p>
        <p>Amount of token:{tokenAmount.toFixed(2)}</p>

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
