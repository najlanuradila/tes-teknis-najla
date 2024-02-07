import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Web Penjualan</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link className='navbar_link' to="/">Product List</Link>
                        <Link className='navbar_link' to="/add">Add Product</Link>
                        <Link className='navbar_link' to="/update">Update Product</Link>
                        <Link className='navbar_link' to="/search">Search Product</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;