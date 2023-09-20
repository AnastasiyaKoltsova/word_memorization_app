import React, { useState } from 'react';
import Card from './Card';

const ShowWord = (props) => {
    const words = props.words || [];
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        setIsTranslationVisible(false);
    };

    const showPreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
        setIsTranslationVisible(false);
    };

    const showTranslationHandler = () => {
        setIsTranslationVisible(true);
    };

    console.log(words);

    return (
        <div>
            <Card
                words={words}
                isTranslationVisible={isTranslationVisible}
                currentIndex={currentIndex}
                showNextCard={showNextCard}
                showPreviousCard={showPreviousCard}
                showTranslationHandler={showTranslationHandler}
            />
        </div>
    );

    
};

export default ShowWord;