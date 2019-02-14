import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="social-card">
      <HeaderContainer />
      <CardContainer />
      <Footer retweetsCount="6" likesCount="4" />
    </div>
  );
};

export default App;
