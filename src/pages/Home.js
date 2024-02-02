// /src/pages/Home.js

import React from 'react';
import logoImage from '../images/jata_black.png'; // Adjust the path to your logo image


const Home = () => {
  return (
    <div>
      <div>
        <h1 className="display-4">Welcome to JATA Fashion</h1>

      </div>
      <div>
         <img
         style={{ width: '100px', height: '100px' }}
         src={logoImage}/>

      </div>
    <button  type="button" class="btn btn-primary">
        Hello
    </button>
    </div>
  );
};

export default Home;
