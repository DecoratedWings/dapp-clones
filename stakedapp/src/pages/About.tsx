import React from "react";
import { Col,Container, Row } from "react-bootstrap";
import styled from "styled-components";

import {StyledLink } from "../components/StyledComponents.tsx";

const StyledContainer = styled(Container)`
  padding-top: 20px;
  text-align: left;
`;
const About: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop:20, paddingBottom:1}} id="main-content">
        About
      </h1>

      <StyledContainer>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
        

            <h2 style={{ textAlign: "center", paddingBottom:10}}>App Instructions</h2>
            <h3 style={{  textAlign: "center", paddingBottom:10, fontSize:20}}>Our app offers you an effortless method to potentially increase your digital assets without the need for deep technical knowledge.</h3>

              <ul>
              <li style={{ paddingBottom:10}}><strong>Staking</strong> Think of staking as putting your digital currency to work for you. 
              It's like earning interest in a savings account. 
              You can 'stake' a portion of your digital assets on our platform. 
              While they're staked, they help maintain the network, and in return, 
              you earn rewards on them.</li>
       
         
              <li style={{ paddingBottom:10}}><strong>Unstaking:</strong> Changed your mind? 
              No problem! You can 'unstake' your digital assets whenever you want, 
              bringing them back into your control with ease.
              </li>
         
              <li style={{ paddingBottom:10}}>    
                <strong>Specify Your Investment:</strong> 
                Enter the dollar value of the digital asset you wish to stake. 
                After specifying the amount, you'll have the opportunity to review and 
                confirm your selection before it is processed. 
                </li>
                </ul>
           
              <h2 style={{ textAlign: "center"}}>Committed to Inclusivity and Accessibility</h2>
            <p style={{ paddingBottom:20}}>
              Welcome to our staking dApp, a decentralized application committed
              to providing an inclusive and accessible platform for all users.
              We understand the importance of digital accessibility and have
              taken significant steps to ensure that our dApp is user-friendly
              and accommodating to people with various needs and abilities.
            </p>
            <p style={{ paddingBottom:10}}>
              Accessibility is an ongoing journey. We are committed to
              continuously improving our dApp to meet and exceed accessibility
              standards. We welcome feedback and suggestions from our users to
              help us enhance the platform's accessibility.
            </p>

            <h2 style={{ textAlign: "center"}}>Contact Us</h2>
            <p>
              For any queries or suggestions related to accessibility, please
              contact us at{" "}
              <StyledLink href="mailto:contact@example.com">contact@example.com</StyledLink>. Your
              feedback is invaluable in helping us serve all our users better.
            </p>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default About;
