import { provider, auth } from "../config/firebase";
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

import { login } from "../redux/user/userAction";
import { setNewError } from "../redux/error/errorAction";
import { useDispatch } from "react-redux";

const useLogin = () => {

    const dispatch = useDispatch();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                dispatch(login(res.user));
            })
            .catch(err => {
                dispatch(setNewError(err.message));
            });
    };

    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                dispatch(login(res.user));
                console.log(res.user);
            })
            .catch(err => {
                dispatch(setNewError(err.message));
            });
    };

    return { loginWithGoogle, loginWithEmail };
};

export default useLogin;