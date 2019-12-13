const path = require('path');
const fs = require('fs');
const { Datastore } = require('@google-cloud/datastore');

const rootDir = '../';
const isProduction = () => process.env.NODE_ENV === 'production';
const isPrd = isProduction();
const clientEnvVars = ['HOST', 'RECAPTCHA_CLIENT', 'PROJECT_ID'];

const datastore = new Datastore({
  projectId: 'dance-magic-259922',
  keyFilename: path.join(__dirname, rootDir, 'creds', 'dmc.json'),
});

async function main() {
  const env = isPrd ? 'production' : 'development';
  try {
    const envVars = await fetchEnvironmentVariables();
    const parsedEnvVars = parseEnvVars(envVars);
    await writeEnvFile(parsedEnvVars, env);
  } catch (err) {
    console.log(`Error in main: ${err}`);
  }
}

const fetchEnvironmentVariables = () => {
  const query = datastore
    .createQuery('environment', 'secret');

  return new Promise(async (resolve, reject) => {
    try {
      const results = await datastore.runQuery(query);
      return resolve(results[0]);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  })
}

const parseEnvVars = envVars => {
  const accumulator = '';
  const parsedEnvVars = envVars.reduce((acc, envObj) => {
    const { key, value } = envObj;
    if (clientEnvVars.indexOf(key) > -1) {
      acc = `${acc}${key}=${value}\n`;
    }
    return acc;
  }, accumulator);
  return parsedEnvVars;
}

const writeEnvFile = (parsedEnvVars, env) => {
  const envFilePath = path.join(__dirname, rootDir, `.env.${env}`);
  return new Promise((resolve, reject) => {
    fs.writeFile(envFilePath, parsedEnvVars, err => {

      if (err) {
        console.log(err);
        return reject();
      }
  
      console.log(`Created: ${envFilePath}`);
      return resolve();
    }); 
  })
}

Promise.resolve().then(main).catch(err => {
  console.log(`Error in catch ${err}`);
})
