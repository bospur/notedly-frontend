import React, { useState } from 'react';
import cl from './FormInput.module.css';

const FormInput = (props) => {
    const [isActive, setIsActive] = useState(false);

    const isActiveStyles = isActive ? {transform: 'translate(0, 0)', visibility: 'visible'} : {} ;

    const onInputClick = () => {
        setIsActive(true);
    }
    return (
        <div className={cl.fieldset}>
            <label htmlFor={props.id} style={isActiveStyles}>{props.label}</label>
            <input
                {...props}
                onClick={onInputClick}
                placeholder={isActive ? '' : props.placeholder}
                onBlur={() => setIsActive(false)}
                
            />
        </div>
    );
}

export default FormInput;
