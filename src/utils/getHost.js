const getHost = () => process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:9000'

export default getHost