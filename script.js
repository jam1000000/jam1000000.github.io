const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const filters = document.querySelectorAll(".filter");

function filterCards(tag) {
  cards.forEach(card => {
    const tags = card.dataset.tags;

    if (tag === "all" || tags.includes(tag)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* FILTER BUTTONS */
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    filterCards(btn.dataset.filter);
  });
});

/* SEARCH */
search.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? "block" : "none";
  });
});

/* CLOCK */
function updateClock() {
  const el = document.getElementById("clock");
  const now = new Date();

  el.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateClock();
setInterval(updateClock, 1000);