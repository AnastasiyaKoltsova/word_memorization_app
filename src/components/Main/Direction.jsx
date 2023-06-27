import Button from './Button';
import Table from './Table/Table';
import styles from './Direction.module.css';
import BtnAddWords from './Table/BtnAddWords';

function Direction() {
    return (
        <div className={styles.container}>
            <h2>Название папки</h2>
            <div className={styles.buttons}>
                <Button>Все карточки</Button>
                <Button>Учить</Button>
                <Button>Повторить</Button>
                <Button>Изучено</Button>
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