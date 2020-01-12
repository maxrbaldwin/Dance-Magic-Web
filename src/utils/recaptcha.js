const fetchRecaptchaToken = () => {
  let token = 'env var not set';
  const grecaptcha = window.grecaptcha || {}

  return new Promise((resolve, reject) => {
    if (!process.env.RECAPTCHA_CLIENT) return reject(token)
    grecaptcha.ready(async () => {
      token = await grecaptcha.execute(process.env.RECAPTCHA_CLIENT, { action: 'contact' })
      return resolve(token);
    })
  }) 
}

export default fetchRecaptchaToken
