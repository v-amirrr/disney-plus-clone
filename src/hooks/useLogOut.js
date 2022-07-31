import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

import { setNewError } from "../redux/error/errorAction";
import { loadingOff, loadingOn, logout } from "../redux/user/userAction";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const useLogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {
        dispatch(loadingOn());

        signOut(auth)
            .then(res => {
                dispatch(logout());
                localStorage.clear();
                setTimeout(() => {                    
                    navigate("/");
                    dispatch(loadingOff());
                }, 500);
            })
            .catch(err => {
                dispatch(loadingOff());
                dispatch(setNewError(err));
            });
    };

    return { logoutUser };
};

export default useLogOut;