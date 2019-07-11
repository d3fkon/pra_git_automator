const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const result = dotEnv.config()

if (result.error) {
    throw result.error
}

/**
 * Controller and Router Imports 
 */
const authController = require('./app/controllers/auth-controller');
const repoController = require('./app/controllers/repo-controller');

/** 
 *  Constant Declarations
 * */
const PORT = 3030;
const app = express();

/**
 * Endpoint Handling
 */
app.use(bodyParser.json());
app.use('/auth', authController);
app.use('/repo', repoController);



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})