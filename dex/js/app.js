import {
  calculateExchange,
  selectCurrency,
  swapCurrencies,
  updateReceiveAmount,
} from "./crypto.js";
import { closeTradeModal, confirmTrade, openExchangeModal } from "./modals.js";
import { toggleTheme } from "./themeToggle.js";
import {
  closeModal,
  getElement,
  openModal,
  toggleMobileMenu,
} from "./utilities.js";

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
  "Cardano (ADA)": "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022",
};

let activeButtonId;

function setupEventListeners() {
  getElement("exchangeButton").addEventListener("click", () => {
    const fromCurrency = getElement("selectedFromTokenName").textContent;
    const toCurrency = getElement("selectedToTokenName").textContent;
    const fromAmount = getElement("fromAmount").value;
    const toAmount = calculateExchange(fromCurrency, toCurrency, fromAmount);
    openExchangeModal(fromCurrency, toCurrency, fromAmount, toAmount);
  });

  const swapButton = getElement("swapButton");
  swapButton.addEventListener("click", () => {
    [
      getElement("selectedFromTokenName").textContent,
      getElement("selectedToTokenName").textContent,
    ] = [
      getElement("selectedToTokenName").textContent,
      getElement("selectedFromTokenName").textContent,
    ];

    swapCurrencies("selectedFromTokenIcon", "selectedToTokenIcon");

    let fromAmount = getElement("fromAmount").value;
    let toAmount = getElement("toAmount").value;
    getElement("fromAmount").value = toAmount;
    getElement("toAmount").value = fromAmount;

    updateReceiveAmount();
  });

  getElement("themeToggle").addEventListener("click", toggleTheme);
  getElement("themeToggleDesktop").addEventListener("click", toggleTheme);

  const fromAmountInput = getElement("fromAmount");
  fromAmountInput.addEventListener("input", updateReceiveAmount);

  currencies.forEach((currency) => {
    let li = document.createElement("li");
    li.tabIndex = 0;

    let img = document.createElement("img");
    img.src = tokenIcons[currency];
    img.alt = currency + " icon";
    img.className = "token-icon";

    li.appendChild(img);
    li.appendChild(document.createTextNode(currency));
    li.addEventListener("click", () =>
      selectCurrency(currency, activeButtonId, tokenIcons),
    );
    li.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        selectCurrency(currency, activeButtonId, tokenIcons);
      }
    });
    getElement("currencyList").appendChild(li);
  });

  getElement("fromCurrency").addEventListener("click", () => {
    activeButtonId = "fromCurrency";
    openModal("currencyModal");
  });

  getElement("toCurrency").addEventListener("click", () => {
    activeButtonId = "toCurrency";
    openModal("currencyModal");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  }

  const confirmButtons = document.querySelectorAll("#exchangeModal .confirm");
  confirmButtons.forEach((button) =>
    button.addEventListener("click", confirmTrade),
  );

  const cancelButtons = document.querySelectorAll("#exchangeModal .cancel");
  cancelButtons.forEach((button) =>
    button.addEventListener("click", closeTradeModal),
  );

  const closeModalButtons = document.querySelectorAll("#currencyModal .close");
  closeModalButtons.forEach((button) =>
    button.addEventListener("click", () => closeModal("currencyModal")),
  );

  const cancelModalButtons = document.querySelectorAll(
    "#currencyModal .close-secondary",
  );
  cancelModalButtons.forEach((button) =>
    button.addEventListener("click", () => closeModal("currencyModal")),
  );
});
