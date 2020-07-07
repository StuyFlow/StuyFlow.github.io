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
                    <a href="mailto:stuyvesantflow@gmail.com?subject=test%20email"><br></br>stuyvesantflow@gmail.com</a> <br></br>!
                    <br></br>

                </div>
                <br></br>
                <div className="sentence">
                  <br></br>
                    Click the icons below to check us out on our social media pages!
                </div>
                <br></br>

                <a href="https://www.facebook.com/StuyFl0w" className="fab fa-facebook-square" target='_blank'></a>
                <a href="https://www.youtube.com/channel/UCsWvNNE26HT40Tk7O9afkSA" className="fab fa-youtube target='_blank'" ></a>
                <a href="https://www.instagram.com/stuyflow/" className="fab fa-instagram" target='_blank' ></a>
                <a href="https://www.tiktok.com/@stuyflow?lang=en" className="fab fa-tiktok" target='_blank'></a>

                <div className="sentence">
                   <br></br>
                   Private Facebook Group (Stuyvesant Students Only)!
                </div>
                   <br></br>
                         <a href="https://www.facebook.com/groups/277759659004764" class="fab fa-facebook-square" target='_blank' ></a>
                         <div className="sentence">
                         <br></br>
                         For more information about our club, visit us at&nbsp;
                      <a href="https://www.stuyactivities.org/club/stuyflow">
                        <br />
                          StuyActivities
                      </a>
                      <br></br>.
                    </div>
            </div>

        );
    }
}

export default Contact;
