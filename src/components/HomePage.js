import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/user/userAction";

import AfterLogin from './AfterLogin';
import BeforeLogin from "./BeforeLogin";

const localUser = JSON.parse(localStorage.getItem("user"));

const HomePage = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.userState.user);

    useEffect(() => {
        if (localUser) {
            dispatch(login(localUser));
        }
    }, []);

    return (
        <>
            {
                user
                ?
                <AfterLogin />
                :
                <BeforeLogin />
            }
        </>
    );
};

export default HomePage;