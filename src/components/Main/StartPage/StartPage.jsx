import { NavLink } from 'react-router-dom';
import styles from './StartPage.module.css';

function StartPage() {
    return (
        <div className={ styles.container }>
            <h2>Ваша библиотека</h2>
            <section>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                                {/* <img src="./../../assets/icons/dir-logo.png" alt="Иконка папки"></img> */}
                            </td>
                            <td><NavLink to='/direction'>Мои первые слова</NavLink></td>
                            <td>
                                Кнопка настройки
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default StartPage;