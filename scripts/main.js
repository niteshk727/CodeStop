// Array of question file names with descriptive titles
const questions = [
    { title: "Split Array into the Subsets", filename: "Split Array into the Subsets.md" },
    { title: "Factorial of a Number", filename: "Factorial of a Number.md" }
    // Add more questions here as needed
];

// Initialize questions list on page load
document.addEventListener("DOMContentLoaded", () => {
    const questionsList = document.getElementById("questions-list");

    questions.forEach((question, index) => {
        // Create a list item for each question
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${question.title}`;
        listItem.onclick = () => loadQuestion(question.filename, question.title);

        // Add list item to the questions list
        questionsList.appendChild(listItem);
    });
});

// Load a question and its solution dynamically based on filename
async function loadQuestion(filename, title) {
    const questionContainer = document.getElementById("question-content");
    const solutionCode = document.getElementById("solution-code");
    const questionTitle = document.getElementById("question-title");

    // Update question title
    questionTitle.textContent = title;

    try {
        // Fetch the markdown question file
        const questionResponse = await fetch(`JavaCodingQuestions/${filename.replace(".md", "")}/${filename}`);
        const questionText = await questionResponse.text();

        // Render markdown as HTML
        questionContainer.innerHTML = marked(questionText);

        // Fetch the solution Java file (assuming same base name as question)
        const solutionResponse = await fetch(`JavaCodingQuestions/${filename.replace(".md", "")}/Solution.java`);
        const solutionText = await solutionResponse.text();

        // Display the solution code
        solutionCode.textContent = solutionText;
        hljs.highlightBlock(solutionCode);  // Syntax highlighting if using Highlight.js
    } catch (error) {
        console.error("Error loading question or solution:", error);
        questionContainer.innerHTML = "<p>Could not load the question. Please try again later.</p>";
        solutionCode.textContent = "";
    }
}
