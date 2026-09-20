// Holds every trend shown on the page so buttons can find it by number
const cardData = [];

function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("active");
  }
}

// Makes typed text safe to show inside HTML
function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char];
  });
}

function makeCard(trend, buttonText) {
  const id = cardData.push(trend) - 1;

  return `
    <div class="trend-card">
      <h3>${escapeHTML(trend.name)}</h3>
      <p><strong>Category:</strong> ${escapeHTML(trend.category)}</p>
      <p>${escapeHTML(trend.description)}</p>
      <button onclick="showOpportunity(${id})">${buttonText}</button>
    </div>
  `;
}

// Used when nothing in the list matches what was typed
function buildGenericTrend(topic) {
  const title = topic.charAt(0).toUpperCase() + topic.slice(1);

  return {
    name: title,
    category: "Your topic",
    description: "No ready-made trend for this topic yet, but you can still turn it into something.",
    opportunity:
      "Pick one specific angle on " + topic + ", share short posts or videos about it, " +
      "then sell a guide, template or service to the people who follow you."
  };
}

function findMatches(query) {
  // First try the whole phrase
  let matches = trends.filter(function (trend) {
    return (
      trend.name.toLowerCase().includes(query) ||
      trend.category.toLowerCase().includes(query) ||
      trend.description.toLowerCase().includes(query)
    );
  });

  if (matches.length > 0) {
    return matches;
  }

  // Then try each word on its own
  const words = query.split(/\s+/).filter(function (word) {
    return word.length > 2;
  });

  return trends.filter(function (trend) {
    const text = (trend.name + " " + trend.category + " " + trend.description).toLowerCase();

    return words.some(function (word) {
      return text.includes(word);
    });
  });
}

function searchTrend() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");

  const rawQuery = input.value.trim();
  const query = rawQuery.toLowerCase();

  if (!query) {
    result.textContent = "Enter a trend to search.";
    return;
  }

  const matches = findMatches(query);

  if (matches.length === 0) {
    const generic = buildGenericTrend(rawQuery);

    result.innerHTML =
      "<p>No exact trend found, so here is an idea for your topic:</p><br>" +
      makeCard(generic, "💰 Monetize This");
    return;
  }

  result.innerHTML = matches.map(function (trend) {
    return makeCard(trend, "💰 Monetize This");
  }).join("");
}

function showOpportunity(id) {
  const trend = cardData[id];
  const opportunity = document.getElementById("opportunity");

  if (!trend || !opportunity) {
    return;
  }

  const idea =
    trend.opportunity ||
    "Create content, services or digital products around this trend.";

  opportunity.innerHTML = `
    <h3>${escapeHTML(trend.name)}</h3>
    <p>${escapeHTML(trend.description)}</p>
    <br>
    <p><strong>Opportunity:</strong> ${escapeHTML(idea)}</p>
  `;

  opportunity.scrollIntoView({ behavior: "smooth" });
}

function displayTrends() {
  const container = document.getElementById("trendContainer");

  if (!container) {
    return;
  }

  container.innerHTML = trends.map(function (trend) {
    return makeCard(trend, "💰 Explore");
  }).join("");
}

displayTrends();

// Let people press Enter to search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchTrend();
    }
  });
}
