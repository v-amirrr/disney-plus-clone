import { provider, auth } from "../config/firebase";
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

import { login, loadingOn, loadingOff } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const useLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = () => {
        dispatch(loadingOn());

        signInWithPopup(auth, provider)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.user));
                dispatch(login(res.user));
                navigate("/");
                dispatch(loadingOff());
            })
            .catch(err => {
                dispatch(loadingOff());
                dispatch(setNewError(err.message));
            });
    };

    const loginWithEmail = (email, password) => {
        if (email && password) {
            dispatch(loadingOn());
    
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {
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
            dispatch(setNewError("you have to fill all of the inputs."));
        }
    };

    return { loginWithGoogle, loginWithEmail };
};

export default useLogin;