const path = require('path')
const fs = require('fs')
const { decryptEnvironment } = require('dance-magic/packages/environment')

const rootDir = '../';
const isProduction = () => process.env.NODE_ENV === 'production';
const isPrd = isProduction();
const clientEnvVars = ['HOST', 'RECAPTCHA_CLIENT', 'PROJECT_ID'];

async function main() {
  const env = isPrd ? 'production' : 'development';
  try {
    const envVars = await decryptEnvironment(clientEnvVars);
    const parsedEnvVars = parseEnvVars(envVars);
    await writeEnvFile(parsedEnvVars, env);
  } catch (err) {
    console.log(`Error in main: ${err}`);
  }
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