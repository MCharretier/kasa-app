import { useParams, useNavigate } from 'react-router-dom'
import { useState,  useEffect } from 'react'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import styles from './styles.module.css'

function Accomodation() {

    const [accomodation, setAccomodation] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getAccomodation = async () => {
            await fetch('/accomodations.json')
                .then(response => response.json())
                .then(json => json.find(x => x.id === id))
                .then(data => data ? setAccomodation(data) : navigate('/accomodation'))
        }
        getAccomodation()
    }, [id, navigate])

    return (
        <div className={styles.accomodation}>
            { accomodation && (
                <Carousel pictures={accomodation.pictures} />
            ) }
            { accomodation && (
                <div className={styles.heading}>
                    <div className={styles.left}>
                        <h1>{accomodation.title}</h1>
                        <p>{accomodation.location}</p>
                        <div className={styles.tags}>
                            {accomodation.tags.map((tag, index) => 
                                <Tag 
                                    key={index}
                                    text={tag} 
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.host}>
                            <p className={styles.name}>{accomodation.host.name}</p>
                            <div className={styles.picture}>
                                <img src={accomodation.host.picture} alt={accomodation.host.name} />
                            </div>
                        </div>
                        <Rating 
                            rating={accomodation.rating} 
                        />
                    </div>
                </div>
            ) }
            { accomodation && (
                <div className={styles.collapses}>
                    <Collapse 
                        title="Description" 
                        text={accomodation.description} 
                    />
                    <Collapse 
                        title="Équipements" 
                        text={accomodation.equipments.join('\n')} 
                    />
                </div>
            ) }
        </div>
    )
}

export default Accomodation