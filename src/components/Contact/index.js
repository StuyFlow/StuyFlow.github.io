import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="page">
                <div className="pageHeader">Contact Us</div>
                <div className="sentence">
                <br></br>
                    Click on the links below to check us out on our social media!
                    </div>
                    <div className="a">
                      <a href="https://www.youtube.com/channel/UCsWvNNE26HT40Tk7O9afkSA">
                        <br></br>
                          Youtube
                      </a>
                    </div>
                    <div className="a">
                      <a href="https://www.instagram.com/stuyflow/">
                        <br></br>
                          Instagram: @stuyflow
                      </a>
                    </div>
                    <div className="a">
                      <a href="https://www.tiktok.com/@stuyflow?lang=en">
                        <br />
                          TikTok: @stuyflow
                      </a>
                    </div>
                    <div className="sentence">
                        <a href="mailto:stuyvesantflow@gmail.com?subject=test%20email"><br></br>If you would like to contact us, please send an email to stuyvesantflow@gmail.com</a>

                    </div>
                    <div>
                    <form action="mailto:someone@example.com" method="post" enctype="text/plain" />
Name:<br />
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br/ >
<input type="text" name="comment" size="50" /><br />
<input type="submit" value="Send" />
<input type="reset" value="Reset" />
                    </div>

            </div>
        );
    }
}

export default Contact;
