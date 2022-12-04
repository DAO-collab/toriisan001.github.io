{
    'use strict';

    // スクロール禁止(マスク上)
    function maskDisableScroll(event) {
        if (event.path[0].id === 'mask') {
            event.preventDefault();
        }
    }

    // メニュー制御
    const open = document.getElementById('open');
    const menu = document.getElementById('menu');
    const mask = document.getElementById('mask');
    const main = document.getElementsByTagName('main')[0];
    open.addEventListener('click', () => {
        menu.classList.remove('hidden');
        mask.classList.remove('hidden');
        // スクロール禁止付与
        document.addEventListener('touchmove', maskDisableScroll, { passive: false });
        document.body.classList.add('overflow-hidden');
    });
    mask.addEventListener('click', () => {
        menu.classList.add('hidden');
        mask.classList.add('hidden');
        // スクロール禁止除去
        document.removeEventListener('touchmove', maskDisableScroll, { passive: false });
        document.body.classList.remove('overflow-hidden');
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

    // 最終更新日を追記
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent += "(最終更新日時：" + dateFomatYYYYMMDDhhmmss(new Date(document.lastModified), '/', ':') + ")";

    // ログを設定
    // param text ログに設定するテキスト(\nで改行が可能)
    // return void
    // use setLog('mvShow');
    function setLog(text) {
        const log = document.getElementById('log');
        log.innerText += text;
    }
}
