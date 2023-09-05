import PropTypes from 'prop-types'
import styles from './styles.module.css'

function ImageBanner({image, title}) {
    return (
        <div className={styles.imageBanner}>
            <img src={image} alt="" />
            { title && (
                <h1>{title}</h1>
            ) }
        </div>
    )
}

ImageBanner.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string
}

export default ImageBanner