import {createContext} from "react";
import {StateInterface} from "../Types/global";
import {initialState} from "../Reducer";

export const ctx: React.Context<StateInterface> = createContext(initialState())