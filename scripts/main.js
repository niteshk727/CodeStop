// Function to fetch and display the markdown content
async function loadMarkdown() {
    const response = await fetch('JavaCodingQuestions/Split Array into the Subsets/Split Array into the Subsets.md'); // Adjust the path as necessary
    const markdownText = await response.text();
    
    // Convert Markdown to HTML
    const htmlContent = marked(markdownText); // You need to include the marked library in your HTML
    document.getElementById('questions-container').innerHTML = htmlContent;
}

// Call the function to load markdown on page load
window.onload = () => {
    loadMarkdown();
};

// Example trigger (you can modify this according to how you display questions)
document.getElementById('questions-container').addEventListener('click', loadJavaSolution);

document.addEventListener('DOMContentLoaded', async () => {

    // Load the Java solution
    const solutionResponse = await fetch('solutions/solution.java');
    const solutionText = await solutionResponse.text();
    document.getElementById('java-solution').innerText = solutionText;
});

