const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/github/userinfo/:user', async function(req, res){ 
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': ''
        },
        OAUth: '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'
    }
    https.get(options, function(apiResponse){
        apiResponse.pipe(res)
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Oops! Something went wrong!');
    })
});

module.exports = router;