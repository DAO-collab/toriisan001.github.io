import Storage from "../js/webStrage/storage.js"
import config from "../js/config.js"
{
    'use strict';

    var storageObj = new Storage(localStorage);

    // 最終アクセスを保持
    storageObj.setLastAcssesHref(config, location);

    // ログを表示させるか判定
    const log = document.getElementById('log');
    const logShoFlag = document.getElementById('logShoFlag');
    if (storageObj.getLogShowFlag(config) === '1') {
        log.classList.remove('hidden');
        logShoFlag.checked = true;
    } else {
        log.classList.add('hidden');
        logShoFlag.checked = false;
    }    
    // ログを表示させるか切り替え
    logShoFlag.addEventListener('click', () => {
        // フラグ設定
        storageObj.setLogShowFlag(config, Number(logShoFlag.checked));
        // ページ再読み込み
        window.location.href = storageObj.getLastAcssesHref(config);
    });
}
