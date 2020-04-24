import React from 'react';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Dashboard = () => {

    return(
      
        <div className=""><br></br>

            <h1><Badge variant="secondary">Dashboard</Badge></h1>

            <div className="container"><br></br>
                
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Rent/Buy application</Card.Header>
                        <Card.Body>
                            <Card.Title>Fastest and easy way</Card.Title>
                            <Card.Text>
                                Applying for a house is just one click away.
                            </Card.Text>
                            <Link to="/application"><Button variant="primary">Apply</Button></Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">Lease Free Application</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center">
                        <Card.Header>Request/ Claim report</Card.Header>
                        <Card.Body>
                            <Card.Title>We are here for you</Card.Title>
                            <Card.Text>
                                Fill in less than aminute and we will get back you in less than 3 hours.
                            </Card.Text>
                            <Button variant="primary">Fill report</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Lease Free Report</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center">
                        <Card.Header>Rental Information</Card.Header>
                        <Card.Body>
                            <Card.Title>Keep all the details</Card.Title>
                            <Card.Text>
                               By clicking here, you are able to see all the details
                               concerning your rent or loan.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Lease Free User</Card.Footer>
                    </Card>
                </Col>
            </Row><br></br>

            <Button variant="danger" size="lg" block>Log out</Button>
            </div>

        </div>
    )
}

export default Dashboard;