import express from 'express'
import * as diaryServices from '../services/diary-serv'
const router = express.Router()

router.get('/', (_req, res) =>{
    res.send(diaryServices.getEntriesWithoutComments())
})

router.get('/:id', (_req, res) =>{
    const diary = diaryServices.findById(+_req.params.id)
    res.send(diary)
})

router.post('/', (_req, res) =>{
    const {date, weather, visibility, comment } = _req.body
    const newDiary = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    })
    res.json(newDiary)
})

export default router;