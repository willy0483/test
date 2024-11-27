export default function renderHome() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
    `;
  return container;
}
