let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
    
}
document.addEventListener('DOMContentLoaded', function() {
    // Get all cart buttons
    var cartButtons = document.querySelectorAll('.cart-button');

    // Function to handle button click
    function handleCartButtonClick(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section ID from data-target attribute
        var targetSectionId = this.getAttribute('data-target');

        // Find the target section
        var targetSection = document.querySelector(targetSectionId);

        // Scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Attach click event listener to each cart button
    cartButtons.forEach(function(button) {
        button.addEventListener('click', handleCartButtonClick);
    });
});

// Function to toggle visibility of additional items
function toggleAdditionalItems() {
    const additionalItemsContainer = document.querySelector('.additional-items');

    // Toggle the 'visible' class to show or hide additional items
    additionalItemsContainer.classList.toggle('visible');
}

// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});