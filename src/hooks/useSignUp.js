import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux/es/exports";
import { login } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";

import { useNavigate } from "react-router-dom";

const useSignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = (username, email, password, confirmation) => {
        if (username && email && password && confirmation) {
            if (password == confirmation) {

                createUserWithEmailAndPassword(auth, email, password)
                    .then(res => {
                        updateProfile(res, { displayName: username });
                        localStorage.setItem("user", JSON.stringify(res.user));
                        dispatch(login(res.user));
                        navigate("/");
                    })
                    .catch(err => {
                        dispatch(setNewError(err.message));
                    });

            } else {
                dispatch(setNewError("the passwords aren't the same."));
            }
        } else {
            dispatch(setNewError("you have to fill all of the inputs."));
        }
    };

    return { signup };
};

export default useSignUp;