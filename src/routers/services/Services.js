import { Link, Outlet } from 'react-router-dom';
import './Services.css';
import { useLocation } from 'react-router-dom';

const SERVICES = [
    {
        path: 'ai',
        label: 'Artificial Intelligence',
    },
    {
        path: 'aws',
        label: 'AWS'
    },
    {
        path: 'azure',
        label: 'Azure'
    },
    {
        path: 'devops',
        label: 'Devops'
    },
    {
        path: 'data-science',
        label: 'Data Science'
    },
    {
        path: 'big-data',
        label: 'Big Data'
    },
    {
        path: 'data-engineering',
        label: 'Data Engineering'
    }
];

const IMG_PATH = 'https://blog.planview.com/wp-content/uploads/2014/01/AAEAAQAAAAAAAAOOAAAAJDVhMGZhZmJkLTJlMDQtNDExOS05YTliLTAyYWVkMTY5MmUzOQ.jpg'

function Services() {
    const location = useLocation();
    const currentRoute = location.pathname.slice(10)
    return(
        <>
        <div className='img-container'>
            <img className='service-banner' src={IMG_PATH} alt='services' />
        </div>
        <div className='service-container'>
            <div className='links-container'>
                {SERVICES.map(service => (
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

export default Services;
