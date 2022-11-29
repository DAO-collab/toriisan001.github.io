import Storage from "../js/storage.js"
import config from "../js/config.js"
{
    'use strict';

    // スクロールを禁止にする関数
    function disableScroll(event) {
        event.preventDefault();
    }

    // メニュー制御
    const open = document.getElementById('open');
    const menu = document.getElementById('menu');
    const mask = document.getElementById('mask');
    const main = document.getElementsByTagName('main')[0];
    open.addEventListener('click', () => {
        menu.classList.remove('hidden');
        mask.classList.remove('hidden');
        // main.classList.add('hidden');
        // スクロール禁止付与
        main.addEventListener('touchmove', disableScroll, { passive: false });
        main.classList.add('overflow-hidden');
    });
    mask.addEventListener('click', () => {
        menu.classList.add('hidden');
        mask.classList.add('hidden');
        // main.classList.remove('hidden');
        // スクロール禁止除去
        main.removeEventListener('touchmove', disableScroll, { passive: false });
        main.classList.remove('overflow-hidden');
    });

    // ページトップへ移動する制御
    // Intersection Observer API
    function onScrollCallback(entries) {
        entries.forEach(entry => {
            // 要素が画面と交差したかどうか判定
            if (!entry.isIntersecting) {
                toTop.classList.add('scrolled');
            } else {
                // 要素が画面に表示されている
                toTop.classList.remove('scrolled');
            }
        });
    }
    const toTop = document.getElementById('pageTop');
    // 特定の要素が画面に交差したときにこちらの callback の処理を実行
    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('target'));

    // pageTopイベント
    toTop.addEventListener('click', e => {
        // イベントを無効化(#(パウンド記号がついてしまうことを防ぐため))
        e.preventDefault();
        // ページ上部へ戻る
        window.scrollTo({
            top: -500,
            behavior: 'smooth',
        })
    });

    // 最終アクセスを保持
    var storageObj = new Storage(localStorage);
    storageObj.setLastAcssesHref(config, location);

    // 最終更新日を追記
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent += "(最終更新日時：" + dateFomatYYYYMMDDhhmmss(new Date(document.lastModified), '/', ':') + ")";

}
