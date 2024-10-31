// api/posts.js
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'public/data/data.json');

export default function handler(req, res) {
    if (req.method === 'GET') {
        // JSONファイルの内容を返す
        const jsonData = fs.readFileSync(dataFilePath);
        res.status(200).json(JSON.parse(jsonData));
    } else if (req.method === 'PUT') {
        // リクエストボディから新しいデータを取得
        const newPost = req.body;

        // 既存のデータを読み込む
        const existingData = JSON.parse(fs.readFileSync(dataFilePath));
        existingData.push(newPost);

        // 新しいデータをJSONファイルに書き込む
        fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
        res.status(200).json(newPost);
    } else {
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}