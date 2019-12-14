const getHost = () => process.env.NODE_ENV === 'production' ? `https://${process.env.HOST}` : 'http://localhost:9000'

export default getHost