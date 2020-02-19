const getHost = () => process.env.NODE_ENV === 'production' ? process.env.API_HOST : 'http://localhost:9000'

export default getHost