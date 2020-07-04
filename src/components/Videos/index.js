import React, { Component } from 'react';

import { choreoProjectVideos } from './videoCategories/choreoProjects';
import { lumiereVideos } from './videoCategories/lumiere';
import { otherVideos } from './videoCategories/others';
import { singVideos } from './videoCategories/sing';
import { sosVideos } from './videoCategories/sos';
import { stuysquadVideos } from './videoCategories/stuysquad';

import './Videos.css';

class Videos extends Component {
    render() {
        return (
            <div className="pageHeader">
                <div>Videos</div>
            </div>
        );
    }
}

export default Videos;
