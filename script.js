// Function to update progress bar to 100%
function updateProgress(progressId) {
    const progressBar = document.getElementById(progressId);
    progressBar.style.width = '100%';
    progressBar.textContent = '100%';
    alert('Course marked as complete!');
}

// Contact form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload
    alert('Thank you! Your message has been sent.');
    document.getElementById('contact-form').reset();
}
