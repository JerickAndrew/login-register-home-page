document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Username and Password are required.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.username === usernameInput.value.trim() && user.password === passwordInput.value.trim());

        if (user) {
            alert('Login successful!');
           
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
