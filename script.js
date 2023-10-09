document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');
    const preview = document.getElementById('preview');

    generateButton.addEventListener('click', function () {
        const text = inputText.value;
        const html = `<div class="output">${text}</div>`;
        preview.innerHTML = html;
    });

    clearButton.addEventListener('click', function () {
        inputText.value = '';
        preview.innerHTML = '';
    });
});
