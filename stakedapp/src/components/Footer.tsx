import { Col,Container, Row } from "react-bootstrap";
import { FaFacebookF, FaGithub,FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const iconSize = 30;

const Footer = () => {
  return (
    <footer style={{ borderTop: '2px solid #dee2e6' }}>
      <section className="footer">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Staking Dapp
              </p>
              <p>
                This staking dapp is an example of a Web3 application that can
                be used to stake tokens in order to increase earnings. It is
                designed to serve as a sample with stronger accessibility
                features.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">Site Map</p>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">Useful links</p>
              <p>
                <a href="https://www.w3.org/TR/WCAG22/" className="text-reset">
                  WCAG 2.2
                </a>
              </p>
              <p>
                <a href="https://github.com/DecoratedWings/dapp-clones" className="text-reset">
                  Github Repo
                </a>
              </p>
              <p>
                <a href="https://react-bootstrap.netlify.app/" className="text-reset">
                  Bootstrap Docs
                </a>
              </p>
              <p>
                <a href="https://hapticsdao.com/" className="text-reset">
                  Haptics DAO
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <p className="text-uppercase fw-bold mb-4">Contact</p>
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
                    <a href="https://www.facebook.com" className="text-reset me-2" aria-label="Facebook">
                        <FaFacebookF size={iconSize} />
                    </a>
                    <a href="https://www.twitter.com" className="text-reset me-2" aria-label="Twitter">
                        <FaTwitter size={iconSize} />
                    </a>
                    <a href="https://www.instagram.com" className="text-reset me-2" aria-label="Instagram">
                        <FaInstagram size={iconSize} />
                    </a>
                    <a href="https://www.linkedin.com" className="text-reset me-2" aria-label="LinkedIn">
                        <FaLinkedinIn size={iconSize} />
                    </a>
                    <a href="https://www.github.com" className="text-reset me-2" aria-label="GitHub">
                        <FaGithub size={iconSize} />
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
