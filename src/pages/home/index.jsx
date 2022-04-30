import React, { useState } from 'react';
import styles from './styles.css';
import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';

const Home = () => {
    const [offset, setOffset] = useState(0);
    return (
        <div className="home-container">
            <Header />
            <Body offset={offset} />
            <Footer offset={offset} setOffset={setOffset} />
        </div>
    )
}

export default Home;