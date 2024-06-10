

// Check if the user is logged in when the page loads
document.addEventListener('DOMContentLoaded', checkUserLogin);

function login() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        localStorage.setItem('userEmail', email);
        showHomePage();
    } else {
        alert('Please enter a valid email.');
    }
}

function checkUserLogin() {
    const email = localStorage.getItem('userEmail');
    if (email) {
        showHomePage();
    } else {
        showLoginPage();
    }
}

function showHomePage() {
    document.getElementById('loginPage').classList.remove('visible');
    document.getElementById('homePage').classList.add('visible');
    displayNotes();
}

function showLoginPage() {
    document.getElementById('homePage').classList.remove('visible');
    document.getElementById('loginPage').classList.add('visible');
}

function submitNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteInput);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        document.getElementById('noteInput').value = ''; // Clear the input field
    } else {
        alert('Please enter a note.');
    }
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Clear the current list
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        let noteItem = document.createElement('div');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
    });
}

function logout() {
    localStorage.removeItem('userEmail');
    showLoginPage();
}  