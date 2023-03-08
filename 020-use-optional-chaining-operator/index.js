const data = {
    errors: {
        username: "username is required"
    }
}

// DON'T
if (data && data.errors && data.errors.username) {
    console.log(`Error: ${data.errors.username}`)
}

// DO
if (data?.errors?.username) {
    console.log(`Error: ${data.errors.username}`)
}



const deleteBtn = document.querySelector(".delete-btn")

// DON'T
if (deleteBtn) {
    deleteBtn.addEventListener("click", () => console.log("click"))
}

// DO
deleteBtn?.addEventListener("click", () => console.log("click"))
