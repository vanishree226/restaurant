import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'Components/Assets/Headers.css';

const Headers = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
               
                        <div className="logo">
                            SAVIRUCHI
                        </div>    
                    
                    <Nav> 
                        <ul className="ul">
                            <li>
                                <Link className='item' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='item' to='/Aboutus'>About</Link>
                            </li>
                            <li>
                                <Link  className='item'to='/Pricing'>Pricing</Link>
                            </li>
                            <li>
                                <Link className='item' to='/Contactus'>Contact</Link>
                            </li>
                            <li>
                                <Link className='item'to='/Order'>Reviews</Link>
                            </li>
                            <li>
                                <Link className='item' to='/Feedback'>Feedback</Link>
                            </li>
                            <li>
                                <Link  className='item'to='*'></Link>
                            </li>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers;
