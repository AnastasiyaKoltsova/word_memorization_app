import { NavLink } from 'react-router-dom';
import Button from '../CommonComponents/Button';
import Table from './Table/Table';
import styles from './Direction.module.css';
import BtnAddWords from './Table/BtnAddWords';

function Direction() {
    return (
        <div className={styles.container}>
            <div>
                <NavLink to='/startPage'>Назад</NavLink>
            </div>
            <h2>Название папки</h2>
            <div className={styles.buttons}>
                <Button title="Все карточки"></Button>
                <Button title="Учить"></Button>
                <Button title="Повторить"></Button>
                <Button title="Изучено"></Button>
            </div>
            <section>
                <h3>Список слов</h3>
                <div>
                    <Table></Table>
                </div>
                <div>
                    <BtnAddWords></BtnAddWords>
                </div>
            </section>
        </div>
    );
}

export default Direction;