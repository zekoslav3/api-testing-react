import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';

const ApiButtons = ({ radioValue, setRadioValue, radioButtons }) => {  
    return (
        <div className="mb-4">
            <ButtonGroup>
                {radioButtons.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-dark"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={setRadioValue}
                    >
                    {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>        
    )
}

export default ApiButtons;