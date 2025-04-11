// Dark/Light Mode Toggle
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save preference
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});