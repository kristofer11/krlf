"use client"
import './header.scss';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

const Header = () => {
    const [showPrograms, setShowPrograms] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showMusic, setShowMusic] = useState(false)
    const [showContact, setShowContact] = useState(false)




    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <Image
                            src='/logoNoBg.png'
                            alt='KRLF Logo'
                            width='1080'
                            height='1080'
                        />
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" >Menu</Navbar.Toggle> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-md-end'>
                        <Nav >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown
                                title='About Us'
                                show={showAbout}
                                onMouseOver={() => setShowAbout(true)}
                                onMouseLeave={() => setShowAbout(false)}
                            >
                                <NavDropdown.Item>On-Air Team</NavDropdown.Item>
                                <NavDropdown.Item>Support Team</NavDropdown.Item>
                                <NavDropdown.Item>FCC Public File</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title='Programs'
                                show={showPrograms}
                                onMouseOver={() => setShowPrograms(true)}
                                onMouseLeave={() => setShowPrograms(false)}
                            >
                                <NavDropdown.Item>Schedule</NavDropdown.Item>
                                <NavDropdown.Item>Kids Programming</NavDropdown.Item>
                                <NavDropdown.Item>Answers for Life</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title='Music'
                                show={showMusic}
                                onMouseOver={() => setShowMusic(true)}
                                onMouseLeave={() => setShowMusic(false)}
                            >
                                <NavDropdown.Item>Now Playing</NavDropdown.Item>
                                <NavDropdown.Item>Upcoming Events</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title='Contact'
                                show={showContact}
                                onMouseOver={() => setShowContact(true)}
                                onMouseLeave={() => setShowContact(false)}
                            >
                                <NavDropdown.Item>General Info</NavDropdown.Item>
                                <NavDropdown.Item>Underwriting</NavDropdown.Item>
                                <NavDropdown.Item>Submitting Events</NavDropdown.Item>
                                <NavDropdown.Item>Getting Involved</NavDropdown.Item>
                                <NavDropdown.Item>Prayer Requests</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Links</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header