document.addEventListener('DOMContentLoaded', function() {
    var addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var image = localStorage.getItem('selectedProductImage');
            var name = localStorage.getItem('selectedProductName');
            var price = localStorage.getItem('selectedProductPrice');
            var sizeSelect = document.getElementById('sizeSelect');
            var colorSelect = document.getElementById('colorSelect');
            var size = sizeSelect ? sizeSelect.value : '';
            var color = colorSelect ? colorSelect.value : '';
            var quantitySelect = document.getElementById('quantitySelect');
            var quantity = quantitySelect ? quantitySelect.value : '1';
            if (!image || !name || !price) return;
            let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
            // Check if already in cart (by name, price, and size)
            let found = false;
            for (let item of cart) {
                if (item.name === name && item.price === price && item.size === size && item.color === color) {
                    // If already in cart, just update quantity
                    if (quantity === 'Max') {
                        item.quantity = 99;
                    } else {
                        item.quantity += parseInt(quantity);
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                cart.push({ image, name, price, size, color, quantity: quantity === 'Max' ? 99 : parseInt(quantity) });
            }
            localStorage.setItem('cartItems', JSON.stringify(cart));
            window.location.href = 'cart.html';
        });
    }
    // Cart icon click in header
    var cartIcons = document.querySelectorAll('img[src*="cart.png"]');
    cartIcons.forEach(function(icon) {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var selectedImg = localStorage.getItem('selectedProductImage');
    var selectedName = localStorage.getItem('selectedProductName');
    var selectedPrice = localStorage.getItem('selectedProductPrice');
   
    if (selectedImg) {
        var mainImg = document.getElementById('image-1');
        if (mainImg) {
            mainImg.src = selectedImg;
        }
    }
    
    if (selectedName) {
        var nameElem = document.querySelector('.h1 h1');
        if (nameElem) {
            nameElem.textContent = selectedName;
        }
    }
  
    if (selectedPrice) {
        var priceElem = document.querySelector('.price h4');
        if (priceElem) {
            priceElem.textContent = selectedPrice;
        }
    }
});