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
                        usually in rooms 736 or 738. In these meetings, learn new
                        moves, get to know each other better, create choreography projects, etc.
                        We use choreography projects as stress-free creative outlets,
                        as they are not for shows, and they are displayed at a
                        studio, typically during July or August. As a club, we also like to meet outside
                        of school to explore Manhattan, eat at restuarants, play games, and other activities to
                        create stronger bonds between our members.
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
