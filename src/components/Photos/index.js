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

const categories = {
    "All": "",
    "StuySquad": stuysquadPhotos,
    "Sing": singPhotos,
    "SOS": sosPhotos,
    "Club": clubPhotos,
    "Multigen": multigenPhotos,
    "Wallpapers": wallpaperPhotos,
    "Logos": logoPhotos,
    "Merch": merchPhotos,
    "Others": otherPhotos,
};

const all = (category) => {
    if (category === "All") { return true; }
    else { return false; }
};

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "StuySquad",
        };
    }

    changeCategory = category => {
        this.setState({ category: category });
    };

    render() {
        return (
		<div className="page">
           <div className="pageHeader">Photos</div>
           <div style={{display: "flex"}}>
               {Object.keys(categories).map(category => (
                    <div
                        className="categories"
                        style={{margin:"10px",color:"white"}}
                        onClick={() => this.changeCategory(category)}
                	>
                        { category }
                    </div>
               ))}
            </div>
            <br /><br />
            {categories[this.state.category].map(img => (
                <img
                    className="imag"
                    src={require('../../../src/components/Photos/imgCategories/'+this.state.category+'/'
                     + img.imgname)} style={{width:"380px", height:"230px"}}>
                </img>
            ))}
        </div>
        );
    }
}


export default Photos;
