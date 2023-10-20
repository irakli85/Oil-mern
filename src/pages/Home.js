import { useEffect} from "react"
import { useDecsContext } from "../hooks/useDecsContext"

import DecDetails from '../components/DecDetails'
import TableHead from "../components/TableHead"
import DecsForm from "../components/DecsForm"

const Home = () => {
   const {declarations, dispatch} =  useDecsContext()
    

    useEffect(() => {
        const fetchDecs = async () =>{
            const response = await fetch('https://oilmern.onrender.com/api/declarations')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DECS', payload: json})
            }
        }

        fetchDecs()
    }, [])

    return(
        <div className="home">
            <div className="decs">
                <DecsForm/>
                <table>
                    <TableHead/>
                    <tbody>
                        {
                            // declarations && declarations.map((dec) => (
                            //     <DecDetails key={dec._id} dec = {dec}/>
                            // ))

                            declarations && declarations.filter( (dec) => dec.status === 'active').map((dec) => (
                                    <DecDetails key={dec._id} dec = {dec}/>
                                ))
                        }
                    </tbody>                   
                </table>
               
            </div>
        </div>
    )
}

export default Home