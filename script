document.getElementById('submitBtn').addEventListener('click', function() {
    const orderId = document.getElementById('orderIdInput').value.trim();
    
    if (!orderId) {
        alert("Please enter an Order ID first!");
        return;
    }

    // 1. Show the result area
    document.getElementById('resultArea').style.display = "block";
    document.getElementById('displayCode').innerText = "FETCHING...";

    // 2. This attempts to open their "get-code" page with your ID
    // Note: Since we can't 'hack' their box, we redirect with the data
    const targetUrl = `https://www.join-digitalworld.com/nf/get-code?order_id=${encodeURIComponent(orderId)}`;
    
    // 3. We open it in a new tab so you can see the result they give you
    window.open(targetUrl, '_blank');
    
    document.getElementById('displayCode').innerText = "CHECK TAB";
});

