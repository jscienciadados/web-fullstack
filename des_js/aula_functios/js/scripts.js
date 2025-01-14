function salesStatus(status, total) {
    console.log(`Status ${status} total amount = $ ${total}`)
}

salesStatus(true, 500)

function percentage10(price) {
    return price - (price * 10 / 100)

}
let total = percentage10(153)
console.log(total)
