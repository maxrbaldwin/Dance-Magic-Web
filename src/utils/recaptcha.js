const fetchRecaptchaToken = () => {
  let token = null;
  const grecaptcha = window.grecaptcha || {}

  return new Promise(resolve => {
    if (!process.env.RECAPTCHA_CLIENT) return resolve(token)
    grecaptcha.ready(async () => {
      token = await grecaptcha.execute(process.env.RECAPTCHA_CLIENT, { action: 'contact' })
      return resolve(token);
    })
  }) 
}

export default fetchRecaptchaToken
