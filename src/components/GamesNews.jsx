import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GamesNews.css';

const GamesNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = 'bd158c9a65504f5786aa5ca60bf0bc21';
    const games = [
        'League of Legends',
        'Valorant',
        'Fortnite',
        'Call of Duty: Warzone'
    ];

    useEffect(() => {
        const fetchNewsForGames = async () => {
            try {
                const newsPromises = games.map(game =>
                    axios.get('https://newsapi.org/v2/everything', {
                        params: {
                            q: game,
                            language: 'en',
                            apiKey: apiKey,
                            pageSize: 20
                        }
                    })
                );

                const responses = await Promise.all(newsPromises);

                const allArticles = [];

                responses.forEach((response) => {
                    let articles = response.data.articles;

                    articles = articles.filter(article =>
                        games.some(game =>
                            article.title.toLowerCase().includes(game.toLowerCase()) ||
                            article.description?.toLowerCase().includes(game.toLowerCase())
                        )
                    );
                    articles.forEach(article => {
                        if (!allArticles.some(a => a.title === article.title)) {
                            allArticles.push(article);
                        }
                    });
                });

                setNews(allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)));
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch news');
                setLoading(false);
            }
        };

        fetchNewsForGames();
    }, []);

    if (loading) {
        return <p>Loading news...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="games-news-container">
            <h2 className='news-main-title'>Latest News</h2>
            <div className="news-grid">
                {news.length > 0 ? (
                    news.map((article, index) => (
                        <div key={index} className="news-card">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="news-image" />
                            )}
                            <div className="news-content">
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    <h3 className="news-title">{article.title}</h3>
                                </a>
                                <p className="news-description">{article.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No news available.</p>
                )}
            </div>
        </div>
    );
};

export default GamesNews;
