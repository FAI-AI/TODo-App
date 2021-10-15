import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Links} from 'react-dom'

function Header () {
    return(
        <Navbar bg="light" variant="light">
                <Container>
                   
                    <Nav className="me-auto">
                        <Links to="sources/AddList">Add New</Links>
                        <Links to="sources/ViewList">View List</Links>
                        <Links to="sources/LogInView">Log In</Links>
                        <Links to="sources/RegisterView">Register</Links>
                        
                    </Nav>
                </Container>
            </Navbar>
    );


}
