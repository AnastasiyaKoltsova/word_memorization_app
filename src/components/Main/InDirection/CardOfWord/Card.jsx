// import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    // const { id } = useParams();
    // const word = props.words.find(word => word.id === id);
    // console.log(word);

    // if (!word) {
    //     return <div>Извините, слово не найдено&#128532;</div>;
    // }
    
    return (
        <div className={styles.container}>
            <div>
                <NavLink to='/direction'>Назад</NavLink>
            </div>
            <div className={styles.card}>
                <div>{props.words[0].english}</div>
                {/* <div>{props.words[0].russian}</div> */}
            </div>
        </div>
    );
}

export default Card;