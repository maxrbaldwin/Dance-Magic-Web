# Dance-Magic-Web

## Dependencies
- Node JS
- Gatsby JS
- Google Cloud Platform
- Contact Api

## Summary
This is a simple web application for dancemagicnj.com. It consists of primarily a home page and contact page.

## Contact
The contact for is submitted via http request to the Dance-Magic-Api application. It runs as a secondary service on GCP. This form is dependent on that service. If the service in not available when a user submits the form they will receive an error message. Validation for this form is done server side. The placeholders in the inputs are examples of the proper format. The only input that is not required is phone number.

## Theme Provider
The theme provider returns a string based on the width of the viewport. This can be improved. Right now you need a condition for determining styles based on viewport. This should be based on media query in the styles.

## Environmental Variables
Gatsby injects environmental variables at build time use a .env file followed by the type of environment (.env.development). The environmental variables for this project are stored in GCP Datastore. There is a script in the `tools` directory that will fetch the environmental variables from the db and create to appropriate .env files based on the `NODE_ENV`. You can generate this .env file by running `npm run create-env`.

