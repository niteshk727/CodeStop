async function loadQuestion(questionNumber) {
    const questionContainer = document.getElementById('question-content');
    const solutionCode = document.getElementById('solution-code');
    const questionTitle = document.getElementById('question-title');
    
    // Update question title
    questionTitle.textContent = `Question ${questionNumber}`;
    
    try {
        // Fetch the markdown question file
        const questionResponse = await fetch(`JavaCodingQuestions/Split Array into the Subsets/Split Array into the Subsets.md`);
        const questionText = await questionResponse.text();

        // Render markdown as HTML
        questionContainer.innerHTML = marked(questionText);

        // Fetch the solution Java file
        const solutionResponse = await fetch(`JavaCodingQuestions/Split Array into the Subsets/Solution.java`);
        const solutionText = await solutionResponse.text();
        
        // Display the solution code
        solutionCode.textContent = solutionText;
    } catch (error) {
        console.error("Error loading question or solution:", error);
        questionContainer.innerHTML = "<p>Could not load the question. Please try again later.</p>";
        solutionCode.textContent = "";
    }
}
