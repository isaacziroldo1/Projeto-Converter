
const form = document.querySelector("form");

const amount = document.getElementById("amount");
const quotation = document.getElementById("quotation");
const currency = document.getElementById("currency");

//manipulando o input amount para receber somente números
amount.addEventListener("input", ()=> {
    const hasCharactersRegex = /[^\d.]/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

quotation.addEventListener("input", ()=> {
    const hasCharactersRegex = /[^\d.]/g
    quotation.value = quotation.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value,quotation.value, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value,quotation.value, "€");
            break;  
        case "GBP":
            convertCurrency(amount.value,quotation.value, "£");
            break;
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        console.log(amount, price, symbol)
    } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao converter a moeda. Verifique os valores inseridos e tente novamente.");
    }
}