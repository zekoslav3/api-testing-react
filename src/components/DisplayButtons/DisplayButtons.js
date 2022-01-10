import React from 'react';
import { Button } from 'react-bootstrap';

const DisplayButtons = ({ returnData, resetData }) => {
    return (
        <div className="mb-4">
            <Button variant="success" onClick={returnData}>Run</Button>{' '}
            <Button variant="secondary" onClick={resetData}>Reset</Button>
        </div>     
    )
}

export default DisplayButtons;