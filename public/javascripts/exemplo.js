async function calculateTax() {
    const amount = document.getElementById('amount').value;
    const response = await fetch('/api/infs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(amount) })
    });
    const data = await response.json();
    document.getElementById('result').innerHTML = `
        <p>Amount: ${data.amount}</p>
        <p>Tax: ${data.tax}</p>
        <p>Total: ${data.total}</p>
    `;
}

async function calculateTax2() {
    const amount = document.getElementById('amount').value;
    const response = await fetch('/api/infs/2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(amount) })
    });
    const data = await response.json();
    document.getElementById('result').innerHTML = `
        <p>Amount: ${data.amount}</p>
        <p>Tax: ${data.tax}</p>
        <p>Total: ${data.total}</p>
    `;
}
