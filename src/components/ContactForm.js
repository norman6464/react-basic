import React, { useState } from 'react';

export function ContactForm() {
    // フォームの状態を管理するためのstate
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // 送信ボタン王カジノ処理
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    // 送信データのバリデーション
    if (!name.trim()) {
        alert('氏名を入力してください。');
    }

    if (!message.trim()) {
        alert('お問い合せ内容を入力してください。');
    }


    // 送信完了メッセージをポップアップ表示
    alert(`お問い合わせを承りました。 \n \n 氏名${name} \n ${message}`);

    // 入力欄のリセット
    setName('');
    setMessage('');

    // フォームを構築して出力
    return (
        <section>
            <h3>お問い合わせフォーム</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">氏名：</label>
                    <input type="text" value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='氏名入力してください'
                    />
                </div>
            </form>
        </section>
    )
}