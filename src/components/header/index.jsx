import React from 'react';
import { useState } from 'react';
import './styles.css';

const API_pokemon = 'https://pokeapi.co/api/v2/pokemon/'

const Header = ({ setPokemonFinded, setShowListPokemons }) => {

    const [pokemonForSearch, setPokemonForSearch] = useState('');

    const handleInputValue = (input) => {
        const inputValue = input.target.value.toLowerCase();
        setPokemonForSearch(inputValue);
    }

    const searchPokemon = async () => {
        let res_api = await fetch(API_pokemon + pokemonForSearch)
        res_api = await res_api.json();
        setPokemonFinded(res_api)
        setShowListPokemons(false)
    }

    return (
        <div className="header-container">
            <input
                className='header-input'
                onChange={handleInputValue}
                placeholder='Choose your pokemon..' />
            <button
                className="header-button"
                onClick={searchPokemon}>Search</button>
        </div>
    )
};

export default Header;