import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {User} from "../../types/types";

const _user = `http://localhost:5000/v1/auth/login`;
export const login = createAsyncThunk<any, User>
('/user/login',
    async ({email, password}) => {
        return axios.post(_user, {email: email, password: password})
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                console.log(e)
            });
    });

