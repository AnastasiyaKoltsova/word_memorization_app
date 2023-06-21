import TableProperties from "./TableProperties";
import WordProperties from "./WordProperties";

function Direction() {
    return (
        <div>
            <h2>Название папки</h2>
            <div>
                <button>Все карточки</button>
                <button>Учить</button>
                <button>Повторить</button>
                <button>Изучено</button>
            </div>
            <section>
                <h3>Список слов</h3>
                <div>
                    <TableProperties></TableProperties>
                    <WordProperties></WordProperties>
                </div>
                <div>
                    <button>Добавить или удалить слова</button>
                </div>
            </section>
        </div>
    );
}

export default Direction;