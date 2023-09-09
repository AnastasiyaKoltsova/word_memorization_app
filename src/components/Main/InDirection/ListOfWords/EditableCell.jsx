import styles from './EditableCell.module.css';
import { NavLink } from 'react-router-dom';

const EditableCell = (props) => {
    return props.isEditing ? (
        <input type="text" value={props.value} className={styles.editingInput} />
    ) : (
        <NavLink to={`/card`}>{props.value}</NavLink>
    );
};

export default EditableCell;