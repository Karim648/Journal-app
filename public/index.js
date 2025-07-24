const createBtn = document.querySelector("#create-btn");
const entryModal = document.querySelector(".entry-modal");
const closeBtn = document.querySelector("#close-btn");
const entryForm = document.querySelector("#entry-form");
const submitBtn = document.querySelector("#submit-btn");
const journal = document.querySelector("#journal");
const journalEntries = document.querySelector("#journal-entries")

createBtn.addEventListener("click", () => {
    console.log("create btn");
    entryModal.style.display = "block";
})

window.addEventListener("DOMContentLoaded", async () => {

    if (journalEntries) {  // means we are in journal.html

        try {

            const response = await fetch("http://localhost:8000/api/journal");
            const data = await response.json();
            // console.log(data.allEntries);  // turns data into array of objects
            renderEntries(data.allEntries)
            
        } catch (error) {
            console.error("Failed to load journal entries:", error);
        }
    }


})

closeBtn.addEventListener("click", () => {
    console.log("close journal");
    entryModal.style.display = "none";
})

entryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Journal entry submitted");
    const formData = new FormData(entryForm);

    console.log(JSON.stringify(Object.fromEntries(formData)));

    try {

        const response = await fetch("http://localhost:8000/api/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData))  // Converts a FormData object to a plain javascript object
        })
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }

    entryForm.reset();
})

function renderEntries(entries) {

    journalEntries.innerHTML = "";  // clear previous entries

    for (const entry of entries) {
        // console.log(entry.title);
        journalEntries.innerHTML += `
        <div class="entry-card"><p>${entry.title}</p></div>
        `;
    }

}