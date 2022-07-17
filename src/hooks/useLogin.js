import { provider, auth } from "../config/firebase";
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

import { login } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const useLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.user));
                dispatch(login(res.user));
                navigate("/");
            })
            .catch(err => {
                dispatch(setNewError(err.message));
            });
    };

    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.user));
                dispatch(login(res.user));
                navigate("/");
            })
            .catch(err => {
                dispatch(setNewError(err.message));
            });
    };

    return { loginWithGoogle, loginWithEmail };
};

export default useLogin;