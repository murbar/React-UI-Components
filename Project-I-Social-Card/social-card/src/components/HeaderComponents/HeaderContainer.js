import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
  return (
    <div className="header-container">
      <div className="header-thumbnail">
        <ImageThumbnail />
      </div>
      <div className="header-main">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;
