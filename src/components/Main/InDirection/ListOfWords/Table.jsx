import { NavLink } from 'react-router-dom';
import styles from './Table.module.css';
import BtnEditWord from './BtnEditWord';

const Table = (props) => {
    
    let wordsElements = props.words.map((word) => (
        <tr key={word.id}>
            <td>{props.words.indexOf(word) + 1}</td>
            {/* <td><NavLink to={`/card/${word.id}`} key={word.id}>{word.english}</NavLink></td> */}
            <td><NavLink to={`/card`}>{word.english}</NavLink></td>
            <td>{word.transcription}</td>
            <td>{word.russian}</td>
            <td>{word.tags}</td>
            <td>
                <BtnEditWord />
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