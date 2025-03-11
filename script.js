// Optional JS functionality for dropdown hover interaction (already included in CSS)

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        });
    });
});





// You can add any interactivity here if needed, such as click events.
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        alert('You clicked on ' + section.id);
    });
});

