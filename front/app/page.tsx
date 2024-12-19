'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from 'typewriter-effect';
import { Navbar, Nav } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">{process.env.NEXT_PUBLIC_METADATA_TITLE}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://specialguy.tistory.com/">Blog</Nav.Link>
            <Nav.Link href="https://github.com/MunseopLim/">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>
          <Typewriter
            options={{
              strings: ['Under Construction'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </>
  );
}
