import { useState,  useEffect } from 'react';
import styles from './styles.module.css'
import Thumb from '../../components/Thumb'
import BannerImage from '../../assets/images/home-banner-image.jpeg'
import ImageBanner from '../../components/ImageBanner';

function Home() {

    const [accomodations, setAccomodations] = useState([])

    useEffect(() => {
        const getAccomodations = async () => {
            await fetch('/accomodations.json')
                .then(response => response.json())
                .then(data => setAccomodations(data))
        }
        getAccomodations()
    }, [])

    return (
        <div className={styles.home}>
            <ImageBanner image={BannerImage} title={'Chez vous, \npartout et ailleurs'} />
            <div className={styles.gallery}>
                {accomodations.map( accomodation =>
                    <Thumb 
                        key={accomodation.id}
                        accomodation={accomodation}
                    />
                )}
            </div>
        </div>
    )
}

export default Home