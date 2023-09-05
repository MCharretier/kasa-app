import PropTypes from 'prop-types'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Thumb({accomodation}) {
    return (
        <Link to={`accomodation/${accomodation.id}`} className={styles.thumb}>
            <img src={accomodation.cover} alt={accomodation.title} />
            <p>{accomodation.title}</p>
        </Link>
    )
}

Thumb.propTypes = {
    accomodation: PropTypes.object.isRequired
}

export default Thumb