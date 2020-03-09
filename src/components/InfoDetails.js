import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const InfoDetails = () => {
    return(
        
        <Container>
            <Row>
                <Col>
                    <Card className="text-center" style={{ width: '18rem' }}  >
                        <Card.Img  variant="top" src={require('../img/hands.jpg')}/>
                        <Card.Body>
                            <Card.Title>Best Deals</Card.Title>
                            <Card.Text>Lease Free has the always the best deals in the market for over 20 years. For more details,
                                please click below. 
                            </Card.Text>
                            <Button variant="outline-primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="text-center" style={{ width: '18rem' }} >
                        <Card.Img  variant="top" src={require('../img/VLUREM.jpg')}/>
                        <Card.Body>
                        <Card.Title>On-site maintenance</Card.Title>
                            <Card.Text>
                                We provide various servixe at your disposal 24/7. For details about others services, log in at the residential portal.
                            </Card.Text>
                            <Button variant="outline-primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="text-center" style={{ width: '18rem' }}>
                        <Card.Img  variant="top" src={require('../img/img_3.jpg')}/>  
                        <Card.Body>
                        <Card.Title>Luxury Home</Card.Title>
                            <Card.Text>
                                For those interested in selling or purchasing, we have a have large panel of choice for you for an unbeatable price.
                            </Card.Text>
                            <Button variant="outline-primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/> <br/>
            <h1 className="text-center">Find us here!</h1>
            <br/> <br/>
        </Container>

      
    )
}

export default InfoDetails