document.addEventListener("DOMContentLoaded", function () {
    // Initialize Materialize components
    M.FormSelect.init(document.querySelectorAll('select'));

    const data = {
        'blackburn-south': {
            'now': { livability: 8.9, population: 10939 },
            '3years': { livability: 8.7, population: 11500 },
            '5years': { livability: 8.5, population: 12000 },
            '10years': { livability: 8.3, population: 13000 }
        },
        'geelong': {
            'now': { livability: 7.5, population: 248000 },
            '3years': { livability: 7.4, population: 250000 },
            '5years': { livability: 7.3, population: 255000 },
            '10years': { livability: 7.1, population: 260000 }
        },
        'bendigo': {
            'now': { livability: 8.1, population: 100000 },
            '3years': { livability: 8.0, population: 102000 },
            '5years': { livability: 7.9, population: 105000 },
            '10years': { livability: 7.8, population: 108000 }
        },
        'ballarat': {
            'now': { livability: 7.8, population: 105000 },
            '3years': { livability: 7.7, population: 108000 },
            '5years': { livability: 7.6, population: 110000 },
            '10years': { livability: 7.5, population: 115000 }
        }
    };

    // Function to update the information in the "Selected Area Info" section
    window.updateSelectedInfo = function() {
        const suburb = document.getElementById('suburb-select').value;
        const timeRange = document.getElementById('time-range').value;
        const suburbData = data[suburb][timeRange];

        const infoDiv = document.getElementById('suburb-info');
        infoDiv.innerHTML = `
            <p>Livability Score: ${suburbData.livability}</p>
            <p>Population: ${suburbData.population}</p>
            <button class="btn-small">View AI Insights</button>
        `;
    };

    // Initialize the info on page load
    updateSelectedInfo();
});

// Chatbot functionality
function sendMessage() {
    const messageInput = document.getElementById('chat-message');
    const message = messageInput.value.trim();
    if (message !== "") {
        displayMessage('user', message);
        messageInput.value = "";
        
        setTimeout(() => {
            const botResponse = "I’m just a demo chatbot. You said: " + message;
            displayMessage('bot', botResponse);
        }, 500);
    }
}

function displayMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
