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


    // snaps video/description 

    // bindScrollSnap() {
    //     const element = this.homeRef.current;
    //     const snapElement = new ScrollSnap(element, {
    //         snapDestinationY: '100%',
    //     });

    //     snapElement.bind();
    // }

    // componentDidMount() {
    //     this.bindScrollSnap();
    // }

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
                        alt="StuyFlow Background From SOS"
                    />
                    <div className="frontpage-desc">
                        <div className="club-name">StuyFlow</div>
                        <div className="slogan">Stars Shine Brightest in the Dark</div>
                    </div>
                </div>
                <div className="about-page home-div" id="about">
                    <div className="pageHeader">What is StuyFlow?</div>
                    <div className="about-desc">
                        StuyFlow is a high school club based at Stuyvesant in New York City that practices the art of Flow with light-up equipment! We teach members how to handle a variety of props such as poi, whips, staffs, glow sticks, fans, and much more. We operate on a set of principles known as PLURR, partly due to the large cumulative effort needed to run shows smoothly. This motto stands for "Peace, Love, Unity, Respect, and Responsibility".
                    </div>
                    <div className="about-desc">
                        We perform at Stuyvesant's 3 annual shows (StuySquad, SING!, and SOS) as well as a variety of other events outside of school. During the show season, we hold practices daily. When we aren't preparing for a show, meetings are held twice a week, usually on Wednesdays and Fridays. We also host fun events outside of school! We frequently go to dance studios, eat at restaurants, play games, and do a variety of other activities to explore the city.
                    </div>
                    <div className="about-desc">
                        If you currently attend Stuyvesant High School and find any of this interesting, we highly recommend you to join. No experience is necessary-- just show up to one of our meetings!                    </div>
                    <div style={{height: "120px"}}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
