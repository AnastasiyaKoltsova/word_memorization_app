import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.container}>
            {/* <img src="./../../assets/icons/favicon.png" alt="Логотип приложения"></img> */}
            <div className={styles.appTitle}>
                Memo App
            </div>
        </div>
    );
}

export default Header;