import React from 'react';
import 'flowbite';

const Guidelines = () => (
  <>
    <link href="/src/lightbox.css" rel="stylesheet" />
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 max-w-screen-xl mx-auto px-4">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2" role="presentation">
          <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Googleスライドの場合</button>
        </li>
        <li className="me-2" role="presentation">
          <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Canvaプレゼンテーションの場合</button>
        </li>
        <li className="me-2" role="presentation">
          <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">そのほかのものを使った場合</button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content" className="max-w-screen-xl mx-auto px-4">
      <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        Googleスライドを使って作った場合は、次の手順でフォームを入力してください。
        <ol>
          <li>自分の作ったプレゼンテーションを開きます。</li>
          <li>右上の共有をクリックします。<br />
            <a href="slide_1.png" data-lightbox="image-1"><img src="slide_1.png" alt="Slide 1" className="w-1/2" /></a>
          </li>
          <li>その中に、フォームに書かれているメールアドレスを入れてください。(812423から始まるやつです。)<br />
            <a href="slide_2.png" data-lightbox="image-2"><img src="slide_2.png" alt="Slide 2" className="w-1/2" /></a>
          </li>
          <li>その後に一番左下のリンクをコピーを押します。</li>
          <li>そのリンクをフォームの欄に貼り付けてください。(Ctrl + V で貼り付けることができます。)</li>
        </ol>
      </div>
      <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.</p>
      </div>
      <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.</p>
      </div>
    </div>
    <script src="/src/lightbox.js"></script>
  </>
);

export default Guidelines;
