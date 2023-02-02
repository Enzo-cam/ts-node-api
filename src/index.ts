import express from 'express'
import diaryRoute from './routes/diaries'

const app = express()
app.use(express.json()) //Transform our req.body to JSON

const PORT = 5000;

app.get('/ping', (_req, res) => {
    console.log('Someone tried to enter here.')
    res.send('---PING---')
})

app.use('/api/diaries', diaryRoute)

app.listen(PORT, () => {
    console.log(`We are running this in port ${PORT}`)
})