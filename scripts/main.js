document.addEventListener('DOMContentLoaded', async () => {

    // Load the Java Question
    const codingQuestion = await fetch('JavaCodingQuestions/Split Array into the Subsets/Split Array into the Subsets.md');
    const codeText = await codingQuestion.text();
    document.getElementById('questions-container').innerText = codeText;

    // Load the Java solution
    const solutionResponse = await fetch('JavaCodingQuestions/Split Array into the Subsets/Solution.java');
    const solutionText = await solutionResponse.text();
    document.getElementById('java-solution').innerText = solutionText;
});

