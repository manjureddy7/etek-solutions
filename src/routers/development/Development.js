import { Link, Outlet, useLocation } from 'react-router-dom';
import './Development.css';

const DEVELOPMENTS = [
    {
        path: 'retail',
        label: 'Retail',
    },
    {
        path: 'it',
        label: 'Information Technology'
    },
    {
        path: 'healthcare',
        label: 'Healthcare'
    },
    {
        path: 'manufacturing',
        label: 'Manufacturing'
    },
    {
        path: 'insurance',
        label: 'Insurance'
    },
    {
        path: 'banking',
        label: 'Banking & Finance'
    }
]

const IMG_PATH = 'https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2022/07/Industry-technologies-development-matters.jpg?resize=870%2C675&ssl=1'
function Development() {

    const location = useLocation();
    const currentRoute = location.pathname.slice(13)
    return(
        <>
        <div className='img-container'>
            <img className='service-banner' src={IMG_PATH} alt='development' />
        </div>
        <div className='service-container'>
            <div className='links-container'>
                {DEVELOPMENTS.map(service => (
                    <div key={service.path} className={currentRoute===service.path ? 'active' : 'service-link'}>
                        <Link to={service.path}>{service.label}</Link>
                    </div>
                ))}
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default Development;
