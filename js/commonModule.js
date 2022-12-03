import Storage from "../js/webStrage/storage.js"
import config from "../js/config.js"
{
    'use strict';

    // 最終アクセスを保持
    var storageObj = new Storage(localStorage);
    storageObj.setLastAcssesHref(config, location);
}
