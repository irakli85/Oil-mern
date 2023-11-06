import React from "react"
import { useDecsContext } from "../hooks/useDecsContext"
import bin from '../assets/delete.svg'
import {useAuthContext} from '../hooks/useAuthContext'


const DecDetails = ({dec}) => {
    const {dispatch} = useDecsContext()
    const {user} = useAuthContext()

   const handleClick = async () => {

    if(!user){
        return
    }

    const response = await fetch('https://oilmern.onrender.com/api/declarations' + dec._id, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(response.ok){
        dispatch({type: 'DELETE_DEC', payload: json})
    }
   }

    return(        
            <tr className="table-body">
                <td className="details-item">{"C " + dec.cNumber}</td>                
                <td className="details-item">{dec.regDate}</td>                
                <td className="details-item">{dec.warehouseName}</td>                
                <td className="details-item">{dec.warehouseNum}</td>                
                <td className="details-item">{dec.senderCountry}</td>                
                <td className="details-item">{dec.reciverCountry}</td>                
                <td className="details-item">{dec.border}</td>                
                <td className="details-item">{dec.sender}</td>                
                <td className="details-item">{dec.reciver}</td>                
                <td className="details-item">{dec.declarant}</td>                
                <td className="details-item">{dec.declarantNum}</td>                
                <td className="details-item">{dec.vehicle}</td>                
                <td className="details-item">{dec.cargo}</td>                
                <td className="details-item">{dec.hs}</td>                
                <td className="details-item">{dec.net}</td>                
                <td className="details-item">{dec.brutto}</td>               
                <td className="details-item">{dec.duration}</td>                
                <td className="details-item">{dec.tank}</td>                
                <td className="details-item">{dec.procedure}</td>
                <td className="details-item status">{dec.status}</td>
                <td className="delete"><img src={bin} onClick={handleClick} alt="bin"/></td>
            </tr>        
    
    )
}
    
   export default DecDetails
