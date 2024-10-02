import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Navbar from './Navbar';
import './GamesList.css';

const stripePromise = loadStripe('pk_test_51Q5PCQDwSfqJYufcmjp9Tw5XshFMQTMd88HpcZFtFEscmDOqqsI3H4dEs7vPjLCs2qCelMBZcSvTRC3rvlZYc2AJ004cxlByC7');


const GamesList = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/games');
                setGames(response.data);
            } catch (err) {
                setError('Error fetching games');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const handlePurchase = async (gameId) => {
        const stripe = await stripePromise;

        try {
            const response = await axios.post('http://localhost:3001/api/create-checkout-session', {
                gameId,
                quantity: 1
            });
            const { id } = response.data;
            const result = await stripe.redirectToCheckout({ sessionId: id });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error during payment', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Navbar />
            <div className="games-list">
                <ul>
                    {games.map((game) => (
                        <li key={game._id}>
                            <img src={game.image} alt={game.name} />
                            <h3>{game.name}</h3>
                            <p>Price: {game.price} TND</p>
                            <button onClick={() => handlePurchase(game._id)}>
                                Purchase
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GamesList;
