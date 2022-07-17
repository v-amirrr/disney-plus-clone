const initialState = {
    error: "",
};

export const errorReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_NEW_ERROR":
            return { ...state, error: action.payload };

        default:
            return state;
    };
};