import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import Contact from './components/Contact';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Resources from './components/Resources';
import Error from './components/Utils/Error';
import Nav from './components/Utils/Nav';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="background">
                <Switch>
                    <Route path="/board" component={Board}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/photos" component={Photos}/>
                    <Route path="/videos" component={Videos}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/" component={Error}/>
                </Switch>
                <Switch>
                    <Nav/>
                </Switch>
            </div>
        );
    }
}

export default App;
