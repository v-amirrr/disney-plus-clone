import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

import { setNewError } from "../redux/error/errorAction";
import { logout } from "../redux/user/userAction";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {
        signOut(auth)
            .then(res => {
                dispatch(logout(res));
                localStorage.clear();
                navigate("/");
            })
            .catch(err => {
                dispatch(setNewError(err));
                navigate("/");
            });
    };

    return { logoutUser };
};

export default useLogout;