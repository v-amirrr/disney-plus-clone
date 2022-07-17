import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux/es/exports";
import { login } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";

const useSignUp = () => {

    const dispatch = useDispatch();

    const signup = (username, email, password, confirmation) => {
        if (username && email && password && confirmation) {
            if (password == confirmation) {

                createUserWithEmailAndPassword(auth, email, password)
                    .then(res => {
                        updateProfile(res, { displayName: username });
                        dispatch(login(res.user));
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