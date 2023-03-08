// DON'T
const getServerUrl_bad = (env) => {
    switch (env) {
        case "prod":
            return "prod.myweb.com"
        case "test":
            return "test.myweb.com"
        case "staging":
            return "staging.myweb.com"
        default:
            return "https://localhost:3000"
    }
}

// DO
const getServerUrl = (env) => {
    const serverUrls = {
        prod: "prod.myweb.com",
        test: "test.myweb.com",
        staging: "staging.myweb.com",
    }

    return serverUrls[env] || "https://localhost:3000"
}
