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
                <div className="sentence">
                    If you would like to contact us, please send an email to&nbsp;
                    <a href="mailto:stuyvesantflow@gmail.com?" target="_blank" rel="noopener noreferrer" className="contact-link">stuyvesantflow@gmail.com</a>!
                </div>
                <div className="sentence">
                    Click the icons below to check us out on our social media pages!
                </div>

                <SocialMediaIcon url="https://www.facebook.com/StuyFl0w" iconClass="fa-facebook"/>
                <SocialMediaIcon url="https://www.youtube.com/channel/UCsWvNNE26HT40Tk7O9afkSA" iconClass="fa-youtube"/>
                <SocialMediaIcon url="https://www.instagram.com/stuyflow/" iconClass="fa-instagram"/>
                <SocialMediaIcon url="https://www.tiktok.com/@stuyflow/" iconClass="fa-tiktok"/>

                <div className="sentence">
                   Private Facebook Group (Stuyvesant Students Only)!
                </div>

                <SocialMediaIcon url="https://www.facebook.com/groups/277759659004764" iconClass="fa-facebook"/>

                <div className="sentence">
                    For more information about our club, visit us at&nbsp;
                    <a href="https://www.stuyactivities.org/club/stuyflow" target='_blank' rel="noopener noreferrer" className="contact-link">
                          StuyActivities
                    </a>.
                </div>
            </div>
        );
    }
}

export default Contact;
