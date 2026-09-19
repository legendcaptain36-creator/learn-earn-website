function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("active");
  }
}

function searchTrend() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");

  const query = input.value.trim().toLowerCase();

  if (!query) {
    result.textContent = "Enter a trend to search.";
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

  result.innerHTML = matches.map(function (trend) {
    return `
      <div class="trend-card">
        <h3>${trend.name}</h3>
        <p><strong>Category:</strong> ${trend.category}</p>
        <p>${trend.description}</p>
        <button onclick="showOpportunity('${trend.name}', '${trend.description}')">
          💰 Monetize This
        </button>
      </div>
    `;
  }).join("");
}

function showOpportunity(name, description) {
  const opportunity = document.getElementById("opportunity");

  opportunity.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <br>
    <p><strong>Opportunity:</strong> Create content, services or digital products around this trend.</p>
  `;
}

function displayTrends() {
  const container = document.getElementById("trendContainer");

  if (!container) {
    return;
  }

  container.innerHTML = trends.map(function (trend) {
    return `
      <div class="trend-card">
        <h3>${trend.name}</h3>
        <p>${trend.category}</p>
        <p>${trend.description}</p>
        <button onclick="showOpportunity('${trend.name}', '${trend.description}')">
          💰 Explore
        </button>
      </div>
    `;
  }).join("");
}

displayTrends();
