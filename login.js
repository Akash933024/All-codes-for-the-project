document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Here, you would typically send the login data to a server for authentication.
      // This is where you'd use AJAX or fetch to communicate with a backend.
      // Once the login is successful, you can redirect the user to the navigation menu page.
      // For this example, we'll assume login is successful.
      alert('Login successful! Redirecting to navigation menu.');
      window.location.href = 'navigation-menu.html';
    });
  });
  