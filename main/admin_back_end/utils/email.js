// Importing libs used
const fs = require('fs');
const {google} = require('googleapis');
const googleAuth = require('google-auth-library');
const Base64 = require('js-base64').Base64;

// important details for email to work
const credentials = JSON.parse(fs.readFileSync(__dirname + "/../creds/google/credentials.json"));
const token = fs.readFileSync(__dirname + "/../creds/google/token.json");

function authorize(){
    // generate oauth details for email
    const clientSecret = credentials.installed.client_secret;
    const clientId = credentials.installed.client_id;
    const redirectUrl = credentials.installed.redirect_uris[0];
    const oauth2Client = new googleAuth.OAuth2Client(clientId,clientSecret,redirectUrl);
    oauth2Client.credentials = JSON.parse(token);
    return oauth2Client;
}

function createEmail(to,link){
    // create MIME email messages compliant with RFC 2822
    let email = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "to: ", to, "\n",
    "from: reallydumb555@gmail.com\n",
    "subject:Login link,\n\n",
    "You have requested to login! Here is your link:\n" + link +"\n(The link will expire in 5 mins)"
  ].join('');

  return Base64.encodeURI(email);
}

module.exports = {
    /**
     * @param {string} to user's email
     * @param {string} link for user
     * @param {function(Error)} callback function to execute after sending mail
     */
    send(to, link){
        return new Promise((resolve, reject) => {
            let oauth2Client = authorize();
            let email = createEmail(to,link);
            const gmail = google.gmail({version:'v1',auth:oauth2Client});
            gmail.users.messages.send({
                userId:"me",
                "resource":{
                    "raw":email
                }
            
            })
            .catch(
                function(err){
                    // Catch the err in sending emails
                    reject(err);
                }
            );
            // If the email is successfully sent
            resolve(true);
        });
    },
};




