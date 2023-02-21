import React from 'react';
import { Fragment } from 'react';
import './App.css';
import Crewfooter from './components/crewfooter';
import { library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLocationDot, faPhone );

function App() {
  return (
    <>
      <div>
        ETEK SOLUTIONS
      </div>
      <footer>
        <Crewfooter/>
      </footer>
    </>
  );
}

export default App;
