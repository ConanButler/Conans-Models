import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home'
const App = () => {
    return (
        <>
            <Navbar variant="light" className="conan-nav">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
                <Switch>

                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/contact'>
                        hii
                </Route>
                </Switch>
        </>
    );
};

export default App;