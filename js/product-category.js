// External JS for category filter on product page

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('categorySelect');
    const products = document.querySelectorAll('#productList .sec-1');

    // Assign categories: sec-1[0-44] = bangle, sec-1[45+] = earring
    products.forEach(function(card, idx) {
        if (idx < 45) {
            card.dataset.category = 'bangle';
        } else {
            card.dataset.category = 'earring';
        }
    });

    function updateProductCategory() {
        const val = select.value;
        products.forEach(function(card) {
            if (val === 'all') {
                card.style.display = '';
            } else if (card.dataset.category === val) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    select.addEventListener('change', updateProductCategory);
    updateProductCategory();
});
