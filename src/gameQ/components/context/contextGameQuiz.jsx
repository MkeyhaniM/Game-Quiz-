import {createContext, useContext, useReducer} from "react";
import {InitialState} from "./initialState";
import {Reducer} from "./reducer";
import {Game_quiz} from "../game/index";

const ContextOfState = createContext(null);
const ContextOfDispatch = createContext(null);

export let ContextStateOfReducer = () => {
    const context = useContext(ContextOfState);
    if (!context) {
        return null;
    }

    return context;
}

export let ContextDispatchOfReducer = () => {
    const context = useContext(ContextOfDispatch);
    if (!context) {
        return null;
    }
    return context;
}

export function ContextOfGameQuiz({children}) {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    const {token} = state;
    return (<ContextOfState.Provider value={state}>
        <ContextOfDispatch.Provider value={dispatch}>
            {token ? <Game_quiz/> : children}
        </ContextOfDispatch.Provider>
    </ContextOfState.Provider>)

}
