/* Edit this file */
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');
const backwardButton = player.querySelector('.backward');
const forwardButton = player.querySelector('.forward');

// Function to toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Function to update the play/pause button
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Function to handle skip buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Function to handle volume change
function handleVolume() {
  video.volume = this.value;
}

// Function to handle playback speed change
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Function to update the progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Function to skip backward and forward
function skipBackward() {
  video.currentTime -= 10;
}

function skipForward() {
  video.currentTime += 25;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);
backwardButton.addEventListener('click', skipBackward);
forwardButton.addEventListener('click', skipForward);


