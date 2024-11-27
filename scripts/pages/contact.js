export default function renderContact() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Contact Us</h1>
        <p>Feel free to get in touch!</p>
    `;
  return container;
}
