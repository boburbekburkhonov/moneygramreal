window.addEventListener("DOMContentLoaded", function() {

  const firstList = document.querySelector(".first-list");
  const firstBtn = document.querySelector(".first-btn");
  const currency = document.querySelector(".currency");
  const formInput = document.querySelector(".form-input");
  const formSelect = document.querySelector(".form-select");
  const formResult = document.querySelector(".form-result");
  const formBtn = document.querySelector(".currency-btn");

  firstBtn.addEventListener("click", function() {
    firstList.classList.add("d-none");
    currency.classList.remove("d-none")
    currency.style.background = "none"
  })

  formBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

    const userCurrency = formSelect.value;
    const userMoney = formInput.value *1;

    if (userCurrency == "dollarToUz") {
      let userCurrencyValue = Math.round(userMoney * 11092.50);

      formResult.textContent = `${userCurrencyValue}so'm`;
    } else if (userCurrency == "euroToUz") {
      let userCurrencyValue = Math.round(userMoney * 11826.38 );

      formResult.textContent = `${userCurrencyValue}so'm`;
    } else if (userCurrency == "rublToUz") {
      let userCurrencyValue = Math.round(userMoney * 192.08 );

      formResult.textContent = `${userCurrencyValue}so'm`;
    } else if (userCurrency == "uzToRubl") {
      let userCurrencyValue = Math.round(userMoney / 192.08);

      formResult.textContent = `${userCurrencyValue}₽`;
    } else if (userCurrency == "uzToEuro") {
      let userCurrencyValue = Math.round(userMoney / 11826.38);

      formResult.textContent = `${userCurrencyValue}€`;
    } else if (userCurrency == "uzToDollar") {
      let userCurrencyValue = Math.round(userMoney / 11092.50);

      formResult.textContent= `${userCurrencyValue}$`
    } else if (userCurrency == "euroToDollar") {
      let userCurrencyValue = Math.round(userMoney * 1.07);

      formResult.textContent = `${userCurrencyValue}$`
    } else if (userCurrency == "dollarToEuro") {
      let userCurrencyValue = Math.round(userMoney * 0.94);

      formResult.textContent = `${userCurrencyValue}€`;
    }

  })


})