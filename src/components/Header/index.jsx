import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
 
function Header() {
    return (
        <header>
            <Link to="/">
                <Logo className={styles.logo} />
            </Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header