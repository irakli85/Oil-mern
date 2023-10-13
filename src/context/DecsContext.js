import {createContext, useReducer} from 'react'

export const DecsContext = createContext()

export const declarationsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DECS':
            return {
                declarations: action.payload
            }
        case 'CREATE_DEC':
            return{
                declarations: [action.payload, ...state.declarations]
            }
        case 'DELETE_DEC':
            return{
                declarations: state.declarations.filter((d) => d._id !== action.payload._id)
            }    
        default:
            return state       
    }
}

export const DecsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(declarationsReducer, {
        declarations: null
    })

    return(
        <DecsContext.Provider value={{...state, dispatch}}>
            {children}
        </DecsContext.Provider>
    )
}