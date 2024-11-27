export default function renderAbout() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>About Us</h1>
        <p>This is the about page content.</p>
    `;
  return container;
}
