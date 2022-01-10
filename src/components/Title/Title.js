import React from 'react';
import './Title.css';

const Title = () => {
    return (
        <div>
            <h1 className='title'>API JSON testing</h1>
            <h3 className='sub-title'>Test different <a href='https://jsonplaceholder.typicode.com/' target='_blank' rel='noreferrer'>{`{JSON}`} Placeholder API</a> calls.</h3>
        </div>
    )
}

export default Title;