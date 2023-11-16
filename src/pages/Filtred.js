import { useEffect, useState} from "react"
import { useDecsContext } from "../hooks/useDecsContext"
import {useAuthContext} from '../hooks/useAuthContext'
import { Link } from "react-router-dom";


import DecDetails from '../components/DecDetails'
import TableHead from "../components/TableHead"
import React from "react";
import styled from "styled-components";

const Filtred = () => {
   const {declarations, dispatch} =  useDecsContext()
   const {user} = useAuthContext()
   const [wName, setWname] = useState('')    
   const [sendCountry, setSendCountry] = useState('')
   const [declarant, setDeclarant] = useState('')
   const [cargo, setCargo] = useState('')    
   const [procedure, setProcedure] = useState('')    
   const [status, setStatus] = useState('')    
   const [sender, setSender] = useState(null)    

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

    const handleReset = () => {            
        setWname('')
        setSendCountry('')
        setDeclarant('')
        setCargo('')
        setProcedure('')
        setStatus('')
        setSender(null)
    }

    
  
    return(
        <div className="home">
            <div className="decs">
                <div className="labels">
                    <Link to='/'>
                        <h3>განაცხადების ფილტრი</h3>
                    </Link>
                    <Link to='/add'>
                        <h3>განაცხადების დამატება</h3>
                    </Link>
                </div>
                {/* <DecsForm/> */}
                {/* <div style={{padding: '10px'}}>ჩანაწერების რაოდენობა: {declarations && Object.keys(declarations).length}</div> */}
                {/* <div style={{padding: '10px', fontWeight: 900}}>აქტიური ჩანაწერები: { declarations && declarations.filter((item) => item.status === 'active').length}</div> */}
                <Div>
                    <div>
                        <label>საწყობი</label>
                        <select onChange={(e) => setWname(e.target.value)} value={wName}>
                            <option value=''>ყველა</option>
                            <option value="BOT">BOT</option>
                            <option value="europetrol">europetrol</option>
                            <option value="vibro">vibro</option>
                            <option value="terminal 1">terminal 1</option>
                        </select>
                    </div>

                    <div>
                        <label>გამგზ. ქვეყანა</label>
                        <select onChange={(e) => setSendCountry(e.target.value)} value={sendCountry}>
                            <option value=''>ყველა</option>
                            <option value="russia">რუსეთი</option>
                            <option value="turkmenistan">თურქმენეთი</option>
                            <option value="kyrgyzstan">ყირგიზეთი</option>
                            <option value="kazakhstan">ყაზახეთი</option>
                            <option value="georgia">საქართველო</option>
                            <option value="uzbekistan">უზბეკეთი</option>
                            <option value="malta">მალტა</option>
                            <option value="bulgaria">ბულგარეთი</option>
                            <option value="azerbaijan">აზერბაიჯანი</option>
                        </select>
                    </div>

                    <div>
                        <label>დეკლარანტი</label>
                        <select onChange={(e) => setDeclarant(e.target.value)} value={declarant}>
                            <option value=''>ყველა</option>
                            <option value="tero">თერო</option>
                            <option value="europetrol">ეუროპეტროლი</option>
                            <option value="notc">ნიუ ოილ ტრანსი</option>
                            <option value="trans logistic">ტრანს ლოჯისტიკი</option>
                            <option value="omni">ომნი</option>
                            <option value="transflot">ტრანსფლოტი</option>
                        </select>
                    </div>

                    <div>
                        <label>საქონელი</label>
                        <select onChange={(e) => setCargo(e.target.value)} value={cargo}>
                            <option value=''>ყველა</option>
                            <option value="fuel oil">მაზუთი</option>
                            <option value="gasoline">ბენზინი</option>
                            <option value="diesel">დიზელი</option>
                            <option value="kerosine">ნავთი</option>
                            <option value="propane">პროპანი</option>
                            <option value="butan">ბუტანი</option>
                            <option value="crude oil">ნედლი ნავთობი</option>
                            <option value="vacuum gasoil">ვაკ. გაზოილი</option>
                            <option value="base oil">ინდუსტ. ზეთი</option>
                        </select>
                    </div>

                    <div>
                        <label>პროცედურა</label>
                        <select onChange={(e) => setProcedure(e.target.value)} value={procedure}>
                            <option value=''>ყველა</option>
                            <option value="80">80</option>
                            <option value="10">10</option>
                            <option value="10">40</option>
                        </select>
                    </div>

                    <div>
                        <label>სტატუსი</label>
                        <select onChange={(e) => setStatus(e.target.value)} value={status}>
                            <option value=''>ყველა</option>
                            <option value="active">აქტიური</option>
                            <option value="closed">დახურული</option>
                        </select>
                    </div>

                    <div>
                        <label>გამგზავნი</label>
                        <input type="text"  onChange={(e) => setSender(e.target.value)} value={sender}/>
                    </div>


                    <button  onClick={handleReset}>reset</button>
                </Div>    
                <table>
                    <TableHead/>
                    <tbody>                    
                        {
                          
                            declarations && declarations.filter((item) => 
                                item.warehouseName === wName ||
                                item.senderCountry === sendCountry ||
                                item.declarant === declarant ||
                                item.cargo === cargo ||
                                item.procedure == procedure ||
                                item.status === status ||
                                item.sender.startsWith(sender)


                            ).map((dec) => (                           
                                
                                <DecDetails key={dec._id} dec = {dec}/>                              
                                    
                                ))
                        }
                    </tbody>                   
                </table>
               
            </div>
        </div>
    )
}

const Div = styled.div`
    display: flex;
`

export default Filtred