const notes = [
    "HTML structures a webpage.",
    "CSS styles a webpage.",
    "JavaScript makes websites interactive.",
    "Git tracks changes in a project.",
];

let noteIndex = 0;

const noteButton = document.querySelector("#noteButton");
const noteDisplay = document.querySelector("#noteDisplay");

function showNotes() {
    if (noteIndex >= notes.length) {
        noteIndex = 0;
    }
    noteDisplay.textContent = notes[noteIndex];
    noteIndex++;
}

noteButton.addEventListener("click", showNotes);