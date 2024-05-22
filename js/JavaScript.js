
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
    sidemenu.style.right = "0";
}

    function closemenu() {
    sidemenu.style.right = "-200px";
}

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
    for (tablink of tablinks) {
    tablink.classList.remove("active-link");
}
    for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
}
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyLF0MY68RrKH1Dg8uY7uNGFYXTaiq7NWiD24JtYJMSy22mUpuSa_YMwIiQ6j9vDSCw-Q/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function() {
    msg.innerHTML = ""
}, 5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})

    const slider = document.querySelector('.slider');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const slides = document.querySelectorAll('.slider .item');
    let currentSlide = 0;

    function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

    function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

    function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    showSlide(currentSlide);

    ScrollReveal().reveal('.sub-title', { delay: 500, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.services-list', { delay: 500, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.work-list', { delay: 500, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.contact-container', { delay: 500, distance: '50px', origin: 'bottom' });

