let membership = "Regular"; // Default membership

function setMembership(type) {
    membership = type;
    alert(`Membership set to ${type}`);
}

function calculateTotal() {
    const coffeePrices = { latte: 3, cappuccino: 3.5, espresso: 2.5 };
    const coffeeType = document.getElementById("coffeeType").value;
    const basePrice = coffeePrices[coffeeType];

    const size = document.getElementById("coffeeSize").value;
    let sizeCost = 0;
    if (size === "medium") sizeCost = 1;
    if (size === "large") sizeCost = 2;

    const quantity = parseInt(document.getElementById("quantity").value);
    let addOnsCost = 0;

    document.querySelectorAll(".addons input:checked").forEach(item => {
        addOnsCost += parseFloat(item.value);
    });

    let subtotal = (basePrice + sizeCost + addOnsCost) * quantity;

    let discount = 0;
    if (membership === "Gold") discount = subtotal * 0.15;
    else if (membership === "Silver") discount = subtotal * 0.10;

    const promoCode = document.getElementById("promoCode").value;
    if (promoCode === "COFFEE10") discount += subtotal * 0.10;

    const tax = (subtotal - discount) * 0.08;
    const total = (subtotal - discount + tax).toFixed(2);

    document.getElementById("summaryDetails").innerHTML = `
        Coffee: ${coffeeType} (${size}) <br>
        Quantity: ${quantity} <br>
        Add-ons: $${addOnsCost.toFixed(2)} <br>
        Subtotal: $${subtotal.toFixed(2)} <br>
        Discount: $${discount.toFixed(2)} <br>
        Tax: $${tax.toFixed(2)} <br>
        <b>Total: $${total}</b>
    `;

    document.getElementById("orderSummary").classList.remove("hidden");
}

function printInvoice() {
    window.print();
}
