function sendMessage() {

  const input = document.getElementById("user-input");

  const message = input.value.trim();

  if (message === "") return;

  addMessage(message, "user-message");

  input.value = "";

  // AI response

  setTimeout(() => {

    const reply = getAIResponse(message);

    addMessage(reply, "ai-message");

  }, 500);

}

function addMessage(text, className) {

  const chatBox = document.getElementById("chat-box");

  const messageElement = document.createElement("div");

  messageElement.className = "message " + className;

  messageElement.textContent = text;

  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;

}

function getAIResponse(userInput) {

  const input = userInput.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {

    return "Hello! How can I help you today?";

  } else if (input.includes("name")) {

    return "I am a simple AI tool created with HTML, CSS, and JS.";

  } else if (input.includes("time")) {

    return "The current time is " + new Date().toLocaleTimeString();

  } else if (input.includes("date")) {

    return "Today's date is " + new Date().toLocaleDateString();

  } else if (input.includes("bye")) {

    return "Goodbye! Have a great day!";

  } else {

    return "I'm not sure about that. Try asking something else!";

  }

}