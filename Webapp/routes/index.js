const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send(`
<link rel="stylesheet" href="css/style.css">
<h1>Welcome</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px">
        <p>Roux Academy Meetups put together artists from all walks of life</p>
            <script src="/reload/reload.js"></script>`);
});

module.exports = router;