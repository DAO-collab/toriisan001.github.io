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
        setItem(k, v) {
            this.storage.setItem(k, v);
        }
        keyCle(k) {
            this.storage.removeItem(k);
        }
        getItem(k) {
            return this.storage.getItem(k);
        }
    }
    // Storageオブジェクトを取得
    function getStorageOBJ(storage) {
        return new Storage(storage);
    }

    // Dexie
    class Dexie {
        // DB変数
        #db;
        constructor(storage) {
            this.db = Dexie(config.INDEX_DB.MASTER.DB_NAME);
            this.db.open().then(function (db) {
                // 接続に成功したとき
                console.log("DB connection successful.");
            }).catch(function (err) {
                // エラーが起きたとき
                console.err("DB connection failed. : " + err);
            });
        }
        setItem(k, v) {
            this.storage.setItem(k, v);
        }
        keyCle(k) {
            this.storage.removeItem(k);
        }
        getItem(k) {
            return this.storage.getItem(k);
        }
    }
    // ストレージクラスを取得
    function getStorageOBJ(storage) {
        return new Storage(storage);
    }
}
