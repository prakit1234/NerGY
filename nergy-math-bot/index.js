const express = require('express');
const math = require('mathjs');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(express.json());

// Endpoint to handle math evaluation
app.post('/evaluate', (req, res) => {
    const { expression } = req.body;
    try {
        const result = math.evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.json({ error: 'Invalid expression. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
