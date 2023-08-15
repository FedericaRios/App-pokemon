import React from 'react';
import './styles.css';

const CardItem = ({ name, image, setPopUp, setPokemonPopUp, pokemon }) => {

    const onClickPopUp = () => {
        setPokemonPopUp(pokemon);
        setPopUp(true);
    };

    return (
        <div
            className="card-container"
            onClick={onClickPopUp}
        >
            <div className="name-container">
                {name}
            </div>
            <div className="image-container">
                <img src={image} alt="pokemon" />
            </div>
        </div>
    )
};

export default CardItem;