import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {

    // if (!word) {
    //     return <div>Извините, слово не найдено&#128532;</div>;
    // }

    const [isTranslationVisible, setIsTranslationVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWord = props.words[currentIndex];

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.words.length - 1 ? 0 : prevIndex + 1));
    };

    const showPreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.words.length - 1 : prevIndex - 1));
    };

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
            <div className={styles.wrapperOfCard}>
                <button onClick={showPreviousCard} className={styles.button}>&#8592;</button>
                <div className={`${styles.card} ${isTranslationVisible ? styles.flipped : ''}`}>
                    {!isTranslationVisible && (
                        <div onClick={showTranslationHandler}> 
                            <div>{currentWord.english}</div>
                            <div className={styles.transcription}>{currentWord.transcription}</div>
                        </div>
                    )}
                    {isTranslationVisible && (
                        <div onClick={hideTranslationHandler}>
                            <div className={styles.flip}>{currentWord.russian}</div>
                        </div>
                    )}
                </div>
                <button onClick={showNextCard} className={styles.button}>&#8594;</button>
            </div>
        </div>
    );
}

export default Card;