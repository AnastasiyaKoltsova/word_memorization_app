import EditableCell from './EditableCell';
import BtnEditWord from './BtnEditWord';

const TableRow = (props) => {
    const isEditing = props.editableRowIndex === props.index;

    return (
        <tr key={props.word.id}>
            <td>{props.index + 1}</td>
            <td>
                <EditableCell isEditing={isEditing} value={props.word.english} />
            </td>
            <td>
                <EditableCell isEditing={isEditing} value={props.word.transcription} />
            </td>
            <td>
                <EditableCell isEditing={isEditing} value={props.word.russian} />
            </td>
            <td>
                <EditableCell isEditing={isEditing} value={props.word.tags} />
            </td>
            <td>
                <BtnEditWord
                    isEditing={isEditing}
                    startEditing={() => props.startEditing(props.index)}
                    saveEditHandler={props.saveEditHandler}
                    cancelEditHandler={props.cancelEditHandler}
                />
            </td>
        </tr>
    );
};

export default TableRow;