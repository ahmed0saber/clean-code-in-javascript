// DON'T
const getProductDetails = (id) => {
    return {
        product_name: "product 1"
    }
}
const getProductData = (slug) => {
    return {
        product_name: "product 1"
    }
}

// DO
const getProductDetailsById = (id) => {
    return {
        product_name: "product 1"
    }
}
const getProductDetailsBySlug = (slug) => {
    return {
        product_name: "product 1"
    }
}
