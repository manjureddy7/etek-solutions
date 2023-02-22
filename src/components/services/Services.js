import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Services.css';
import CloudIcon from '@mui/icons-material/Cloud';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function Services() {
    return(
        <div className="services-container">
            <div className='services-text'>
                <h1>IT<span className='highlight'>SERVICES</span></h1>
                <p>Our vision is to be a world-class business integration service provider. PTechCrew believes technology should enable collaboration.</p>
            </div>
            <div className='services-action'>
            <div className='dev-icons'>
                    <div>
                        <CloudIcon />
                        <div>AWS</div>
                    </div>
                    <div>
                        <AssessmentIcon />
                        <div>Big Data</div>
                    </div>
                    <div>
                        <AllInclusiveIcon />
                        <div>DevOps</div>
                    </div>
                </div>
                <Button variant="primary" className='actn-btn'>
                    <Link to={'services'}>View all Services</Link>
                </Button>
            </div>
        </div>
    )
}

export default Services;
