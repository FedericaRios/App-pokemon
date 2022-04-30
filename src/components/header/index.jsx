import React from 'react';
import { useState } from 'react';
import style from './styles.css';


const Header = () => {



    const [pokemon, setPokemon] = useState('');

    const handleInputValue = (input) => {
        const inputIngresado = input.target.value;
        setPokemon(inputIngresado);
    }

    const buttonCallAPI = () => {

    }

    return (
        <div className="header-container">
            <input
                className='header-input'
                onChange={handleInputValue}
                placeholder='Choose your pokemon..' />
            <button
                className="header-button"
                onClick={buttonCallAPI}>Search</button>
        </div>
    )
}

export default Header;