// scripts.js
const video = document.getElementById('bgVideo');
const playBtn = document.getElementById('playBtn'); // 假设你已经创建了一个播放按钮并为其分配了ID "playBtn"
const pauseBtn = document.getElementById('pauseBtn'); // 假设你已经创建了一个暂停按钮并为其分配了ID "pauseBtn"
playBtn.addEventListener('click', () => {
    video.play(); // 点击播放按钮时，开始播放视频
});
pauseBtn.addEventListener('click', () => {
    video.pause(); // 点击暂停按钮时，暂停播放视频
});