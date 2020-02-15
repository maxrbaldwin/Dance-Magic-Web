const path = require('path')
const fs = require('fs')

const rootDir = '../';
const isProduction = () => process.env.NODE_ENV === 'production';
const isPrd = isProduction();
const clientEnvVars = ['HOST', 'RECAPTCHA_CLIENT'];

async function main() {
  const env = isPrd ? 'production' : 'development';
  try {
    const parsedEnvVars = parseEnvVars(clientEnvVars);
    await writeEnvFile(parsedEnvVars, env);
  } catch (err) {
    console.log(`Error in main: ${err}`);
  }
}

const parseEnvVars = envVars => {
  const accumulator = '';
  const parsedEnvVars = Object.keys(process.env).reduce((acc, key) => {
    const value = process.env[key]
    const index = clientEnvVars.indexOf(key)
    if (index > -1) {
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