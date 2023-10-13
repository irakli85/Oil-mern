import { DecsContext } from "../context/DecsContext"
import { useContext } from "react"

export const useDecsContext = () => {
    const context = useContext(DecsContext)

    if(!context){
        throw Error ('must be used inside provider')
    }

    return context
}

