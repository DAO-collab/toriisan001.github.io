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
    // ストレージクラスを取得
    function getStorageOBJ(storage) {
        return new Storage(storage);
    }
}
