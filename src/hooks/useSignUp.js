import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux/es/exports";
import { login, loadingOn, loadingOff } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";

import { useNavigate } from "react-router-dom";

const useSignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = (username, email, password, confirmation) => {
        if (username && email && password && confirmation) {
            if (password == confirmation) {
                dispatch(loadingOn());
                
                createUserWithEmailAndPassword(auth, email, password)
                    .then(res => {
                        updateProfile(res, { displayName: username });
                        localStorage.setItem("user", JSON.stringify(res.user));
                        dispatch(login(res.user));
                        navigate("/");
                        dispatch(loadingOff());
                    })
                    .catch(err => {
                        dispatch(loadingOff());
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