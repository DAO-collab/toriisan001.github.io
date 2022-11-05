{
    'use strict';

    // 0埋め関数
    function zeroPadding(no, digit) {
        return ('0'.repeat(digit) + no).slice(-1 * digit);
    }

    // 0埋め関数
    function dateFomatYYMMDDhhmmss(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = zeroPadding(date.getSeconds(), 2);
        return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    }
}
