/* =========================================================================
   CART.JS — Member 3
   Cart state lives entirely in localStorage under "cartItems" so it
   survives page refreshes and is shared across every page (including
   Member 2's product listing / product details pages once merged).

   Cart item shape:
     { id, name, price, image, quantity }

   Public API (window.GSCart):
     GSCart.getCart()
     GSCart.addToCart({ id, name, price, image }, qty)
     GSCart.removeFromCart(id)
     GSCart.increaseQuantity(id)
     GSCart.decreaseQuantity(id)
     GSCart.setQuantity(id, qty)
     GSCart.clearCart()
     GSCart.calculateCartTotal() -> { totalQuantity, subtotal, grandTotal, deliveryCharge }
     GSCart.updateCartCount()    -> syncs the navbar badge
     GSCart.renderCart()         -> paints the cart page (if its markup is present)
   ========================================================================= */
(function () {
  "use strict";

  const CART_KEY = "cartItems";
  const FREE_DELIVERY_THRESHOLD = 999;
  const DELIVERY_CHARGE = 79;

  /* ---------------------------------------------------------------------
     Storage helpers
     ------------------------------------------------------------------- */
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("GSCart: failed to parse cart", e);
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }

  /* ---------------------------------------------------------------------
     Mutations
     ------------------------------------------------------------------- */
  function addToCart(product, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    const cart = getCart();
    const existing = cart.find((item) => String(item.id) === String(product.id));

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price) || 0,
        image: product.image || "",
        quantity: qty,
      });
    }
    saveCart(cart);
    return cart;
  }

  function removeFromCart(id) {
    const cart = getCart().filter((item) => String(item.id) !== String(id));
    saveCart(cart);
    renderCart();
  }

  function increaseQuantity(id) {
    const cart = getCart();
    const item = cart.find((i) => String(i.id) === String(id));
    if (item) item.quantity += 1;
    saveCart(cart);
    renderCart();
  }

  function decreaseQuantity(id) {
    const cart = getCart();
    const item = cart.find((i) => String(i.id) === String(id));
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        return removeFromCart(id);
      }
    }
    saveCart(cart);
    renderCart();
  }

  function setQuantity(id, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    const cart = getCart();
    const item = cart.find((i) => String(i.id) === String(id));
    if (item) item.quantity = qty;
    saveCart(cart);
    renderCart();
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
  }

  /* ---------------------------------------------------------------------
     Totals
     ------------------------------------------------------------------- */
  function calculateCartTotal() {
    const cart = getCart();
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryCharge = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
    const grandTotal = subtotal + deliveryCharge;
    return { totalQuantity, subtotal, deliveryCharge, grandTotal };
  }

  function formatMoney(value) {
    return "₹" + Number(value).toLocaleString("en-IN", { maximumFractionDigits: 0 });
  }

  /* ---------------------------------------------------------------------
     Navbar badge
     ------------------------------------------------------------------- */
  function updateCartCount() {
    const { totalQuantity } = calculateCartTotal();
    document.querySelectorAll("[data-gs-cart-badge]").forEach((badge) => {
      badge.textContent = totalQuantity > 99 ? "99+" : String(totalQuantity);
      badge.setAttribute("data-empty", totalQuantity === 0 ? "true" : "false");
    });
  }

  /* ---------------------------------------------------------------------
     Cart page rendering
     ------------------------------------------------------------------- */
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function placeholderImage(name) {
    const initials = (name || "Gift").trim().slice(0, 2).toUpperCase();
    return (
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E" +
      "%3Crect width='64' height='64' fill='%23F3E9DE'/%3E" +
      "%3Ctext x='50%25' y='53%25' font-family='sans-serif' font-size='20' fill='%237A2E6B' text-anchor='middle'%3E" +
      encodeURIComponent(initials) +
      "%3C/text%3E%3C/svg%3E"
    );
  }

  function renderCart() {
    const listEl = document.querySelector("[data-gs-cart-list]");
    const emptyEl = document.querySelector("[data-gs-cart-empty]");
    const summaryEl = document.querySelector("[data-gs-cart-summary]");
    if (!listEl && !emptyEl) return; // not on the cart page

    const cart = getCart();
    const { totalQuantity, subtotal, deliveryCharge, grandTotal } = calculateCartTotal();

    if (cart.length === 0) {
      if (listEl) listEl.style.display = "none";
      if (summaryEl) summaryEl.style.display = "none";
      if (emptyEl) emptyEl.style.display = "block";
      updateCartCount();
      return;
    }

    if (emptyEl) emptyEl.style.display = "none";
    if (listEl) listEl.style.display = "";
    if (summaryEl) summaryEl.style.display = "";

    if (listEl) {
      listEl.innerHTML = cart
        .map((item) => {
          const img = item.image ? escapeHTML(item.image) : placeholderImage(item.name);
          const lineTotal = item.price * item.quantity;
          return (
            '<div class="gs-cart-item" data-id="' + escapeHTML(item.id) + '">' +
              '<div class="gs-cart-item__product">' +
                '<img class="gs-cart-item__img" src="' + img + '" alt="' + escapeHTML(item.name) + '">' +
                '<div class="gs-cart-item__info">' +
                  '<p class="gs-cart-item__name">' + escapeHTML(item.name) + "</p>" +
                  '<button type="button" class="gs-cart-item__remove" data-gs-remove="' + escapeHTML(item.id) + '">' +
                    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>' +
                    "Remove" +
                  "</button>" +
                "</div>" +
              "</div>" +
              '<div class="gs-cart-item__price">' + formatMoney(item.price) + "</div>" +
              '<div class="gs-qty">' +
                '<button type="button" class="gs-qty__btn" data-gs-decrease="' + escapeHTML(item.id) + '" aria-label="Decrease quantity">−</button>' +
                '<span class="gs-qty__val">' + item.quantity + "</span>" +
                '<button type="button" class="gs-qty__btn" data-gs-increase="' + escapeHTML(item.id) + '" aria-label="Increase quantity">+</button>' +
              "</div>" +
              '<div class="gs-cart-item__subtotal">' + formatMoney(lineTotal) + "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    document.querySelectorAll("[data-gs-summary-qty]").forEach((el) => (el.textContent = totalQuantity));
    document.querySelectorAll("[data-gs-summary-subtotal]").forEach((el) => (el.textContent = formatMoney(subtotal)));
    document.querySelectorAll("[data-gs-summary-delivery]").forEach(
      (el) => (el.textContent = deliveryCharge === 0 ? "Free" : formatMoney(deliveryCharge))
    );
    document.querySelectorAll("[data-gs-summary-total]").forEach((el) => (el.textContent = formatMoney(grandTotal)));

    updateCartCount();
  }

  /* ---------------------------------------------------------------------
     Event delegation for the cart page controls
     ------------------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    const inc = e.target.closest("[data-gs-increase]");
    const dec = e.target.closest("[data-gs-decrease]");
    const rem = e.target.closest("[data-gs-remove]");

    if (inc) increaseQuantity(inc.getAttribute("data-gs-increase"));
    if (dec) decreaseQuantity(dec.getAttribute("data-gs-decrease"));
    if (rem) removeFromCart(rem.getAttribute("data-gs-remove"));
  });

  document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    renderCart();
  });

  /* ---------------------------------------------------------------------
     Dev helper — not called automatically. Handy for reviewing the cart
     page in isolation before Member 2's "Add to Cart" buttons exist.
     Run GSCart.seedDemoCart() from the console.
     ------------------------------------------------------------------- */
  function seedDemoCart() {
    const demo = [
      { id: "gft-101", name: "Rose Gold Wish Jar", price: 899, image: "" },
      { id: "gft-102", name: "Velvet Ribbon Hamper", price: 1499, image: "" },
      { id: "gft-103", name: "Personalised Photo Mug", price: 449, image: "" },
    ];
    demo.forEach((p) => addToCart(p, 1));
    renderCart();
  }

  window.GSCart = {
    getCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    clearCart,
    calculateCartTotal,
    updateCartCount,
    renderCart,
    formatMoney,
    seedDemoCart,
  };
})();
