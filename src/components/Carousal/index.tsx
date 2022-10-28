import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import { carousaldata } from '../../configurations/carousal'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container">
            {carousaldata?.map((item) => {
                return <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item?.url}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{item?.heading}</h3>
                        <p>{item?.subHeading}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            })}
        </Carousel>
    );
}

export default ControlledCarousel