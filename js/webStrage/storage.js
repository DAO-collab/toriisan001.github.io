export default class storage {
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

    // 最終アクセスパス名を設定
    setLastAcssesHref(config, location) {
        this.setItem(config.SYSTEM_KEY.LAST_HREF, location.href);
    }

    // 最終アクセスパス名を取得
    getLastAcssesHref(config) {
        return this.getItem(config.SYSTEM_KEY.LAST_HREF);
    }

    // ログ表示フラグを設定
    setLogShowFlag(config, flag) {
        this.setItem(config.SYSTEM_KEY.LOG_SHO_FLAG, flag);
    }

    // ログ表示フラグを取得
    getLogShowFlag(config) {
        return this.getItem(config.SYSTEM_KEY.LOG_SHO_FLAG);
    }
}