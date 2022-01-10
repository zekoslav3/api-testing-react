import React from 'react';
import './DisplayResult.css';

const DisplayResult = () => {
    return (
        <div className="json mb-4">
            <div id="error-alert" className="alert alert-danger" role="alert" hidden></div>
            <div id="data-length" className="mb-3"></div>
            <code id="result" className="code-text-color"></code>
        </div>       
    )
}

export default DisplayResult;