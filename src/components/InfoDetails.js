import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

const InfoDetails = () => {
    return(
        
        <Container>
            <br /><br /><br /><br />
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

            <Row className="justify-content-md-center">
                <Col>
                    <Image src={require('../img/Park 02.jpg')} style={{ width: '40rem' }} />
                </Col>
                <Col>
                    <h1 style={{paddingTop: '180px', fontSize: '70px'}}>
                        GO GREEN
                    </h1>
                    <p style={{paddingLeft: '10px'}}>
                      The park has never been so close!
                      We are dedicating to the full satisfaction of our client.
                      Therefore, the need to have somwhere to play, exercise, feel relax
                      have never been so close. We bring the park to you.
                    </p>
                </Col>
            </Row><br />
            <Row>
                   <Col>
                        <h1 style={{paddingTop: '180px', fontSize: '70px'}}>
                           OFFICES
                        </h1>
                        <p style={{paddingRight: '10px'}}>
                            Lease Free has also great deals for
                            those interesting in renting or buying 
                            offices for their use. Contact us for more
                            information.
                        </p>
                   </Col>

                   <Col>
                         <Image src={require('../img/772.png')} style={{ width: '40rem' }} />
                   </Col>
            </Row>
            
            <Row>
                <Col>
                    <Image src={require('../img/iso.jpg')} style={{ width: '40rem' }} />
                </Col>
                <Col>
                       <h1 style={{paddingTop: '180px', fontSize: '70px'}}>
                            INVESTMENT  
                        </h1>
                        <p style={{paddingLeft: '10px'}}>
                            Daling with us is the best investment
                            anyone would dream about. We offer the 
                            best deals on the market. And we really mean
                            great!
                        </p>
                </Col>
            </Row><br />
            
            
        </Container>

        

      
    )
}

export default InfoDetails