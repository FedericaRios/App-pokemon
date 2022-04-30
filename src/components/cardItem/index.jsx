import React from 'react';
import style from './styles.css';

const CardItem = ({
    name,
    image
}) => {

    return (
        <div className="item-container">
            <div className="name-container">
                {name}
            </div>
            <div className="image-container">
                <img src={image} />
            </div>
        </div >
    )

}

export default CardItem;