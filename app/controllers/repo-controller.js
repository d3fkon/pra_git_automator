const express = require('express');
const router = express.Router();
const Octokit = require('@octokit/rest');


/**
 * AUTHENTICATED
 * Crates a new repository
 * 
 * req.body - 
 *  repo name as 'repo'
 */
router.get('/new', async (req, res) => {
    // const { repo } = req.body;
    // const { token } = req.headers;
    
    // TODO: make a database call to fetch the OAuth token from the server
    const OAuth = process.env.OAUTH;
    const repositoryName = 'MyNewRepox';
    const clientWithAuth = new Octokit({
        auth: OAuth
    });
    try {

        const creationResponse = await clientWithAuth.repos.createForAuthenticatedUser({
            name: repositoryName
        });

        console.log(creationResponse);
        res.send("Lesseee")
    }
    catch (e) {
        res.send("Repo creation failed")
    }
});

/**
 * AUTHENTICATED
 * Adds new files to the Repository
 * 
 * req.body - 
 *  repo name as 'repo'
 *  file name as 'path'
 */
// TODO: Make the request POST to get data from the client
router.get('/add', async (req, res) => {
    // const { repo, path } = req.body;
    // const { token } = req.headers;

    //TODO: Fetch username from DB as the owner
    const owner = 'd3fkon';
    const repo = 'MyNewRepoZ';
    const branch = 'master';
    const path = 'yoo/fileName.js';
    const message = '';
    const content = '';

    const OAuth = process.env.OAUTH;

    const clientWithAuth = new Octokit({
        auth: OAuth
    });
    try {

        const creationResponse = await clientWithAuth.repos.createOrUpdateFile({
            owner,
            repo,
            path,
            message,
            content,
            branch
        });
        console.log(creationResponse);
        res.send({
            success: true,
        });
    }
    catch (e) {
        console.log('ERRRR => ' + e.toString())
        res.send({
            success: false,
            error: 'Error Creating Repository'
        })
    }
})

module.exports = router;