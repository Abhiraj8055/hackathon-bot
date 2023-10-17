document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            appendUserMessage(userMessage);
            // Send the user's message to the server (Python code) and get a response
            // Append the response to the chatbox
            userInput.value = "";
        }
    });

    function appendUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-message");
        userMessageDiv.innerHTML = `<p>User: ${message}</p>`;
        chatbox.appendChild(userMessageDiv);
    }

    function appendBotMessage(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("bot-message");
        botMessageDiv.innerHTML = `<p>Chatbot: ${message}</p>`;
        chatbox.appendChild(botMessageDiv);
    }
});
