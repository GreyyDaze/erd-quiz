import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Auctions = () => {
  return (
    <div className="my-5">
      {/* Top Section */}
      <Container>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <h2>Main Heading</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-right">
            <Button variant="primary">View All</Button>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section - Cards */}
      <Container>
        <Row>
          {/* Card 1 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card>{/* Card content goes here */}</Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card>{/* Card content goes here */}</Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card>{/* Card content goes here */}</Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card>{/* Card content goes here */}</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auctions;
