// DON'T
const un = "ahmed0saber"
const userDetails = (param) => {
    return {
        name: param,
        age: 21
    }
}
userDetails(un)

// DO
const currentUsername = "ahmed0saber"
const getUserDetailsByUsername = (username) => {
    return {
        username: username,
        age: 21
    }
}
getUserDetailsByUsername(currentUsername)
