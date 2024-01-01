import React, { useEffect, useRef } from 'react';

const useFocusTrap = (show: boolean) => {
  const firstFocusableRef = useRef<HTMLElement | null>(null);
  const lastFocusableRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (show) {
      const modalElement: HTMLElement | null = document.querySelector('.modal');
      if (modalElement) {
        const focusableModalElements = modalElement.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        if (focusableModalElements.length > 0) {
          firstFocusableRef.current = focusableModalElements[0];
          lastFocusableRef.current = focusableModalElements[focusableModalElements.length - 1];
          firstFocusableRef.current?.focus();
        }
      }
    }
  }, [show]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !firstFocusableRef.current || !lastFocusableRef.current) {
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableRef.current) {
        lastFocusableRef.current?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableRef.current) {
        firstFocusableRef.current?.focus();
        e.preventDefault();
      }
    }
  };

  return handleKeyDown;
};

export default useFocusTrap;