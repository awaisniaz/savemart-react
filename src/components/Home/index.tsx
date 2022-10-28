import React from 'react'
import ControlledCarousel from '../Carousal/index';
import Navbar from '../navbar';
import Productcard from '../productcard/index'
import Container from 'react-bootstrap/Container';

export default function Home() {
    return (
        <>
            <Navbar />
            <ControlledCarousel />
            <Productcard />
        </>
    )
}
