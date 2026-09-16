/* =========================================================================
   AUTH.JS — Member 3
   Demo authentication backed entirely by localStorage. No backend calls.

   localStorage keys used:
     - "users"        : JSON array of { fullName, email, phone, password }
     - "currentUser"  : JSON object of the logged-in user (no password)
     - "isLoggedIn"   : "true" | "false"

   Public API (attached to window.GSAuth so other pages/scripts can use it):
     GSAuth.getUsers()
     GSAuth.register({ fullName, email, phone, password })  -> { ok, error }
     GSAuth.login(email, password, remember)                -> { ok, error }
     GSAuth.logout()
     GSAuth.getCurrentUser()
     GSAuth.isLoggedIn()
     GSAuth.requireAuth(redirectTo)  -> redirects to login.html if not logged in
     GSAuth.renderNavAuthUI()        -> syncs the temporary navbar auth area
   ========================================================================= */
(function () {
  "use strict";

  const USERS_KEY = "users";
  const CURRENT_USER_KEY = "currentUser";
  const LOGGED_IN_KEY = "isLoggedIn";

  /* ---------------------------------------------------------------------
     Storage helpers
     ------------------------------------------------------------------- */
  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.error("GSAuth: failed to parse", key, e);
      return fallback;
    }
  }

  function getUsers() {
    return readJSON(USERS_KEY, []);
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getCurrentUser() {
    return readJSON(CURRENT_USER_KEY, null);
  }

  function isLoggedIn() {
    return localStorage.getItem(LOGGED_IN_KEY) === "true" && !!getCurrentUser();
  }

  /* ---------------------------------------------------------------------
     Validation helpers
     ------------------------------------------------------------------- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ""));
  }

  /* ---------------------------------------------------------------------
     Register
     ------------------------------------------------------------------- */
  function register({ fullName, email, phone, password }) {
    fullName = (fullName || "").trim();
    email = (email || "").trim().toLowerCase();
    phone = (phone || "").trim();

    if (!fullName || !email || !phone || !password) {
      return { ok: false, error: "Please fill in every field." };
    }
    if (fullName.length < 2) {
      return { ok: false, error: "Enter your full name." };
    }
    if (!isValidEmail(email)) {
      return { ok: false, error: "Enter a valid email address." };
    }
    if (!isValidPhone(phone)) {
      return { ok: false, error: "Enter a valid 10-digit phone number." };
    }
    if (password.length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }

    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      return { ok: false, error: "An account with this email already exists." };
    }

    users.push({ fullName, email, phone, password });
    saveUsers(users);
    return { ok: true };
  }

  /* ---------------------------------------------------------------------
     Login
     ------------------------------------------------------------------- */
  function login(email, password, remember) {
    email = (email || "").trim().toLowerCase();

    if (!email || !password) {
      return { ok: false, error: "Enter your email and password." };
    }

    const users = getUsers();
    const user = users.find((u) => u.email === email);

    if (!user || user.password !== password) {
      return { ok: false, error: "Incorrect email or password." };
    }

    const sessionUser = {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
    localStorage.setItem(LOGGED_IN_KEY, "true");
    localStorage.setItem("rememberMe", remember ? "true" : "false");

    return { ok: true, user: sessionUser };
  }

  /* ---------------------------------------------------------------------
     Logout
     ------------------------------------------------------------------- */
  function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.setItem(LOGGED_IN_KEY, "false");
    renderNavAuthUI();
    window.location.href = "login.html";
  }

  /* ---------------------------------------------------------------------
     Route guard — call at top of checkout page (and anywhere else that
     needs a logged-in user).
     ------------------------------------------------------------------- */
  function requireAuth(redirectTo) {
    if (!isLoggedIn()) {
      const next = redirectTo || window.location.pathname.split("/").pop();
      window.location.href = "login.html?redirect=" + encodeURIComponent(next);
      return false;
    }
    return true;
  }

  /* ---------------------------------------------------------------------
     Temporary navbar sync (auth area). Member 1's real navbar can call
     the same GSAuth.isLoggedIn() / GSAuth.getCurrentUser() helpers once
     merged, so this rendering function is safe to drop.
     ------------------------------------------------------------------- */
  function renderNavAuthUI() {
    const slot = document.querySelector("[data-gs-nav-auth]");
    if (!slot) return;

    if (isLoggedIn()) {
      const user = getCurrentUser();
      const firstName = (user.fullName || "").split(" ")[0] || "Account";
      slot.innerHTML =
        '<div class="gs-nav__user">' +
        '<span class="gs-nav__user-name">Hi, ' + escapeHTML(firstName) + "</span>" +
        '<button type="button" class="gs-nav__logout" data-gs-logout-btn>Logout</button>' +
        "</div>";

      const logoutBtn = slot.querySelector("[data-gs-logout-btn]");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
      }
    } else {
      slot.innerHTML =
        '<div class="gs-nav__auth-links">' +
        '<a href="login.html">Login</a>' +
        '<a href="register.html">Register</a>' +
        "</div>";
    }
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------------------------------------------------------------
     Expose public API
     ------------------------------------------------------------------- */
  window.GSAuth = {
    getUsers,
    register,
    login,
    logout,
    getCurrentUser,
    isLoggedIn,
    requireAuth,
    renderNavAuthUI,
  };

  document.addEventListener("DOMContentLoaded", renderNavAuthUI);
})();
