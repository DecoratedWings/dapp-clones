document.addEventListener("DOMContentLoaded", function () {
  // Define the available currencies
  const currencies = ["BTC", "ETH", "XRP", "LTC", "ADA"];
  const currencyList = document.getElementById("currencyList");
  let activeButtonId;

  // Populate the modal with currency options
  currencies.forEach((currency) => {
    let li = document.createElement("li");
    li.textContent = currency;
    li.onclick = function () {
      selectCurrency(currency);
    };
    currencyList.appendChild(li);
  });

  // Assign click event to 'Select Currency' buttons
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

  // Close modal when the close button is clicked
  document.querySelector(".close").onclick = function () {
    document.getElementById("currencyModal").style.display = "none";
  };

  // Function to handle currency selection from the modal
  function selectCurrency(currency) {
    if (activeButtonId) {
      document.getElementById(activeButtonId).textContent = currency;
    }
    document.getElementById("currencyModal").style.display = "none";
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.onclick = function () {
    const themeIcon = document.getElementById("themeIcon");
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    themeIcon.textContent = isDarkTheme ? "🌙" : "☀️";
    themeIcon.className = isDarkTheme ? "moon-icon" : "sun-icon";
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

    // Swap the values of the amount inputs, if they are both numbers
    if (
      !isNaN(parseFloat(fromAmount.value)) &&
      !isNaN(parseFloat(toAmount.value))
    ) {
      [fromAmount.value, toAmount.value] = [toAmount.value, fromAmount.value];
    }
  };
});
