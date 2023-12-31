import { closeModal, getElement } from "./utilities.js";

const cryptoValuesInUSD = {
  Bitcoin: 30000,
  Ethereum: 2000,
  Ripple: 0.25,
  Litecoin: 130,
  Cardano: 1.5,
};

export function selectCurrency(currency, activeButtonId, tokenIcons) {
  const currencyName = currency.split(" (")[0];
  let iconId, nameId;

  if (activeButtonId === "fromCurrency") {
    iconId = "selectedFromTokenIcon";
    nameId = "selectedFromTokenName";
  } else {
    iconId = "selectedToTokenIcon";
    nameId = "selectedToTokenName";
  }

  if (iconId && nameId) {
    document.getElementById(iconId).src = tokenIcons[currency];
    document.getElementById(iconId).style.display = "inline";
    document.getElementById(nameId).textContent = currencyName;
    updateReceiveAmount();
  }
  closeModal("currencyModal");
}

export function swapCurrencies(fromIconId, toIconId) {
  let fromIconSrc = document.getElementById(fromIconId).src;
  document.getElementById(fromIconId).src =
    document.getElementById(toIconId).src;
  document.getElementById(toIconId).src = fromIconSrc;
}

window.filterCurrencies = function () {
  var input = document.getElementById("currencySearchBox");
  var filter = input.value.toUpperCase();
  var currencyList = document.getElementById("currencyList");
  var li = currencyList.getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    var txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

export function calculateExchange(fromCurrency, toCurrency, amount) {
  const fromValueInUSD = cryptoValuesInUSD[fromCurrency];
  const toValueInUSD = cryptoValuesInUSD[toCurrency];

  if (fromValueInUSD !== undefined && toValueInUSD !== undefined) {
    const amountInUSD = amount * fromValueInUSD;
    const convertedAmount = amountInUSD / toValueInUSD;
    return Number(convertedAmount.toFixed(3));
  } else {
    console.error("Exchange rate not found.");
    return null;
  }
}

export function updateReceiveAmount() {
  const fromAmount = parseFloat(getElement("fromAmount").value);
  const fromCurrency = getElement("selectedFromTokenName").textContent;
  const toCurrency = getElement("selectedToTokenName").textContent;

  if (!isNaN(fromAmount) && fromCurrency && toCurrency) {
    const estimatedAmount = calculateExchange(
      fromCurrency,
      toCurrency,
      fromAmount,
    );
    getElement("toAmount").value =
      estimatedAmount !== null ? estimatedAmount : "";
  } else {
    getElement("toAmount").value = "";
  }
}
