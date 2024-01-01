import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding-top: 50px;
  text-align: left;
`;
const About: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop:20, paddingBottom:10}} id="main-content">
        About
      </h1>

      <StyledContainer>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 style={{ textAlign: "center"}}>Committed to Inclusivity and Accessibility</h2>
            <p style={{ paddingBottom:10}}>
              Welcome to our staking dApp, a decentralized application committed
              to providing an inclusive and accessible platform for all users.
              We understand the importance of digital accessibility and have
              taken significant steps to ensure that our dApp is user-friendly
              and accommodating to people with various needs and abilities.
            </p>

            <h2 style={{ textAlign: "center"}}>Accessibility Features</h2>
            <p style={{ paddingBottom:10}}>
              <li><strong>Screen Reader Compatibility:</strong> Our dApp is fully
              compatible with leading screen readers, ensuring that visually
              impaired users can navigate and interact with our platform using
              auditory feedback.</li>
            </p>
            <p style={{ paddingBottom:10}}>
              <li><strong>Keyboard Navigation:</strong> Comprehensive keyboard
              navigation capabilities allow users who cannot use a mouse or
              prefer keyboard controls to navigate our dApp efficiently.
              </li>
            </p>
            <h2 style={{ textAlign: "center"}}>Ongoing Commitment</h2>
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
              <a href="mailto:contact@example.com">contact@example.com</a>. Your
              feedback is invaluable in helping us serve all our users better.
            </p>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default About;
