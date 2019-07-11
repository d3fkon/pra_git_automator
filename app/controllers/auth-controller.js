const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/login', async (req, res) => {});
router.post('/signup', async (req, res) => {})

/**
 * Endpoint to get the OAuth Token from the redirect URL
 * Redirection Handler from GitHub. Query String must contain 'code' and 'state'
 */
router.get('/oauth', async (req, res) => {
    const response = await axios.post('https://github.com/login/oauth/access_token',{
        'client_id': process.env.GITHUB_CLIENT_ID,
        'client_secret': process.env.GITHUB_CLIENT_SECRET,
        'code': req.query['code'],
        'state': req.query['state']
    });
    //TODO: Store the oauth token in the database using the following userID
    const userID = req.query['state'];


    res.send(response.data.split('=')[1].split('&')[0]);
});

module.exports = router;