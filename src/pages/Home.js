import React, { useEffect} from "react"
import { useDecsContext } from "../hooks/useDecsContext"
import {useAuthContext} from '../hooks/useAuthContext'
import { Link } from "react-router-dom";


import DecDetails from '../components/DecDetails'
import TableHead from "../components/TableHead"
import DecsForm from "../components/DecsForm"
import { H3secondary } from "./Filtred";
import * as XLSX from 'xlsx';
import styled from "styled-components";

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

    const handleExport = () => {
        console.log(declarations)
        let wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(declarations)

        XLSX.utils.book_append_sheet(wb, ws, 'oilFull')

        XLSX.writeFile(wb, 'oilFull.xlsx')
    }

    return(
        <div className="home">
            <div className="decs">
                <div className="labels">
                    <Link to='/'>
                        <H3secondary>ფილტრი</H3secondary>
                    </Link>
                    <Link to='/add'>
                        <h3>დამატება</h3>
                    </Link>
                </div>
                <DecsForm/>
                <div style={{padding: '10px'}}>ჩანაწერების რაოდენობა: {declarations && Object.keys(declarations).length}</div>
                <div style={{padding: '10px', fontWeight: 900}}>აქტიური ჩანაწერები: { declarations && declarations.filter((item) => item.status === 'active').length}</div>
                <Button onClick={handleExport}>export to excell</Button>
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

const Button = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #1aac83;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    &:hover{
        background-color: #fff;
        color: #1aac83;
        outline: solid 1px #1aac83;
    }
    transition: all 0.5s ease-in-out;
`

export default Home