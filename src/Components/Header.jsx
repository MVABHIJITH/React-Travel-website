import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
          <Navbar expand="lg" className="bg-info text-light">
        <Container  >
          <Navbar.Brand href="#"> <img src="   https://vectorseek.com/wp-content/uploads/2023/12/Visit-Saudi-Logo-Vector.svg-.png" alt="" height={'50px'} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" fw-bold  ms-5 me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-light'   >Plan Your Trip</Nav.Link>
              <Nav.Link className='ms-3 text-light' >Travel Essentials</Nav.Link>
              <Nav.Link className='ms-3 text-light'  >Saudi Calender</Nav.Link>
              <Nav.Link className='ms-3 text-light' >Experience</Nav.Link>
              <Nav.Link className='ms-3 text-light'  >Saudi Map </Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
              />
              <Button className='ps-1 btn btn-dark'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar >

     </>
  )
}

export default Header