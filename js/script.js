// Mood quiz: show a result without refreshing the page.
const quiz = document.querySelector("#mood-quiz");
if (quiz) {
  const results = {
    dark: ["A World of Shadows", "Explore gothic fiction, haunted settings, old architecture, and stories filled with secrets."],
    magic: ["A World of Wonder", "Explore fantasy worlds, strange creatures, hidden kingdoms, and journeys into the unknown."],
    romance: ["A World of Feeling", "Explore stories about connection, longing, complicated relationships, and emotional journeys."],
    strange: ["A World Beyond Reality", "Explore surreal fiction, unusual realities, and stories that challenge perception."]
  };
  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const choice = quiz.querySelector('input[name="mood"]:checked');
    const output = document.querySelector("#quiz-result");
    if (!choice || !output) return;
    const [heading, description] = results[choice.value];
    output.innerHTML = `<h3>${heading}</h3><p>${description}</p>`;
    output.hidden = false;
  });
}

// FAQ accordion: expand or collapse the answer when its button is selected.
document.querySelectorAll(".accordion-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
    button.querySelector("span").textContent = expanded ? "+" : "−";
  });
});