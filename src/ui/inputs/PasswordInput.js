import React, { useState } from 'react';
import LockIcon from '../icons/lock-icon';
import UnLockIcon from '../icons/unLock-icon';
import cl from './PasswordInput.module.css';

const PasswordInput = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isLock, setIsLock] = useState(true)

    const isActiveStyles = isActive ? {transform: 'translate(0, 0)', visibility: 'visible'} : {} ;

    const onInputClick = () => {
        setIsActive(true);
    }
    const onIconClick = () => {
        setIsLock(!isLock)
    }
    const type = isLock ? 'password' : 'text';

    return (
        <div className={cl.fieldset}>
            <label htmlFor={props.id} style={isActiveStyles}>{props.label}</label>
            <input
                {...props}
                onClick={onInputClick}
                placeholder={isActive ? '' : props.placeholder}
                onBlur={() => setIsActive(false)}
                type={type}
            />
            {
                isLock ? <LockIcon onClick={onIconClick}/> : <UnLockIcon onClick={onIconClick} />
            }
        </div>
    );
}

export default PasswordInput;
