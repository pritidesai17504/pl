

let cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.querySelector('.close');
const cartItemsList = document.getElementById('cart-items');

function addToCart(title, author) {
    cart.push({ title, author });
    cartCount.textContent = cart.length;
    updateCartModal();
}

function updateCartModal() {
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.title} by ${item.author}`;
        cartItemsList.appendChild(li);
    });
}

document.getElementById('cart-icon').onclick = function () {
    cartModal.style.display = 'block';
};

closeBtn.onclick = function () {
    cartModal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};
