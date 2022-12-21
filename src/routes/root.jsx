import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Box} from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Root() {
  return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/Plot">Tito Rodda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Game">Game</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/titorodda/">Linkedin</Nav.Link>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>);
}