'use strict';

{
    const dts = document.querySelectorAll('dt');
    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            // appearクラスを付け外し
            dt.parentNode.classList.toggle('appear');
            // 選択した要素以外のappearクラスを外す
            dts.forEach(el => {
                if (dt !== el) {
                    el.parentNode.classList.remove('appear');
                }
            });
        });
    });
}