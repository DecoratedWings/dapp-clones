document.addEventListener("DOMContentLoaded", function () {

  const currencies = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Ripple (XRP)",
    "Litecoin (LTC)",
    "Cardano (ADA)",
  ];
  const currencyList = document.getElementById("currencyList");
  let activeButtonId;

  currencies.forEach((currency) => {
    let li = document.createElement("li");
    li.textContent = currency;
    li.onclick = function () {
      selectCurrency(currency);
    };
    currencyList.appendChild(li);
  });

  const fromCurrencyButton = document.getElementById("fromCurrency");
  const toCurrencyButton = document.getElementById("toCurrency");

  fromCurrencyButton.onclick = function () {
    activeButtonId = "fromCurrency";
    document.getElementById("currencyModal").style.display = "block";
  };

  toCurrencyButton.onclick = function () {
    activeButtonId = "toCurrency";
    document.getElementById("currencyModal").style.display = "block";
  };

  document.querySelector(".close").onclick = function () {
    document.getElementById("currencyModal").style.display = "none";
  };

  document.querySelector(".close-secondary").onclick = function () {
    document.getElementById("currencyModal").style.display = "none";
  };

  function selectCurrency(currency) {
    if (activeButtonId) {
      document.getElementById(activeButtonId).textContent = currency;
    }
    document.getElementById("currencyModal").style.display = "none";
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleDesktop = document.getElementById("themeToggleDesktop");

  themeToggle.onclick = function () {
    const themeIcon = document.getElementById("themeIcon");
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    themeIcon.textContent = isDarkTheme ? "🌙" : "☀️";
    themeIcon.className = isDarkTheme ? "moon-icon" : "sun-icon";
  };
  themeToggleDesktop.onclick = function () {
    const themeIcon = document.getElementById("themeIconDesktop");
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    themeIcon.textContent = isDarkTheme ? "🌙" : "☀️";
    themeIcon.className = isDarkTheme ? "moon-icon" : "sun-icon";
  };

  // Mobile Menu Functionality
  window.toggleMobileMenu = function () {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  // Functionality for swap button
  document.getElementById("swapButton").onclick = function () {
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const fromAmount = document.getElementById("fromAmount");
    const toAmount = document.getElementById("toAmount");

    // Swap the text of the currency buttons
    [fromCurrency.textContent, toCurrency.textContent] = [
      toCurrency.textContent,
      fromCurrency.textContent,
    ];

    // Swap receive and input tokens, if they are both numbers
    if (
      !isNaN(parseFloat(fromAmount.value)) &&
      !isNaN(parseFloat(toAmount.value))
    ) {
      [fromAmount.value, toAmount.value] = [toAmount.value, fromAmount.value];
    }
  };
});
