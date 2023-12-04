document.addEventListener("DOMContentLoaded", function () {
  const currencies = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Ripple (XRP)",
    "Litecoin (LTC)",
    "Cardano (ADA)",
  ];

  const tokenIcons = {
    "Bitcoin (BTC)": "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    "Ethereum (ETH)": "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    "Ripple (XRP)": "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=022",
    "Litecoin (LTC)": "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022",
    "Cardano (ADA)": "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022"
};
  
  document.getElementById("selectedFromTokenIcon").setAttribute("hidden", true);
  document.getElementById("selectedToTokenIcon").setAttribute("hidden", true);

  const currencyList = document.getElementById("currencyList");
  let activeButtonId;

  currencies.forEach((currency) => {
    let li = document.createElement("li");
    li.tabIndex = 0;

    // Create an img element for the icon
    let img = document.createElement("img");
    img.src = tokenIcons[currency];
    img.alt = currency + " icon";
    img.className = "token-icon"; // A class for styling the icon

    // Append the icon to the list item
    li.appendChild(img);

    // Create a text node and append it to the list item
    let textNode = document.createTextNode(currency);
    li.appendChild(textNode);

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
        const currencyName = currency.split(" (")[0];
        let iconId, nameId;

        if (activeButtonId === 'fromCurrency') {
            iconId = 'selectedFromTokenIcon';
            nameId = 'selectedFromTokenName';
        } else if (activeButtonId === 'toCurrency') {
            iconId = 'selectedToTokenIcon';
            nameId = 'selectedToTokenName';
        }

        if (iconId && nameId) {
            document.getElementById(iconId).src = tokenIcons[currency];
            document.getElementById(iconId).style.display = 'inline'; // Show the icon
            document.getElementById(nameId).textContent = currencyName;
        }
    }
    closeModal();
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
    // Swap the selected currencies
    [document.getElementById('selectedFromTokenName').textContent,
     document.getElementById('selectedToTokenName').textContent] = 
    [document.getElementById('selectedToTokenName').textContent,
     document.getElementById('selectedFromTokenName').textContent];

    // Swap the icons
    let fromIconSrc = document.getElementById('selectedFromTokenIcon').src;
    document.getElementById('selectedFromTokenIcon').src = document.getElementById('selectedToTokenIcon').src;
    document.getElementById('selectedToTokenIcon').src = fromIconSrc;

    // Check if icons are visible and swap their visibility
    let fromIconDisplay = document.getElementById('selectedFromTokenIcon').style.display;
    document.getElementById('selectedFromTokenIcon').style.display = document.getElementById('selectedToTokenIcon').style.display;
    document.getElementById('selectedToTokenIcon').style.display = fromIconDisplay;
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
