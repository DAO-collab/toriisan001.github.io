{
    'use strict';

    // 最終更新日を追記
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent += "(最終更新日時：" + dateFomatYYMMDDhhmmss(new Date(document.lastModified)) + ")";
}
