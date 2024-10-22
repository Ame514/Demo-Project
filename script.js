
function toggleMenu() {

            if(document.querySelector('nav ul').style.display!=="block")
                document.querySelector('nav ul').style.display="block";
            else
                document.querySelector('nav ul').style.display='none';

}

function dropDown(){
    if(document.getElementById("dropDown").style.display=="block")
        document.getElementById("dropDown").style.display="none";
    else
        document.getElementById("dropDown").style.display="block";
}

function closeToggle(){
    if(window.innerWidth < 768){
        if(document.querySelector('nav ul').style.display!=='none' || document.getElementById("dropDown").style.display!=="none"){
            document.querySelector('nav ul').style.display='none';
            document.getElementById("dropDown").style.display="none";
        }
    }   
}
function closeToggleBig(){
    if(window.innerWidth > 768){
        if(document.getElementById("dropDown").style.display!=="none")
            document.getElementById("dropDown").style.display="none";  
    }
}



//hero change

function change(a){
    a.style.backgroundClip = "content-box";
}
function change2(a){
    a.style.backgroundClip = "border-box";
}

// Schließen der Navigation nach Klick auf einen Link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('nav ul');
        menu.classList.remove('show');
        // Schließen des Dropdowns, wenn ein anderer Link angeklickt wird
        const dropdowns = document.querySelectorAll('nav ul li ul');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});

let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let autoSlideTimer;

    // Automatisch durch die Slides wechseln alle 5 Sekunden
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        autoSlideTimer = setTimeout(showSlides, 3000); // Wechsel alle 3 Sekunden
    }

    function plusSlides(n) {
        clearTimeout(autoSlideTimer); // Stoppt die automatische Slideshow, wenn man manuell wechselt
        slideIndex += n - 1; // passt den Index an
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        showSlides();
    }

    function currentSlide(n) {
        clearTimeout(autoSlideTimer); // Stoppt die automatische Slideshow, wenn man manuell ein Bild auswählt
        slideIndex = n - 1;
        showSlides();
    }

    // Initialisierung der automatischen Slideshow
    showSlides();


const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
            

    // Erfolgsmeldung anzeigen
    formMessage.textContent = 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.';
    formMessage.style.color = 'green';

    // Formular zurücksetzen
    form.reset();
});
