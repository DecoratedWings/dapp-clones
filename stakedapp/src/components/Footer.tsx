import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ borderTop: '2px solid #dee2e6' }}>
      <section className="footer">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Staking Dapp
              </h6>
              <p>
                This staking dapp is an example of a Web3 application that can
                be used to stake tokens in order to increase earnings. It is
                designed to serve as a sample with stronger accessibility
                features.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Site Map</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  WCAG
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Github Repo
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Bootstrap Docs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Haptics DAO
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className="text-center">
              <a href="https://www.facebook.com" className="text-reset me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="text-reset me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="text-reset me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-reset me-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.github.com" className="text-reset me-2">
                <i className="fab fa-github"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        >
        © 2023 All rights reserved: &nbsp;
        <a className="text-reset fw-bold" href="/">
          Staking Dapp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
