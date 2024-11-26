export default function renderCardPage() {
  const container = document.createElement("div");
  container.className = "card-page";

  // Create the card element
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Card Image" class="card-image" />
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">This is a description of the card. You can add more content here.</p>
        <button class="card-button">Learn More</button>
    `;

  container.appendChild(card);
  return container;
}
