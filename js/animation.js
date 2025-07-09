
document.addEventListener('DOMContentLoaded', function() {
    // Animate on scroll for .sec-1
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add(entry.target.dataset.anim || 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }
    var observer = new IntersectionObserver(animateOnScroll, { threshold: 0.2 });
    var sec1s = document.querySelectorAll('.sec-1');
    sec1s.forEach(function(el, idx) {
        el.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fadeInLeft', 'animate__fadeInRight');
        // Directional animation: 2 left, 2 right, repeat pattern
        if (idx % 4 === 0 || idx % 4 === 1) {
            el.dataset.anim = 'animate__fadeInLeft';
        } else {
            el.dataset.anim = 'animate__fadeInRight';
        }
        observer.observe(el);
    });
});