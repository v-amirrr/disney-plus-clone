import { provider, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { login } from "../redux/user/userAction";
import { useDispatch } from "react-redux";

const useLogin = () => {

    const dispatch = useDispatch();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                dispatch(login(res.user));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return { loginWithGoogle };
}

export default useLogin;