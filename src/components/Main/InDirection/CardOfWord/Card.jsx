import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    // const { id } = useParams();
    // const word = props.words.find(word => word.id === id);
    // console.log(word);

    // if (!word) {
    //     return <div>Извините, слово не найдено&#128532;</div>;
    // }

    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const showTranslationHandler = () => {
        setIsTranslationVisible(true);
    };

    const hideTranslationHandler = () => {
        setIsTranslationVisible(false);
    };
    
    return (
        <div className={styles.container}>
            <div>
                <NavLink to='/direction'>Назад</NavLink>
            </div>
            <div className={`${styles.card} ${isTranslationVisible ? styles.flipped : ''}`}>
                {!isTranslationVisible && (
                    <div onClick={showTranslationHandler}> 
                        <div>{props.words[0].english}</div>
                        <div className={styles.transcription}>{props.words[0].transcription}</div>
                    </div>
                )}
                {isTranslationVisible && (
                    <div onClick={hideTranslationHandler}>
                        <div className={styles.flip}>{props.words[0].russian}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;