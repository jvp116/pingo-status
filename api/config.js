export default function handler(req, res) {
    res.status(200).json({
        binId: process.env.JSONBIN_ID,
        apiUrl: 'https://api.jsonbin.io/v3/b'
    });
}
