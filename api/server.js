const axios = require('axios')

module.exports = async (req, res) => {
    const API_KEY = process.env.VITE_WEATHER_API_KEY
    const WEATHER_API_URL = process.env.VITE_WEATHER_API_URL

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
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data cuaca' })
    }
}
