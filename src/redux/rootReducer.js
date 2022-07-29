import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { errorReducer } from "./error/errorReducer";
import { movieReducer } from "./movie/movieReducer";

export const rootReducer = combineReducers({
    userState: userReducer,
    errorState: errorReducer,
    movieState: movieReducer,
});