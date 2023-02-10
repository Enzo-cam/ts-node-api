import express from 'express'
import * as diaryServices from '../services/diary-serv'
import toNewEntry from '../../utils'
const router = express.Router()

router.get('/', (_req, res) =>{
    res.send(diaryServices.getEntriesWithoutComments())
})

router.get('/:id', (_req, res) =>{
    const diary = diaryServices.findById(+_req.params.id)
    res.send(diary)
})

router.post('/', (_req, res) =>{
    try {
        const newDiary = toNewEntry(_req.body)
        const addNewDiary = diaryServices.addDiary(newDiary)
        
        res.json(addNewDiary)

    } catch (e : any) {
        res.status(400).send(e.message)
    }

})

export default router;