# OAuth Comparative Analysis

## OAuth Provider Name

### Google

### Research Conducted By: Student Names

- Ahmad
- Bayan
- Malek
- Saif

### Overall Score and Comments

#### Score (Out of 10): 7

#### General Comments

Authenticate users using OAuth
Following authentication manage the user account
Add new accounts or reference existing ones following authentication
Provide an access token
As with Basic Authentication, the return value for a valid login is a JWT Token

#### Pros

- More Secure
- Practicing more on the authentication idea.
- Learn searching skills on google for specific things

#### Cons

- Week documentation from Google

### Ratings and Reviews

#### Documentation

- sing in the website using Google account, Google authentication.

- the `a` tag will transfer the user to Google account registeration

- Called token from Google auth to register the user.

- insert the token that was provided from Google in the request object

- response with that token after the redirection

#### Systems Requirements

```cmd
npm i base-64
npm i bcrypt
npm i cors
npm i debug
npm i dotenv
npm i express
npm i jsonwebtoken
npm i morgan
npm i superagent
```

#### Ramp-Up Projections

It depends on the documentation or the job it self, but in general they should spend 1-2 hours to figure out the idea of the task then start coding

#### Community Support and Adoption levels

All the websites that require registrations, uses the authentications from different websites, such as Google,Facebook, and LinkedIn

### Links and Resources

- [docs](https://developers.google.com/identity/sign-in/web/sign-in)

### Code Demos

- [live/running application](https://lab12a.herokuapp.com)
- [code repository](https://github.com/saif-401-advanced-javascript/401_lab12a)

### Operating Instructions

- First you have to Install nodemon globally to start the server
- install the dependencies provided above

* `npm start`
* Use the live/running application link provided prevously
* click on Login
* Register in you Google account.
* You should receive a JSON representation of you generated token
