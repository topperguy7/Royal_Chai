document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const signupContainer = document.getElementById('signup-container');
    const successMessage = document.getElementById('success-message');

    // Simulate form submission
    if (emailInput.value) {
        signupContainer.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Log to console just to see it works
        console.log("Email captured:", emailInput.value);
    }
});