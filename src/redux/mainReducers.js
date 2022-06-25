import authReducers from "./authReducers";
import designReducers from "./designReducers";
import { combineReducers } from "redux";

const mainReducers = combineReducers({

    // auth: authReducers,
    design: designReducers

})

export default mainReducers;


