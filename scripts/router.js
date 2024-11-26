import renderHome from "./pages/home.js";
import renderAbout from "./pages/about.js";
import renderContact from "./pages/contact.js";
import renderCardPage from "./pages/card.js"; // Import the card page

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/contact": renderContact,
  "/card": renderCardPage, // Add the card route
};

export function navigateTo(path) {
  const root = document.getElementById("app");
  root.innerHTML = "";
  const renderPage = routes[path];
  if (renderPage) {
    root.appendChild(renderPage());
  } else {
    root.innerHTML = "<h1>404 - Page Not Found</h1>";
  }
}

export function initRouter() {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      const path = e.target.getAttribute("href");
      window.history.pushState({}, "", path);
      navigateTo(path);
    }
  });

  window.addEventListener("popstate", () =>
    navigateTo(window.location.pathname)
  );
  navigateTo(window.location.pathname);
}
