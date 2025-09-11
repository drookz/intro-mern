require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')

async function initApp(appConfig, dbConfig) {
    const { port } = appConfig

    try {
        await connectDB(dbConfig)
        app.listen(port, () => console.log(`listen on ${port}`))
} catch (err) {
        console.error(err)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)