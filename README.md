# Dance-Magic-Web
<img src="https://brand.heroku.com/static/media/built-on-heroku-light.21a0c1f7.svg" alt="built on heroku" width="200" height="50" style="background-color:#430098" />

## Dependencies
- Node JS
- Gatsby JS
- Contact Api

## Summary
This is a simple web application for dancemagicnj.com. It consists of primarily a home page and contact page.

## Contact
The contact for is submitted via http request to the Dance-Magic-Api application. It runs as a secondary service on Heroku. This form is dependent on that service. If the service in not available when a user submits the form they will receive an error message. Validation for this form is done server side. The placeholders in the inputs are examples of the proper format. The only input that is not required is phone number.

## Environmental Variables
Gatsby injects environmental variables at build time using a .env file followed by the type of environment (.env.development). The environmental variables for this project are configured in Heroku. Locally they are established in each individual local machine. There is a script in the `tools` directory that will get the environmental variables from the environment and create the appropriate .env files based on the `NODE_ENV`. You can generate this .env file by running `npm run create-env`. This file is git ignored

