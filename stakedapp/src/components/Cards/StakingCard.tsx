import React, { useState, useContext } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import InfoButton from "./InfoButton";
import axios from "axios";
import { AlertContext } from "../../context/AlertContext";
import { StyledCard, Button, TitleContainer } from "../StyledComponents";
import ConfirmationModal from './ConfirmationModal'; // Adjust this import as per your file structure

interface StakingCardProps {
  tokenName: string;
  stakingStats: Array<{ label: string; value: string | number }>;
  imageUrl: string;
}

const StakingCard: React.FC<StakingCardProps> = ({
  tokenName,
  stakingStats,
  imageUrl,
}) => {
  const { setShow, setMsg } = useContext(AlertContext);
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState<'stake' | 'unstake' | ''>('');

  const handleOpenModal = (action: 'stake' | 'unstake') => {
    setActionType(action);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setShowModal(false);
    if (actionType === 'stake') {
      await sendStakeRequest();
    } else if (actionType === 'unstake') {
      await sendUnstakeRequest();
    }
  };

  const sendStakeRequest = async () => {
    const results = await axios.post("/.netlify/functions/walletBackend", {
      method: "stake",
      amount: amount,
    });
    console.log(results.data);
    setMsg("Staking Successful");
    setShow(true);
  };

  const sendUnstakeRequest = async () => {
    const results = await axios.post("/.netlify/functions/walletBackend", {
      method: "unstake",
      amount: amount,
    });
    console.log(results.data);
    setShow(true);
  };

  return (
    <StyledCard className="mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} alt={`${tokenName} logo`} />
      <Card.Body>
        <TitleContainer>
        <Card.Title>{tokenName}</Card.Title>
        <InfoButton detail={""} />
        </TitleContainer>
        <Card.Text>
          {stakingStats.map((stat, index) => (
            <div key={index}>
              {stat.label}: {stat.value}
            </div>
          ))}
        </Card.Text>
        <div className="mb-2">Amount to Stake/Unstake</div>
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            placeholder="amount"
            aria-label="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputGroup>
        <Button onClick={() => handleOpenModal('stake')}>
          Stake
        </Button>{" "}
        &nbsp;
        <Button onClick={() => handleOpenModal('unstake')}>
          Unstake
        </Button>{" "}
      </Card.Body>

      <ConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleConfirm}
        tokenName={tokenName}
        amount={parseFloat(amount)}
        action={actionType}
      />
    </StyledCard>
  );
};

export default StakingCard;
