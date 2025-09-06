import { useContext } from "react"
import { FlagsContext } from "../context/FlagsContext"

export const useFlags = () => {
    const flagsContext = useContext(FlagsContext)
    
    return flagsContext
}