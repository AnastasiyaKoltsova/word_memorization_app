import React, { useState } from 'react';
import styles from './BtnEditWord.module.css';

const BtnEditWord = (props) => {
    
    const [isEditButtonsVisible, setIsEditVisible] = useState(false);

    const saveEditHandler = () => {
        console.log('Изменения в карточке слова');
        setIsEditVisible(false);
    };

    const editDataHandler = () => {
        setIsEditVisible(true);
    };

    const cancelEditHandler = () => {
        setIsEditVisible(false);
    };

    return (
        <div>
            {!isEditButtonsVisible && (
                <div className={styles.buttonsContainer}> 
                    <button className={`${styles.Btn} ${styles.BtnEdit}`} onClick={editDataHandler}>Edit</button>
                    <button className={`${styles.Btn} ${styles.BtnDelete}`}>Delete</button>
                </div>
            )}
            {isEditButtonsVisible && (
                <div className={styles.buttonsContainer}>
                    <button className={`${styles.Btn} ${styles.BtnSave}`} onClick={saveEditHandler}>Save</button>
                    <button className={`${styles.Btn} ${styles.BtnCancel}`} onClick={cancelEditHandler}>Cancel</button>
                </div>
            )}
        </div>
    )
};

export default BtnEditWord;