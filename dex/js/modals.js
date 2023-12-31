import { closeModal, openModal } from "./utilities.js";

export function closeTradeModal() {
  closeModal("exchangeModal");
}

export function confirmTrade() {
  alert("Exchange confirmed!");
  closeTradeModal();
}

export function openExchangeModal(
  fromCurrency,
  toCurrency,
  fromAmount,
  toAmount,
) {
  document.getElementById("exchangeInfo").textContent =
    `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`;
  openModal("exchangeModal");
}
