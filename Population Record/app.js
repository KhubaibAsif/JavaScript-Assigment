// Constructor function for creating records
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to get records from localStorage
function getRecords() {
    return JSON.parse(localStorage.getItem('records')) || [];
}

// Function to save records to localStorage
function saveRecords(records) {
    localStorage.setItem('records', JSON.stringify(records));
}

// Function to display records
function displayRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    const records = getRecords();
    records.forEach(record => {
        const li = document.createElement('li');
        li.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordsList.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    const newPerson = new Person(name, gender, address, education, profession);

    const records = getRecords();
    records.push(newPerson);
    saveRecords(records);
    displayRecords();

    document.getElementById('populationForm').reset();
}

// Add event listener to the form
document.getElementById('populationForm').addEventListener('submit', handleFormSubmit);

// Display records on page load
displayRecords();