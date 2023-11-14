import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './styles/Welcome.css';
export const Discover = () => {
  return (
    <div className="my-5 text-white">
      {/* Top Section */}
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={6} className="">
            <h2 className="">Discover</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <h5 className="d-inline-block me-5">Category</h5>
            <h5 className="d-inline-block me-5">Cheapest</h5>
            <h5 className="d-inline-block me-5">Newest</h5>
            <Button className="btn-variant border-0">Filter</Button>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section - Cards */}
      <Container>
        <Row>
          {/* Card 1 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/discover/unsplash_9AdeEdYB2yk.png" />
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
              <Card.Img variant="top" src="./img/discover/unsplash_bU8TeXhsPcY.png" />
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
              <Card.Img variant="top" src="./img/discover/unsplash_crs2vlkSe98.png" />
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
              <Card.Img variant="top" src="./img/discover/unsplash_fg7J6NnebBc.png" />
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

          {/* Card 5 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/discover/unsplash_hoS3dzgpHzw.png" />
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

          {/* Card 6 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/discover/unsplash_trYl7JYATH0.png" />
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

          {/* Card 7 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/discover/unsplash_trYl7JYATH0.png" />
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

          {/* Card 8 */}
          <Col xs={12} md={6} lg={3} className="mb-3">
            <Card style={{ width: "17rem" }} bg="dark" className="text-white">
              <Card.Img variant="top" src="./img/discover/unsplash_UD5drKd4H6w.png" />
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
