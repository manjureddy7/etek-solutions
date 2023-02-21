import React from 'react';
import { Fragment } from 'react';
import './App.css';
import Development from './components/development/Development';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Welcome from './components/welcome/Welcome';
import Crewfooter from './components/crewfooter';
import { library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLocationDot, faPhone );
    


function App() {
  return (
    <>
      <div className='root'>
        <Navbar />
        <Welcome />
        <Services />
        <Development />
        <footer>
          <Crewfooter/>
        </footer>
      </div>
    </>
  );
}

export default App;
