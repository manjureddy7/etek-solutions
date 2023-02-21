import './App.css';
import Development from './components/development/Development';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className='root'>
      <Navbar />
      <Welcome />
      <Services />
      <Development />
    </div>
  );
}

export default App;
