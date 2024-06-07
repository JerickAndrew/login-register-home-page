document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const usernameInput = registerForm.querySelector('input[type="text"]');
        const passwordInput = registerForm.querySelector('input[type="password"]');
        const emailInput = registerForm.querySelector('input[type="email"]');
        const phoneInput = registerForm.querySelector('input[type="tel"]');
        const checkboxInput = registerForm.querySelector('input[type="checkbox"]');

        let valid = true;
        let messages = [];

        
        if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 20) {
            messages.push('Username must be between 5 and 20 characters.');
            valid = false;
        }

        
        if (passwordInput.value.trim().length < 5 || passwordInput.value.trim().length > 20) {
            messages.push('Password must be between 5 and 20 characters.');
            valid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            messages.push('Please enter a valid email address.');
            valid = false;
        }

        
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            messages.push('Please enter a valid 10-digit phone number.');
            valid = false;
        }

        
        if (!checkboxInput.checked) {
            messages.push('You must agree to the terms.');
            valid = false;
        }

        if (!valid) {
            alert(messages.join('\n'));
        } else {
            
            const user = {
                username: usernameInput.value.trim(),
                password: passwordInput.value.trim()               
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful!');
            window.location.href = 'index.html';
        }
    });
});
