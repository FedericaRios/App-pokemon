import React, { useEffect, useState } from 'react';
import CardItem from '../cardItem'
import PopUp from '../../components/popUp';
import style from './styles.css';

const Body = ({
    offset,
    pokemonFinded,
    showListPokemons,
    setShowListPokemons
}) => {

    const [pokemons, setPokemons] = useState([]);
    const [popUp, setPopUp] = useState(false)
    const [pokemonPopUp, setPokemonPopUp] = useState({});

    const fetchPokemonsAndNext = async () => {
        try {
            let res_api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
            res_api = await res_api.json();
            console.log(res_api)
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
            {
                !showListPokemons && <div className="button-container">
                    <button onClick={() => setShowListPokemons(true)} >{'< Back to pokemon list'}</button>
                </div>
            }
            <div className={showListPokemons ? "cardItem-container" : "oneCardItem-container"}>
                {
                    showListPokemons && pokemons.map((item) => {
                        return (
                            < CardItem
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
                        pokemonFinded.name && !showListPokemons && < CardItem
                            name={pokemonFinded.name}
                            image={pokemonFinded.sprites.other.dream_world.front_default}
                            setPopUp={setPopUp}
                            setPokemonPopUp={setPokemonPopUp}
                            pokemon={pokemonFinded}
                        />
                    }

                </div>

                <div>
                    {popUp && pokemonPopUp.name && <PopUp
                        popUp={popUp}
                        setPopUp={setPopUp}
                        pokemonPopUp={pokemonPopUp}
                    >
                    </PopUp>
                    }
                </div>

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

