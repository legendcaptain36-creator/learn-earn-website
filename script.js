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
      trend.category.toLowerCase().includes(query) ||
      trend.description.toLowerCase().includes(query)
    );
  });

  if (matches.length === 0) {
    result.textContent = "No matching trend yet.";
    return;
  }

  result.innerHTML = matches.map(function (trend) {
    return `
      <div class="trend-card">
