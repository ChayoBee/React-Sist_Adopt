import Card from 'react-bootstrap/Card';

const MyCard = ({image, Name, Desc }) => {
    return (
        <>
            <Card style={{width: '20px' }}>
                <Card.Img variant='top' src={image} className='Perro'/>
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    {Desc}
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;