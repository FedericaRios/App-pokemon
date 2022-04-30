import React, { useEffect, useState } from 'react';
import CardItem from '../cardItem'
import style from './styles.css';

// const API_10_pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
// const API_id = 'https://pokeapi.co/api/v2/pokemon/1';

const Body = ({
    offset
}) => {

    const [pokemonsAndNext, setPokemonsAndNext] = useState({});
    const [pokemons, setPokemons] = useState([]);


    const fetchPokemonsAndNext = async () => {
        try {
            let res_api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
            res_api = await res_api.json();
            console.log(res_api)
            setPokemonsAndNext(res_api);
            getAllInfoPokemons(res_api.results)

        } catch (error) {
            console.log(error)
        }
    }

    const getFetch = async (url) => {
        let response = await fetch(url)
        return (
            await response.json()
        )
    }

    const getAllInfoPokemons = async (arrayPokemon) => {
        const arrayPromise = arrayPokemon.map((item) => getFetch(item.url));
        let arrayInfoPokemon = await Promise.all(arrayPromise);
        setPokemons(arrayInfoPokemon);
        console.log(arrayInfoPokemon)
    }

    useEffect(() => {
        fetchPokemonsAndNext();
    }, [offset])


    return (
        <div className="body-container">
            <div className="cardItem-container">
                {
                    pokemons.map((item) => {
                        return (
                            < CardItem
                                name={item.forms[0].name}
                                image={item.sprites.other.dream_world.front_default}
                            />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Body;




// const getRandom = (min, max) => {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // const random = getRandom(1, 11)
    // fetchData(random);

