import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { headers } from '../../configurations/header'
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <div className='header-container'>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>{' '}
                        <h1 className='brand-txt'><Link to={'/home'}>Amazon</Link></h1>

                    </Navbar.Brand>
                    <Nav className="me-auto ">
                        {
                            headers?.map(item => {
                                return <Link to={item?.url}>{item?.name}</Link>
                            })
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
