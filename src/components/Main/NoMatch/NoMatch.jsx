import styles from "./NoMatch.module.css";
import errorImg from "./../../../assets/icons/error-404.png";

const NoMatch = () => {
    return (
        <div className={styles.wrapper}>
            <img src={errorImg} alt="Ошибка"></img>
            <h2 className={styles.text}>Страница не найдена&#128546;</h2>
        </div>
    );
};

export default NoMatch;