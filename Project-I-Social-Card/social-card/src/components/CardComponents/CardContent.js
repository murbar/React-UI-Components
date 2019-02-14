import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className="card-content">
      <div className="card-content-title">Get Started with React</div>
      <div className="card-content-body">
        React makes it painless to create interactive UIs. Design simple views for each state in
        your application.
      </div>
      <div className="card-content-link">reactjs.org</div>
    </div>
  );
}

export default CardContent;
