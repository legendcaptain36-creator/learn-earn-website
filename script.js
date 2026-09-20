// Holds every trend shown on the page so buttons can find it by number
const cardData = [];

const stopWords = ["how", "the", "and", "for", "can", "what", "with", "want", "learn", "from", "get", "you", "are", "who", "was", "any", "to", "do", "in", "of", "on", "is", "it", "me", "my", "an", "at", "a", "i"];

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

function listHTML(tag, items) {
  return "<" + tag + ">" + items.map(function (item) {
    return "<li>" + escapeHTML(item) + "</li>";
  }).join("") + "</" + tag + ">";
}

// Guide used when a trend has no detailed guide of its own
function buildGenericGuide(trend) {
  const topic = trend.name.toLowerCase();

  return {
    overview: trend.description,
    steps: [
      "Choose one specific angle on " + topic + " and one type of person you want to help.",
      "Research 5 people or businesses already doing this. Note what they do well and what is missing.",
      "Create a simple first version: a series of posts, a small product, or a service offer.",
      "Share it with real people, such as friends, online communities and social media, and collect feedback.",
      "Improve it, then add a way to earn: sell a product, offer a service, add affiliate links, or take sponsors."
    ],
    earn: [
      "Sell a product or service related to " + topic,
      "Affiliate commissions for tools you use and trust",
      "Sponsorships once you have an audience",
      "Teach what you learn as a guide or short course"
    ],
    tools: "A phone or laptop, a free Canva account, and a free social media or store profile.",
    mistakes: [
      "Trying to serve everyone instead of one group",
      "Spending money before testing that people want it",
      "Giving up before you have tried for at least a few weeks"
    ]
  };
}

// Builds the full detailed guide for one trend
function guideHTML(trend) {
  const guide = trend.guide || buildGenericGuide(trend);

  let html = '<div class="guide">';
  html += "<h3>" + escapeHTML(trend.name) + "</h3>";
  html += '<p class="guide-tag">' + escapeHTML(trend.category) + "</p>";
  html += "<p>" + escapeHTML(guide.overview) + "</p>";

  if (trend.opportunity) {
    html += "<h4>💡 Best starting idea</h4>";
    html += "<p>" + escapeHTML(trend.opportunity) + "</p>";
  }

  html += "<h4>🪜 Step by step</h4>" + listHTML("ol", guide.steps);
  html += "<h4>💰 Ways to earn</h4>" + listHTML("ul", guide.earn);
  html += "<h4>🧰 What you need</h4><p>" + escapeHTML(guide.tools) + "</p>";
  html += "<h4>⚠️ Mistakes to avoid</h4>" + listHTML("ul", guide.mistakes);
  html += '<p class="guide-note">Results vary. Most people need weeks or months of steady effort before they earn, and nothing here is guaranteed.</p>';
  html += "</div>";

  return html;
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
  const clean = topic.slice(0, 60);
  const title = clean.charAt(0).toUpperCase() + clean.slice(1);

  return {
    name: title,
    category: "Your topic",
    description: "There is no ready-made trend for this topic yet, but you can still turn it into something.",
    opportunity: "Pick one specific angle on " + clean + ", share short posts or videos about it, then sell a guide, template or service to the people who follow you."
  };
}

// Short words such as "ai" must match a whole word; longer words can match part of a word
function contains(text, term) {
  const terms = [term];

  if (term.length > 3 && term.endsWith("s")) {
    terms.push(term.slice(0, -1));
  }

  return terms.some(function (t) {
    if (t.length <= 3) {
      const safe = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp("\\b" + safe + "\\b").test(text);
    }

    return text.includes(t);
  });
}

function scoreTrend(trend, query, words) {
  const name = trend.name.toLowerCase();
  const category = trend.category.toLowerCase();
  const description = trend.description.toLowerCase();
  let score = 0;

  if (contains(name, query)) score += 10;
  if (contains(category, query)) score += 6;
  if (contains(description, query)) score += 3;

  words.forEach(function (word) {
    if (contains(name, word)) score += 3;
    if (contains(category, word)) score += 2;
    if (contains(description, word)) score += 1;
  });

  return score;
}

// Returns matching trends, best match first
function findMatches(query) {
  const words = query.split(/\s+/).filter(function (word) {
    return word.length >= 2 && !stopWords.includes(word);
  });

  return trends
    .map(function (trend) {
      return { trend: trend, score: scoreTrend(trend, query, words) };
    })
    .filter(function (item) {
      return item.score > 0;
    })
    .sort(function (a, b) {
      return b.score - a.score;
    })
    .map(function (item) {
      return item.trend;
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
    result.innerHTML =
      "<p>No exact trend found, so here is a starter guide for your topic:</p><br>" +
      guideHTML(buildGenericTrend(rawQuery));
    return;
  }

  const rest = matches.slice(1, 7);
  let html = guideHTML(matches[0]);

  if (rest.length > 0) {
    html += '<h3 class="more-title">More ideas for you</h3>';
    html += rest.map(function (trend) {
      return makeCard(trend, "📖 View full guide");
    }).join("");
  }

  result.innerHTML = html;
}

function showOpportunity(id) {
  const trend = cardData[id];
  const opportunity = document.getElementById("opportunity");

  if (!trend || !opportunity) {
    return;
  }

  opportunity.innerHTML = guideHTML(trend);
  opportunity.scrollIntoView({ behavior: "smooth" });
}

function displayTrends() {
  const container = document.getElementById("trendContainer");

  if (!container) {
    return;
  }

  container.innerHTML = trends.map(function (trend) {
    return makeCard(trend, "📖 View full guide");
  }).join("");
}

// Styles for the guide boxes
const guideStyle = document.createElement("style");
guideStyle.textContent = `
  .guide { text-align: left; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
  #opportunity .guide { padding: 0; box-shadow: none; }
  .guide h3 { font-size: 24px; margin-bottom: 4px; }
  .guide h4 { margin: 22px 0 8px; font-size: 18px; }
  .guide-tag { color: #2563eb; font-weight: 600; margin-bottom: 12px; }
  .guide ol, .guide ul { padding-left: 22px; }
  .guide li { margin-bottom: 8px; }
  .guide-note { margin-top: 22px; font-size: 14px; color: #555; }
  .more-title { text-align: center; margin: 32px 0 16px; }
  #searchResult .trend-card { text-align: left; margin-bottom: 16px; }
`;
document.head.appendChild(guideStyle);

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
