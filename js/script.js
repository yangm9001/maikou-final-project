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
    "Cilents and servers communicate using protocols such as HTTP, FTP, and SMTP.",
    "How the internet works: Cilent(browser) -> DNS -> Web Server -> Response -> Cilent(Browser)"
];

let noteIndex = 0;

const noteButton = document.querySelector("#noteButton");
const noteDisplay = document.querySelector("#noteDisplay");

function showNotes() {
    if (noteIndex >= notes.length) {
        noteIndex = 0;
    }
    noteDisplay.textContent = 
        Note ${noteIndex + 1} of ${notes.length}: ` +
        notes[noteIndex];

    noteIndex++;    
}

if (noteButton && noteDisplay) {
    noteButton.addEventListener("click", showNotes);
}