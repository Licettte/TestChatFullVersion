import React, {useEffect, useMemo, useState} from 'react';
import {Flex} from "../../../styles/Flex";

import {useAppSelector} from "../../../store/hooks";
import {selectToken} from "../../../store/slices/userSlice";
import {FormRadioBtn, InputRadio, Label} from "./filterUserStyle";

const FilterUserName = ({messages, setFilterName}) => {
    const token = useAppSelector(selectToken);
    const senderName = token[2];
    const recipient = messages.filter(element => element.name !== senderName)[0]?.name;
    const [value, setValue] = useState(senderName);
    const [recipientName, setRecipientName] = useState("собеседник не выбран");

    useEffect(() => {
        if (recipient) {
            setRecipientName(recipient)
        }
    }, [recipient]);

    function changeValue(event) {
        setFilterName(event.target.value);
        setValue(event.target.value);
    }

    return (

        <Flex $align='center' $direction='column'>
            <h3 style={{color: "#878383"}}> фильтр по имени:</h3>
            <FormRadioBtn>
                <InputRadio
                    type="radio"

                    value={senderName}
                    id='opt1'
                    checked={value === senderName}
                    onChange={(e) => changeValue(e)}/>
                <Label for="opt1">{senderName} </Label>
            </FormRadioBtn>

            <FormRadioBtn>
                <InputRadio
                    type="radio"
                    id='opt2'
                    value={recipientName}
                    checked={value === recipientName}
                    onChange={(e) => changeValue(e)}/>
                <Label for="opt2"> {recipientName} </Label>
            </FormRadioBtn>

            <FormRadioBtn>
                <InputRadio
                    type="radio"
                    id='opt3'
                    value=""
                    checked={value === ""}
                    onChange={(e) => changeValue(e)}/>
                <Label for="opt3"> сбросить </Label>
            </FormRadioBtn>

        </Flex>

    );
};

export default FilterUserName;
