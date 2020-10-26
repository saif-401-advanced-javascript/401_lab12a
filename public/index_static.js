// let URL = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount';
let URL = 'https://accounts.google.com/o/oauth2/v2/auth';

let options = {
  client_id:
    '20130920345-i89aphai3edr50pgurjjvqoake77mh1p.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:3000/oauth',
  response_type: 'code',
  scope: 'profile email',
  fetch_basic_profile: true,
};

let QueryString = Object.keys(options)
  .map((key) => {
    return `${key}=` + encodeURIComponent(options[key]);
  })
  .join('&');

let authURL = `${URL}?${QueryString}`;

let link = document.getElementById('oauth');
link.setAttribute('href', authURL);
