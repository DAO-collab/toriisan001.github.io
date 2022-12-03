export default class {
    // DB
    #db;
    // youtubeId
    #youtubeId;
    // タイトル
    #title;
    constructor(dexie, version) {
        this.db = dexie;
        // データベースにテーブルを設定 ・初期化
        this.db.version(version).stores({ youtube: "++id, youtubeId, title" });
        this.db.open().then(function (db) {
            // 接続に成功したとき
            console.log("DB connection successful.");
        }).catch(function (err) {
            // エラーが起きたとき
            console.err("DB connection failed. : " + err);
        });
    }

    // データ作成
    create() {
        this.db.youtube.put(
            {
                youtubeId: this.youtubeId,
                title: this.title
            }
        );
    }

    // データを全てクリア
    deleteAll() {
        this.db.youtube.clear();
    }

    // 対象キーのデータをクリア
    delete(id) {
        this.db.youtube.delete(id);
    }

    // idでデータを取得
    findId(pId) {
        this.db.youtube.where({ id: pId })
            .toArray()
            .then(function (data) {
                console.log(youtubeList);
            });
    }

    // 全データ取得
    async findAll() {
        return new Promise(resolve => {
            this.db.youtube
                .toArray()
                .then(function (youtubeList) {
                    resolve(youtubeList);
                });
        });
    }
}