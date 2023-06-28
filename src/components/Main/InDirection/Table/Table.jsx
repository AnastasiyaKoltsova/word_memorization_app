// import ButtonTable from './ButtonTable';
import styles from './Table.module.css';

function Table() {
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Тема</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Apple</td>
                        <td>ˈæpl</td>
                        <td>Яблоко</td>
                        <td>Фрукты</td>
                        <td>
                            <button>Настройки</button>
                            {/* <ButtonTable></ButtonTable> */}
                        </td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Apple</td>
                        <td>ˈæpl</td>
                        <td>Яблоко</td>
                        <td>Фрукты</td>
                        <td>
                            <button>Настройки</button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Apple</td>
                        <td>ˈæpl</td>
                        <td>Яблоко</td>
                        <td>Фрукты</td>
                        <td>
                            <button>Настройки</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;