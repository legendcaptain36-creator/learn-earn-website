// Mobile menu
function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("active");
  }
}

// Search trends
function searchTrend() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");

  if (!input || !result) {
    return;
  }

  const query = input.value.trim().toLowerCase();

  if (!query) {
    result.textContent = "Enter a trend to search.";
    return;
  }

  // Make sure trends.js has loaded
  if (typeof trends === "undefined") {
    result.textContent = "Trend data is loading. Please try again.";
    return;
  }

  const matches = trends.filter(function (trend) {
    return (
      trend.name.toLowerCase().includes(query) ||
      trend.category.toLowerCase().includes(query)
    );
  });

  if (matches.length === 0) {
    result.textContent = "No matching trend yet.";
    return;
  }

  result.innerHTML = matches
    .map(function (trend) {
      return `
        <div class="trend-result">
          <h3>${trend.name}</h3>
          <p><strong>Category:</strong> ${trend.category}</p>
          <p>${trend.description}</p>
        </div>
      `;
    })
    .join("");
}

// Show business opportunity
function showOpportunity(name, description) {
  const opportunity = document.getElementById("opportunity");

  if (!opportunity) {
    return;
  }

  opportunity.innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
  `;

  opportunity.style.display = "block";
}
