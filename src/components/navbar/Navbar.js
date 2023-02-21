
import { NAVBAR_LINKS } from './constants';
import './Navbar.css';
import techLogo from '../../common/images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar-container">
            <div className="logo">
                <img src={techLogo}  alt="logo" height="100px" width="100px" />
            </div>
            <div className="nav-links">
                {NAVBAR_LINKS.map(link => (<Link to={link.path} className='link' key={link.path}>{link.label}</Link>))}
            </div>
        </div>
    )
}

export default Navbar;
