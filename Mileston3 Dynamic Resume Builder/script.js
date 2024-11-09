"use strict";
// Get all the input elements
const fullNameInput = document.getElementById('fullName');
const profileImageInput = document.getElementById('profileImage');
const profileSummaryInput = document.getElementById('profile-summary');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const educationInput = document.getElementById('education');
const skillsInput = document.getElementById('skills');
const workExpInput = document.getElementById('workExp');
// Get the elements where data will be displayed
const generatedName = document.getElementById('generatedName');
const generatedName2 = document.getElementById('generatedName2');
const printedImg = document.getElementById('printedImg');
const profSumm = document.getElementById('profSumm');
const generatedEmail = document.querySelector('.personal-info-section li:nth-child(2) span');
const generatedAddress = document.getElementById('generatedAddress');
const generatedEdu = document.getElementById('generatedEdu');
const generatedSkills = document.getElementById('generatedSkills');
const generatedWE = document.getElementById('generatedWE');
// Arrays to store multiple entries
const educationList = [];
const skillsList = [];
const workExpList = [];
// Function to add items to a list and clear the input field
function handleAddItem(inputId, list) {
    const input = document.getElementById(inputId);
    const inputValue = input.value.trim(); // Ensure there's no extra space in the input value
    if (inputValue !== '') {
        list.push(inputValue); // Add to the array
        input.value = ''; // Clear the input field
    }
}
// Event listeners for the "Add" buttons
const addBtn1 = document.getElementById('addBtn1');
addBtn1.addEventListener('click', () => {
    handleAddItem('education', educationList);
    renderList(educationList, 'generatedEdu');
});
const addBtn2 = document.getElementById('addBtn2');
addBtn2.addEventListener('click', () => {
    handleAddItem('skills', skillsList);
    renderList(skillsList, 'generatedSkills');
});
const addBtn3 = document.getElementById('addBtn3');
addBtn3.addEventListener('click', () => {
    handleAddItem('workExp', workExpList);
    renderList(workExpList, 'generatedWE');
});
// Function to render lists in the generated resume
function renderList(list, elementId) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = ''; // Clear previous entries
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}
// Event listener for the "Generate" button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', (event) => {
    var _a;
    event.preventDefault();
    // Add new items to the lists from the input fields
    handleAddItem('education', educationList);
    handleAddItem('skills', skillsList);
    handleAddItem('workExp', workExpList);
    // Update Profile Name
    const fullName = fullNameInput.value;
    generatedName.textContent = fullName;
    generatedName2.textContent = fullName;
    // Update Profile Image
    const profileImage = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = () => {
            printedImg.src = reader.result;
        };
        reader.readAsDataURL(profileImage);
    }
    // Update Profile Summary
    profSumm.textContent = profileSummaryInput.value;
    // Update Email
    generatedEmail.textContent = emailInput.value;
    // Update Address
    generatedAddress.textContent = addressInput.value;
    // Render the Education, Skills, and Work Experience lists
    renderList(educationList, 'generatedEdu');
    renderList(skillsList, 'generatedSkills');
    renderList(workExpList, 'generatedWE');
});
