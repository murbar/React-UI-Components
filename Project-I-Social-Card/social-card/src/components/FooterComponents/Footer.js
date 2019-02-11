import React from 'react';
import { Heart, MessageCircle, Repeat, Mail } from 'react-feather';

import './Footer.css';

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-comments">
        <MessageCircle /> <span className="count">{props.commentsCount}</span>
      </div>
      <div className="footer-retweets">
        <Repeat /> <span className="count">{props.retweetsCount}</span>
      </div>
      <div className="footer-likes">
        <Heart /> <span className="count">{props.likesCount}</span>
      </div>
      <div className="footer-shares">
        <Mail /> <span className="count">{props.sharesCount}</span>
      </div>
    </div>
  );
}

export default Footer;
