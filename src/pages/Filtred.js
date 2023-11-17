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
   const [sender, setSender] = useState(' ')    

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
        setSender(' ')
    }

    
  
    return(
        <div className="home">
            <div className="decs">
                <div className="labels">
                    <Link to='/'>
                        <h3>ფილტრი</h3>
                    </Link>
                    <Link to='/add'>
                        <H3secondary>დამატება</H3secondary>
                    </Link>
                </div>
                {/* <DecsForm/> */}
                {/* <div style={{padding: '10px'}}>ჩანაწერების რაოდენობა: {declarations && Object.keys(declarations).length}</div> */}
                {/* <div style={{padding: '10px', fontWeight: 900}}>აქტიური ჩანაწერები: { declarations && declarations.filter((item) => item.status === 'active').length}</div> */}
                <Div>
                    <div>
                        <Label>საწყობი</Label>
                        <Select onChange={(e) => setWname(e.target.value)} value={wName}>
                            <Option value=''>ყველა</Option>
                            <Option value="BOT">BOT</Option>
                            <Option value="europetrol">europetrol</Option>
                            <Option value="vibro">vibro</Option>
                            <Option value="terminal 1">terminal 1</Option>
                        </Select>
                    </div>

                    <div>
                        <Label>გამგზ. ქვეყანა</Label>
                        <Select onChange={(e) => setSendCountry(e.target.value)} value={sendCountry}>
                            <Option value=''>ყველა</Option>
                            <Option value="russia">რუსეთი</Option>
                            <Option value="turkmenistan">თურქმენეთი</Option>
                            <Option value="kyrgyzstan">ყირგიზეთი</Option>
                            <Option value="kazakhstan">ყაზახეთი</Option>
                            <Option value="georgia">საქართველო</Option>
                            <Option value="uzbekistan">უზბეკეთი</Option>
                            <Option value="malta">მალტა</Option>
                            <Option value="bulgaria">ბულგარეთი</Option>
                            <Option value="azerbaijan">აზერბაიჯანი</Option>
                        </Select>
                    </div>

                    <div>
                        <Label>დეკლარანტი</Label>
                        <Select onChange={(e) => setDeclarant(e.target.value)} value={declarant}>
                            <Option value=''>ყველა</Option>
                            <Option value="tero">თერო</Option>
                            <Option value="europetrol">ეუროპეტროლი</Option>
                            <Option value="notc">ნიუ ოილ ტრანსი</Option>
                            <Option value="trans logistic">ტრანს ლოჯისტიკი</Option>
                            <Option value="omni">ომნი</Option>
                            <Option value="transflot">ტრანსფლოტი</Option>
                        </Select>
                    </div>

                    <div>
                        <Label>საქონელი</Label>
                        <Select onChange={(e) => setCargo(e.target.value)} value={cargo}>
                            <Option value=''>ყველა</Option>
                            <Option value="fuel oil">მაზუთი</Option>
                            <Option value="gasoline">ბენზინი</Option>
                            <Option value="diesel">დიზელი</Option>
                            <Option value="kerosine">ნავთი</Option>
                            <Option value="propane">პროპანი</Option>
                            <Option value="butan">ბუტანი</Option>
                            <Option value="crude oil">ნედლი ნავთობი</Option>
                            <Option value="vacuum gasoil">ვაკ. გაზოილი</Option>
                            <Option value="base oil">ინდუსტ. ზეთი</Option>
                        </Select>
                    </div>

                    <div>
                        <Label>პროცედურა</Label>
                        <Select onChange={(e) => setProcedure(e.target.value)} value={procedure}>
                            <Option value=''>ყველა</Option>
                            <Option value="80">80</Option>
                            <Option value="10">10</Option>
                            <Option value="10">40</Option>
                        </Select>
                    </div>

                    <div>
                        <Label>სტატუსი</Label>
                        <Select onChange={(e) => setStatus(e.target.value)} value={status}>
                            <Option value=''>ყველა</Option>
                            <Option value="active">აქტიური</Option>
                            <Option value="closed">დახურული</Option>
                        </Select>
                    </div>

                    {/* <div>
                        <Label>გამგზავნი</Label>
                        <input type="text"  onChange={(e) => setSender(e.target.value)} value={sender}/>
                    </div> */}


                    <button className="resetBtn"  onClick={handleReset}>reset</button>
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
    align-items: center;
    gap: 20px;
`

const Option = styled.option`
    font-size: 16px;    
`

const Select = styled.select`
    width: 200px;
`

const Label = styled.label`
    font-size: 16px;
    text-align: center;
    width: 200px;
`

export const H3secondary = styled.h3`
    color: black;
    font-size: 1rem;    
`

export default Filtred