// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');
    } 
    else{
        $('header').removeClass('nav-show');
    }
});

// hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");
            
        // Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
            }
        });

        // Hamburger animation
        hamburger.classList.toggle("toggle");
    }
}

window.onload = () => navSlide();

// Night and Day Mode Functionality
function toggleNightDayMode() {
    console.log("Toggling night and day mode...");
    const body = document.body;
    const button = document.getElementById('night-day-toggle');

    // Toggle night mode class on the body element
    body.classList.toggle('night-mode');

    // Toggle sun and moon icons based on night mode
    // Toggle moon and sun icons
    if (button.classList.contains('fa-sun')) {
        console.log("Switching to night mode...");
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
    } else {
        console.log("Switching to day mode...");
        button.classList.remove('fa-moon');
        button.classList.add('fa-sun');
    }
}

// Call the toggleNightDayMode function when the button is clicked
document.getElementById('night-day-toggle').addEventListener('click', toggleNightDayMode);
