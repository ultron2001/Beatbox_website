function adjustFontSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 600) {
        document.body.style.fontSize = '6px';
    } else if (screenWidth <= 700) {
        document.body.style.fontSize = '18px';
    } else if (screenWidth <= 800) {
        document.body.style.fontSize = '20px';
    } else {
        document.body.style.fontSize = '40px';
    }
}

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

function submitText() {
    var textValue = document.getElementById("textInput").value;
    console.log("Submitted Text: " + textValue);
}

function toggleChat() {
    var chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}

function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");

    // Get the message from the input field
    var message = chatInput.value.trim();

    // Check if the message is not empty
    if (message !== "") {
        // Append the message to the chat body
        chatBody.innerHTML += "<p><strong>You:</strong> " + message + "</p>";

        // Clear the input field
        chatInput.value = "";

        // Scroll the chat body to the bottom to show the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}