import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
    render() {
        return (
             <div className="page">
                <div className="pageHeader">Contact Us</div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
                <script src="https://kit.fontawesome.com/index.js"></script>

             <div className="sentence">
                <br></br>
                If you would like to contact us, please send an email to&nbsp;
                    <a href="mailto:stuyvesantflow@gmail.com?subject=test%20email"><br></br>stuyvesantflow@gmail.com</a>
                    <br></br>

                </div>
                <br></br>
                <div className="sentence">
                  <br></br>
                    Click the icons below to check us out on our social media!
                </div>
                <br></br>

                <a href="https://www.facebook.com/StuyFl0w" class="fab fa-facebook-square" style={{fontSize: '40px'}}></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.youtube.com/channel/UCsWvNNE26HT40Tk7O9afkSA" class="fab fa-youtube" style={{fontSize: '38px'}}></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/stuyflow/" class="fab fa-instagram" style={{fontSize: '40px'}}></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.tiktok.com/@stuyflow?lang=en" class="fab fa-tiktok"style={{fontSize: '40px'}}></a>

                <div className="sentence">
                   <br></br>
                   Private Facebook Group (Stuyvesant Students Only!)
                </div>
                   <br></br>
                         <a href="https://www.facebook.com/groups/277759659004764" class="fab fa-facebook-square" style={{fontSize: '40px'}}></a>

                {/* <div className="sentence">
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
                    <div className="a">
                      <a href="https://www.facebook.com/StuyFl0w"><br></br>
                          Public Facebook page
                      </a>
                    </div>
                    <div className="a">
                      <a href="https://www.facebook.com/groups/277759659004764">
                        <br />
                          Private Facebook group (Stuyvesant Students/Alumni only!)
                      </a>
                    </div> */}
            </div>
        );
    }
}

export default Contact;
