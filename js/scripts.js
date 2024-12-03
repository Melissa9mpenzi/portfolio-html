// Automating Testimonials Movement
// This script enables testimonials to slide automatically:

document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.getElementById('testimonial-cards');
    let index = 0;

    function slideTestimonials() {
        const totalCards = testimonialCards.children.length;
        index = (index + 1) % totalCards; 
        testimonialCards.style.transform = `translateX(-${index * 100}%)`;
        testimonialCards.style.transition = "transform 0.5s ease-in-out";
    }

    setInterval(slideTestimonials, 5000); 
});

// Form Validation for the Contact Page
// This script validates the contact form fields before submission:

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault(); // Stop form submission
        alert('Please fill in all the fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault(); // Stop form submission
        alert('Please enter a valid email address.');
    } else {
        alert('Your message has been sent successfully!');
    }
});


// Interactive Skill Progress Bars for Resume
// This script animates the skill progress bars when the user scrolls to the resume section:

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('main');
    const skillBars = document.querySelectorAll('.bar span');

    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        skillBars.forEach((bar) => {
            const width = bar.style.width; // Get predefined width in CSS
            bar.style.width = "0"; // Set to 0 for animation start
            setTimeout(() => (bar.style.width = width), 200); // Animate to full width
        });
    }
});


// Smooth Scrolling for Navigation Links
// This script allows smooth scrolling to sections when navigation links are clicked:

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
