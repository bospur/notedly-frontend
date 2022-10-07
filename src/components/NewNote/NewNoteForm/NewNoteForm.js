import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import MainButton from '../../../ui/buttons/main-button';
import FormTextArea from '../../../ui/textarea/FormTextArea';
import { GET_NOTES, NEW_NOTE } from '../../../utils.js/api';
import cl from './NewNoteForm.module.css';

const NewNoteForm = () => {
    const [form, setForm] = useState({
        content: ''
    });

    const [ newNote ] = useMutation(NEW_NOTE, {
        refetchQueries: [{ query: GET_NOTES }],
        onCompleted: data => {
            setForm({
                content: ''
            })
        }
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (form.content.length > 10) {
            newNote({
                variables: {
                    ...form
                }
            })
        } else {
            console.log('Минимум 10 символов')
        }        
    };

    const onChangeText = (e) => {
        setForm({
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className={cl.from} onSubmit={onSubmitForm}>
            <FormTextArea 
                name="content"
                value={form.content}
                onChange={onChangeText}
            />
            <MainButton>Save</MainButton>
        </form>
    );
}

export default NewNoteForm;
