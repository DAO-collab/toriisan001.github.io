'use strict';
{
    // Intersection Observer API
    function onScrollCallback(entries) {
        entries.forEach(entry => {
            // 要素が画面と交差したかどうか判定
            if (!entry.isIntersecting) {
                haderMenuBar.classList.add('scrolled');
                toTop.classList.add('scrolled');
            } else {
                // 要素が画面に表示されている
                haderMenuBar.classList.remove('scrolled');
                toTop.classList.remove('scrolled');
            }
        });
    }
    const haderMenuBar = document.getElementById('haderMenuBar');
    const toTop = document.getElementById('to_top');
    // 特定の要素が画面に交差したときにこちらの callback の処理を実行
    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('target'));
}