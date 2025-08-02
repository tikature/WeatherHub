require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3001
const API_KEY = process.env.VITE_WEATHER_API_KEY
const WEATHER_API_URL = process.env.VITE_WEATHER_API_URL

app.use(cors())

app.get('/weather', async (req, res) => {
    const { city } = req.query
    if (!city) return res.status(400).json({ error: 'Parameter city diperlukan' })

    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                key: API_KEY,
                q: city,
                lang: 'id'
            }
        })
        res.json(response.data)
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data cuaca' })
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Backend berjalan di http://localhost:${PORT}`)
})
