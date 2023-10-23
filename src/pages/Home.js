import { useEffect} from "react"
import { useDecsContext } from "../hooks/useDecsContext"
import {useAuthContext} from '../hooks/useAuthContext'
import { Link } from "react-router-dom";


import DecDetails from '../components/DecDetails'
import TableHead from "../components/TableHead"
import DecsForm from "../components/DecsForm"

const Home = () => {
   const {declarations, dispatch} =  useDecsContext()
   const {user} = useAuthContext()    

    useEffect(() => {
        const fetchDecs = async () =>{
            const response = await fetch('https://oilmern.onrender.com/api/declarations', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DECS', payload: json})
            }
        }

        if(user){
            fetchDecs()
        }

    }, [dispatch, user])

    return(
        <div className="home">
            <div className="decs">
                <div className="labels">
                    <Link to='/'>
                        <h3>განაცხადები</h3>
                    </Link>
                    <Link to='/tankers'>
                        <h3>ტანკერები</h3>
                    </Link>
                </div>
                <DecsForm/>
                <div>ჩანაწერების რაოდენობა: {declarations && Object.keys(declarations).length}</div>
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