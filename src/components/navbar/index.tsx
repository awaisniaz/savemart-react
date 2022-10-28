import React from 'react'
import Container from 'react-bootstrap/Container';
import './style.css'
import { Link } from 'react-router-dom'
import { headers } from '../../configurations/header'
function Navbar() {
    return (
        <Container fluid className='navbar'>
            {
                headers?.map(item => {
                    return <Link className='link' to={item?.url}>{item?.name}</Link>
                })
            }
        </Container>
    )
}

export default Navbar
