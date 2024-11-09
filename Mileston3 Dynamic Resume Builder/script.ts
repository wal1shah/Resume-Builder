
// Get all the input elements
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
const profileSummaryInput = document.getElementById('profile-summary') as HTMLTextAreaElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const workExpInput = document.getElementById('workExp') as HTMLInputElement;

// Get the elements where data will be displayed
const generatedName = document.getElementById('generatedName') as HTMLElement;
const generatedName2 = document.getElementById('generatedName2') as HTMLElement;
const printedImg = document.getElementById('printedImg') as HTMLImageElement;
const profSumm = document.getElementById('profSumm') as HTMLElement;
const generatedEmail = document.querySelector('.personal-info-section li:nth-child(2) span') as HTMLElement;
const generatedAddress = document.getElementById('generatedAddress') as HTMLElement;
const generatedEdu = document.getElementById('generatedEdu') as HTMLElement;
const generatedSkills = document.getElementById('generatedSkills') as HTMLElement;
const generatedWE = document.getElementById('generatedWE') as HTMLElement;

// Arrays to store multiple entries
const educationList: string[] = [];
const skillsList: string[] = [];
const workExpList: string[] = [];


// Function to add items to a list and clear the input field
function handleAddItem(inputId: string, list: string[]) {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const inputValue = input.value.trim(); // Ensure there's no extra space in the input value
    if (inputValue !== '') {
        list.push(inputValue); // Add to the array
        input.value = ''; // Clear the input field
    }
}


// Event listeners for the "Add" buttons
const addBtn1 = document.getElementById('addBtn1') as HTMLButtonElement;
addBtn1.addEventListener('click', () => {
    handleAddItem('education', educationList);
    renderList(educationList, 'generatedEdu');
}); 

const addBtn2 = document.getElementById('addBtn2') as HTMLButtonElement;
addBtn2.addEventListener('click', () => {
    handleAddItem('skills', skillsList);
    renderList(skillsList, 'generatedSkills');
});

const addBtn3 = document.getElementById('addBtn3') as HTMLButtonElement;
addBtn3.addEventListener('click', () => {
    handleAddItem('workExp', workExpList);
    renderList(workExpList, 'generatedWE');
});

// Function to render lists in the generated resume
function renderList(list: string[], elementId: string) {
    const listElement = document.getElementById(elementId) as HTMLElement;
    listElement.innerHTML = ''; // Clear previous entries
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

// Event listener for the "Generate" button
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
generateBtn.addEventListener('click', (event) => {
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
    const profileImage = profileImageInput.files?.[0];
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = () => {
            printedImg.src = reader.result as string;
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