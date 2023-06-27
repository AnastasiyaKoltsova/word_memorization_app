import styles from './BtnAddWords.module.css';

function BtnAddWords() {
    return (
        <div className={styles.container}>
            <button className={styles.BtnAddWords}>Добавить или удалить слова</button>
        </div>
    );
}

export default BtnAddWords;