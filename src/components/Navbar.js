import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
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
            </div>
        </header>
    )
}

export default Navbar