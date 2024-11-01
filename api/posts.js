import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');

  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      res.status(200).json(JSON.parse(data));
    } catch (err) {
      console.error('File read error:', err);
      res.status(500).json({ error: 'ファイルの読み込みに失敗しました' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { title, content } = req.body;
      const date = new Date().toISOString().split('T')[0]; // 現在の日付を設定
      const newPost = { title, content, date };

      // 現在のファイル内容を取得して更新
      const fileData = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileData);
      jsonData.push(newPost);

      // 更新後の内容を保存
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      res.status(200).json({ message: 'データが正常に更新されました' });
    } catch (err) {
      console.error('File write error:', err);
      res.status(500).json({ error: 'ファイルの書き込みに失敗しました' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
