const initialState = {
    recommend: "",
    newToDisney: "",
    original: "",
    trending: "",
};

export const movieReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_MOVIE":
            return { 
                ...state, 
                recommend: action.payload.recommend, 
                newToDisney: action.payload.newToDisney, 
                original: action.payload.original, 
                trending: action.payload.trending,  
            };

        default:
            return state;
    };
};