import styles from './Button.module.css';

function Button(props) {
    return (
        <div>
            <button className={styles.button}>
                { props.title }
            </button>
        </div>
    );
}

export default Button;