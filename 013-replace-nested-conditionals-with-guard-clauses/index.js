const isUser = false
const isAdmin = false
const isSuperAdmin = true

// DON'T
const getUserPermissions_bad = () => {
    if (isUser) {
        console.log("user")
    } else {
        if (isAdmin) {
            console.log("admin")
        } else {
            if (isSuperAdmin) {
                console.log("super admin")
            } else {
                console.log("unknown")
            }
        }
    }
}

// DO
const getUserPermissions = () => {
    if (isUser) {
        console.log("user")
        return
    }
    if (isAdmin) {
        console.log("admin")
        return
    }
    if (isSuperAdmin) {
        console.log("super admin")
        return
    }
    console.log("unknown")
}
