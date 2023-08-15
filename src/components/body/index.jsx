import React, { useEffect, useState } from 'react';
import CardItem from '../cardItem'
import PopUp from '../../components/popUp';
import { FiArrowLeft } from "react-icons/fi";
import './styles.css';

const Body = ({ offset, pokemonFinded, showListPokemons, setShowListPokemons }) => {

    const [pokemons, setPokemons] = useState([]);
    const [popUp, setPopUp] = useState(false)
    const [pokemonPopUp, setPokemonPopUp] = useState({});
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 530) {
                setLimit(6)
            }
            if (window.innerWidth > 530) {
                setLimit(10)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (limit !== 0) {
            fetchPokemonsAndNext();
        }
    }, [offset, limit])

    const fetchPokemonsAndNext = async () => {
        try {
            let res_api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            res_api = await res_api.json();
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
    }

    return (
        <div className="body-container">
            {
                !showListPokemons &&
                <div className="button-container">
                    <button onClick={() => setShowListPokemons(true)}><FiArrowLeft style={{ marginRight: '5px' }} />
                        Back
                    </button>
                </div>
            }
            <div className={showListPokemons ? "cardItem-container" : "oneCardItem-container"}>
                {
                    showListPokemons && pokemons.map((item) => {
                        return (
                            <CardItem
                                name={item.name}
                                image={item.sprites.other.dream_world.front_default}
                                setPopUp={setPopUp}
                                setPokemonPopUp={setPokemonPopUp}
                                pokemon={item}
                            />
                        )
                    })
                }
                <div className="oneCardItem">
                    {
                        pokemonFinded.name && !showListPokemons &&
                        <CardItem
                            name={pokemonFinded.name}
                            image={pokemonFinded.sprites.other.dream_world.front_default}
                            setPopUp={setPopUp}
                            setPokemonPopUp={setPokemonPopUp}
                            pokemon={pokemonFinded}
                        />
                    }
                </div>
                <div>
                    {popUp && pokemonPopUp.name &&
                        <PopUp
                            popUp={popUp}
                            setPopUp={setPopUp}
                            pokemonPopUp={pokemonPopUp}
                        >
                        </PopUp>
                    }
                </div>
            </div>
        </div>
    )
};

export default Body;