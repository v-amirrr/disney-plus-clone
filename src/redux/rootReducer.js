import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { errorReducer } from "./error/errorReducer";

export const rootReducer = combineReducers({
    userState: userReducer,
    errorState: errorReducer,
});