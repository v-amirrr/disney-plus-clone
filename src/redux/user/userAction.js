export const login = (value=null) => {
    return { type: "LOGIN", payload: value };
}

export const logout = () => {
    return { type: "LOGOUT" };
}

export const loadingOn = () => {
    return { type: "LOADING_ON" };
}

export const loadingOff = () => {
    return { type: "LOADING_OFF" };
}