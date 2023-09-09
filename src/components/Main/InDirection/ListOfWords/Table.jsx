import React, { useState } from 'react';
import styles from './Table.module.css';
import TableRow from './TableRow';

const Table = (props) => {

    const [editableRowIndex, setEditableRowIndex] = useState(-1);

    const startEditing = (index) => {
        setEditableRowIndex(index);
    };

    const saveEditHandler = () => {
        console.log('Изменения в карточке слова');
        setEditableRowIndex(-1);
    };

    const cancelEditHandler = () => {
        setEditableRowIndex(-1);
    };
    
    let wordsElements = props.words.map((word, index) => (
        <TableRow
            key={word.id}
            word={word}
            index={index}
            editableRowIndex={editableRowIndex}
            startEditing={startEditing}
            saveEditHandler={saveEditHandler}
            cancelEditHandler={cancelEditHandler}
        />
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