export const login = (value=null) => {
    return { type: "LOGIN", payload: value };
}

export const logout = () => {
    return { type: "LOGOUT" };
}