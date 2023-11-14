import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Auctions = () => {
  return (
    <div className="my-5 text-white">
      {/* Top Section */}
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={6} className="">
            <h2 className="">Hot auctions</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <Button variant="dark">View All</Button>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section - Cards */}
      <Container>
        <Row>
          {/* Card 1 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/unsplash_9XngoIpxcEo.png" />
              <Card.Body>
                <div className="border-bottom mb-5">
                  <p className="d-inline-block me-5 ">Lorem Ipsum</p>
                  <p className="d-inline-block me-3">1.20 Weth</p>
                </div>
                <div>
                  <p className="d-inline-block me-5 ">Ends in 01.34.45</p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="px-3 ms-3"
                  >
                    Bid
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} lg={3} className="mb-3 ">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/unsplash_9XngoIpxcEo.png" />
              <Card.Body>
                <div className="border-bottom mb-5">
                  <p className="d-inline-block me-5 ">Lorem Ipsum</p>
                  <p className="d-inline-block me-3">1.20 Weth</p>
                </div>
                <div>
                  <p className="d-inline-block me-5 ">Ends in 01.34.45</p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="px-3 ms-3"
                  >
                    Bid
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} lg={3} className="mb-3 ">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/unsplash_ruJm3dBXCqw.png" />
              <Card.Body>
                <div className="border-bottom mb-5">
                  <p className="d-inline-block me-5 ">Lorem Ipsum</p>
                  <p className="d-inline-block me-3">1.20 Weth</p>
                </div>
                <div>
                  <p className="d-inline-block me-5 ">Ends in 01.34.45</p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="px-3 ms-3"
                  >
                    Bid
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/unsplash_wN9DU73b8_s.png" />
              <Card.Body>
                <div className="border-bottom mb-5">
                  <p className="d-inline-block me-5 ">Lorem Ipsum</p>
                  <p className="d-inline-block me-3">1.20 Weth</p>
                </div>
                <div>
                  <p className="d-inline-block me-5 ">Ends in 01.34.45</p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="px-3 ms-3"
                  >
                    Bid
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auctions;
