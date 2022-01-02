import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Home = ({ authService }) => {
  return (
    <section>
      <Header onLogout={authService.logout} />
      <h1>Home</h1>
      <Footer />
    </section>
  );
}

export default Home;
