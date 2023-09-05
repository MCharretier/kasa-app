import PropTypes from 'prop-types'
import styles from './styles.module.css';

function Tag({text}) {
    return (
        <span className={styles.tag}>{text}</span>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired
}

export default Tag