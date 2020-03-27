// @ts-nocheck
// array in local storage for registered users
// let users = JSON.parse(localStorage.getItem("users")) || [];
// let events = JSON.parse(localStorage.getItem("events")) || [];
let users = require("../users.json") || [];
let events = require("../events.json") || [];
let signups = require("../signups.json") || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          // get parameters from post request
          let params = JSON.parse(opts.body);

          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email
            );
          });

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              user_id: user.user_id,
              email: user.email,
              fullname: user.fullname,
              token: "fake-jwt-token"
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            // else return error
            reject("You have entered a wrong email. Please try again.");
          }

          return;
        }

        // get users
        if (url.endsWith("/users") && opts.method === "GET") {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === "GET") {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            // find user by id in users array
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedUsers = users.filter(user => {
              return user.user_id === id;
            });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            resolve({ ok: true, text: () => JSON.stringify(user) });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        // register user
        if (url.endsWith("/users/register") && opts.method === "POST") {
          // get new user object from post body
          let newUser = JSON.parse(opts.body);

          // validation
          let duplicateUser = users.filter(user => {
            return user.email === newUser.email;
          }).length;
          if (duplicateUser) {
            reject('Email "' + newUser.email + '" is already taken');
            return;
          }

          // save new user
          newUser.user_id = users.length
            ? Math.max(...users.map(user => user.user_id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        // delete user
        if (url.match(/\/users\/\d+$/) && opts.method === "DELETE") {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            // find user by id in users array
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (let i = 0; i < users.length; i++) {
              let user = users[i];
              if (user.user_id === id) {
                // delete user
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                break;
              }
            }

            // respond 200 OK
            resolve({ ok: true, text: () => Promise.resolve() });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        // get events
        if (url.endsWith("/events") && opts.method === "GET") {

          resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(events)) })
          return;
        }

        // get event by id
        if (url.match(/\/events\/\d+$/) && opts.method === "GET") {
          
          // find event by id in events array
          let urlParts = url.split("/");
          let id = parseInt(urlParts[urlParts.length - 1]);
          let matchedEvents = events.filter(event => {
            return event.event_id === id;
          });
          
          let event = matchedEvents.length ? matchedEvents[0] : null;

          // respond 200 OK with event
          resolve({ ok: true, text: () => JSON.stringify(event) });
          return;
        }

        // sign up for event
        if (url.match(/\/events\/\d+\/signups$/) && opts.method === "POST") {
          
          // get new user object from post body
          let newSignup = JSON.parse(opts.body);

          // validation
          /* let duplicateUser = users.filter(user => {
            return user.email === newUser.email;
          }).length;
          if (duplicateUser) {
            reject('Email "' + newUser.email + '" is already taken');
            return;
          } */

          // save new user
          newSignup.signup_id = signups.length
            ? Math.max(...signups.map(signup => signup.signup_id)) + 1
            : 1;
          signups.push(newSignup);
          localStorage.setItem("signups", JSON.stringify(signups));

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
