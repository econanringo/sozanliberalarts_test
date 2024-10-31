import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    // JSONファイルからニュースデータを取得
    const fetchNews = async () => {
        try {
            const response = await fetch('/data/data.json');
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">お知らせ</h2>
            <ul>
                {news.map((item, index) => (
                    <li key={index} className="border p-2 mb-2">
                        <h3 className="font-bold">{item.title}</h3>
                        <p>{item.content}</p>
                        <small>{item.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;