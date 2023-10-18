import { Card, CardImage, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { Image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitel>{name}</CardTitel>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;
