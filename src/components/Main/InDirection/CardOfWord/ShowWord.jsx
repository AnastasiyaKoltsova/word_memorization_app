import Card from "./Card";

const ShowWord = (props) => {
    
    const words = props.words || [];

    return (
        <Card words={words} />
    );
};

export default ShowWord;