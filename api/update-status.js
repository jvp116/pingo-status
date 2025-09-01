export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const { isPetLost } = req.body;

        const BIN_ID = process.env.BIN_ID;
        const API_KEY = process.env.API_KEY;

        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY
            },
            body: JSON.stringify({ isPetLost })
        });

        if (!response.ok) {
            throw new Error('Falha ao salvar no JSONBin');
        }

        res.status(200).json({ message: 'Status atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
