import React, { Component } from 'react';
import PoiAnimation from './Animation.js';
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div className="page error">
                <div className="error-header">
                    Error 404: Page Not Found.
                </div>
                <div className="error-message">
                    You are seeing this page because the url does not exist.
                    Please check it for spelling errors.
                </div>
                <PoiAnimation />
            </div>
        );
    }
}

export default Error;
