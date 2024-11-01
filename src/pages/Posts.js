import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [posts, setPosts] = useState([]);

    // JSONファイルから投稿データを取得
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://my-app-la2a.onrender.com/data/data.json');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePasswordSubmit = () => {
        if (password === 'your-password') {
            setIsAuthenticated(true);
        } else {
            alert('パスワードが違います');
        }
    };

    const handleSubmit = async () => {
        const newPost = {
            title,
            content,
            date: new Date().toLocaleDateString(),
        };
    
        // APIエンドポイントにPOSTリクエストを送信
        await fetch('/api/posts', {
            method: 'PUT', // PUTメソッドで新しい投稿を送信
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost),
        });
    
        alert('投稿が作成されました');
    };

    return (
        <div className="p-4">
            {!isAuthenticated ? (
                <div>
                    <input
                        type="password"
                        placeholder="パスワード"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 mr-2"
                    />
                    <button onClick={handlePasswordSubmit} className="bg-primary text-white py-2 px-4 rounded">
                        送信
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">新しい投稿を作成</h2>
                    <input
                        type="text"
                        placeholder="タイトル"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mb-2 w-full"
                    />
                    <textarea
                        placeholder="内容"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 mb-2 w-full"
                    />
                    <button onClick={handleSubmit} className="bg-primary text-white py-2 px-4 rounded">
                        投稿
                    </button>

                    <h2 className="text-2xl font-bold mt-4">投稿一覧</h2>
                    <ul>
                        {posts.map((post, index) => (
                            <li key={index} className="border p-2 mb-2">
                                <h3 className="font-bold">{post.title}</h3>
                                <p>{post.content}</p>
                                <small>{post.date}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Posts;