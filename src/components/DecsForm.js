import React from 'react'
import {useState} from 'react'
import { useDecsContext } from "../hooks/useDecsContext"
import {useAuthContext} from '../hooks/useAuthContext'


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
                    <option value="BOT">BOT</option>
                    <option value="europetrol">europetrol</option>
                    <option value="vibro">vibro</option>
                    <option value="terminal 1">terminal 1</option>
                </select>
            </div>            
          

            <div>
                <label>საწყობი ს/კ</label>
                <select onChange={(e) => setWarehouseNum(e.target.value)} value={warehouseNum}>
                    <option value="245432544">245432544</option>
                    <option value="245578398">245578398</option>
                    <option value="445435930">445435930</option>
                    <option value="416313885">416313885</option>
                </select>
            </div>
        
            <div>
                <label>გამგზ. ქვეყანა</label>
                <select onChange={(e) => setSenderCountry(e.target.value)} value={senderCountry}>
                    <option value="russia">რუსეთი</option>
                    <option value="turkmenistan">თურქმენეთი</option>
                    <option value="kyrgyzstan">ყირგიზეთი</option>
                    <option value="kazakhstan">ყაზახეთი</option>
                    <option value="georgia">საქართველო</option>
                    <option value="uzbekistan">უზბეკეთი</option>
                    <option value="malta">მალტა</option>
                </select>
            </div>
          
            <div>
                <label>დანიშ. ქვეყანა</label>
                <select onChange={(e) => setReciverCountry(e.target.value)} value={reciverCountry}>
                    <option value="unknown">უცნობი</option>
                    <option value="turkey">თურქეთი</option>
                    <option value="armenia">სომხეთი</option>
                </select>
            </div>           

            <div>
                <label>შემოსვლის სგპ</label>
                <select onChange={(e) => setBorder(e.target.value)} value={border}>
                    <option value="69604">69604</option>
                    <option value="69009">69009</option>
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
                    <option value="tero">თერო</option>
                    <option value="europetrol">ეუროპეტროლი</option>
                    <option value="notc">ნიუ ოილ ტრანსი</option>
                    <option value="trans logistic">ტრანს ლოჯისტიკი</option>
                    <option value="omni">ომნი</option>
                    <option value="transflot">ტრანსფლოტი</option>
                </select>
            </div>
           
            <div>
                <label>დეკლარანტის ს/კ</label>
                <select onChange={(e) => setDeclarantNum(e.target.value)} value={declarantNum}>
                    <option value="245626185">245626185</option>
                    <option value="245578398">245578398</option>
                    <option value="446962519">446962519</option>
                    <option value="445490095">445490095</option>
                    <option value="445564568">445564568</option>
                    <option value="245599838">245599838</option>
                </select>
            </div>
         
            <div>
                <label>ტრანსპორტი</label>
                <select onChange={(e) => setVehicle(e.target.value)} value={vehicle}>
                    <option value="railway">რკინიგზა</option>
                    <option value="tanker">გემი</option>
                </select>
            </div>            

            <div>
                <label>საქონელი</label>
                <select onChange={(e) => setCargo(e.target.value)} value={cargo}>
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
                <label>საქ. კოდი</label>
                <select onChange={(e) => setHs(e.target.value)} value={hs}>
                    <option value="27101962">27101962</option>
                    <option value="27101241">27101241</option>
                    <option value="27101943">27101943</option>
                    <option value="27111294">27111294</option>
                    <option value="27101925">27101925</option>
                    <option value="27111397">27111397</option>
                    <option value="27101931">27101931</option>
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
                    <option value="80">80</option>
                    <option value="10">10</option>
                </select>
            </div> 
            
            <div>
                <label>სტატუსი</label>
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                    <option value="active">აქტიური</option>
                    <option value="closed">დახურული</option>
                </select>
            </div> 

            <button className='addBtn'>დამატება</button>
            {error && <div className='error'>შეავსეთ ყველა ველი</div>}
        </form>
    )
}

export default DecsForm