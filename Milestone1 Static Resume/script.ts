// Get the button and dropdown content for Technology and Graphic Design sections
const techArrow = document.getElementById('arrowTech');
const designArrow = document.getElementById('arrowDesign');
const techSkills = document.getElementById('techSkills');
const techToggleButton = document.getElementById('toggleTechSkills');
const designToggleButton = document.getElementById('toggleDesignSkills');
const designSkills = document.getElementById('gdSkills');

// Function to toggle the Technology skills dropdown and arrow
function toggleTechSkills(): void {
    if (techSkills!.style.display === 'none' || techSkills!.style.display === '') {
        techSkills!.style.display = 'block';   // Show the Technology skills
        techArrow!.classList.add('up');        // Rotate arrow up
    } else {
        techSkills!.style.display = 'none';    // Hide the Technology skills
        techArrow!.classList.remove('up');     // Rotate arrow down
    }
}

// Add event listener to the Technology button area (text and arrow)
techToggleButton!.addEventListener('click', toggleTechSkills);

// Function to toggle the Graphic Design skills dropdown and arrow
function toggleDesignSkills(): void {
    if (designSkills!.style.display === 'none' || designSkills!.style.display === '') {
        designSkills!.style.display = 'block'; // Show the Graphic Design skills
        designArrow!.classList.add('up');      // Rotate arrow up
    } else {
        designSkills!.style.display = 'none';  // Hide the Graphic Design skills
        designArrow!.classList.remove('up');   // Rotate arrow down
    }
}

// Add event listener to the Graphic Design button area (text and arrow)
designToggleButton!.addEventListener('click', toggleDesignSkills);

