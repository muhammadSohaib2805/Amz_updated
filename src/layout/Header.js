import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../asset/images/amazonpub_DB.png"
import brands from '../asset/images/trusted.png'
import Form from 'react-bootstrap/Form';
import { FaCheckDouble } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className='p-0'>
                    <Container>
                        <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-theme="dark" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/" className='text-white'>HOME</Nav.Link>
                                <NavDropdown title="SERVICE" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="e-book-writing">E-book Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="audio-book">Audio Book Service</NavDropdown.Item>
                                    <NavDropdown.Item href="ghost-writing">Ghost Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="book-marketing">Book Marketing</NavDropdown.Item>
                                    <NavDropdown.Item href="book-promotion">Book Promotion</NavDropdown.Item>
                                    <NavDropdown.Item href="formatting">Formatting</NavDropdown.Item>
                                    <NavDropdown.Item href="proofreading">Proofreading</NavDropdown.Item>
                                    <NavDropdown.Item href="publishing">Publishing</NavDropdown.Item>
                                    <NavDropdown.Item href="book-editing">Book Editing</NavDropdown.Item>
                                    <NavDropdown.Item href="author-website">Author Website</NavDropdown.Item>
                                    <NavDropdown.Item href="book-video-trailer">Book Video Trailer</NavDropdown.Item>
                                    <NavDropdown.Item href="book-cover">Book Cover</NavDropdown.Item>
                                    <NavDropdown.Item href="article-writing">Article Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="website-content-writing">Website Content Writing</NavDropdown.Item>
                                    <NavDropdown.Item href="blog-writing">Blog Writing</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/portfolio" className='text-white'>PORTFOLIO</Nav.Link>
                                <Nav.Link href="/testimonial" className='text-white'>TESTIMONIALS</Nav.Link>
                                <Nav.Link href="/about" className='text-white'>ABOUT US</Nav.Link>
                                <Nav.Link href="/contact" className='text-white'>CONTACT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}

export default Header
