function calculateDays() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    if (startDate && endDate) {
        const timeDifference = endDate - startDate;
        const dayDifference = timeDifference / (1000 * 3600 * 24);
        document.getElementById('result').innerText = `There are ${dayDifference} days between the selected dates.`;
    } else {
        document.getElementById('result').innerText = 'Please select both dates.';
    }
}
