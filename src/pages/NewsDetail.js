import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; // <- インポートする

const NewsDetail = () => {
  const { id } = useParams(); // URLパラメータからIDを取得
  const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        // APIからお知らせの詳細情報を取得
        axios.get(process.env.REACT_APP_API_URL, {
            headers: {
              'X-API-KEY': process.env.REACT_APP_API_KEY // ご自身のAPIキーを設定
            }
        })
            .then(response => {
                console.log(response.data); // 取得したデータを確認
                const foundNewsItem = response.data.contents.find(item => item.id === id); // idで検索
                setNewsItem(foundNewsItem); // IDが一致するニュースを格納
            })
            .catch(error => {
                console.error('Error fetching news detail:', error);
            });
    }, [id]); // IDが変わるたびにデータを再取得

    if (!newsItem) {
        return <div>読み込み中...</div>; // データがまだない場合はローディング表示
    }

    return (
        <>
        <Helmet>
            <title>ニュース | Sozan Liberal Arts</title>
        </Helmet>
        <div className="mb-4 max-w-screen-xl mx-auto px-4">
            <div className="container mx-auto px-4 py-8">
            {/* タイトル */}
            <h1 className="text-3xl font-bold text-center mb-6">{newsItem.title}</h1>
        
            {/* 本文 */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: newsItem.body }} /><br />
            <a href="/news" class="text-blue-700  hover:text-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    お知らせ一覧へ戻る
            </a>
            </div>
        </div>
        </>
      );
};

export default NewsDetail;
