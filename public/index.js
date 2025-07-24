window.addEventListener("DOMContentLoaded", async () => {
    const createBtn = document.querySelector("#create-btn");
    const entryModal = document.querySelector(".entry-modal");
    const closeBtn = document.querySelector("#close-btn");
    const entryForm = document.querySelector("#entry-form");
    const journalEntries = document.querySelector("#journal-entries");


    // 🔍 Journal page logic
    if (journalEntries) {
        console.log("📄 journal.html detected");

        try {
            const response = await fetch("http://localhost:8000/api/journal");
            const data = await response.json();
            console.log("✅ Entries received:", data.allEntries);
            renderEntries(data.allEntries, journalEntries);
        } catch (error) {
            console.error("❌ Failed to fetch entries:", error);
        }

        
    }

    // 📝 Index page logic
    if (createBtn && entryModal && closeBtn && entryForm) {
        createBtn.addEventListener("click", () => {
            entryModal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            entryModal.style.display = "none";
        });

        entryForm.addEventListener("submit", async () => {
            const formData = new FormData(entryForm);
            const entryData = Object.fromEntries(formData);

            try {
                const response = await fetch("http://localhost:8000/api/journal", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(entryData),
                });

                const data = await response.json();
                console.log("✅ Entry submitted:", data);
            } catch (error) {
                console.error("❌ Error submitting entry:", error);
            }
        });
    }
});

function openModal(entry) {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    modalContent.innerHTML = `
        <button id="cancel-btn">Cancel</button>
        <h2>${entry.title}</h2>
        <small>${entry.date}</small>
        <p>${entry.body}</p>
        <h4 class="display">${entry._id}</h4>
        <div class="buttons">
            <button id="edit-btn">Edit</button>
            <button id="delete-btn">Delete</button>
        </div>
    `;

    modal.style.display = "block";
    
    document.querySelector("#cancel-btn").addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.querySelector("#cancel-edit").addEventListener("click", () => {
        document.querySelector("#edit-form").style.display = "none";
        modal.style.display = "none";
    })

    document.querySelector("#edit-btn").addEventListener("click", () => {
        console.log("edit");
        document.querySelector("#edit-form").style.display = "grid";
    })

    document.querySelector("#delete-btn").addEventListener("click", async () => {

        const response = await fetch(`http://localhost:8000/api/journal/${entry._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        window.location.reload();  // reloads page to show entry is gone

    })

    const editForm = document.querySelector("#edit-form");

    editForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const editFormData = new FormData(editForm);
        const editData = Object.fromEntries(editFormData);
        
        try {

            const response = await fetch(`http://localhost:8000/api/journal/${entry._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editData)
            })

            window.location.reload();
            
        } catch (error) {
            console.log({ msg: error });
        }
        

    });

}

function renderEntries(entries, container) {

    container.innerHTML = "";  // clear previous entries html
    
    for (const entry of entries) {
        container.innerHTML += `
        <button class="entry-card">
        <h3>${entry.title}</h3>
        <p>${entry.entry}</p>
        <small>${new Date(entry.date).toLocaleDateString()}</small>
        <h4>${entry._id}</h4>
        </button>
        `;
    }

    const entryBtns = document.querySelectorAll(".entry-card");
    
    for (const entryBtn of entryBtns) {
        entryBtn.addEventListener("click", () => {

            console.log(entryBtn, "clicked")
            const title = entryBtn.querySelector("h3").textContent;
            const body = entryBtn.querySelector("p").textContent;
            const date = entryBtn.querySelector("small").textContent;
            const _id = entryBtn.querySelector("h4").textContent;

            openModal({title, body, date, _id});

            
        })
    }
    
}
