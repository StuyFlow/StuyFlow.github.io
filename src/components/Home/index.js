import React, { Component } from 'react';
import Footer from '../Utils/Footer';

import backgroundVideo from './background_video.mp4';
import backgroundPhoto from './background_photo.jpg';
import './Home.css';

import ScrollSnap from 'scroll-snap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.homeRef = React.createRef();
    }

    bindScrollSnap() {
        const element = this.homeRef.current;
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: '100%',
        });

        snapElement.bind();
    }

    componentDidMount() {
        this.bindScrollSnap();
    }

    render() {
        return (
            <div className="homepage" ref={this.homeRef}>
                <div className="home-div home-video d-none d-lg-block">
                    <video autoPlay muted loop className="backgroundVideo">
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video>
                    <div className="frontpage-desc">
                        <div className="club-name">StuyFlow</div>
                        <div className="slogan">Stars Shine Brightest in the Dark</div>
                    </div>
                </div>
                <div className="home-div home-video d-block d-lg-none">
                    <img
                        className="backgroundVideo"
                        src={backgroundPhoto}
                        alt="StuyFlow Background Photo"
                    />
                    <div className="frontpage-desc">
                        <div className="club-name">StuyFlow</div>
                        <div className="slogan">Stars Shine Brightest in the Dark</div>
                    </div>
                </div>
                <div className="about-page home-div" id="about">
                    <div className="pageHeader">What is StuyFlow?</div>
                    <div className="about-desc">
                        StuyFlow is a highschool club based in New York City
                        focused on learning how to use light up props to create
                        visually aesthetic performances
                        We teach members how to use a variety of props
                        like poi, whips, staffs, and fans to perform in our annual shows -
                        StuySquad, SING!, SOS while also performing in a variety of other events.
                        We operate on a set of principles known as PLURR,
                        partly due to the large culmulative effort needed to
                        run shows smoothly. This motto stands for “Peace,
                        Love, Unity, Respect, and Responsibility”.
                    </div>
                    <div className="about-desc">
                        During off-seasons, a.k.a. times when we don’t
                        have shows, we meet on Wednesdays and Fridays,
                        usually in rooms 736 or 738. In these meetings, we learn new
                        moves, get to know each other better, create choreography projects, etc.
                        We use choreography projects as stress-free creative outlets,
                        as they are not for shows, and they are displayed at a
                        studio, typically during July or August. As a club, we also like to meet outside
                        of school to explore Manhattan, eat at restuarants, play games, and other activities to
                        create stronger bonds between our members.
                    </div>
                    <div style={{height: "120px"}}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
