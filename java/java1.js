function calculateResults() {
    // Get input values
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const oldReading = parseFloat(document.getElementById("old-reading").value);
    const newReading = parseFloat(document.getElementById("new-reading").value);
    const trashFee = parseFloat(document.getElementById("trash-fee").value);

    // Validate input
    if (newReading < oldReading) {
        alert("New reading must be greater than or equal to the old reading.");
        return;
    }

    // Calculate results
    const unitsUsed = newReading - oldReading;
    let usageFee;

    if (unitsUsed < 50) {
        usageFee = unitsUsed * 500;
    } else if (unitsUsed >= 50 && unitsUsed < 100) {
        usageFee = unitsUsed * 1000;
    } else if (unitsUsed >= 100 && unitsUsed < 150) {
        usageFee = unitsUsed * 1500;
    } else if (unitsUsed >= 150 && unitsUsed < 200) {
        usageFee = unitsUsed * 2000;
    } else {
        usageFee = unitsUsed * 2500;
    }

    const totalFee = usageFee + trashFee;

    // Show popup alert with results
    const message = `Employee ID: ${id}\n` +
                    `Employee Name: ${name}\n` +
                    `Units Used: ${unitsUsed}\n` +
                    `Usage Fee: $${usageFee.toFixed(2)}\n` +
                    `Fee Trash: $${trashFee.toFixed(2)}\n` +
                    `Total Fee: $${totalFee.toFixed(2)}`;

    alert(message);

    // Display results in the result section
    document.getElementById("result-id").innerText = id;
    document.getElementById("result-name").innerText = name;
    document.getElementById("units-used").innerText = unitsUsed;
    document.getElementById("usage-fee").innerText = usageFee.toFixed(2);
    document.getElementById("fee-trash").innerText = trashFee.toFixed(2);
    document.getElementById("total-fee").innerText = totalFee.toFixed(2);

    document.getElementById("results").style.display = "block";
}