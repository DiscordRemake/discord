// Load saved messages when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesDiv = document.getElementById('messages');
    
    savedMessages.forEach(message => {
        messagesDiv.innerHTML += `<div>${message}</div>`;
    });
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== "") {
        const messagesDiv = document.getElementById('messages');
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        
        // Add new message to the messages div
        messagesDiv.innerHTML += `<div>${message}</div>`;
        
        // Save the new message in localStorage
        savedMessages.push(message);
        localStorage.setItem('messages', JSON.stringify(savedMessages));
        
        // Clear the input field and auto-scroll
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
    }
}
