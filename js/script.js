// Simple reading suggestion buttons
var choices = document.querySelectorAll(".choice");
var result = document.getElementById("quiz-result");

choices.forEach(function(button) {
    button.addEventListener("click", function() {
        var type = button.getAttribute("data-result");

        if (type === "fantasy") {
            result.textContent = "Try a fantasy story filled with magic, myths, and new worlds.";
        } else if (type === "mystery") {
            result.textContent = "Try a mystery with hidden clues, secrets, and unexpected turns.";
        } else if (type === "romance") {
            result.textContent = "Try a romance focused on relationships, emotion, and connection.";
        }
    });
});

// Simple FAQ accordion
var questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {
    question.addEventListener("click", function() {
        var item = question.parentElement;
        item.classList.toggle("open");

        var symbol = question.querySelector("span");
        if (item.classList.contains("open")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }
    });
});
