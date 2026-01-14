// Function to update the clock with date and 12-hour format
function updateClock() {
   const now = new Date();
   
   // Get date components
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
   
   const dayName = days[now.getDay()];
   const monthName = months[now.getMonth()];
   const date = now.getDate();
   const year = now.getFullYear();
   
   // Get time components
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();
   
   // Convert to 12-hour format
   const ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12;
   hours = hours ? hours : 12; // 0 should be 12
   
   // Add leading zeros
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;
   
   // Format strings
   const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
   const dateString = `${dayName}, ${monthName} ${date}, ${year}`;
   
   // Update the elements
   const clockElement = document.getElementById('live-clock');
   const dateElement = document.getElementById('live-date');
   
   if (clockElement) {
      clockElement.textContent = timeString;
   }
   if (dateElement) {
      dateElement.textContent = dateString;
   }
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
