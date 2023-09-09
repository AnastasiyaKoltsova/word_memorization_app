import styles from './BtnEditWord.module.css';

const BtnEditWord = (props) => {

    return (
        <div>
            {!props.isEditing && (
                <div className={styles.buttonsContainer}> 
                    <button className={`${styles.Btn} ${styles.BtnEdit}`} onClick={props.startEditing}>
                        Edit
                    </button>
                    <button className={`${styles.Btn} ${styles.BtnDelete}`}>
                        Delete
                    </button>
                </div>
            )}
            {props.isEditing && (
                <div className={styles.buttonsContainer}>
                    <button className={`${styles.Btn} ${styles.BtnSave}`} onClick={props.saveEditHandler}>
                        Save
                    </button>
                    <button className={`${styles.Btn} ${styles.BtnCancel}`} onClick={props.cancelEditHandler}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    )
};

export default BtnEditWord;