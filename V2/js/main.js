'use strict';
{
    // メニュー制御
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');
    const mask = document.getElementById('mask');
    open.addEventListener('click', () => {
        open.classList.add('hidden');
        menu.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    close.addEventListener('click', () => {
        open.classList.remove('hidden');
        menu.classList.add('hidden');
        mask.classList.add('hidden');
    });
    mask.addEventListener('click', () => {
        close.click();
    })
}