import { provider, auth } from "../config/firebase";
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

import { login } from "../redux/user/userAction";
import { useDispatch } from "react-redux";

const useLogin = () => {

    const dispatch = useDispatch();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                dispatch(login(res.user));
            })
            .catch(err => {
                console.log(err);
            });
    };

    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                dispatch(login(res.user));
                console.log(res.user);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return { loginWithGoogle, loginWithEmail };
};

export default useLogin;