{
    'use strict';

    // 最終更新日を追記
    // const lastModified = document.getElementById('lastModified');
    // lastModified.textContent += "(最終更新日時：" + dateFomatYYYYMMDDhhmmss(new Date(document.lastModified), '/', ':') + ")";

    // メニュー制御
    const open = document.getElementById('open');
    const menu = document.getElementById('menu');
    const mask = document.getElementById('mask');
    open.addEventListener('click', () => {
        menu.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    mask.addEventListener('click', () => {
        menu.classList.add('hidden');
        mask.classList.add('hidden');
    });

    // // Intersection Observer API
    // function onScrollCallback(entries) {
    //     entries.forEach(entry => {
    //         // 要素が画面と交差したかどうか判定
    //         if (!entry.isIntersecting) {
    //             haderMenuBar.classList.add('scrolled');
    //             toTop.classList.add('scrolled');
    //         } else {
    //             // 要素が画面に表示されている
    //             haderMenuBar.classList.remove('scrolled');
    //             toTop.classList.remove('scrolled');
    //         }
    //     });
    // }
    // const haderMenuBar = document.getElementById('haderMenuBar');
    // const toTop = document.getElementById('to_top');
    // // 特定の要素が画面に交差したときにこちらの callback の処理を実行
    // const onScrollObserver = new IntersectionObserver(onScrollCallback);
    // onScrollObserver.observe(document.getElementById('target'));

    // // to_topイベント
    // toTop.addEventListener('click', e => {
    //     // イベントを無効化(#(パウンド記号がついてしまうことを防ぐため))
    //     e.preventDefault();
    //     // ページ上部へ戻る
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     })
    // });

    // // ストレージクラス
    // class Storage {
    //     // ストレージ変数
    //     #storage;
    //     constructor(storage) {
    //         this.storage = storage;
    //     }
    //     // データ追加
    //     setItem(k, v) {
    //         this.storage.setItem(k, v);
    //     }
    //     // keyを指定してデータを削除
    //     keyCle(k) {
    //         this.storage.removeItem(k);
    //     }
    //     // keyを指定してデータを取得
    //     getItem(k) {
    //         return this.storage.getItem(k);
    //     }
    // }
    // // Storageオブジェクトを取得
    // function getStorageOBJ(storage) {
    //     return new Storage(storage);
    // }

    // // Dexie
    // class DexieWrapNotes {
    //     // DB変数
    //     #db;
    //     constructor(dbName) {
    //         this.db = Dexie(dbName);
    //         this.db.open().then(function () {
    //             // 接続に成功したとき
    //             console.log("DB connection successful.");
    //         }).catch(function (err) {
    //             // エラーが起きたとき
    //             console.err("DB connection failed. : " + err);
    //         });
    //         db.version(config.INDEX_DB.MASTER.DB_VERSION).stores({ 'notes': "++id, title, body, updated_at" });
    //     }
    //     // データの取得
    //     async getResult() {
    //         // 実行タイミング(100ミリ秒)で実行
    //         var res;
    //         await setTimeout(function () {
    //             this.db('notes')
    //                 .toArray()
    //                 .then(function (data) {
    //                     res = data;
    //                 });
    //         }, 100);
    //         return res;
    //     }
    //     // データ追加
    //     set() {
    //         const id = document.getElementById('id');
    //         const title = document.getElementById('title');
    //         const body = document.getElementById('body');
    //         const updatedAt = document.getElementById('updated_at');
    //         var params = {};
    //         if (id.textContent !== '') {
    //             params.id = parseInt(id.textContent);
    //         }
    //         params.title = title.value;
    //         params.body = body.value;
    //         params.updated_at = dateFomatYYYYMMDDhhmmss(new Date(updatedAt.textContent), '/', ':');
    //         his.db('notes').put(params);
    //     }
    //     // keyを指定してデータを削除
    //     keyCle(id) {
    //         this.db('notes').delete(id);
    //     }
    // }
    // // ストレージクラスを取得
    // function getDexieWrapNotesOBJ(dbName) {
    //     return new DexieWrapNotes(dbName);
    // }
}
