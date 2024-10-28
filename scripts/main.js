fetch("\JavaCodingQuestions\Split Array into the Subsets.md").then(response => response.text())
.then(markdown => {
    document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
});