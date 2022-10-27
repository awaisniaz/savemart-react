import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://opencart.opencartworks.com/themes/so_claue/layout5/image/cache/catalog/slideshow/home4/slide3-1920x600.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://opencart.opencartworks.com/themes/so_claue/layout5/image/cache/catalog/slideshow/home4/slide1-1920x600.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://opencart.opencartworks.com/themes/so_claue/layout5/image/cache/catalog/slideshow/home4/slide2-1920x600.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel