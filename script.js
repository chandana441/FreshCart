// Cart Array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }
}

// Add Product
function addToCart(name, price, image) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart");
}

// Render Cart Page
function renderCart() {

    const cartTable = document.getElementById("cart-items");

    if (!cartTable) return;

    cartTable.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {

        let total = item.price * item.quantity;

        grandTotal += total;

        cartTable.innerHTML += `
        <tr>
            <td>
                <img src="${item.image}" width="60">
                ${item.name}
            </td>

            <td>₹${item.price}</td>

            <td>
                <button onclick="changeQty(${index},-1)">-</button>

                ${item.quantity}

                <button onclick="changeQty(${index},1)">+</button>
            </td>

            <td>₹${total}</td>

            <td>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </td>
        </tr>
        `;
    });

    const totalElement =
        document.getElementById("grand-total");

    if (totalElement) {
        totalElement.innerHTML =
            "₹" + grandTotal;
    }
}

// Quantity Change
function changeQty(index, value) {

    cart[index].quantity += value;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
    updateCartCount();
}

// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
    updateCartCount();
}

updateCartCount();
renderCart();
