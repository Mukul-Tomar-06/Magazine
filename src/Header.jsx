import './css/Header.css';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
            <div className="header">
                <nav className="nav-bar">
                    
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/galary'>Galary</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    
                </nav>
            </div>
            
        </div>
    )
}

export default Header;