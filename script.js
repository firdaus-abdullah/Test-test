const { authenticator } = window.otplib;
const input = document.getElementById('mySecret');
const display = document.getElementById('displayCode');

function updateCode() {
    const secret = input.value.trim();
    if (secret) {
        try {
            // This generates the 6-digit code using the secret and current time
            display.innerText = authenticator.generate(secret);
        } catch (e) {
            display.innerText = "Error";
        }
    } else {
        display.innerText = "------";
    }
}

// Update the code every 1 second to stay synced with the server
setInterval(updateCode, 1000);

// Also update immediately when you paste the secret
input.addEventListener('input', updateCode);
