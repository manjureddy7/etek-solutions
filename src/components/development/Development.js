import Button from 'react-bootstrap/Button';
import "./Development.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link, useLocation } from 'react-router-dom';

function Development() {
    return(
        <div className="development-container">
            <div className='development-text'>
                <h1>MTEK<span className='highlight'>DEVELOPMENT</span></h1>
                <p>
                    Our Exceptional understanding of various industry verticals enables us to provide innovative and challenging end-to-end technology solutions. We leverage our business knowledge with our expertise across various lines of technologies. Following are the industries that we are currently dealing with
                </p>
            </div>
            <div className='development-action'>
                <div className='dev-icons'>
                    <div>
                        <ShoppingBagIcon />
                        <div>Retail</div>
                    </div>
                    <div>
                        <HealthAndSafetyIcon />
                        <div>Healthcare</div>
                    </div>
                    <div>
                        <LaptopMacIcon />
                        <div>IT</div>
                    </div>
                </div>
                <Button variant="primary" className='actn-btn'>
                    <Link to={'development'}>View All Industries</Link>
                </Button>
            </div>
        </div>
    )
}

export default Development;
