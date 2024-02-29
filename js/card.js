// Get the countdown display element
const countdownDisplay = document.getElementById('countdown');

// Countdown 시간 설정 (30 Seconds)
let seconds = 30;

// Function to update the countdown display
function updateCountdown() {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // MM:SS 형식으로 시간 바꾸기 (예. 01:21)
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

  // Update the countdown display
  countdownDisplay.textContent = formattedTime;

  // 남는 시간 1초씩ㄱ 줄이기
  seconds--;

  // Timer 시간이 0이면 중단
  if (seconds < 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = '00:00';
  }
}

// Update the countdown initially
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
