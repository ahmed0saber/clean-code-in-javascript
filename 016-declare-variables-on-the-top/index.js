// DON'T
const getUserDetails_bad = (username) => {
    const id = "1212"
    if (username = "unknown") {
        console.log("unkwown")
    }
    const API_URL = "..."
}

// DO
const getUserDetails = (username) => {
    const id = "1212"
    const API_URL = "..."
    if (username = "unknown") {
        console.log("unkwown")
    }
}
