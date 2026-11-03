// AgriCycle Professional — script.js

// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(opened));
  menuBtn.textContent = opened ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Educational sample crop sequences.
// These are examples for learning, not location-specific recommendations.
const plans = {
  rice: {
    crops: ["🌾 Rice", "🫘 Green gram", "🌽 Maize", "🥜 Groundnut"],
    note: "Illustrative sequence only. Check seasonal suitability, water needs and local crop guidance."
  },
  maize: {
    crops: ["🌽 Maize", "🫘 Cowpea", "🌾 Sorghum", "🌱 Green gram"],
    note: "Example cereal-legume sequence. Adapt the crops to local rainfall, soil and planting windows."
  },
  wheat: {
    crops: ["🌾 Wheat", "🫘 Chickpea", "🌻 Sesame", "🌱 Green manure"],
    note: "Sample sequence only. Crop choice and planting periods vary by region and season."
  },
  groundnut: {
    crops: ["🥜 Groundnut", "🌾 Sorghum", "🫘 Green gram", "🌽 Maize"],
    note: "Educational example. Consider soil type, rainfall, irrigation and pest history before choosing a rotation."
  },
  pulses: {
    crops: ["🫘 Green gram", "🌾 Rice", "🌻 Sesame", "🌽 Maize"],
    note: "Illustrative legume-based sequence. Confirm that the next crop matches local growing conditions."
  }
};

const cropSelect = document.getElementById("cropSelect");
const makePlan = document.getElementById("makePlan");
const seasonList = document.getElementById("seasonList");
const planNote = document.getElementById("planNote");

function displayPlan() {
  const plan = plans[cropSelect.value];

  seasonList.innerHTML = plan.crops.map((crop, index) => `
    <div class="season">
      <span>SEASON 0${index + 1}</span>
      <strong>${crop}</strong>
    </div>
  `).join("");

  planNote.textContent = plan.note;
}

makePlan.addEventListener("click", displayPlan);
cropSelect.addEventListener("change", displayPlan);

// Contact form front-end demonstration.
// This validates input but does not send messages to a server.
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formFeedback.textContent = "Thank you! The demo form is working. Connect a form service or backend to receive messages.";
  formFeedback.style.color = "#347d4e";
  contactForm.reset();
});

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
