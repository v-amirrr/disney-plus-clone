const initialState = {
    user: null,
    loading: false,
};

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };

        case "LOGOUT":
            return { user: null };

        case "LOADING_ON":
            return { ...state, loading: true };

        case "LOADING_OFF":
            return { ...state, loading: false };

        default:
            return state;
    };
};