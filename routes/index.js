const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('/ route hit!');
});

router.post('/post', (req, res) => {
    res.send(`body received: ${req.body}`);
});

module.exports = router;