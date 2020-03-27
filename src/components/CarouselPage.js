import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselPage = () =>{
    return(

        
              <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100 h-50"
                    src={require('../img/img_1.jpg')}
                    alt="House"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={require('../img/img_2.jpg')}
                    alt="House"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={require('../img/img_3.jpg')}
                    alt="House"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={require('../img/img_4.jpg')}
                    alt="House"
                />
            </Carousel.Item>
        </Carousel>
      
    )
}

export default CarouselPage;