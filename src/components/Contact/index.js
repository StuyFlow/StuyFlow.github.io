import React, { Component } from 'react';

import './Contact.css';

class SocialMediaIcon extends Component {
    render() {
        return (
            <a
                href={this.props.url}
                target='_blank'
                rel="noopener noreferrer"
            >
                <i className={`fab ${this.props.iconClass}`}/>
            </a>
        )
    }
}


class Contact extends Component {
    render() {
        return (
            <div className="page">
                <div className="pageHeader">Contact Us</div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
                <script src="https://kit.fontawesome.com/index.js"></script>
                <div className="sentence row">
                <div className="col-12">
                    Please send an email to <a href="mailto:stuyvesantflow@gmail.com?" target="_blank" rel="noopener noreferrer" className="contact-link"> stuyvesantflow@gmail.com </a> if you would like to contact us!
                </div>
                </div>
                <div className="sentence row">
                  <div className="col-lg-12">
                    Click the icons below to check us out on our social media pages!
                </div>
                </div>
                <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 col-md-6 fab-container"> <SocialMediaIcon url="https://www.facebook.com/StuyFl0w" iconClass="fa-facebook justify-content-center"/> </div>
                <div className="col-xl-3 col-sm-6 col-12 col-md-6 fab-container"> <SocialMediaIcon url="https://www.youtube.com/channel/UCsWvNNE26HT40Tk7O9afkSA" iconClass="fa-youtube justify-content-center"/> </div>
                <div className="col-xl-3 col-sm-6 col-12 col-md-6 fab-container"> <SocialMediaIcon url="https://www.instagram.com/stuyflow/" iconClass="fa-instagram justify-content-center"/> </div>
                {/* <div className="col-xl-3 col-sm-6 col-12 col-md-6 fab-container"> <SocialMediaIcon url="https://www.tiktok.com/@stuyflow/" iconClass="fa-tiktok justify-content-center"/></div> */}
                </div>

                <div className="sentence row">
                   Private Facebook Group (Stuyvesant Students Only)!
                </div>
                <div className="col-12 col-xl-3 fab-container">
                <SocialMediaIcon url="https://www.facebook.com/groups/277759659004764" iconClass="fa-facebook"/>
                </div>
                <div className="sentence row">
                <div className="col">
                    If you are interested in joining Flow, please join us at&nbsp;
                    <a href="https://stuyactivities.org/StuyFlow" target='_blank' rel="noopener noreferrer" className="contact-link">
                          StuyActivities!
                    </a>.
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
