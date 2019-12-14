import axios from "axios"
import getHost from "@utils/getHost"

const url = `${getHost()}/api/recaptcha`

const defaultResponse = {
  data: {
    error: {
      message: 'Cannot verify at this time'
    }
  }
}

const fetchUserToken = action => {
  let token = null;
  const grecaptcha = window.grecaptcha || {}

  return new Promise(resolve => {
    grecaptcha.ready(async () => {
      token = await grecaptcha.execute(process.env.RECAPTCHA_CLIENT, { action })
      resolve(token);
    })
  }) 
}

const fetchVerification = async token => {
  let response = 0;

  try {
    const res = await axios({
      method: 'POST',
      url,
      data: { token }
    })
    response = res.data
  } catch (err) {
    response = err.message === 'Network Error' ? defaultResponse : err.response;
  }

  return response
}

const isUserVerified = async action => {
  // if the environment fails to place this env var, don't hold up the user
  if (!process.env.RECAPTCHA_CLIENT) return true

  let isVerified = false;
  let token = null;

  try {
    token = await fetchUserToken(action)
  } catch (tokenErr) {
    console.log('error fetching recaptcha token: ', tokenErr)
  }

  if (token) {
    try {
      isVerified = await fetchVerification(token)
    } catch (verificationErr) {
      console.log('error verifying recaptcha token: ', verificationErr)
    }
  }
  return isVerified && isVerified.isValidUser;
}

export default isUserVerified
