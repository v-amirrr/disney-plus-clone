const initialState = {
    recommended: null,
    newToDisney: null,
    originals: null,
    trending: null
};

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_MOVIE":
            return { 
                ...state, 
                recommended: action.payload.recommended, 
                newToDisney: action.payload.newToDisney, 
                originals: action.payload.originals, 
                trending: action.payload.trending,  
            };

        default:
            return state;
    };
};