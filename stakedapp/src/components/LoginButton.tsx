import { useState } from 'react';
import { Button as BootStrapButton, Col, Container,Form, Modal, Row } from 'react-bootstrap';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

import useFocusTrap from '../hooks/useFocusTrap.tsx';
import { Button, StyledModalBody, StyledModalFooter,StyledModalHeader } from './StyledComponents.tsx';

const LoginButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleKeyDown = useFocusTrap(show);

  return (
    <>
      <Button onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} onKeyDown={handleKeyDown}>
        <StyledModalHeader closeButton>
          <Modal.Title>Login</Modal.Title>
        </StyledModalHeader>
        <StyledModalBody>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button  onClick={handleClose} style={{width: '100%'}}>
              Submit
            </Button>

            {/* Social Login Icons */}
            <Container className="my-3">
              <Row className="text-center">
                <Col><BootStrapButton variant='light'  aria-label="Login with Google"><FcGoogle size={25} /></BootStrapButton></Col>
                <Col><BootStrapButton variant='light' aria-label="Login with Facebook"><AiFillFacebook size={25} color="#3b5998" /></BootStrapButton></Col>
                <Col><BootStrapButton variant='light' aria-label="Login with Twitter"><AiOutlineTwitter size={25} color="#1DA1F2" /></BootStrapButton></Col>
                <Col><BootStrapButton  variant='light' aria-label="Connect Wallet"><BiWallet size={25} /></BootStrapButton></Col>
              </Row>
            </Container>
          </Form>
        </StyledModalBody>
        <StyledModalFooter>
          <div className="w-100 text-center">
          <BootStrapButton variant='light' style={{marginRight: 20}}>Register</BootStrapButton>

          <BootStrapButton variant="secondary" onClick={handleClose}>
            Close
          </BootStrapButton>
          </div>
        </StyledModalFooter>
      </Modal>
    </>
  );
};

export default LoginButton;
