const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { address } = req.query;
    const url = `https://cosmoshub.api.kjnodes.com/cosmos/auth/v1beta1/accounts/${address}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch account details' });
    }
};
