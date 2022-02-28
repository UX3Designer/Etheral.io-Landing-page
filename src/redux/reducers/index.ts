import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({ ui: uiReducer });

export default rootReducer;
