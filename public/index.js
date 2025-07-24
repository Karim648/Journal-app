const createBtn = document.querySelector("#create-btn");
const entryModal = document.querySelector(".entry-modal");
const closeBtn = document.querySelector("#close-btn");
const entryForm = document.querySelector("#entry-form");
const submitBtn = document.querySelector("#submit-btn");

createBtn.addEventListener("click", () => {
    console.log("create btn");
    entryModal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    console.log("close journal");
    entryModal.style.display = "none";
})

entryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Journal entry submitted");
    const formData = new FormData(entryForm);

    try {

        const response = await fetch("http://localhost:8000/api/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
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