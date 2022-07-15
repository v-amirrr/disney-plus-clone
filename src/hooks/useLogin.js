import { provider, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const useLogin = () => {
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return { loginWithGoogle };
}

export default useLogin;