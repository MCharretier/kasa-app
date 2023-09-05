import { Link } from 'react-router-dom'

import {ReactComponent as LogoWhite} from '../../assets/images/logo-white.svg'
import './styles.module.css'

function Footer() {
    return (
        <footer>
            <Link to="/">
                <LogoWhite />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer