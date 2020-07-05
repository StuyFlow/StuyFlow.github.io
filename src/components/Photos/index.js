import React, { Component } from 'react';
import { clubPhotos } from './imgCategories/Club';
import { logoPhotos } from './imgCategories/Logos';
import { merchPhotos } from './imgCategories/Merch';
import { multigenPhotos } from './imgCategories/Multigen';
import { otherPhotos } from './imgCategories/Others';
import { singPhotos } from './imgCategories/Sing';
import { sosPhotos } from './imgCategories/SOS';
import { stuysquadPhotos } from './imgCategories/StuySquad';
import { wallpaperPhotos } from './imgCategories/Wallpapers';

import './Photos.css';

class Photos extends Component {
    render() {
        return (
            <div className="page">
                <div className="pageHeader">Photos</div>
            </div>
        );
    }
}

export default Photos;
