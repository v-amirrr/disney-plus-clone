export const login = (value=null) => {
    return { type: "LOGIN", payload: value };
}

export const logout = (value=null) => {
    return { type: "LOGOUT", payload: value };
}