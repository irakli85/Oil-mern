import React from 'react'
import {useState} from 'react'
import { useDecsContext } from "../hooks/useDecsContext"
import {useAuthContext} from '../hooks/useAuthContext'
import { Option} from '../pages/Filtred'


const DecsForm = () => {
    const {dispatch} = useDecsContext()
    const {user} = useAuthContext()

    const [cNumber, setCnumber] = useState('')
    const [regDate, setRegDate] = useState('')
    const [warehouseName, setWarehouseName] = useState('')
    const [warehouseNum, setWarehouseNum] = useState('')
    const [senderCountry, setSenderCountry] = useState('')
    const [reciverCountry, setReciverCountry] = useState('')
    const [border, setBorder] = useState('')
    const [sender, setSender] = useState('')
    const [reciver, setReciver] = useState('')
    const [declarant, setDeclarant] = useState('')
    const [declarantNum, setDeclarantNum] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [cargo, setCargo] = useState('')
    const [hs, setHs] = useState('')
    const [net, setNet] = useState('')
    const [brutto, setBrutto] = useState('')
    const [duration, setDuration] = useState('')
    const [tank, setTank] = useState('')
    const [procedure, setProcedure] = useState('')
    const [status, setStatus] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('you must logged in')
        }

        const declaration = {cNumber, regDate, warehouseName, warehouseNum, senderCountry, reciverCountry, border, sender, reciver, declarant, declarantNum, vehicle, cargo, hs, net, brutto, duration, tank, procedure, status}
    
    
    const response = await fetch('https://oilmern.onrender.com/api/declarations', {
        method: 'POST',
        body: JSON.stringify(declaration),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
     })

     const json  = await response.json()

     if(!response.ok){
        setError(json.error)
     }

     if(response.ok){
        // setCnumber('')
        // setRegDate('')
        // setWarehouseName('')
        // setWarehouseNum('')
        // setSenderCountry('')
        // setReciverCountry('')
        // setBorder('')
        // setSender('')
        // setReciver('')
        // setDeclarant('')
        // setDeclarantNum('')
        // setVehicle('')
        // setCargo('')
        // setHs('')
        setNet('')
        setBrutto('')
        // setDuration('')
        // setTank('')
        // setProcedure('')
        // setStatus('')
        // setError(null)
        // console.log('დაემატა ახალი დეკლარაცია', json)
        dispatch({type: 'CREATE_DEC', payload: json})
     }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <div>{}</div>
            <div>
                <label>C ნომერი</label>
                <input type="number"  onChange={(e) => setCnumber(e.target.value)} value={cNumber}/>
            </div>

            <div>
                <label>რეგ. თარიღი</label>
                <input type="text"  onChange={(e) => setRegDate(e.target.value)} value={regDate}/>
            </div>         

            <div>
                <label>საწყობი</label>
                <select onChange={(e) => setWarehouseName(e.target.value)} value={warehouseName}>
                    <Option value="BOT">BOT</Option>
                    <Option value="europetrol">europetrol</Option>
                    <Option value="vibro">vibro</Option>
                    <Option value="terminal 1">terminal 1</Option>
                </select>
            </div>            
          

            <div>
                <label>საწყობი ს/კ</label>
                <select onChange={(e) => setWarehouseNum(e.target.value)} value={warehouseNum}>
                    <Option value="245432544">245432544</Option>
                    <Option value="245578398">245578398</Option>
                    <Option value="445435930">445435930</Option>
                    <Option value="416313885">416313885</Option>
                </select>
            </div>
        
            <div>
                <label>გამგზ. ქვეყანა</label>
                <select onChange={(e) => setSenderCountry(e.target.value)} value={senderCountry}>
                    <Option value="russia">რუსეთი</Option>
                    <Option value="turkmenistan">თურქმენეთი</Option>
                    <Option value="kyrgyzstan">ყირგიზეთი</Option>
                    <Option value="kazakhstan">ყაზახეთი</Option>
                    <Option value="georgia">საქართველო</Option>
                    <Option value="uzbekistan">უზბეკეთი</Option>
                    <Option value="malta">მალტა</Option>
                    <Option value="bulgaria">ბულგარეთი</Option>
                    <Option value="azerbaijan">აზერბაიჯანი</Option>
                </select>
            </div>
          
            <div>
                <label>დანიშ. ქვეყანა</label>
                <select onChange={(e) => setReciverCountry(e.target.value)} value={reciverCountry}>
                    <Option value="unknown">უცნობი</Option>
                    <Option value="turkey">თურქეთი</Option>
                    <Option value="armenia">სომხეთი</Option>
                </select>
            </div>           

            <div>
                <label>შემოსვლის სგპ</label>
                <select onChange={(e) => setBorder(e.target.value)} value={border}>
                    <Option value="69604">69604</Option>
                    <Option value="69009">69009</Option>
                </select>
            </div>

            <div>
                <label>გამგზავნი</label>
                <input type="text"  onChange={(e) => setSender(e.target.value)} value={sender}/>
            </div>

            <div>
                <label>მიმღები</label>
                <input type="text"  onChange={(e) => setReciver(e.target.value)} value={reciver}/>
            </div>           

            <div>
                <label>დეკლარანტი</label>
                <select onChange={(e) => setDeclarant(e.target.value)} value={declarant}>
                    <Option value="tero">თერო</Option>
                    <Option value="europetrol">ეუროპეტროლი</Option>
                    <Option value="notc">ნიუ ოილ ტრანსი</Option>
                    <Option value="trans logistic">ტრანს ლოჯისტიკი</Option>
                    <Option value="omni">ომნი</Option>
                    <Option value="transflot">ტრანსფლოტი</Option>
                </select>
            </div>
           
            <div>
                <label>დეკლარანტის ს/კ</label>
                <select onChange={(e) => setDeclarantNum(e.target.value)} value={declarantNum}>
                    <Option value="245626185">245626185</Option>
                    <Option value="245578398">245578398</Option>
                    <Option value="446962519">446962519</Option>
                    <Option value="445490095">445490095</Option>
                    <Option value="445564568">445564568</Option>
                    <Option value="245599838">245599838</Option>
                </select>
            </div>
         
            <div>
                <label>ტრანსპორტი</label>
                <select onChange={(e) => setVehicle(e.target.value)} value={vehicle}>
                    <Option value="railway">რკინიგზა</Option>
                    <Option value="tanker">გემი</Option>
                </select>
            </div>            

            <div>
                <label>საქონელი</label>
                <select onChange={(e) => setCargo(e.target.value)} value={cargo}>
                    <Option value="fuel oil">მაზუთი</Option>
                    <Option value="gasoline">ბენზინი</Option>
                    <Option value="diesel">დიზელი</Option>
                    <Option value="kerosine">ნავთი</Option>
                    <Option value="propane">პროპანი</Option>
                    <Option value="butan">ბუტანი</Option>
                    <Option value="crude oil">ნედლი ნავთობი</Option>
                    <Option value="vacuum gasoil">ვაკ. გაზოილი</Option>
                    <Option value="base oil">ინდუსტ. ზეთი</Option>
                </select>
            </div>
            
            <div>
                <label>საქ. კოდი</label>
                <select onChange={(e) => setHs(e.target.value)} value={hs}>
                    <Option value="27101962">27101962</Option>
                    <Option value="27101241">27101241</Option>
                    <Option value="27101943">27101943</Option>
                    <Option value="27111294">27111294</Option>
                    <Option value="27101925">27101925</Option>
                    <Option value="27111397">27111397</Option>
                    <Option value="27101931">27101931</Option>
                    <Option value="27101971">27101971</Option>
                    <Option value="27101245">27101245</Option>
                </select>
            </div>    

            <div>
                <label>წონა ნეტო</label>
                <input type="number"  onChange={(e) => setNet(e.target.value)} value={net}/>
            </div>

            <div>
                <label>წონა ბრუტო</label>
                <input type="number"  onChange={(e) => setBrutto(e.target.value)} value={brutto}/>
            </div>

            <div>
                <label>ვადა</label>
                <input type="number"  onChange={(e) => setDuration(e.target.value)} value={duration}/>
            </div>

            <div>
                <label>რეზერვუარი</label>
                <input type="text"  onChange={(e) => setTank(e.target.value)} value={tank}/>
            </div>
            
             <div>
                <label>პროცედურა</label>
                <select onChange={(e) => setProcedure(e.target.value)} value={procedure}>
                    <Option value="80">80</Option>
                    <Option value="10">10</Option>
                    <Option value="10">40</Option>
                </select>
            </div> 
            
            <div>
                <label>სტატუსი</label>
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                    <Option value="active">აქტიური</Option>
                    <Option value="closed">დახურული</Option>
                </select>
            </div> 

            <button className='addBtn'>დამატება</button>
            {error && <div className='error'>შეავსეთ ყველა ველი</div>}
        </form>
    )
}

export default DecsForm