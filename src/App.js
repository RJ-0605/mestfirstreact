import React from 'react';
import dogpic from './doggie.jpg';
import NavbarComponent from './NavbarComponent';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';

import SixthComponent from './SixthComponent';
import SeventhComponent from './SeventhComponent';
import EighthComponent from './EighthComponent';
import NinthComponent from './NinthComponent';

import TenthComponent from './TenthComponent';
import './App.css';
import './NewCssApp.css';
import './Arrangeapp.css';


function App() {
  return (
    <div >
      <NavbarComponent />
      <FirstComponent />
      <br/>
      <img src={dogpic} className="displayed" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SecondComponent  />

      <ThirdComponent />
        <div > </div>
      <br/>
      <br/>
      <div className="clearboth"> </div>
      <br/>
      <FourthComponent />
      <br/>
      <SixthComponent />
      <br/>
      <br/>
      <br/>
      <SeventhComponent />
      <br/>
      <br/>
      <br/>
      <EighthComponent />
      <br/>
      <br/>
      <br/>
      <NinthComponent />
      <br/>
      <br/>
      <br/>
      <TenthComponent />
      <br/>
      <br/>
       
    </div>
      
  );
}

export default App;
