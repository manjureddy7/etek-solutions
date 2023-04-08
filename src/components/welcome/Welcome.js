import React from 'react';
import './Welcome.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Welcome() {
    return(
        <div className='landing'>
            <h1>WELCOME TO <span className='company'>EMTEKSOLUTIONS</span></h1>
            <p>
                MTekSolutions is an US based IT development, services and products company that focuses on providing the best business integration service through the application of technology.
            </p>
            <Button variant="primary">
                <Link to={'about'}>Read more</Link>
            </Button>{' '}
        </div>
    )
}

export default Welcome;
