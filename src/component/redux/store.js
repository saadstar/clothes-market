import { rootReducer } from "./main";
import {createStore} from "redux"
export const store=createStore(rootReducer)