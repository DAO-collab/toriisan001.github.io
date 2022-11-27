export default class Storage {
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