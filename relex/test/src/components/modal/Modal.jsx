import React, {useState} from 'react';
import {ButtonModal, InputModal, WrapperModal, FormModal} from "./ModaleStyle";
export const Modal = ({setIsEditText, setIsModalActive}) => {

    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        setIsEditText(text);
        setIsModalActive(false)
    };

    return (
        <WrapperModal $direction='column' $align='flex-start' $justify='flex-start'>
            <FormModal onSubmit={onSubmit}>
                <InputModal value={text} onChange={(e) => setText(e.target.value)}/>
                <ButtonModal type="submit"> ok</ButtonModal>
            </FormModal>
        </WrapperModal>
    );
};
