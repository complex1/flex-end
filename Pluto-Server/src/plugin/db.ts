import { connect } from 'mongoose'
import config from '../config'

export default async () => {
    const db = await connect(config.db.host || '')
    console.log('Database connected')
    return db
}
