const https = require('https');
 
_EXTERNAL_URL = 'https://lrv-tesp.c9users.io/api/users';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
       // return callback(data);
       console.log("done");
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;