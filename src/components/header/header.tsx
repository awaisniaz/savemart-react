import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Affix } from 'antd'


import './header.css'

function Header() {
    return (
        <Affix>
            <Container fluid className='header-container'>
                <Row>
                    <Col lg={2} md={4} sm={4} xs={4}>
                        <h1 className='brand-txt'><Link to={'/home'}>Amazon</Link></h1>
                    </Col>
                    <Col lg={7} md={4} sm={4} xs={4}>
                        <div className='search-box'>
                            <input placeholder='Search the Products ...'></input>
                            <button className='search-btn'><FontAwesomeIcon icon={faSearch as IconProp} /></button>

                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={4}>
                        <div className='user-action'>
                            <Link className='user-login' to={'/login'}>LOGIN</Link>
                        </div>
                    </Col>
                </Row>
            </Container >
        </Affix>
    )
}

export default Header
