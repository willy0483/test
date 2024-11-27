import { initRouter } from "./router.js";
import renderNavbar from "./components/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  document.body.insertBefore(renderNavbar(), app); // Add navbar before app container
  initRouter(); // Start the router
});
