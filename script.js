const facts = [
    "I am 20 years old and enjoy exploring the beauty of mountains.",
    "I have a passion for outdoor adventures and love spending time in nature.",
    "I am enthusiastic about hiking and aim to visit various mountain ranges.",
    "I find peace and inspiration in the tranquility of mountainous landscapes.",
    "I am eager to learn more about the flora and fauna found in mountain regions."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
