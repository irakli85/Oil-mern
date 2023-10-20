import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>
            <div className="container">
            <img src={logo} alt="logo" />
                <Link to='/'>
                    <h3>განაცხადები</h3>
                </Link>
                <Link to='/tankers'>
                    <h3>ტანკერები</h3>
                </Link>
                <nav>
                   {user && (
                        <div>
                            <span>{user.email}</span>
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