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

const dateCompare = (a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
}

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
        let videoList = this.state.category.videos;
        if (this.state.category.name === "All") {
            videoList = [...stuysquadVideos,
                         ...singVideos,
                         ...sosVideos,
                         ...choreoProjectVideos,
                         ...lumiereVideos,
                         ...otherVideos];
        }
        videoList.sort(dateCompare);
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
                <div>
                    {videoList.map(video => (
                        <div className="video-div">
                            <div className="video-title">{video.name}</div>
                            <iframe
            					title="Master List Video"
            					className="video"
            					src={video.videoLink}
            					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            					allowFullScreen
            				/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Videos;
