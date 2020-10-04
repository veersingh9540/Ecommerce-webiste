// setup the data layer
//we need this to track the basket
import React, {createContext,useContext,useReducer} from "react"

//this is the data layer
export const   StateContext = createContext();

//Build a provider to give it access to the data layer
export const StateProvider = ({ reducer,initialState,children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);