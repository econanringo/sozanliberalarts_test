import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; // <- Helmetインポート

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);   // ローディング状態のフラグ
  const [error, setError] = useState(null);       // エラーメッセージの状態

  // 日付をyyyy/mm/dd形式に変換する関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0から始まるので+1
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  };

  useEffect(() => {
    // APIからお知らせの一覧を取得
    axios.get(process.env.REACT_APP_API_URL, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY // ご自身のAPIキーを設定
      }
    })
    .then(response => {
      setNewsList(response.data.contents); // microCMSから取得したデータをstateに格納
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching news:', error);
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center">読み込み中...</div>; // ローディング表示
  }

  if (error) {
    return <div className="text-center text-red-500">エラーが発生しました。SLAの誰かに尋ねてください。</div>; // エラーメッセージ表示
  }

  return (
    <>
      <Helmet>
        <title>ニュース/Sozan Liberal Arts</title>
      </Helmet>
      <div className="mb-4 max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">お知らせ一覧</h1>

        {/* お知らせのカード一覧表示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map(news => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
                <Link
                  to={`/news/${news.id}`}
                  className="mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  続きを読む
                </Link>
              </div>

              {/* 投稿日付表示（publishedAtを使用） */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {formatDate(news.publishedAt)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
