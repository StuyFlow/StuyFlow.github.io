import React, { Component } from 'react';

import { choreoProjectVideos } from './videoCategories/choreoProjects';
import { lumiereVideos } from './videoCategories/lumiere';
import { otherVideos } from './videoCategories/others';
import { singVideos } from './videoCategories/sing';
import { sosVideos } from './videoCategories/sos';
import { stuysquadVideos } from './videoCategories/stuysquad';

import './Videos.css';

const categories = [
    { name: "All", videos: [] },
    { name: "StuySquad", videos: stuysquadVideos },
    { name: "Sing!", videos: singVideos },
    { name: "SOS", videos: sosVideos },
    { name: "Choreo Projects", videos: choreoProjectVideos },
    { name: "Lumiere", videos: lumiereVideos },
    { name: "Other", videos: otherVideos },
];


class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: { name: "All", videos: [] },
        };
    }

    changeCategory = category => {
        this.setState({ category: category })
    }

    render() {
        return (
            <div className="page">
                <div className="pageHeader">Videos</div>
                <div className="categories">
                    {categories.map(category => (
                        <div
                            className="category"
                            key={category.name}
                            onClick={() => this.changeCategory(category)}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
                <div style={{color: "red"}}>
                    {this.state.category.name}
                </div>
                <div>
                    {this.state.category.videos.map(video => (
                        <div style={{color: "white"}}>
                            {video.name}<br/>
                            {video.date}<br/>
                            {video.videoLink}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Videos;
