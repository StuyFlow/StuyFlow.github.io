import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Board from './pages/Board.js';
import Photos from './pages/Photos.js';
import Videos from './pages/Videos.js';
import Resources from './pages/Resources.js';
import Error from './pages/Error.js';
import Nav from './pages/Nav.js';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/board" component={Board}/>
                    <Route path="/photos" component={Photos}/>
                    <Route path="/videos" component={Videos}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/" component={Error}/>
                </Switch>
            </div>
        );
    }
}

export default App;
