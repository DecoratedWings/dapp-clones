import React from 'react';
import { Card } from 'react-bootstrap';

interface StakingCardProps {
  tokenName: string;
  stakingStats: Array<{ label: string; value: string | number }>;
  imageUrl: string;
}

const StakingCard: React.FC<StakingCardProps> = ({ tokenName, stakingStats, imageUrl }) => {
  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={`${tokenName} logo`} />
      <Card.Body>
        <Card.Title>{tokenName}</Card.Title>
        <Card.Text>
          {stakingStats.map((stat, index) => (
            <div key={index}>{stat.label}: {stat.value}</div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StakingCard;
