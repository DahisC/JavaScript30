const video = document.querySelector('video');
const btn_play = document.querySelector('.player__button.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const btns_skip = document.querySelectorAll('.player__button[data-skip]');
const slider_playbackRate = document.querySelector('input[name="playbackRate"]');
const slider_volume = document.querySelector('input[name="volume"]');

let isPlaying = false;
progressFilled.style.flexBasis = '0%';

// 播放/暫停按鈕
btn_play.onclick = () => {
  if (!isPlaying) {
    video.play();
    btn_play.textContent = 'II';
  } else {
    video.pause();
    btn_play.textContent = '►';
  }
  isPlaying = !isPlaying;
};

// 點擊進度條時跳轉
progress.addEventListener('click', function (event) {
  video.currentTime = video.duration * (event.offsetX / this.offsetWidth);
});

// 前進/後退特定時間
btns_skip.forEach((btn) =>
  btn.addEventListener('click', function () {
    video.currentTime += Number(this.dataset.skip);
  })
);

// 播放速度
slider_playbackRate.addEventListener('change', function () {
  video.playbackRate = this.value;
});

// 音量
slider_volume.addEventListener('change', function () {
  video.volume = this.value;
});

// 更新進度條
video.addEventListener('timeupdate', function () {
  progressFilled.style.flexBasis = `${(this.currentTime / this.duration) * 100}%`;
});
