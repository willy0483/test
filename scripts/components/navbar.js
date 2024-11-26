export default function renderNavbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `
      <a href="/" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/contact" data-link>Contact</a>
      <a href="/card" data-link>Card</a> <!-- New link -->
  `;
  return navbar;
}
