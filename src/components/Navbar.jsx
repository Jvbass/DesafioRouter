import { Link, NavLink } from 'react-router-dom'
import logoHP from '../assets/img/logoHP.png'

const Navbar = ()=> {
    return (
        <header>
        <nav>
            <ul>
                <li>
                    {/* <NavLink exact to="/" activeClassName="active" >Home</NavLink> */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* <NavLink exact to="/contact" activeClassName="active" >Contacto</NavLink> */}
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
        <Link to="/" className='logo'><img src={logoHP} alt="" /></Link>
        </header>
    )
}

export default Navbar