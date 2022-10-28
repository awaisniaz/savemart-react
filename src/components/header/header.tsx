import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import './header.css'

function Header() {
    return (
        <Container fluid className='header-container'>
            <Row>
                <Col lg={2} >
                    <h1 className='brand-txt'><Link to={'/home'}>Amazon</Link></h1>
                </Col>
                <Col lg={7}>
                    <div className='search-box'>
                        <input placeholder='Search the Products ...'></input>
                        <button className='search-btn'><FontAwesomeIcon icon={faSearch as IconProp} /></button>

                    </div>
                </Col>
                <Col lg={3}>
                    <div className='user-action'>
                        <button className='user-login'>Login</button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Header
