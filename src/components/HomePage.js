import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/user/userAction";

import AfterLogin from './AfterLogin';
import BeforeLogin from "./BeforeLogin";

const HomePage = () => {

    const dispatch = useDispatch();

    const [localUser, setLocalUser] = useState(JSON.parse(localStorage.getItem("user")));

    useEffect(() => {
        if (localUser) {
            dispatch(login(localUser));
        }
    }, []);

    return (
        <>
            {
                localUser
                ?
                <AfterLogin />
                :
                <BeforeLogin />
            }
        </>
    );
};

export default HomePage;