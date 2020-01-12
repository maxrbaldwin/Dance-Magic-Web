const getHost = () => process.env.NODE_ENV === 'production' ? `https://dance-magic-259922.appspot.com/s` : 'http://localhost:9000'

export default getHost