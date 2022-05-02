import React from 'react';
import style from './styles.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Footer = ({
    setOffset,
    offset,
    showListPokemons
}) => {

    const sumarOffset = () => {
        setOffset(offset + 10)
    }

    const restarOffset = () => {
        setOffset(offset - 10)
    }


    return (
        <div className="footer-container">
            {
                showListPokemons && <div className="buttons-container">
                    <button
                        className="buttons"
                        onClick={restarOffset}><FiChevronLeft /></button>
                    <button
                        className="buttons"
                        onClick={sumarOffset}><FiChevronRight /></button>
                </div>
            }

        </div >
    )
}

export default Footer;