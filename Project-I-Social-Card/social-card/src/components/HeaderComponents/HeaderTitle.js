import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="header-title">
      <span className="header-name">Lambda School</span>
      <span className="header-handle">@LambdaSchool</span>
      <span className="header-timestamp">26 Jan</span>
    </div>
  );
}

export default HeaderTitle;
