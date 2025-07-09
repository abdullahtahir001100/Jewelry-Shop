let p = document.getElementsByClassName('sec-1');

// Show first 8 products by default
for (let i = 0; i < p.length; i++) {
    p[i].style.display = (i < 8) ? "block" : "none";
}

tabs1.onclick = function() {
    window.location.reload();
};

// Show products 8-15 for tab2
tabs2.onclick = function() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = (i >= 8 && i < 16) ? "block" : "none";
    }
};

// Show products 16-23 for tab3
tabs3.onclick = function() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = (i >= 16 && i < 24) ? "block" : "none";
    }
};

// Show products 24-31 for tab4
tabs4.onclick = function() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = (i >= 24 && i < 32) ? "block" : "none";
    }
};

// Show all products for More
More.onclick = function() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "block";
    }
};


