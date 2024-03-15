import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {createMessage, fetchMessages} from "../service/messageService";
import {MessageState} from '../../types/types'

const initialState: MessageState = {
    id: '',
    text: '',
    message:'',
    messages:[],
    name: '',
    datetime: '',
    status: 'idle',
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setinArrayMessages: (state, action) => {


        // ...state,
        //         items: [...state.items, payload],
            // @ts-ignore
            state.messages = [...state.messages, action.payload] ;
        },


        deleteMessage: (state, action) => {
            state.text = action.payload;
        },
        editMessage: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMessages.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                console.log(action.payload, " fetchMessage");

                state.status = 'finished';
                // @ts-ignore
                state.messages = action.payload

            })
            .addCase(createMessage.fulfilled, (state, action) => {
                state.status = 'finished';
            })


    }
});

export const {setMessage, setinArrayMessages, deleteMessage, editMessage} = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message.message;
export const selectMessages = (state: RootState) => state.message.messages;
export default messageSlice.reducer;
