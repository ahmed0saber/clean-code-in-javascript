// DON'T
const setUserDetails_bad = (username, email, age, bio, picture) => {
    console.log("Done")
}
setUserDetails_bad("ahmed0saber", "ahmed0saber33@gmail.com", 21, "Hello there..", "ahmed.png")

// DO
const setUserDetails = ({username, email, age, bio, picture}) => {
    console.log("Done")
}
setUserDetails({
    username: "ahmed0saber",
    email: "ahmed0saber33@gmail.com",
    age: 21,
    bio: "Hello there..",
    picture: "ahmed.png"
})
