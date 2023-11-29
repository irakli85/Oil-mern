import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import spin from '../assets/load.gif'
import styled from 'styled-components'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          console.log('Logged in!');
        }, 40000); // Simulating a 2-second delay, replace with your actual API call or logic
      };

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>ავტორიზაცია</h3>

            <label>ელ. ფოსტა:</label>
            <input type="email" onChange={ (e) => setEmail(e.target.value)} value={email}/>

            <label>პაროლი:</label>
            <input type="password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
            <Div>
                <button disabled={isLoading} onClick={handleLogin}>შესვლა</button>
                {loading && <Img src={spin} alt="Loading..." />}
                {error && <div className='error'>{error}</div>}
            </Div>
        </form>
    )
}

const Div = styled.div`
    display: flex;
    position: relative;
`

const Img = styled.img`
    width: 80px;
    height: 80px;
    position: absolute;
    top: -20px;
    right: 200px;
`

export default Login