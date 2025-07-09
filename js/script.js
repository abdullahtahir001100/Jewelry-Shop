  document.querySelectorAll('.sec-1 .image img').forEach(function(img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            var sec1 = img.closest('.sec-1');
            var src = img.getAttribute('src');
            var name = '';
            var price = '';
            if (sec1) {
                var nameElem = sec1.querySelector('.text h4');
                var priceElem = sec1.querySelector('.price h6');
                if (nameElem) name = nameElem.textContent;
                if (priceElem) price = priceElem.textContent;
            }
            // Check if image is from imgs/ folder
            var isImgsFolder = src.startsWith('imgs/');
            localStorage.setItem('selectedProductImage', src);
            localStorage.setItem('selectedProductName', name);
            localStorage.setItem('selectedProductPrice', price);
            localStorage.setItem('isImgsFolder', isImgsFolder ? 'true' : 'false');
            window.location.href = 'details.html';
        });
    });