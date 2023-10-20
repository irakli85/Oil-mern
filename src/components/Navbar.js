import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";
import userSVG from '../assets/user.svg'

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>
            <div className="container header-container">
            <img src={logo} alt="logo" />
                
                <nav>
                   {user && (
                        <div className="user-logout">
                            <div className="user-info">
                                <img src={userSVG} alt="user"/>
                                {user.email.split('@')[0]}
                            </div>
                            <button onClick={handleClick}>გამოსვლა</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="./login">შესვლა</Link>
                            <Link to="./signup">რეგისტრაცია</Link>
                        </div>
                    )}
                </nav>                      
            </div>
        </header>
    )
}

export default Navbar