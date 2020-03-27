# Magic link + HTTPS POC

Got magic link to work(FINALLY OMG)

Can use the token and credentials in the file for demo if you guys want to

If not, 
1. do step 1 in this link:
[https://developers.google.com/gmail/api/quickstart/nodejs](https://developers.google.com/gmail/api/quickstart/nodejs)
2. Download credentials.json and save it to anywhere you would want to use it
3. Run tokenCreator.json to generate the token again




## Important files to take note of:

* cookieMonster.js
* email.js
* app.js
* token.json
* credentials.json
* tokenCreator.json
* sql.js (to a certain extent)
* welcomeController.js (to a certain extent)

## Dependancies (the really important ones for magic link to work)

* "api": "0.0.1",
* "body-parser": "^1.19.0",
* "cookie-parser": "^1.4.4",
* "express": "^4.17.1",
* "express-jwt": "^5.3.1",
* "googleapis": "^48.0.0",
* "js-base64": "^2.5.2",
* "jsonwebtoken": "^8.5.1",
* "mysql": "^2.18.1",

run 
```
    npm install
```
to install everything needed 

## TO-LIST 
* use ECDSA for cookies(using HMAC for now)
