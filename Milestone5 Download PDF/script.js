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
    resumeContainer.style.display = 'flex';
    formContainer.style.display = 'none';
    resumeTxt.style.display = 'none';
});
// Edit Button Functionality
const editBtn = document.getElementById('editBtn');
const resumeContainer = document.querySelector('.content-container');
const formContainer = document.querySelector('.form-container');
const resumeTxt = document.querySelector('.resume-text');
// Show form again for editing
editBtn.addEventListener('click', () => {
    // Hide the generated resume and show the form
    resumeContainer.style.display = 'none';
    formContainer.style.display = 'flex';
    // Fill the form with current resume data
    document.getElementById('fullName').value = generatedName.textContent || '';
    document.getElementById('profile-summary').value = profSumm.textContent || '';
    document.getElementById('email').value = generatedEmail.textContent || '';
    document.getElementById('address').value = generatedAddress.textContent || '';
    document.getElementById('education').value = Array.from(generatedEdu.children).map(li => li.textContent).join(', ');
    document.getElementById('skills').value = Array.from(generatedSkills.children).map(li => li.textContent).join(', ');
    document.getElementById('workExp').value = Array.from(generatedWE.children).map(li => li.textContent).join(', ');
});
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const resumeElement = document.getElementById('resumeContent');
        if (!resumeElement) {
            console.error("Resume content not found!");
            return;
        }
        // Hide the buttons before generating the PDF
        downloadBtn.style.display = 'none';
        editBtn.style.display = 'none';
        // PDF Options to fix left-side cutoff and center content
        const options = {
            margin: 10, // Margin around the content
            filename: 'Generated_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2, // Higher resolution
                useCORS: true, // Handle cross-origin images
                x: 0, // Align content to the left
                y: 0,
                scrollX: 0,
                scrollY: 0,
                windowWidth: resumeElement.scrollWidth,
                windowHeight: resumeElement.scrollHeight,
            },
            jsPDF: {
                unit: 'pt',
                format: 'a4',
                orientation: 'portrait',
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        };
        // Generate and download the PDF
        html2pdf()
            .from(resumeElement)
            .set(options)
            .toPdf()
            .get('pdf')
            .then((pdf) => {
            const totalPages = pdf.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(12);
                pdf.text('', 10, 10); // Ensure content is properly aligned
            }
            downloadBtn.style.display = 'block';
            editBtn.style.display = 'block';
        })
            .save()
            .catch((error) => {
            console.error("Error generating PDF:", error);
            downloadBtn.style.display = 'block';
            editBtn.style.display = 'block';
        });
    });
});
