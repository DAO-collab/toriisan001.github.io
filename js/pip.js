
{
  'use strict';
  const pipButton = document.getElementById('pip-button');
  const video = document.createElement('video');
  video.src = "../video/東北きりたんにシャイニングスターをフルで歌ってもらった.mp4";
  // 要素の再生領域内で再生するか。 iOS safari 環境ではこれがないとインライン再生されないらしい
  video.playsInline = true;
  video.width = 640;
  video.height = 360;
  pipButton.addEventListener('click', (event) => {
    // ビデオ要素をピクチャ イン ピクチャ モードで表示する非同期要求
    video.requestPictureInPicture();
  });
}