import React from 'react';
import { FiX } from "react-icons/fi";
import style from './styles.css';

const PopUp = ({
    setPopUp,
    pokemonPopUp
}) => {

    const pokemonName = pokemonPopUp.name;
    const pokemonImage = pokemonPopUp.sprites.other.dream_world.front_default;
    const pokemonAbility1 = pokemonPopUp.abilities[0].ability.name;
    const pokemonAbility2 = pokemonPopUp.abilities[1].ability.name;
    const pokemonDescriptionHeight = pokemonPopUp.height;
    const pokemonDescriptionWeight = pokemonPopUp.weight;

    return (
        <div className="popUp-container">
            <div className="cardItem-popUp-container">
                <div className="name-image-pokemon-container">
                    <h1 className="name-pokemon">{pokemonName}</h1>
                    <img
                        src={pokemonImage}
                        className="image-pokemon"
                    />
                </div>
                <div className="abilities-description-button-container">
                    <div className="button-popUp-close-container">
                        <button className="button-popUp-close" onClick={() => setPopUp(false)}><FiX /></button>
                    </div>
                    <div className="abilities-pokemon">
                        <h3>Abilities</h3>
                        <ul>
                            <li>{pokemonAbility1}</li>
                            <li>{pokemonAbility2}</li>
                        </ul>
                    </div>
                    <div className="description-pokemon">
                        <h3>Description</h3>
                        <ul>
                            <li>Height: {pokemonDescriptionHeight}</li>
                            <li>Weight: {pokemonDescriptionWeight}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default PopUp;