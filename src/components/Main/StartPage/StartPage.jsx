import { NavLink } from 'react-router-dom';
import styles from './StartPage.module.css';
import directionLogo from './../../../assets/icons/dir-logo.png';

function StartPage() {
    return (
        <div className={ styles.container }>
            <h2>Ваша библиотека</h2>
            <section>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={styles.directionRow}>
                                {/* <img src={directionLogo} alt="Иконка папки" className={styles.directionLogo}></img> */}
                                <NavLink to='/direction'>Мои первые слова</NavLink>
                                <button>Кнопка настройки</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default StartPage;