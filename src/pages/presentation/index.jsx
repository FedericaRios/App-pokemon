import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoPokemon from '../../assets/pokemon-logo.png';
import styles from './styles.css';

const Presentation = () => {
    const navigate = useNavigate();

    return (
        <div className="presentation-container">
            <h1 className="parrafo-container">Welcome!</h1>
            <img src={logoPokemon} className="logo-pokemon" />
            <div className="presentation-button-container">
                <button
                    className="presentation-button"
                    onClick={() => navigate("/home")}>Ingresar</button>
            </div>
        </div >
    )
};

export default Presentation;