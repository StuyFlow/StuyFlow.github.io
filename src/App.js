import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import Contact from './components/Contacts';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Resources from './components/Resources';
import Error from './components/Utils/Error';
import Nav from './components/Utils/Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
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
