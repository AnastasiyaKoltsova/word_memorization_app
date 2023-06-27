import styles from './Button.module.css';

function Button() {
    return (
        <div>
            <button className={styles.button}>
                Все карточки
            </button>
        </div>
    );
}

export default Button;