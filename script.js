// Welcome message flow functions
function showUserForm() {
    const welcomeCard = document.getElementById('welcomeCard');
    const userForm = document.getElementById('userForm');

    // Fade out welcome card
    welcomeCard.style.animation = 'fadeOut 0.3s ease-in-out';

    setTimeout(() => {
        welcomeCard.classList.add('hidden');
        userForm.classList.remove('hidden');

        // Focus on the name input
        document.getElementById('userName').focus();
    }, 300);
}

function submitUserInfo() {
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();

    // Basic validation
    if (!userName) {
        alert('Please enter your name');
        return;
    }

    if (!userEmail || !isValidEmail(userEmail)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    const userForm = document.getElementById('userForm');
    const successMessage = document.getElementById('successMessage');
    const displayName = document.getElementById('displayName');

    displayName.textContent = userName;

    userForm.style.animation = 'fadeOut 0.3s ease-in-out';

    setTimeout(() => {
        userForm.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Log to console for testing
        console.log('Welcome flow completed:', {
            name: userName,
            email: userEmail,
            timestamp: new Date().toISOString()
        });
    }, 300);
}

function resetFlow() {
    // Reset all forms and show welcome card again
    const welcomeCard = document.getElementById('welcomeCard');
    const userForm = document.getElementById('userForm');
    const successMessage = document.getElementById('successMessage');

    // Clear form inputs
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';

    // Hide current screen
    successMessage.style.animation = 'fadeOut 0.3s ease-in-out';

    setTimeout(() => {
        successMessage.classList.add('hidden');
        userForm.classList.add('hidden');
        welcomeCard.classList.remove('hidden');
        welcomeCard.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 300);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add fade out animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Handle enter key press in input fields
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitUserInfo();
            }
        });
    });
});