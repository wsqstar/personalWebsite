const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the markdown content
app.get('/markdown', (req, res) => {
    fs.readFile(path.join(__dirname, 'content.md'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading markdown file');
        }
        res.send(data);
    });
});

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
