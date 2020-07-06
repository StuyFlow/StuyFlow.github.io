import React, { Component } from 'react';
import backgroundVideo from './background_video.mp4';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="home-div video">
                    <video autoPlay muted loop className="backgroundVideo">
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video>
                    <div className="frontpage-desc">
                        <div className="club-name">StuyFlow</div>
                        <div className="slogan">Stars Shine Brightest in the Dark</div>
                    </div>
                </div>
                <div className="about-page home-div">
                    <div className="pageHeader">What is StuyFlow?</div>
                    <div>
                        StuyFlow is a highschool club based in New York City
                        focused on mastering props to create shows. The props
                        we use include: poi, whips, staffs, and fans. We
                        teach members how to use this variety to perform in
                        any of three school shows--StuySquad, SING!, and SOS.
                        We operate on a set of principles known as PLURR,
                        partly due to the large culmulative effort needed to
                        run shows smoothly. This motto stands for “Peace,
                        Love, Unity, Respect, and Responsibility”.
                    </div>
                    <div>
                        During off-seasons, a.k.a. times when we don’t
                        have shows, we meet on Wednesdays and Fridays,
                        usually in room 736 or 738. These meetings are
                        used to get to know each other better, learn new
                        moves, create choreography projects, etc. We use
                        choreography projects as stress-free creative outlets,
                        as they are not for shows, and they are displayed at a
                        studio, typically during July or August.
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
