import express from 'express'

const router = express.Router()

router.get('/', (_req, res) =>{
    res.send("Obtaining the route")
})

router.post('/', (_req, res) =>{
    res.send("Sending to the route")
})

export default router;