import React from 'react';
import { Col,Container, Row } from 'react-bootstrap';

import StakingCard from './StakingCard.tsx';

interface Token {
  name: string;
  stats: Array<{ label: string; value: string | number }>;
  imageUrl: string;
  about:string;
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
              about={token.about}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
