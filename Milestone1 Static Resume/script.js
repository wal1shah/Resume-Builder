// Get the button and dropdown content for Technology and Graphic Design sections
var techArrow = document.getElementById('arrowTech');
var designArrow = document.getElementById('arrowDesign');
var techSkills = document.getElementById('techSkills');
var techToggleButton = document.getElementById('toggleTechSkills');
var designToggleButton = document.getElementById('toggleDesignSkills');
var designSkills = document.getElementById('gdSkills');
// Function to toggle the Technology skills dropdown and arrow
function toggleTechSkills() {
    if (techSkills.style.display === 'none' || techSkills.style.display === '') {
        techSkills.style.display = 'block'; // Show the Technology skills
        techArrow.classList.add('up'); // Rotate arrow up
    }
    else {
        techSkills.style.display = 'none'; // Hide the Technology skills
        techArrow.classList.remove('up'); // Rotate arrow down
    }
}
// Add event listener to the Technology button area (text and arrow)
techToggleButton.addEventListener('click', toggleTechSkills);
// Function to toggle the Graphic Design skills dropdown and arrow
function toggleDesignSkills() {
    if (designSkills.style.display === 'none' || designSkills.style.display === '') {
        designSkills.style.display = 'block'; // Show the Graphic Design skills
        designArrow.classList.add('up'); // Rotate arrow up
    }
    else {
        designSkills.style.display = 'none'; // Hide the Graphic Design skills
        designArrow.classList.remove('up'); // Rotate arrow down
    }
}
// Add event listener to the Graphic Design button area (text and arrow)
designToggleButton.addEventListener('click', toggleDesignSkills);
