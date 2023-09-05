import { useState } from 'react';
import PropTypes from 'prop-types'
import {ReactComponent as Arrow} from '../../assets/images/collapse-arrow.svg'
import styles from './styles.module.css'


function Collapse({title, text}) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => setIsOpen(!isOpen)

    return (
        <div className={`${styles.collapse} ${isOpen ? styles.open : ''}`}>
            <div onClick={toggleIsOpen} className={styles.tab}>
                <h2>{title}</h2>
                <Arrow />
            </div>
            <div className={styles.content}>
                <p>{text}</p>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Collapse