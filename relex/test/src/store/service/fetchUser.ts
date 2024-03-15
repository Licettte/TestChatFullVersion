import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {User} from "../../types/types";

const _user = `http://localhost:5000/v1/auth/users`;

export const fetchUsers = createAsyncThunk<any, User>
('user/getUser',
    async () => {
        return axios.get(_user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })

            .then((response) => {
                console.log(response.data, "response.data")
                return response.data;
            })
            .catch((e) => {
                console.log(e)
            });
    });
