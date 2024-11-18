
const RESUME_FILE_NAME = "Resume_v3.3.0-A-FS.pdf";

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
    const icon = document.getElementById('icon');

    // Toggle night mode class on the body element
    body.classList.toggle('night-mode');

    // Toggle sun and moon icons based on night mode
    // Toggle moon and sun icons
    if (icon.classList.contains('fa-sun')) {
        console.log("Switching to night mode...");
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        console.log("Switching to day mode...");
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Function to handle mobile resume button

function handleMobileResumeButton() {
    const resumeSection = document.getElementById('resume');
    if (!resumeSection) return;

    const resumeContainer = resumeSection.querySelector('.resume-container');
    if (!resumeContainer) return;

    let mobileButton = resumeSection.querySelector('.mobile-resume-button');
    if (!mobileButton) {
        mobileButton = document.createElement('button');
        mobileButton.textContent = 'Open Resume';
        mobileButton.classList.add('mobile-resume-button');
        resumeSection.insertBefore(mobileButton, resumeContainer);
    }

    mobileButton.addEventListener('click', () => {
        window.open(RESUME_FILE_NAME, '_blank');
    });

    function toggleMobileView() {
        const isMobile = window.innerWidth <= 768;
        resumeSection.classList.toggle('mobile-view', isMobile);
    }

    window.addEventListener('resize', toggleMobileView);
    toggleMobileView(); // Initial call
}

document.addEventListener('DOMContentLoaded', handleMobileResumeButton);

// Call the toggleNightDayMode function when the button is clicked
document.getElementById('night-day-toggle').addEventListener('click', toggleNightDayMode);
