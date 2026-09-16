/* =========================================================================
   CHECKOUT.JS — Member 3
   Depends on auth.js (GSAuth) and cart.js (GSCart) being loaded first.

   Flow:
     1. Guard the page — redirect to login if not authenticated.
     2. Render the order summary (gift-tag card) from the current cart.
     3. Let the user switch payment method and show the matching fields.
     4. Validate every required field for the chosen payment method.
     5. On "Place Order": build an order object, save it to
        localStorage.orders (array, order history) and
        localStorage.lastOrder (the one to show on the success page),
        clear the cart, then redirect to order-success.html.
   ========================================================================= */
(function () {
  "use strict";

  if (!window.GSAuth || !window.GSCart) return; // safety guard if scripts load out of order

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("[data-gs-checkout-form]");
    if (!form) return; // not on the checkout page

    /* ---- 1. Require login before checking out ------------------------ */
    if (!window.GSAuth.requireAuth("checkout.html")) return;

    /* Prefill customer info from the logged-in account, if available */
    const user = window.GSAuth.getCurrentUser();
    if (user) {
      const nameInput = form.querySelector("#fullName");
      const emailInput = form.querySelector("#email");
      const phoneInput = form.querySelector("#phone");
      if (nameInput && !nameInput.value) nameInput.value = user.fullName || "";
      if (emailInput && !emailInput.value) emailInput.value = user.email || "";
      if (phoneInput && !phoneInput.value) phoneInput.value = user.phone || "";
    }

    /* If the cart is empty there is nothing to check out */
    const cart = window.GSCart.getCart();
    if (cart.length === 0) {
      window.location.href = "cart.html";
      return;
    }

    renderOrderSummary();
    setupPaymentSwitcher();
    setupValidationClearing();

    form.addEventListener("submit", handleSubmit);
  });

  /* -----------------------------------------------------------------------
     Order summary (reuses the gift-tag card markup from cart.html)
     ------------------------------------------------------------------- */
  function renderOrderSummary() {
    const cart = window.GSCart.getCart();
    const { totalQuantity, subtotal, deliveryCharge, grandTotal } = window.GSCart.calculateCartTotal();
    const productsEl = document.querySelector("[data-gs-checkout-products]");

    if (productsEl) {
      productsEl.innerHTML = cart
        .map(
          (item) =>
            '<div class="gs-summary-item">' +
              "<span>" + escapeHTML(item.name) + " × " + item.quantity + "</span>" +
              "<span>" + window.GSCart.formatMoney(item.price * item.quantity) + "</span>" +
            "</div>"
        )
        .join("");
    }

    setText("[data-gs-summary-qty]", totalQuantity);
    setText("[data-gs-summary-subtotal]", window.GSCart.formatMoney(subtotal));
    setText("[data-gs-summary-delivery]", deliveryCharge === 0 ? "Free" : window.GSCart.formatMoney(deliveryCharge));
    setText("[data-gs-summary-total]", window.GSCart.formatMoney(grandTotal));
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((el) => (el.textContent = value));
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  /* -----------------------------------------------------------------------
     Payment method switching
     ------------------------------------------------------------------- */
  function setupPaymentSwitcher() {
    const radios = document.querySelectorAll('input[name="paymentMethod"]');
    const options = document.querySelectorAll("[data-gs-pay-option]");
    const details = document.querySelectorAll("[data-gs-pay-detail]");

    function sync() {
      const selected = document.querySelector('input[name="paymentMethod"]:checked');
      const value = selected ? selected.value : null;

      options.forEach((opt) => {
        opt.setAttribute("data-active", opt.getAttribute("data-gs-pay-option") === value ? "true" : "false");
      });
      details.forEach((detail) => {
        const show = detail.getAttribute("data-gs-pay-detail") === value;
        detail.setAttribute("data-show", show ? "true" : "false");
        detail.querySelectorAll("input").forEach((input) => {
          input.required = show;
          if (!show) clearFieldError(input);
        });
      });
    }

    radios.forEach((radio) => radio.addEventListener("change", sync));
    sync();
  }

  /* -----------------------------------------------------------------------
     Validation
     ------------------------------------------------------------------- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }
  function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ""));
  }
  function isValidPincode(pin) {
    return /^[0-9]{6}$/.test(pin.trim());
  }
  function isValidCardNumber(num) {
    return /^[0-9]{13,16}$/.test(num.replace(/\s/g, ""));
  }
  function isValidExpiry(exp) {
    const m = exp.trim().match(/^(\d{2})\/(\d{2})$/);
    if (!m) return false;
    const month = parseInt(m[1], 10);
    if (month < 1 || month > 12) return false;
    const year = 2000 + parseInt(m[2], 10);
    const now = new Date();
    const expiryDate = new Date(year, month); // first day of the month AFTER expiry
    return expiryDate > now;
  }
  function isValidCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv.trim());
  }
  function isValidUPI(upi) {
    return /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upi.trim());
  }

  const FIELD_RULES = {
    fullName: (v) => v.trim().length >= 2 || "Enter your full name.",
    email: (v) => isValidEmail(v) || "Enter a valid email address.",
    phone: (v) => isValidPhone(v) || "Enter a valid 10-digit phone number.",
    address: (v) => v.trim().length >= 5 || "Enter your delivery address.",
    city: (v) => v.trim().length >= 2 || "Enter your city.",
    state: (v) => v.trim().length >= 2 || "Enter your state.",
    pincode: (v) => isValidPincode(v) || "Enter a valid 6-digit pincode.",
    upiId: (v) => isValidUPI(v) || "Enter a valid UPI ID (e.g. name@bank).",
    cardNumber: (v) => isValidCardNumber(v) || "Enter a valid card number.",
    cardExpiry: (v) => isValidExpiry(v) || "Enter a valid, unexpired MM/YY date.",
    cardCVV: (v) => isValidCVV(v) || "Enter a valid CVV.",
    cardHolder: (v) => v.trim().length >= 2 || "Enter the name on the card.",
  };

  function showFieldError(input, message) {
    input.setAttribute("data-invalid", "true");
    const wrap = input.closest(".gs-field");
    if (!wrap) return;
    const err = wrap.querySelector(".gs-error-text");
    if (err) {
      err.textContent = message;
      err.setAttribute("data-show", "true");
    }
  }

  function clearFieldError(input) {
    input.removeAttribute("data-invalid");
    const wrap = input.closest(".gs-field");
    if (!wrap) return;
    const err = wrap.querySelector(".gs-error-text");
    if (err) err.setAttribute("data-show", "false");
  }

  function setupValidationClearing() {
    document.querySelectorAll(".gs-input").forEach((input) => {
      input.addEventListener("input", () => clearFieldError(input));
    });
  }

  function validateForm(form) {
    let firstInvalid = null;
    let valid = true;

    Object.keys(FIELD_RULES).forEach((name) => {
      const input = form.querySelector('[name="' + name + '"]');
      if (!input || input.required === false || input.offsetParent === null) {
        if (input) clearFieldError(input);
        return;
      }
      const result = FIELD_RULES[name](input.value || "");
      if (result !== true) {
        showFieldError(input, result);
        valid = false;
        if (!firstInvalid) firstInvalid = input;
      } else {
        clearFieldError(input);
      }
    });

    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      firstInvalid.focus();
    }
    return valid;
  }

  /* -----------------------------------------------------------------------
     Submit — place the order
     ------------------------------------------------------------------- */
  function generateOrderId() {
    const stamp = Date.now().toString(36).toUpperCase();
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return "GFT-" + stamp + rand;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm(form)) return;

    const cart = window.GSCart.getCart();
    if (cart.length === 0) {
      window.location.href = "cart.html";
      return;
    }

    const { totalQuantity, subtotal, deliveryCharge, grandTotal } = window.GSCart.calculateCartTotal();
    const paymentMethod = form.querySelector('input[name="paymentMethod"]:checked').value;

    const paymentDetails = {};
    if (paymentMethod === "upi") {
      paymentDetails.upiId = form.querySelector("#upiId").value.trim();
    } else if (paymentMethod === "card") {
      const cardNumber = form.querySelector("#cardNumber").value.replace(/\s/g, "");
      paymentDetails.cardHolder = form.querySelector("#cardHolder").value.trim();
      paymentDetails.cardLast4 = cardNumber.slice(-4);
    }

    const order = {
      orderId: generateOrderId(),
      placedAt: new Date().toISOString(),
      customer: {
        fullName: form.querySelector("#fullName").value.trim(),
        email: form.querySelector("#email").value.trim(),
        phone: form.querySelector("#phone").value.trim(),
      },
      address: {
        line: form.querySelector("#address").value.trim(),
        city: form.querySelector("#city").value.trim(),
        state: form.querySelector("#state").value.trim(),
        pincode: form.querySelector("#pincode").value.trim(),
      },
      paymentMethod: paymentMethod,
      paymentLabel: { upi: "UPI", card: "Credit / Debit Card", cod: "Cash on Delivery" }[paymentMethod],
      paymentDetails: paymentDetails,
      products: cart,
      totalQuantity: totalQuantity,
      subtotal: subtotal,
      deliveryCharge: deliveryCharge,
      grandTotal: grandTotal,
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("lastOrder", JSON.stringify(order));

    window.GSCart.clearCart();
    window.location.href = "order-success.html";
  }
})();
