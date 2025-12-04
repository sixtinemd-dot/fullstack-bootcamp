// Instructions
// You will create a currencies converter:

// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.


async function selectCurrency() {
    let select1 = document.getElementById("select1")
    let select2 = document.getElementById("select2")

    try {
        let response = await fetch("https://v6.exchangerate-api.com/v6/634195765be1079339ae206a/latest/USD")
        let data = await response.json()

        let currencies = Object.keys(data.conversion_rates)

        currencies.forEach(currency => {
            let option1 = document.createElement("option")
            option1.textContent = currency
            option1.value = currency
            select1.appendChild(option1)
        })

         currencies.forEach(currency => {
            let option2 = document.createElement("option")
            option2.textContent = currency
            option2.value = currency
            select2.appendChild(option2)
        })

    } catch(error) {
        console.error("Something went wrong:", error)
    }
}

selectCurrency()

async function convertCurrencies() {
    let from = document.getElementById("select1").value
    let to = document.getElementById("select2").value
    let amount = parseFloat(document.getElementById("amount").value)
    let result = document.getElementById("result")

    if (isNaN(amount)) {
        result.textContent = "Please enter a number"
        return
    }

    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/634195765be1079339ae206a/pair/${from}/${to}/${amount}`)
        let data = await response.json()
        
        if (data.result === "success") {
            result.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`
        } else {
            console.error("Something went wrong:", data)
        }

    } catch(error) {
        console.error("Something went wrong:", error)
    }

    
}

async function switchCurrencies() {
    let from = document.getElementById("select2").value
    let to = document.getElementById("select1").value
    let amount = parseFloat(document.getElementById("amount").value)
    let result = document.getElementById("result")

    if (isNaN(amount)) {
        result.textContent = "Please enter a number"
        return
    }

    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/634195765be1079339ae206a/pair/${from}/${to}/${amount}`)
        let data = await response.json()
        
        if (data.result === "success") {
            result.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`
        } else {
            console.error("Something went wrong:", data)
        }

    } catch(error) {
        console.error("Something went wrong:", error)
    }

    
}

const convertButton = document.getElementById("button")

convertButton.addEventListener("click", () => {
    convertCurrencies()

})

const switchButton = document.getElementById("switch")

switchButton.addEventListener("click", () => {
    if (convertCurrencies()) {
        switchCurrencies()
    } else {
        convertCurrencies()
    }

})


