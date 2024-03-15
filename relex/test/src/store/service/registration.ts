import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {User} from "../../types/types";

const _user = 'http://localhost:5000/v1/auth/registration';

export const registration = createAsyncThunk<User, User>
('user/register',
    async ({name, email, password}) => {
                return axios.post(_user, {name: name, email: email, password: password})
            .then((response) => {
                             return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    });
