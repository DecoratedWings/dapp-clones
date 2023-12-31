export function getElement(id) {
  return document.getElementById(id);
}

export function closeModal(modalId) {
  const modal = getElement(modalId);
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.removeEventListener("keydown", trapFocus);
}

export function openModal(modalId) {
  const modal = getElement(modalId);
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  trapFocus(modal);
}

export function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener("keydown", function (event) {
    const isTab = event.key === "Tab";
    if (!isTab) return;

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

export function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
