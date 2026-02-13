//obtendo elementos do formulário e do DOM para manipulação
const form = document.querySelector("form");

const amount = document.getElementById("amount");
const quotation = document.getElementById("quotation");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

const description = document.getElementById("description");

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
        //exibindo a cotação atual da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //aplica a classe show-result no footer para mostrar o resultado da conversão
        footer.classList.add("show-result")


    } catch (error) {
        //oculta a classe show-result do footer para esconder o resultado da conversão
        footer.classList.remove("show-result")

        //exibe o erro no console e um alerta para o usuário
        console.log(error);
        alert("Ocorreu um erro ao converter a moeda. Verifique os valores inseridos e tente novamente.");
    }
}

//função para formatar o valor em reais (BRL).
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", { 
        style: "currency", 
        currency: "BRL" 
    });  
}
