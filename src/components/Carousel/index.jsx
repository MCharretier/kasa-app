import PropTypes from 'prop-types'
import {useState} from 'react'
import {ReactComponent as ArrowPrev} from '../../assets/images/carousel-arrow-prev.svg'
import {ReactComponent as ArrowNext} from '../../assets/images/carousel-arrow-next.svg'
import styles from './styles.module.css';

function Carousel({pictures}) {

    const [index, setIndex] = useState(0)

    return (
        <div className={styles.carousel}>
            { pictures.length > 1 && (
                <ArrowPrev 
                    className={styles.prev} 
                    onClick={() => setIndex( index === 0 ? pictures.length - 1 : index - 1 )}  
                />
            ) }
            <div className={styles.slides}>
                { pictures.map((picture, i) => (
                    <div 
                        key={i} 
                        className={`${styles.slide} ${index === i ? styles.current : ''}`}
                    >
                        <img src={picture} alt="" />
                        { pictures.length > 1 && (
                            <span className={styles.counter}>{`${i+1}/${pictures.length}`}</span>
                        ) }
                    </div>
                ) ) }
            </div>
            { pictures.length > 1 && (
                <ArrowNext 
                    className={styles.next} 
                    onClick={() => setIndex( index === pictures.length - 1 ? 0 : index + 1 )}
                />
            ) }
        </div>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Carousel