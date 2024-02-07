// /src/pages/Home.js

import React from 'react';
import logoImage from '../images/jata_black.png'; // Adjust the path to your logo image

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Jata Fashion</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shopping Cart</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">My Jata</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Account</a>
            <a className="dropdown-item" href="#">Order History</a>
            <a className="dropdown-item" href="#">Login</a>
            <a className="dropdown-item" href="#">Sign Up</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <div>
        <h1 className="display-4">Welcome to JATA Fashion</h1>

      </div>
      <div>
         <img
         style={{ width: '400px', height: '400px' }}
         src={logoImage}/>
         <h2>About Us </h2>
         <p>Welcome to <a href="#">JATA Fashion</a> - <em>Your Ultimate Fashion Marketplace</em></p>
         <p><strong>At JATA Fashion, we believe that style is a unique expression of individuality. 
          Our platform is more than just an online marketplace; it's a community where 
          fashion enthusiasts can come together to explore, express, and empower.</strong></p>
         
         <h3>Our Mission </h3>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            Connecting Fashion Lovers Worldwide:
            </strong> JATA Fashion is the go-to destination for individuals who 
          appreciate the beauty of diverse styles. Whether you're a trendsetter, 
          a vintage lover, or someone with a passion for sustainable fashion, 
          our platform connects you with like-minded individuals from across
          the globe.</p>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            Empowering Your Style Journey:
            </strong> We empower users to curate their wardrobe by offering a seamless and 
          user-friendly experience. Sell clothes you've outgrown, discover unique 
          pieces, and express your style journey with confidence.</p>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            Promoting Sustainable Fashion:
            </strong> JATA Fashion is committed to sustainability. By giving pre-loved garments
          a second life, we contribute to reducing fashion waste and promoting a 
          more environmentally conscious lifestyle.</p>

         <h4>What Sets Us Apart </h4>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            User-Friendly Interface:
            </strong> Our platform is designed with you in mind. Enjoy a hassle-free 
          experience as you navigate through our intuitive interface to buy or 
          sell your favorite fashion items.</p>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            Secure Transactions:
            </strong> Rest easy knowing that your transactions are secure. Our robust 
          payment system and data protection measures prioritize the safety 
          and privacy of our users.</p>
         <p>
          <strong style={{ fontWeight: 'bold'}}>
            Diverse Fashion Ecosystem:
            </strong> From high-end designer pieces to budget-friendly fashion finds, JATA 
          Fashion embraces diversity. Discover a wide range of styles that cater 
          to every taste and budget.</p>

         <h5>Get Started Today! </h5>
         <p>Whether you're cleaning out your closet or looking to revamp your wardrobe, 
          JATA Fashion is here for you. Join our vibrant community, explore endless 
          fashion possibilities, and make your style statement with JATA Fashion. Your journey 
          to a more stylish and sustainable lifestyle starts here. Let's redefine fashion together!</p>
         <p>Happy shopping and selling,</p>
         <p><em style={{ fontWeight: 'bold'}}>
          The JATA Fashion Team</em></p>
      </div>
    {/* <button  type="button" className="btn btn-primary">
        Hello
    </button> */}
    </div>
  );
};

export default Home;







