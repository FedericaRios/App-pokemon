import React, { useState } from 'react';
import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import './styles.css';

const Home = () => {
    const [offset, setOffset] = useState(0);
    const [pokemonFinded, setPokemonFinded] = useState({});
    const [showListPokemons, setShowListPokemons] = useState(true);

    return (
        <div className="home-container">
            <Header
                setPokemonFinded={setPokemonFinded}
                setShowListPokemons={setShowListPokemons}
            />
            <Body
                offset={offset}
                pokemonFinded={pokemonFinded}
                showListPokemons={showListPokemons}
                setShowListPokemons={setShowListPokemons}
            />
            <Footer
                offset={offset}
                setOffset={setOffset}
                showListPokemons={showListPokemons}
            />
        </div>
    )
};

export default Home;