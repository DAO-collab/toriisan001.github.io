
{
  'use strict';

  const pipSource = document.querySelector('#pip-source');
  const pipButton = document.querySelector('#pip-button');
  pipButton.style.opacity = 0.3;

  const setup = async () => {
    const video = document.createElement('video');
    video.src = "../video/東北きりたんにシャイニングスターをフルで歌ってもらった.mp4";
    video.autoplay = true;
    video.muted = false;
    video.playsInline = true;
    video.width = 640;
    video.height = 360;

    await new Promise((resolve) => {
      // メディアプレーヤーで、再生位置が変化した時に発火するイベントハンドラ
      video.ontimeupdate = () => {
        // 解決
        resolve();
      }
      video.play();
    });
    return video;
  }

  (async function main() {
    const video = await setup();
    pipButton.style.opacity = 1;
    video.onenterpictureinpicture = () => {
      // video要素を非表示
      video.style.display = 'none';
    }
    video.onleavepictureinpicture = () => {
      // ノードを削除
      video.remove();
    }
    pipButton.addEventListener('click', (event) => {
      document.body.appendChild(video);
      video.play();
      // ビデオをピクチャ イン ピクチャ モードで表示する非同期要求
      video.requestPictureInPicture();
    });
  })();
}