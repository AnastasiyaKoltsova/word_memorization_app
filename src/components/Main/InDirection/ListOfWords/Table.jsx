// import ButtonTable from './ButtonTable';
import styles from './Table.module.css';

function Table(props) {
    let wordsElements = props.words.map((word) => (
        <tr>
            <td>{props.words.indexOf(word) + 1}</td>
            <td>{word.english}</td>
            <td>{word.transcription}</td>
            <td>{word.russian}</td>
            <td>{word.tags}</td>
            <td>
                <div className={styles.buttonsContainer}>
                    <button className={`${styles.Btn} ${styles.BtnEdit}`}>Edit</button>
                    <button className={`${styles.Btn} ${styles.BtnDelete}`}>Delete</button>
                </div>
            </td>
        </tr>
    ));
    
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
                    { wordsElements }
                </tbody>
            </table>
        </div>
    );
}

export default Table;