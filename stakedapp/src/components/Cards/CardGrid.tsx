import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StakingCard from './StakingCard';

interface Token {
  name: string;
  stats: Array<{ label: string; value: string | number }>;
  imageUrl: string;
}

interface CardGridProps {
  tokens: Token[];
}

const CardGrid: React.FC<CardGridProps> = ({ tokens }) => {
  return (
    <Container>
      <Row>
        {tokens.map((token, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <StakingCard 
              tokenName={token.name}
              stakingStats={token.stats}
              imageUrl={token.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
