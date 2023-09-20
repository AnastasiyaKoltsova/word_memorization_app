import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    const {
        words,
        isTranslationVisible,
        currentIndex,
        showNextCard,
        showPreviousCard,
        showTranslationHandler
    } = props;

    const currentWord = words[currentIndex];

    const hideTranslationHandler = () => {
        showTranslationHandler(false);
    };

    if (!currentWord) {
        return <div>Извините, слово не найдено&#128532;</div>;
    }

    return (
        <div className={styles.container}>
            <div>
                <NavLink to="/direction">Назад</NavLink>
            </div>
            <div className={styles.wrapperOfCard}>
                <button onClick={showPreviousCard} className={styles.button}>&#8592;</button>
                <div className={`${styles.card} ${isTranslationVisible ? styles.flipped : ''}`}>
                    {!isTranslationVisible && (
                        <div onClick={() => showTranslationHandler(true)}>
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
};

export default Card;