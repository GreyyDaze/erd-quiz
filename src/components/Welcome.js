import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './styles/Welcome.css';
const Welcome = () => {
  return (
    <Container className="text-white my-5">
      <Row>
        {/* Left Side - Text Content */}
        <Col xs={12} md={6}>
          <h1 className="text-white">
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <h4 className="fw-light">
            In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
            purus vestibulum nibh mi venenatis
          </h4>
          <div className="mt-5">
            <Button  className="btn-variant border-0 me-5" >
              Explore
            </Button>
            <Button variant="outline-light" className="ms-5">
              Create
            </Button>
          </div>
        </Col>

        {/* Right Side - Image */}
        <Col xs={12} md={6}>
          <img
            src="./img/welcome.png"
            alt="Hero"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
