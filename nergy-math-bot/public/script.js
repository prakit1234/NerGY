async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) return;

    // Display user message
    const chatbox = document.getElementById("chatbox");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user");
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    // Send request to server
    const response = await fetch('/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression: userInput })
    });
    const data = await response.json();

    // Display bot response
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot");
    botMessage.textContent = data.error || `Result: ${data.result}`;
    chatbox.appendChild(botMessage);

    // Clear input
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to latest message
}
