import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './../../assets/icons/favicon.png';

function Header() {
    return (
        <nav className={styles.container}>
            <NavLink to='/startPage'>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="Логотип приложения" className={styles.logo}></img>
                    <div className={styles.appTitle}>
                        Memo App
                    </div>
                </div>
            </NavLink>
            <div className={styles.menu}>
                <ul>
                    <li><NavLink to='/startPage'>Главная</NavLink></li>
                    <li><NavLink to='/game'>Учить слова</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;