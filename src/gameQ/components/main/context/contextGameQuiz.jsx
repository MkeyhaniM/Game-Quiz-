import React, {createContext, useContext, useReducer} from "react";
import {InitialState} from "./initialState";
import {Reducer} from "./reducer";

const ContextOfState = createContext(null)
const ContextOfDispatch = createContext(null)

export let ContextStateOfReducer = () => {
    const context = useContext(ContextOfState);
    if (!context) {
        return {user: null}
    }
    return context;
}

export let ContextDispatchOfReducer = () => {
    const context = useContext(ContextOfDispatch);
    if (!context) {
        return null
    }
    return context
}

export function ContextOfGameQuiz({children}) {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    return(
        <ContextOfState.Provider value={state}>
            <ContextOfDispatch.Provider value={dispatch}>
                {children}
            </ContextOfDispatch.Provider>
        </ContextOfState.Provider>
    )

}
