import React from 'react';
import cl from './FormTextArea.module.css';

const FormTextArea = (props) => {
    return (
        <textarea {...props} className={cl.textarea}/>
    );
}

export default FormTextArea;
