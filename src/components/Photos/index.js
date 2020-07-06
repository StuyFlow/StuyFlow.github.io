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

const sorts = [ "Date Asc.", "Date Desc." ];

const get_photos = (category,sort) => {
    if (category === "All") {
	var c = Object.keys(categories)
	c.shift()
	var dates = []
	c.map(category => (
	    categories[category].map(img => (
		dates.push({
		    'imgname':img.imgname,
		    'date':Date.parse(img.date),
		    'category':category,
		    'name':img.name,
		    'desc':img.desc, 
		})		
	    ))))
	if (sort === "Date Asc.") {dates.sort((a, b) => a.date - b.date)}
	else {dates.sort((a, b) => b.date - a.date)}
	return dates.map(img => (
		<React.Fragment>
		<div id="myModal" className="modal">
		<span
	        className="close"
	        onClick={() => document.getElementById("myModal").style.display = 'none'}
		>&times;</span>
		<div id="image-title"></div>
		<div style={{display: "flex"}}>
		<img className="modal-content" id="big-image"/>
		<div id="image-desc"></div>
		</div>
		</div>
                <img
	        id="myImg"
                className="imag"
	        onClick={() => {
		 document.getElementById("big-image").setAttribute('src', require('./imgCategories/' + img.category + '/' + img.imgname))
		 document.getElementById("image-desc").innerHTML = img.desc
		 document.getElementById("image-title").innerHTML = img.name
		 document.getElementById("myModal").style.display = 'block'	
		}}
                src={require('./imgCategories/' + img.category + '/' + img.imgname)} />
		</React.Fragment>		    
	))
    }
    else {
	var one_category = categories[category]
	if (sort === "Date Asc.") {one_category.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))}
	else {one_category.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))}
	return one_category.map(img => (
	    <React.Fragment>
		<div id="myModal" className="modal">
		<span
	        className="close"
	        onClick={() => document.getElementById("myModal").style.display = 'none'}
		>&times;</span>
		<div id="image-title"></div>
		<div style={{display: "flex"}}>
		<img className="modal-content" id="big-image"/>
		<div id="image-desc"></div>
		</div>
		</div>
                <img
            className="imag"
	    onClick={() => {
		document.getElementById("big-image").setAttribute('src', require('./imgCategories/' + category + '/' + img.imgname))
		document.getElementById("image-desc").innerHTML = img.desc
		document.getElementById("image-title").innerHTML = img.name
		document.getElementById("myModal").style.display = 'block'	
	    }}
	    src={require('./imgCategories/' + category + '/' + img.imgname)} />
	    </React.Fragment>
	))
    }				   
}

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "All",
	    sort: "Date Asc.",
        };
    }

    changeCategory = category => {
        this.setState({ category: category });
    };

    changeSort = e => {
	this.setState({ sort: e.target.value });
    };

    render() {
        return (
		<div className="page">
		<div className="pageHeader">Photos</div>
		<div style={{display: "flex"}}>
		{Object.keys(categories).map(category => (
			<div
                    className="categories"
                    onClick={() => this.changeCategory(category)}
                	>
                        { category }
                    </div>
		))}
		<div className="sort">
                    <div className="sort-label">Sort By:&nbsp;&nbsp;</div>
                    <select className="sort-selector" onChange={this.changeSort}>
                        {sorts.map(sort => (
                            <option key={sort}>
                                {sort}
                            </option>
                        ))}
                    </select>
                </div>
   		</div>
		<div className="images">
		{ get_photos(this.state.category, this.state.sort) }
	    </div>
        </div>
        );
    }
}

export default Photos;
