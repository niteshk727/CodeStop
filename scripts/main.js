// Load and display the Markdown file
fetch('JavaCodingQuestions/Split Array into the Subsets.md')  // Update the path to the Markdown file
    .then(response => response.text())
    .then(markdown => {
        const html = marked(markdown);
        document.getElementById('markdown-content').innerHTML = html;
    })
    .catch(error => console.error('Error loading Markdown file:', error));
