document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Here, you would typically send the registration data to a server for processing.
      // This is where you'd use AJAX or fetch to communicate with a backend.
      // Once the registration is successful, you can redirect the user to the login page.
      // For this example, we'll assume registration is successful.
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    });
  });
  