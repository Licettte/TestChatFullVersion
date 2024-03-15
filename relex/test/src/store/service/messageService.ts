import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {Messages, User} from "../../types/types";

const _message = `http://localhost:5000/v1/message`;

export const fetchMessages = createAsyncThunk<Messages, Messages>
('user/getMessages',
    async () => {
        return axios.get(_message, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }).then((response) => {

            return response.data;
        })
            .catch((e) => {
                console.log(e)
            });
    });


export const createMessage = createAsyncThunk<Messages, Messages>
('user/createMessage',
    async ({text, name, datetime}) => {
        return axios.post(_message, {text: text, name: name, datetime: datetime})
            .then((response) => {
                console.log(response.data, "data createMessage")
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    });


// export const createMessage = createAsyncThunk<Messages, Messages>
// ('user/createMessage',
//     async (data) => {
//
//         return axios.post(_message, {text: data.text, name: data.name, datetime: data.datetime})
//             .then((response) => {
//                 console.log(data, "data createMessage")
//                 return response.data;
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     });
