import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { headers } from '../../configurations/header'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>{' '}
                    <Link to={'/home'}>Amazon</Link>

                </Navbar.Brand>
                <Nav className="me-auto">
                    {
                        headers?.map(item => {
                            return <Nav.Link href={item?.url}>{item?.name}</Nav.Link>
                        })
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
