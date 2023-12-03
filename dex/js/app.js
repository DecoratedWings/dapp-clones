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
    li.tabIndex = 0;
    li.textContent = currency;
    li.onclick = function () {
      selectCurrency(currency);
    };
    li.onkeydown = function (event) {
      if (event.key === "Enter") {
        selectCurrency(currency);
      }
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

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' ) {
      closeModal();
    }
});

  document.querySelector(".close").onclick = function () {
    closeModal();
  };

  document.querySelector(".close-secondary").onclick = function () {
    closeModal();
  };

  function selectCurrency(currency) {
    if (activeButtonId) {
      document.getElementById(activeButtonId).textContent = currency;
    }
    document.getElementById("currencyModal").style.display = "none";
  }

  // Theme Toggle Functionality
  function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    updateThemeIcon("themeIcon", isDarkTheme);
    updateThemeIcon("themeIconDesktop", isDarkTheme);
  }

  function updateThemeIcon(iconId, isDarkTheme) {
    const themeIcon = document.getElementById(iconId);
    if (themeIcon) {
      themeIcon.textContent = isDarkTheme ? "🌙" : "☀️";
      themeIcon.className = isDarkTheme ? "moon-icon" : "sun-icon";
    }
  }

  themeToggle.onclick = toggleTheme;
  themeToggleDesktop.onclick = toggleTheme;

  // Mobile Menu Functionality
  window.toggleMobileMenu = function () {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

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

  function getFocusableElements(element) {
    return element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  }

  fromCurrencyButton.onclick = function () {
    activeButtonId = "fromCurrency";
    openModal();
  };

  toCurrencyButton.onclick = function () {
    activeButtonId = "toCurrency";
    openModal();
  };

  function openModal() {
    const modal = document.getElementById("currencyModal");
    modal.style.display = "block";
    trapFocus(modal);
  }

  function trapFocus(modal) {
    const focusableElements = getFocusableElements(modal);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    modal.addEventListener("keydown", function (event) {
      const isTab = event.key === "Tab";

      if (!isTab) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    });

    firstFocusableElement.focus();
  }

  function closeModal() {
    const modal = document.getElementById("currencyModal");
    modal.style.display = "none";
    // Remove event listener for focus trapping
    modal.removeEventListener("keydown", trapFocus);
  }
});
