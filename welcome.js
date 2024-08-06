const targetDates = [
    new Date('2024-08-11T00:00:00').getTime(),
    new Date('2024-11-09T00:00:00').getTime(),
    new Date('2024-12-17T00:00:00').getTime(),
  ];
  
  function showButton(index) {
    document.getElementById(`button${index + 1}`).classList.remove('hidden');
  }
  
  function updateCountdown(targetDate, ids, index) {
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    if (distance < 0) {
      showButton(index);
      document.getElementById(ids.days).innerText = '00';
      document.getElementById(ids.hours).innerText = '00';
      document.getElementById(ids.minutes).innerText = '00';
      document.getElementById(ids.seconds).innerText = '00';
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById(ids.days).innerText = days;
    document.getElementById(ids.hours).innerText = hours;
    document.getElementById(ids.minutes).innerText = minutes;
    document.getElementById(ids.seconds).innerText = seconds;
  }
  
  function updateAllCountdowns() {
    updateCountdown(targetDates[0], {days: 'days1', hours: 'hours1', minutes: 'minutes1', seconds: 'seconds1'}, 0);
    updateCountdown(targetDates[1], {days: 'days2', hours: 'hours2', minutes: 'minutes2', seconds: 'seconds2'}, 1);
    updateCountdown(targetDates[2], {days: 'days3', hours: 'hours3', minutes: 'minutes3', seconds: 'seconds3'}, 2);
  }
  
  setInterval(updateAllCountdowns, 1000);
  