import React, { Component } from 'react';
import backgroundVideo from './background_video.mp4';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <video autoPlay muted loop className="backgroundVideo">
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video>
                    <div className="frontpage-desc">
                        <div className="club-name">StuyFlow</div>
                        <div className="slogan">Stars Shine Brightest in the Dark</div>
                    </div>
                </div>
                <div className="page">
                    <div className="pageHeader">What is StuyFlow?</div>
                    <div className="about-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Egestas sed sed risus pretium quam vulputate. Commodo viverra maecenas accumsan lacus vel. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Nullam non nisi est sit amet. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Sed ullamcorper morbi tincidunt ornare. Fermentum odio eu feugiat pretium nibh. Tincidunt dui ut ornare lectus sit amet. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Est pellentesque elit ullamcorper dignissim cras tincidunt. Enim nec dui nunc mattis enim ut tellus. Mattis vulputate enim nulla aliquet porttitor lacus luctus.
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
