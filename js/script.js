const notes = [
    "HTML structures a webpage.",
    "CSS styles a webpage.",
    "JavaScript makes websites interactive.",
    "Git tracks changes in a project.",
    "Hardware is the physical part of a computer.",
    "Software is the set of instructions that tell the hardware what to do.",
    "Main components of a computer include the CPU, memory, storage, and input/output devices.",
    "HDD (Hard Disk Drive) is a traditional storage device that uses spinning disks to read/write data.",
    "SSD (Solid State Drive) is a faster storage device that uses flash memory to store data.",
    "Volatile memory loses its data when the power is turned off, while non-volatile memory retains its data even when the power is off.",
    "Firmware is a type of software that is embedded into hardware devices to control their functions.",
    "BIOS/UEFI is firmware that initializes and tests hardware components during the boot process.",
    "Absolute vs. Relative paths: Absolute paths specify the full path to a file or directory, while relative paths specify the location of a file or directory in relation to the current working directory.",
    "ZIP files are compressed archives that can contain multiple files and directories, while RAR files are another type of compressed archive format.",
    "File extensions indicate the type of file and its associated program, while MIME types are used to identify the type of data being transmitted over the internet.",

];

let noteIndex = 0;

const noteButton = document.querySelector("#noteButton");
const noteDisplay = document.querySelector("#noteDisplay");

function showNotes() {
    if (noteIndex >= notes.length) {
        noteIndex = 0;
    }

    noteDisplay.textContent =
    `Note ${noteIndex + 1} of ${notes.length}: ${notes[noteIndex]}`;

    noteIndex++;    
}

if (noteButton && noteDisplay) {
    noteButton.addEventListener("click", showNotes);
}

// SEARCH MY NOTES FEATURE

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const searchResults = document.querySelector("#searchResults");

// Search the existing notes array
function searchNotes() {

    const keyword = searchInput.value.trim().toLowerCase();

    // Clear previous results
    searchResults.innerHTML = "";

    if (keyword === "") {
        searchResults.textContent =
            "Please enter a keyword to search.";
        return;
    }

    // Find notes containing the keyword
    const matchingNotes = notes.filter(function(note) {
        return note.toLowerCase().includes(keyword);
    });

    if (matchingNotes.length > 0) {


        const count = document.createElement("p");

        count.textContent =
            `${matchingNotes.length} matching ${matchingNotes.length === 1 ? "note" : "notes"} found:`;

        searchResults.appendChild(count);


        matchingNotes.forEach(function(note) {
            const result = document.createElement("p");
            result.className = "search-result";
            result.textContent = note;
            searchResults.appendChild(result);
        });

    } else {
        searchResults.textContent =
            "No matching notes found. Try another keyword.";
    }
}

// Clear the search
function clearSearch() {
    searchInput.value = "";
    searchResults.textContent = "";
}

// Connect the buttons
if (searchInput && searchButton &&
    clearButton && searchResults) {

    searchButton.addEventListener("click", searchNotes);
    clearButton.addEventListener("click", clearSearch);

    // Allow Enter key to search
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchNotes();
        }
    });
}
