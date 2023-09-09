import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={ styles.container }>
            <div className={ styles.footerBlocks }>
                <div>
                    <h2>О компании</h2>
                    <div>
                        <p>О компании MemoApp</p>
                        <p>Вакансии</p>
                        <p>Справочный центр</p>
                        <p>Правила сообщества</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
                <div>
                    <h2>Для учеников</h2>
                    <div>
                        <p>Карточки</p>
                        <p>Тест</p>
                        <p>Заучивание</p>
                    </div>
                </div>
            </div>
            <p>© 2023 MemoApp, Inc.</p>
        </div>
    );
}

export default Footer;