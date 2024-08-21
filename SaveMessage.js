// Save a message
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Load messages
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(msg => {
        displayMessage(msg); // Assume displayMessage is a function to show the message in the chat
    });
}
