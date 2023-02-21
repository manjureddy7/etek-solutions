import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './routers/about/About';
import Services from './routers/services/Services';
import Development from './routers/development/Development';
import Navbar from './components/navbar/Navbar';
import AI from './routers/services/components/AI';
import Aws from './routers/services/components/Aws';
import Devops from './routers/services/components/Devops';
import DataScience from './routers/services/components/DataScience';
import BigData from './routers/services/components/BigData';
import DataEngineering from './routers/services/components/DataEngineering';
import Azure from './routers/services/components/Azure';
import IndexRoute from './routers/services/components/IndexRoute';
import Retail from './routers/development/components/Retail';
import IT from './routers/development/components/IT';
import Healthcare from './routers/development/components/Healthcare';
import Manufacturing from './routers/development/components/Manufacturing';
import Insurance from './routers/development/components/Insurance';
import Banking from './routers/development/components/Banking';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>
  },
  {
    path: "/services",
    element: <div>
      <Navbar />
      <Services />
    </div>,
    children: [
      { index: true, element: <IndexRoute /> },
      {
        path: "ai",
        index: true,
        element: <AI />,
      },
      {
        path: 'aws',
        element: <Aws />
      },
      {
        path: 'devops',
        element: <Devops />
      },
      {
        path: 'data-science',
        element: <DataScience />
      },
      {
        path: 'big-data',
        element: <BigData />
      },
      {
        path: 'data-engineering',
        element: <DataEngineering />
      },
      {
        path: 'azure',
        element: <Azure />
      }
    ],
  },
  {
    path: "/development",
    element: <div>
      <Navbar />
      <Development />
    </div>,
    children: [
      { index: true, element: <IndexRoute /> },
      {
        path: "retail",
        element: <Retail />
      },
      {
        path: 'it',
        element: <IT />
      },
      {
        path: 'healthcare',
        element: <Healthcare />
      },
      {
        path: 'manufacturing',
        element: <Manufacturing />
      },
      {
        path: 'insurance',
        element: <Insurance />
      },
      {
        path: 'banking',
        element: <Banking />
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
