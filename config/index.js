require('dotenv/config')

const {env} = process
const config = {
    port: env.PORT,
    mongoDB: env.mongoDB,
    jwt: env.JWT
}

module.exports = config
