export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const BIN_ID = process.env.JSONBIN_ID;
        const API_KEY = process.env.API_KEY;

        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao obter o status');
        }

        const data = await response.json();
        res.status(200).json(data.record || { isPetLost: false });
    } catch (error) {
        console.error('Erro ao obter o status:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
