// Check if the user is logged in when the page loads
document.addEventListener('DOMContentLoaded', checkUserLogin);
function register() {
    const email = document.getElementById('registerEmail').value;
    if (email) {
        localStorage.setItem('userEmail', email);
        showNotesPage();
    } else {
        alert('Please enter a valid email.');
    }
}
function login() {
    const email = document.getElementById('loginEmail').value;
    const storedEmail = localStorage.getItem('userEmail');
    if (email && email === storedEmail) {
        showNotesPage();
    } else {
        alert('Invalid email or user does not exist. Please register.');
    }
}
function checkUserLogin() {
    const email = localStorage.getItem('userEmail');
    if (email) {
        showNotesPage();
    } else {
        showAuthPage();
    }
}
function showAuthPage() {
    document.getElementById('authPage').classList.add('visible');
    document.getElementById('authPage').classList.remove('hidden');
    document.getElementById('notesPage').classList.add('hidden');
    document.getElementById('notesPage').classList.remove('visible');
}
function showNotesPage() {
    document.getElementById('authPage').classList.add('hidden');
    document.getElementById('authPage').classList.remove('visible');
    document.getElementById('notesPage').classList.add('visible');
    document.getElementById('notesPage').classList.remove('hidden');
    displayNotes();
}
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('visible');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('visible');
}
function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('visible');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('visible');
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
    showAuthPage();
}
