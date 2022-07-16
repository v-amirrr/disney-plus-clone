import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux/es/exports";
import { login } from "../redux/user/userAction";

const useSignUp = () => {

    const dispatch = useDispatch();

    const signup = (username, email, password, confirmation) => {
        if (username, email, password, confirmation) {
            if (password == confirmation) {

                createUserWithEmailAndPassword(auth, email, password)
                    .then(res => {
                        updateProfile(res, { displayName: username });
                        dispatch(login(res.user));
                    })
                    .catch(err => {
                        console.log(err.message);
                    });

            } else {
                console.log("The passwords aren't the same");
            }
        } else {
            console.log("You have to fill all of the inputs");
        }
    };

    return { signup };
};

export default useSignUp;