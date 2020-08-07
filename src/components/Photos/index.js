import React, { Component } from 'react';

import { clubPhotos } from './imgCategories/Club';
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
    "Merch": merchPhotos,
    "Others": otherPhotos,
};

const sorts = [ "Date Asc.", "Date Desc." ];

class Modal extends Component {
    render () {
    	return (
	    	<div className="modal">
        		<span
            	    className="close"
            	    onClick={() => this.props.setModalImg(null)}
        		>
                    &times;
                </span>
        		<div className="image-title">{this.props.img.title}</div>
        		<div style={{display: "flex"}}>
                    <div>
                		<img
                            className="big-image"
                            src={require(`./imgCategories/${this.props.img.category}/${this.props.img.imgname}`)}
                            alt={this.props.img.title}
                />
		<div className="image-desc">{this.props.img.desc}</div>
                <p className="image-credits">Photo Credits: {this.props.img.credits}</p>
		<a
                        className="download"
                        href={require(`./imgCategories/${this.props.img.category}/${this.props.img.imgname}`)}
                        download={this.props.img.imgname}
                    >
                        Download
                    </a>
                </div>

 	</div>

    		</div>
    	);
    }
}

class Image extends Component {
    render() {
    	return (
    		<img
                className="image-block"
                src={require(`./imgCategories/${this.props.category}/${this.props.imgname}`)}
                onClick={() => this.props.setModalImg(this.props)}
                alt={this.props.title}
            />
        );
    }
}

const processImages = (imgs, category) => {
    return imgs.map(img => {
        return {
            ...img,
            category,
            date: Date.parse(img.date),
        };
    });
};

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "All",
	        sort: "Date Asc.",
            modalImg: null,
        };
    }

    get_photos = (category, sort) => {
        let dates = [];
        if (category === "All") {
        	let c = Object.keys(categories);
        	c.shift();
            for (let aCategory of c) {
                dates = [...dates, ...processImages(categories[aCategory], aCategory)];
            }
        } else {
        	dates = [...processImages(categories[category], category)];
        }
        if (sort === "Date Desc.") {
            dates.sort((a, b) => a.date - b.date);
        } else {
            dates.sort((a, b) => b.date - a.date);
        }
        return dates.map(img => (
            <Image
                desc={ img.desc }
                title={ img.name }
                category={ img.category }
                imgname={img.imgname}
                credits={img.credits}
                setModalImg={this.setModalImg}
            />
        ));
    }

    setModalImg = modalImg => {
        if (modalImg) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        this.setState({ modalImg });
    };

    changeCategory = category => {
        this.setState({ category });
    };

    changeSort = e => {
        this.setState({ sort: e.target.value });
    };

    render() {
        return (
		<div className="page">
    		<div className="pageHeader">Photos</div>
    		<div className="section-nav d-none d-lg-flex photo-nav">
                {Object.keys(categories).map(category => (
                    <div
                        className={`section ${this.state.category === category ? 'section-active' : ''}`}
                        onClick={() => this.changeCategory(category)}
                    >
                        { category }
                    </div>
                ))}
                <div className="selector sort-selector">
                    <div className="label ">Sort By:</div>
                    <select className="dropdown" onChange={this.changeSort}>
                        {sorts.map(sort => (
                            <option key={sort}>
                                {sort}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="section-nav d-flex d-lg-none" style={{justifyContent: "center"}}>
                <div className="d-block d-lg-none">
                    <div className="selector">
                        <div className="label">Category:</div>
                        <select className="dropdown" onChange={e => this.changeCategory(e.target.value)}>
                            {Object.keys(categories).map(category => (
                                <option key={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="selector sort-selector">
                    <div className="label ">Sort By:</div>
                    <select className="dropdown" onChange={this.changeSort}>
                        {sorts.map(sort => (
                            <option key={sort}>
                                {sort}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
    		<div className="images">
    		      { this.get_photos(this.state.category, this.state.sort) }
    	    </div>
            { this.state.modalImg && <Modal img={this.state.modalImg} setModalImg={this.setModalImg}/> }
        </div>
        );
    }
}

export default Photos;
