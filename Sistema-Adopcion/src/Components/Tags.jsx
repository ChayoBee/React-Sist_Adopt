import Button from 'react-bootstrap/Button';

const Btn = (props) => {
    return (
        <>
            <Button>{props.text}</Button>
        </>
    );
};

export default Btn;