import React, { Component } from 'react';
import {
  Container, Card, Button, CardTitle, CardText, Row, Col,
} from 'reactstrap';

class JobOpenings extends Component {
  render() {
    return (
      <div className="kk-job-openings">
        <Container>
          <h2 className="text-center my-5">Job openings at Top Industries</h2>
          <Row>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Software Development</CardTitle>
                <CardText>
                (190 openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Product manager</CardTitle>
                <CardText>
                (50 openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Fashion Design</CardTitle>
                <CardText>
                (150 Openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Software Development</CardTitle>
                <CardText>
                (190 openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Product manager</CardTitle>
                <CardText>
                (50 openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Fashion Design</CardTitle>
                <CardText>
                (150 Openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <CardTitle>Product manager</CardTitle>
                <CardText>
                (50 openings)
                </CardText>
              </Card>
            </Col>
            <Col className="mb-2" sm="6" md="4">
              <Card body>
                <Button>View All</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default JobOpenings;
