{
    'use strict';

    // 最終更新日を追記
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent += "(最終更新日時：" + dateFomatYYYYMMDDhhmmss(new Date(document.lastModified), '/', ':') + ")";

    // ストレージクラス
    class Storage {
        // ストレージ変数
        #storage;
        constructor(storage) {
            this.storage = storage;
        }
        // データ追加
        setItem(k, v) {
            this.storage.setItem(k, v);
        }
        // keyを指定してデータを削除
        keyCle(k) {
            this.storage.removeItem(k);
        }
        // keyを指定してデータを取得
        getItem(k) {
            return this.storage.getItem(k);
        }
    }
    // Storageオブジェクトを取得
    function getStorageOBJ(storage) {
        return new Storage(storage);
    }

    // Dexie
    class DexieWrap {
        // DB変数
        #db;
        constructor(dbName) {
            this.db = Dexie(dbName);
            this.db.open().then(function () {
                // 接続に成功したとき
                console.log("DB connection successful.");
            }).catch(function (err) {
                // エラーが起きたとき
                console.err("DB connection failed. : " + err);
            });
            db.version(config.INDEX_DB.MASTER.DB_VERSION).stores({ notes: "++id, title, body, updated_at" });
        }
        // データの取得
        getResult() {
            // 実行タイミング(100ミリ秒)で実行
            setTimeout(function () {
                db.notes
                    .toArray()
                    .then(function (notes) {
                        return notes;
                    });
            }, 100);
        }
        // keyCle(k) {
        //     this.storage.removeItem(k);
        // }
        // getItem(k) {
        //     return this.storage.getItem(k);
        // }
    }
    // ストレージクラスを取得
    function getDexieWrapOBJ(dbName) {
        return new DexieWrap(dbName);
    }
}
