import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Container,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  // Button,
  CardTitle,
  // CardText,
  Row,
  Col,
} from 'reactstrap';

import './style.scss';

import classnames from 'classnames';

class RecommendedCompanies extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '0',
      recomendations: [
        {
          name: 'Women Safety',
          companies: [
            {
              name: 'IBM',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.5',
            },
            {
              name: 'JP Morgan',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.2',

            },
            {
              name: 'Axis',
              category: 'Banking',
              location: 'Bangalore',
              rating: '4',
            },
          ],
        },
        {
          name: 'Salary & Benfetits',
          companies: [
            {
              name: 'Google',
              category: 'Information technology',
              location: 'Bangalore, Hyderabad',
              rating: '4.5',
            },
            {
              name: 'American Express',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '3.5',

            },
            {
              name: 'Microsoft',
              category: 'Information technology',
              location: 'Bangalore, Indore',
              rating: '4.5',
            },
          ],
        },
        {
          name: 'Work-Life Balanance',
          companies: [
            {
              name: 'Intel',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.5',
            },
            {
              name: 'Cisco',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.7',

            },
            {
              name: 'Microsoft',
              category: 'Information technology',
              location: 'Bangalore, Delhi',
              rating: '3.8',

            },
          ],
        },
        {
          name: 'Learning Opportunities',
          companies: [
            {
              name: 'Wipro',
              category: 'Information technology',
              location: 'Bangalore, Pune',
              rating: '4.5',
            },
          ],
        },
        {
          name: 'Female Representatives',
          companies: [
            {
              name: 'Cisco',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.1',

            },
          ],
        },
        {
          name: 'Maternity Leaves',
          companies: [
            {
              name: 'Adobe',
              category: 'Information technology',
              location: 'Bangalore',
              rating: '4.5',
            },
          ],
        },

      ],
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { recomendations } = this.state;
    // console.log(recomendations);
    return (
      <div className="section">
        <Container>
          <h2 className="text-center">Top Companies Recommended by us for</h2>
          <div>
            <Nav tabs>
              {recomendations.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === `${index}`,
                    })}
                    onClick={() => {
                      this.toggle(`${index}`);
                    }}
                  >
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              {recomendations.map((item, index) => (
                <TabPane tabId={`${index}`} key={index}>
                  <Row>
                    {item.companies.map((item, index) => (
                      <Col sm="6 mt-5" md="4" key={index}>
                        <Card>
                          <CardImg
                            top
                            width="100%"
                            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <div className="d-flex justify-content-between">
                              <CardTitle>{item.name}</CardTitle>
                              <span>
                                {item.rating}
/5
                              </span>
                            </div>
                            <CardSubtitle>{item.category}</CardSubtitle>
                            <p>{item.location}</p>
                            {/* <Button>Talk to Kool kanya</Button> */}
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              ))}


            </TabContent>
          </div>
        </Container>
      </div>
    );
  }
}

export default RecommendedCompanies;
