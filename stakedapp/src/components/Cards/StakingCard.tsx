import axios from "axios"
import React, { useContext,useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";

import { AlertContext } from "../../context/AlertContext.tsx";
import { Button, StyledCard, TitleContainer } from "../StyledComponents.tsx";
import ConfirmationModal from './ConfirmationModal.tsx'; 
import InfoButton from "./InfoButton.tsx";


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
  const { setShow, setMsg, setVariant } = useContext(AlertContext);
  const [amount, setAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState<'stake' | 'unstake' | ''>('');

  const handleOpenModal = async (action: 'stake' | 'unstake') => {
    setActionType(action);
    setShowModal(true);
    await fetchExchangeRate();
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
    try {
      const results = await axios.post("/.netlify/functions/walletBackend", {
        method: "stake",
        amount: amount,
      });
      console.log(results.data);
      setVariant("success")
      setMsg("Staking Successful");
      setShow(true);

    } catch(e){
      console.log("Error: ", e);
      setVariant('danger')
      setMsg("Error: Unable to Stake");
      setShow(true);
    }
  };

  const sendUnstakeRequest = async () => {
    try {
      const results = await axios.post("/.netlify/functions/walletBackend", {
        method: "unstake",
        amount: amount,
      });
      console.log(results.data);
    } catch(e){
      console.log("Error: ", e);
      setVariant('danger')
      setMsg("Error: Unable to Unstake");
      setShow(true);
    }
  };

const fetchExchangeRate = async () => {
      try {
        const tokenId = extractName(tokenName).toLowerCase();
        console.log(tokenId)
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`);
        console.log('API Response:', response.data); 

        const rate = response.data[tokenId].usd;
        const calculatedTokenAmount = (parseFloat(amount) / rate).toFixed(6);
        setTokenAmount(calculatedTokenAmount);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setTokenAmount("N/A");
      }
  };

  const extractName = (tokenName: string): string =>{
    const match = tokenName.match(/^([^(]+)\s*\(\$[A-Z]+\)/);
    if (match && match[1]) {
      return match[1].trim();
    } else {
      throw new Error('Crypto name not found in token name');
    }
  }

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
            <span key={index}>
              {stat.label}: {stat.value}
              <br/>
            </span>
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
        tokenAmount={parseFloat(tokenAmount)}
        action={actionType}
      />
    </StyledCard>
  );
};

export default StakingCard;
