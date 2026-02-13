# 💱 Projeto Conversor de Moedas

## 📌 Sobre o Projeto

Este é um **projeto de estudos pessoal** desenvolvido durante o curso **Javascript Básico** da Rocketseat. O objetivo é consolidar conhecimentos fundamentais de JavaScript, DOM manipulation e tratamento de eventos através de uma aplicação prática.

## 🎯 Objetivo da Aplicação

Criar uma ferramenta web que converte valores em reais brasileiros (BRL) para outras moedas, permitindo ao usuário inserir:
- Um valor em reais
- A cotação da moeda desejada
- O tipo de moeda (USD, EUR, GBP)

## ✨ Funcionalidades

✅ **Conversão de Moedas**
- Converte reais para Dólar (USD), Euro (EUR) e Libra Esterlina (GBP)
- Cálculo automático baseado na cotação fornecida pelo usuário

✅ **Validação de Entrada**
- Aceita apenas números e pontos decimais
- Verifica se o resultado é um número válido com `isNaN()`
- Exibe alertas amigáveis em caso de erro

✅ **Formatação de Moeda**
- Formata valores em padrão de moeda brasileira (R$ com vírgula e centavos)
- Usa `toLocaleString()` para localização automática

✅ **Feedback Visual**
- Exibe a cotação atual da moeda selecionada
- Mostra o resultado da conversão
- Usa classes CSS para ocultar/mostrar resultados

✅ **Tratamento de Erros**
- Implementa try/catch para capturar erros inesperados
- Exibe mensagens de erro no console e ao usuário

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica da aplicação
  - Arrow functions
  - Template literals
  - Spread operators
  - DOM API

## 📂 Estrutura do Projeto

```
Projeto Converter/
├── index.html          # Estrutura HTML do formulário
├── scripts.js          # Lógica JavaScript
├── styles.css          # Estilos CSS
├── img/               # Imagens do projeto
└── README.md          # Este arquivo
```

## 🚀 Como Usar

1. **Abrir a aplicação**
   - Abra `index.html` em um navegador web

2. **Preencher o formulário**
   - Digite o valor em reais no campo "Quantidade"
   - Digite a cotação da moeda no campo "Cotação"
   - Selecione a moeda desejada no dropdown

3. **Visualizar resultado**
   - Clique em "Converter" ou Submit
   - O resultado aparecerá abaixo do formulário

## 📚 Conceitos JavaScript Aprendidos

### 1. **Seleção de Elementos (DOM)**
```javascript
const form = document.querySelector("form");
const amount = document.getElementById("amount");
```
- Manipulação do Document Object Model (DOM)
- Seleção de elementos via `querySelector` e `getElementById`

### 2. **Event Listeners**
```javascript
amount.addEventListener("input", () => { /* ... */ })
form.onsubmit = (event) => { /* ... */ }
```
- Captura de eventos de entrada do usuário
- Prevenção de comportamento padrão com `preventDefault()`

### 3. **Expressões Regulares (Regex)**
```javascript
const hasCharactersRegex = /[^\d.]/g
amount.value = amount.value.replace(hasCharactersRegex, "")
```
- Validação de padrões em strings
- Filtro de caracteres inválidos

### 4. **Template Literals**
```javascript
description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
```
- Interpolação de variáveis em strings
- String templates com backticks

### 5. **Manipulação de Strings**
```javascript
total = formatCurrencyBRL(total).replace("R$", "").trim();
```
- Métodos `.replace()` e `.trim()`
- Processamento de texto

### 6. **Try/Catch (Tratamento de Erros)**
```javascript
try {
    // código que pode gerar erro
} catch (error) {
    console.log(error);
}
```
- Tratamento seguro de exceções
- Prevenção de quebra da aplicação

### 7. **Formatação com toLocaleString()**
```javascript
Number(value).toLocaleString("pt-BR", { 
    style: "currency", 
    currency: "BRL" 
})
```
- Formatação de números conforme localização
- Conversão para padrão de moeda

### 8. **Switch Statement**
```javascript
switch (currency.value) {
    case "USD": convertCurrency(amount.value, quotation.value, "US$"); break;
    case "EUR": convertCurrency(amount.value, quotation.value, "€"); break;
}
```
- Fluxo de controle condicional
- Seleção de múltiplas opções

### 9. **Manipulação de Classes CSS**
```javascript
footer.classList.add("show-result");
footer.classList.remove("show-result");
```
- Adição e remoção de classes dinamicamente
- Controle visual via CSS

## 🎓 Objetivos de Aprendizado

Este projeto foi desenvolvido para praticar:

- ✅ Captura e validação de entradas de usuário
- ✅ Manipulação do DOM com JavaScript
- ✅ Implementação de lógica de negócio
- ✅ Tratamento robusto de erros
- ✅ Integração HTML + CSS + JavaScript
- ✅ Boas práticas de code (comentários, nomes descritivos)
- ✅ Versionamento com Git e GitHub

## 📝 Commits Git

Todos os commits do projeto seguem as convenções:
- `feat:` - Novas funcionalidades
- `fix:` - Correção de bugs
- Mensagens descritivas com detalhes das mudanças

## 🔗 Repositório

[Projeto-Converter no GitHub](https://github.com/isaacziroldo1/Projeto-Converter)

## 👨‍💻 Autor

Desenvolvido como projeto de estudos pessoais durante o curso **Javascript Básico** da Rocketseat.

---

**Data**: 13 de fevereiro de 2026  
**Status**: Em desenvolvimento e melhorias contínuas
